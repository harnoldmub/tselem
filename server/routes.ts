import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertUserSchema } from "@shared/schema";
import bcrypt from "bcryptjs";
import session from "express-session";

declare module "express-session" {
  interface SessionData {
    userId?: string;
    username?: string;
  }
}

function requireAuth(req: Request, res: Response, next: Function) {
  if (!req.session.userId) {
    return res.status(401).json({ error: "Non authentifié" });
  }
  next();
}

export async function registerRoutes(app: Express): Promise<Server> {
  app.use(
    session({
      secret: process.env.SESSION_SECRET || "tselem-secret-key-change-in-production",
      resave: false,
      saveUninitialized: false,
      cookie: {
        secure: process.env.NODE_ENV === "production",
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 7,
      },
    })
  );

  app.post("/api/contacts", async (req: Request, res: Response) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      res.json({ success: true, contact });
    } catch (error) {
      console.error("Error creating contact:", error);
      res.status(400).json({ error: "Données invalides" });
    }
  });

  app.post("/api/auth/login", async (req: Request, res: Response) => {
    try {
      const { username, password } = req.body;
      
      if (!username || !password) {
        return res.status(400).json({ error: "Identifiants requis" });
      }

      const user = await storage.getUserByUsername(username);
      
      if (!user) {
        return res.status(401).json({ error: "Identifiants incorrects" });
      }

      const isValid = await bcrypt.compare(password, user.password);
      
      if (!isValid) {
        return res.status(401).json({ error: "Identifiants incorrects" });
      }

      req.session.userId = user.id;
      req.session.username = user.username;

      res.json({ success: true, user: { id: user.id, username: user.username } });
    } catch (error) {
      console.error("Login error:", error);
      res.status(500).json({ error: "Erreur serveur" });
    }
  });

  app.post("/api/auth/logout", (req: Request, res: Response) => {
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({ error: "Erreur lors de la déconnexion" });
      }
      res.json({ success: true });
    });
  });

  app.get("/api/auth/me", (req: Request, res: Response) => {
    if (req.session.userId) {
      res.json({ 
        authenticated: true, 
        user: { id: req.session.userId, username: req.session.username } 
      });
    } else {
      res.json({ authenticated: false });
    }
  });

  app.get("/api/admin/contacts", requireAuth, async (req: Request, res: Response) => {
    try {
      const contactsList = await storage.getContacts();
      res.json(contactsList);
    } catch (error) {
      console.error("Error fetching contacts:", error);
      res.status(500).json({ error: "Erreur serveur" });
    }
  });

  app.patch("/api/admin/contacts/:id/read", requireAuth, async (req: Request, res: Response) => {
    try {
      await storage.markContactAsRead(req.params.id);
      res.json({ success: true });
    } catch (error) {
      console.error("Error marking contact as read:", error);
      res.status(500).json({ error: "Erreur serveur" });
    }
  });

  app.delete("/api/admin/contacts/:id", requireAuth, async (req: Request, res: Response) => {
    try {
      await storage.deleteContact(req.params.id);
      res.json({ success: true });
    } catch (error) {
      console.error("Error deleting contact:", error);
      res.status(500).json({ error: "Erreur serveur" });
    }
  });

  app.post("/api/admin/init", async (req: Request, res: Response) => {
    try {
      const { username, password } = req.body;
      
      const existingUser = await storage.getUserByUsername(username);
      if (existingUser) {
        return res.status(400).json({ error: "Utilisateur existe déjà" });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await storage.createUser({ username, password: hashedPassword });
      
      res.json({ success: true, message: "Utilisateur admin créé" });
    } catch (error) {
      console.error("Error creating admin:", error);
      res.status(500).json({ error: "Erreur serveur" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
