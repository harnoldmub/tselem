import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useLocation } from "wouter";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { LogOut, Mail, Phone, Clock, Trash2, CheckCircle } from "lucide-react";
import logoWhite from "@assets/logo-white_1762333728331.png";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  subject: string;
  message: string;
  isRead: boolean;
  createdAt: string;
}

export default function AdminDashboard() {
  const [_, setLocation] = useLocation();
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const { data: authData } = useQuery<{ authenticated: boolean; user?: { id: string; username: string } }>({
    queryKey: ["/api/auth/me"],
  });

  useEffect(() => {
    if (authData && !authData.authenticated) {
      setLocation("/admin/login");
    }
  }, [authData, setLocation]);

  const { data: contacts = [], isLoading } = useQuery<Contact[]>({
    queryKey: ["/api/admin/contacts"],
    enabled: authData?.authenticated === true,
  });

  const logoutMutation = useMutation({
    mutationFn: async () => {
      const res = await apiRequest("POST", "/api/auth/logout");
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/auth/me"] });
      setLocation("/admin/login");
    },
  });

  const markAsReadMutation = useMutation({
    mutationFn: async (id: string) => {
      const res = await apiRequest("PATCH", `/api/admin/contacts/${id}/read`);
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/contacts"] });
      toast({ title: "Message marqué comme lu" });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const res = await apiRequest("DELETE", `/api/admin/contacts/${id}`);
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/contacts"] });
      toast({ title: "Message supprimé" });
    },
  });

  if (!authData?.authenticated) {
    return null;
  }

  const unreadCount = contacts.filter((c) => !c.isRead).length;

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground border-b border-primary-foreground/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src={logoWhite} alt="TSELEM" className="h-8" />
              <h1 className="text-2xl font-['Playfair_Display'] font-bold">
                Back Office
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm font-['Montserrat']">
                {authData.user?.username}
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => logoutMutation.mutate()}
                data-testid="button-logout"
                className="bg-transparent border-primary-foreground/30 hover:bg-primary-foreground/10"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Déconnexion
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-['Playfair_Display'] font-bold mb-2">
            Messages de Contact
          </h2>
          <p className="text-muted-foreground font-['Cormorant_Garamond']">
            {unreadCount} message{unreadCount !== 1 ? "s" : ""} non lu{unreadCount !== 1 ? "s" : ""}
          </p>
        </div>

        {isLoading ? (
          <p>Chargement...</p>
        ) : contacts.length === 0 ? (
          <Card>
            <CardContent className="p-12 text-center">
              <p className="text-muted-foreground font-['Cormorant_Garamond'] text-lg">
                Aucun message pour le moment
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {contacts.map((contact) => (
              <Card
                key={contact.id}
                className={!contact.isRead ? "border-destructive/50" : ""}
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle className="text-xl font-['Montserrat']">
                          {contact.name}
                        </CardTitle>
                        {!contact.isRead && (
                          <Badge variant="destructive">Nouveau</Badge>
                        )}
                      </div>
                      <p className="text-lg font-semibold text-foreground mb-2">
                        {contact.subject}
                      </p>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Mail className="w-4 h-4" />
                          {contact.email}
                        </span>
                        {contact.phone && (
                          <span className="flex items-center gap-1">
                            <Phone className="w-4 h-4" />
                            {contact.phone}
                          </span>
                        )}
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {format(new Date(contact.createdAt), "PPP à HH:mm", {
                            locale: fr,
                          })}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {!contact.isRead && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => markAsReadMutation.mutate(contact.id)}
                          disabled={markAsReadMutation.isPending}
                          data-testid={`button-mark-read-${contact.id}`}
                        >
                          <CheckCircle className="w-4 h-4 mr-1" />
                          Marquer lu
                        </Button>
                      )}
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => {
                          if (confirm("Supprimer ce message ?")) {
                            deleteMutation.mutate(contact.id);
                          }
                        }}
                        disabled={deleteMutation.isPending}
                        data-testid={`button-delete-${contact.id}`}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground whitespace-pre-wrap font-['Cormorant_Garamond'] text-lg leading-relaxed">
                    {contact.message}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
