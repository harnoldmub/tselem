import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useLocation } from "wouter";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { LogOut, Mail, Phone, Clock, Trash2, CheckCircle, Star, MessageSquare, BarChart3, KanbanSquare, CalendarDays, Images, FileText, LayoutTemplate } from "lucide-react";
import logoWhite from "@assets/logos/logo-blanc.png";
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

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string | null;
  avatar: string | null;
  rating: string;
  message: string;
  projectType: string;
  isApproved: boolean;
  createdAt: string;
}

type ReservationStatus = "Nouvelle" | "Confirmée" | "En attente" | "Terminée" | "Annulée";

interface ReservationRequest {
  id: string;
  client: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  participants: number;
  location: string;
  budget: string;
  status: ReservationStatus;
  message: string;
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

  const [activeTab, setActiveTab] = useState("contacts");
  const [reservations, setReservations] = useState<ReservationRequest[]>([
    {
      id: "RSV-1024",
      client: "Grâce M.",
      email: "grace@example.com",
      phone: "+243 899 000 210",
      service: "Mariage",
      date: "2026-06-14",
      time: "14:00",
      participants: 120,
      location: "Kinshasa, Gombe",
      budget: "Premium",
      status: "Nouvelle",
      message: "Nous voulons une couverture photo et vidéo complète pour la cérémonie et la soirée.",
    },
    {
      id: "RSV-1025",
      client: "Jonathan K.",
      email: "jonathan@example.com",
      phone: "+243 980 441 019",
      service: "Portrait",
      date: "2026-05-29",
      time: "10:30",
      participants: 1,
      location: "Studio Tselem",
      budget: "Standard",
      status: "Confirmée",
      message: "Portrait professionnel pour LinkedIn, presse et site web.",
    },
    {
      id: "RSV-1026",
      client: "Maison Kivu",
      email: "brand@example.com",
      phone: "+243 812 300 777",
      service: "Branding Personnel",
      date: "2026-06-03",
      time: "09:00",
      participants: 4,
      location: "Client",
      budget: "Sur devis",
      status: "En attente",
      message: "Création d'une banque d'images pour lancement de campagne.",
    },
  ]);

  const { data: contacts = [], isLoading: isLoadingContacts } = useQuery<Contact[]>({
    queryKey: ["/api/admin/contacts"],
    enabled: authData?.authenticated === true,
  });

  const { data: testimonials = [], isLoading: isLoadingTestimonials } = useQuery<Testimonial[]>({
    queryKey: ["/api/admin/testimonials"],
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

  const approveTestimonialMutation = useMutation({
    mutationFn: async (id: string) => {
      const res = await apiRequest("PATCH", `/api/admin/testimonials/${id}/approve`);
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/testimonials"] });
      toast({ title: "Témoignage approuvé" });
    },
  });

  const deleteTestimonialMutation = useMutation({
    mutationFn: async (id: string) => {
      const res = await apiRequest("DELETE", `/api/admin/testimonials/${id}`);
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/testimonials"] });
      toast({ title: "Témoignage supprimé" });
    },
  });

  if (!authData?.authenticated) {
    return null;
  }

  const unreadCount = contacts.filter((c) => !c.isRead).length;
  const pendingTestimonials = testimonials.filter((t) => !t.isApproved).length;
  const newReservations = reservations.filter((reservation) => reservation.status === "Nouvelle").length;

  const updateReservationStatus = (id: string, status: ReservationStatus) => {
    setReservations((currentReservations) =>
      currentReservations.map((reservation) =>
        reservation.id === id ? { ...reservation, status } : reservation
      )
    );
    toast({ title: `Réservation ${status.toLowerCase()}` });
  };

  const platformModules = [
    { label: "Leads actifs", value: contacts.length, icon: KanbanSquare, note: "Messages convertis en opportunités" },
    { label: "Demandes entrantes", value: unreadCount, icon: MessageSquare, note: "À traiter dans l'inbox" },
    { label: "Réservations", value: reservations.length, icon: CalendarDays, note: `${newReservations} nouvelle${newReservations > 1 ? "s" : ""} à traiter` },
    { label: "Contenus CMS", value: "6", icon: FileText, note: "Pages, services, projets, blog" },
    { label: "Templates", value: "5", icon: LayoutTemplate, note: "Luxury, portfolio, wedding, corporate" },
  ];

  return (
    <div className="min-h-screen bg-[#F8F6F3] text-[#111111]">
      <header className="border-b border-[#111111]/10 bg-[#111111] text-[#F8F6F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src={logoWhite} alt="TSELEM" className="h-8" />
              <h1 className="text-2xl font-semibold">
                Studio OS
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-[#F8F6F3]/70">
                {authData.user?.username}
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => logoutMutation.mutate()}
                data-testid="button-logout"
                className="rounded-none border-[#F8F6F3]/30 bg-transparent hover:bg-[#F8F6F3]/10"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Déconnexion
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <section className="mb-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.35em] text-[#BE1E2D]">Plateforme V2</p>
            <h2 className="max-w-4xl text-5xl font-semibold leading-[0.95] sm:text-6xl">
              Piloter le studio, les contenus et les clients depuis un seul espace.
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-relaxed text-[#2A2A2A]/72">
            Cette console pose les modules clés: inbox, CRM leads, réservations, CMS, médiathèque, templates et statistiques.
          </p>
        </section>

        <div className="mb-10 grid gap-px bg-[#111111]/10 md:grid-cols-4">
          {platformModules.map((module) => {
            const Icon = module.icon;
            return (
              <Card key={module.label} className="rounded-none border-0 bg-[#F8F6F3] shadow-none">
                <CardContent className="p-6">
                  <div className="mb-8 flex items-center justify-between">
                    <Icon className="h-5 w-5 text-[#BE1E2D]" />
                    <span className="text-xs text-[#111111]/45">Live</span>
                  </div>
                  <div className="text-4xl font-semibold">{module.value}</div>
                  <div className="mt-3 font-semibold">{module.label}</div>
                  <p className="mt-2 text-sm leading-relaxed text-[#2A2A2A]/60">{module.note}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid h-auto w-full grid-cols-2 rounded-none bg-[#ECECEC] p-1 md:grid-cols-6">
            <TabsTrigger value="contacts" data-testid="tab-contacts">
              <MessageSquare className="w-4 h-4 mr-2" />
              Messages
              {unreadCount > 0 && (
                <Badge variant="destructive" className="ml-2">
                  {unreadCount}
                </Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="testimonials" data-testid="tab-testimonials">
              <Star className="w-4 h-4 mr-2" />
              Témoignages
              {pendingTestimonials > 0 && (
                <Badge variant="destructive" className="ml-2">
                  {pendingTestimonials}
                </Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="crm">
              <KanbanSquare className="w-4 h-4 mr-2" />
              CRM
            </TabsTrigger>
            <TabsTrigger value="content">
              <FileText className="w-4 h-4 mr-2" />
              Contenu
            </TabsTrigger>
            <TabsTrigger value="reservations">
              <CalendarDays className="w-4 h-4 mr-2" />
              Réservations
            </TabsTrigger>
            <TabsTrigger value="media">
              <Images className="w-4 h-4 mr-2" />
              Médias
            </TabsTrigger>
          </TabsList>

          <TabsContent value="contacts">
            <div className="mb-8">
              <h2 className="text-3xl font-['Playfair_Display'] font-bold mb-2">
                Messages de Contact
              </h2>
              <p className="text-muted-foreground font-['Cormorant_Garamond']">
                {unreadCount} message{unreadCount !== 1 ? "s" : ""} non lu{unreadCount !== 1 ? "s" : ""}
              </p>
            </div>

            {isLoadingContacts ? (
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
          </TabsContent>

          <TabsContent value="testimonials">
            <div className="mb-8">
              <h2 className="text-3xl font-['Playfair_Display'] font-bold mb-2">
                Témoignages
              </h2>
              <p className="text-muted-foreground font-['Cormorant_Garamond']">
                {pendingTestimonials} témoignage{pendingTestimonials !== 1 ? "s" : ""} en attente de validation
              </p>
            </div>

            {isLoadingTestimonials ? (
              <p>Chargement...</p>
            ) : testimonials.length === 0 ? (
              <Card>
                <CardContent className="p-12 text-center">
                  <p className="text-muted-foreground font-['Cormorant_Garamond'] text-lg">
                    Aucun témoignage pour le moment
                  </p>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-4">
                {testimonials.map((testimonial) => (
                  <Card
                    key={testimonial.id}
                    className={!testimonial.isApproved ? "border-destructive/50" : ""}
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <CardTitle className="text-xl font-['Montserrat']">
                              {testimonial.name}
                            </CardTitle>
                            {!testimonial.isApproved ? (
                              <Badge variant="destructive">En attente</Badge>
                            ) : (
                              <Badge variant="default" className="bg-green-600">Approuvé</Badge>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">
                            {testimonial.role}
                            {testimonial.company && ` • ${testimonial.company}`}
                          </p>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                              {testimonial.rating}/5
                            </span>
                            <span>{testimonial.projectType}</span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {format(new Date(testimonial.createdAt), "PPP", {
                                locale: fr,
                              })}
                            </span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          {!testimonial.isApproved && (
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => approveTestimonialMutation.mutate(testimonial.id)}
                              disabled={approveTestimonialMutation.isPending}
                              data-testid={`button-approve-${testimonial.id}`}
                            >
                              <CheckCircle className="w-4 h-4 mr-1" />
                              Approuver
                            </Button>
                          )}
                          <Button
                            variant="destructive"
                            size="sm"
                            onClick={() => {
                              if (confirm("Supprimer ce témoignage ?")) {
                                deleteTestimonialMutation.mutate(testimonial.id);
                              }
                            }}
                            disabled={deleteTestimonialMutation.isPending}
                            data-testid={`button-delete-testimonial-${testimonial.id}`}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-foreground whitespace-pre-wrap font-['Cormorant_Garamond'] text-lg leading-relaxed">
                        {testimonial.message}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="crm">
            <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
              <Card className="rounded-none border-[#111111]/10 bg-[#F8F6F3] shadow-none">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <BarChart3 className="h-5 w-5 text-[#BE1E2D]" />
                    Pipeline leads
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {["Nouveau", "Contacté", "Rendez-vous", "Proposition envoyée", "Signé", "Perdu"].map((stage, index) => (
                    <div key={stage} className="flex items-center justify-between border-b border-[#111111]/10 pb-3 text-sm last:border-b-0">
                      <span>{stage}</span>
                      <Badge variant={index === 0 ? "destructive" : "outline"}>{index === 0 ? unreadCount : index + 1}</Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
              <Card className="rounded-none border-[#111111]/10 bg-[#111111] text-[#F8F6F3] shadow-none">
                <CardHeader>
                  <CardTitle className="text-2xl">Fiche lead cible</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-4 md:grid-cols-2">
                  {["Nom", "Téléphone", "Email", "Type prestation", "Budget", "Date événement", "Source acquisition", "Responsable"].map((field) => (
                    <div key={field} className="border border-[#F8F6F3]/10 p-4">
                      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#BE1E2D]">{field}</p>
                      <p className="mt-2 text-sm text-[#F8F6F3]/60">Champ CRM administrable</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="content">
            <div className="grid gap-px bg-[#111111]/10 md:grid-cols-3">
              {["Pages", "Services", "Portfolio", "Blog", "FAQ", "Instagram", "Témoignages", "SEO"].map((module) => (
                <Card key={module} className="rounded-none border-0 bg-[#F8F6F3] shadow-none">
                  <CardContent className="p-6">
                    <p className="mb-10 text-[11px] font-bold uppercase tracking-[0.25em] text-[#BE1E2D]">CRUD</p>
                    <h3 className="text-3xl font-semibold">{module}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-[#2A2A2A]/62">Création, édition, publication, SEO et mise en avant depuis l'administration.</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="reservations">
            <div className="mb-8 grid gap-4 md:grid-cols-4">
              {[
                ["Nouvelles", newReservations],
                ["Confirmées", reservations.filter((reservation) => reservation.status === "Confirmée").length],
                ["En attente", reservations.filter((reservation) => reservation.status === "En attente").length],
                ["Total", reservations.length],
              ].map(([label, value]) => (
                <Card key={label} className="rounded-none border-[#111111]/10 bg-[#F8F6F3] shadow-none">
                  <CardContent className="p-5">
                    <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#BE1E2D]">{label}</p>
                    <p className="mt-4 text-4xl font-semibold">{value}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="space-y-4">
              {reservations.map((reservation) => (
                <Card key={reservation.id} className="rounded-none border-[#111111]/10 bg-[#F8F6F3] shadow-none">
                  <CardHeader>
                    <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                      <div>
                        <div className="mb-3 flex flex-wrap items-center gap-3">
                          <CardTitle className="text-2xl font-semibold">{reservation.client}</CardTitle>
                          <Badge variant={reservation.status === "Nouvelle" ? "destructive" : "outline"}>
                            {reservation.status}
                          </Badge>
                          <span className="text-sm text-[#2A2A2A]/55">{reservation.id}</span>
                        </div>
                        <p className="text-lg font-medium">{reservation.service}</p>
                        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#2A2A2A]/68">
                          {reservation.message}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {(["Nouvelle", "Confirmée", "En attente", "Terminée", "Annulée"] as ReservationStatus[]).map((status) => (
                          <Button
                            key={status}
                            size="sm"
                            variant={reservation.status === status ? "destructive" : "outline"}
                            onClick={() => updateReservationStatus(reservation.id, status)}
                            className="rounded-none"
                          >
                            {status}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-px bg-[#111111]/10 md:grid-cols-4">
                      {[
                        ["Date", format(new Date(reservation.date), "PPP", { locale: fr })],
                        ["Heure", reservation.time],
                        ["Participants", reservation.participants.toString()],
                        ["Lieu", reservation.location],
                        ["Budget", reservation.budget],
                        ["Email", reservation.email],
                        ["Téléphone", reservation.phone],
                        ["Agenda", "À synchroniser"],
                      ].map(([label, value]) => (
                        <div key={label} className="bg-[#F8F6F3] p-4">
                          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#BE1E2D]">{label}</p>
                          <p className="mt-2 break-words text-sm text-[#111111]">{value}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="media">
            <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
              <Card className="rounded-none border-[#111111]/10 bg-[#F8F6F3] shadow-none">
                <CardHeader>
                  <CardTitle className="text-2xl">Médiathèque</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-[#2A2A2A]/70">
                  <p>Photos, vidéos, documents, dossiers, tags et recherche globale.</p>
                  <p>Prête pour Cloudinary ou S3 avec transformations d'images et CDN.</p>
                </CardContent>
              </Card>
              <div className="grid grid-cols-3 gap-px bg-[#111111]/10">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div key={item} className="aspect-square bg-[#ECECEC]" />
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
