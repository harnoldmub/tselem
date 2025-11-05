import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Camera, Video, Palette, Clock } from "lucide-react";

const serviceTypes = [
  { value: "photo", label: "Photographie", icon: Camera },
  { value: "video", label: "Production Vidéo", icon: Video },
  { value: "design", label: "Design Graphique", icon: Palette },
  { value: "package", label: "Package Personnalisé", icon: Calendar },
];

const durations = [
  { value: "1h", label: "1 heure" },
  { value: "2h", label: "2 heures" },
  { value: "3h", label: "3 heures" },
];

const timeSlots = [
  "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"
];

export default function BookingForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    serviceType: "",
    date: "",
    time: "",
    duration: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [confirmed, setConfirmed] = useState(false);

  const handleServiceSelect = (service: string) => {
    setFormData({ ...formData, serviceType: service });
    setStep(2);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booking submitted:", formData);
    setConfirmed(true);
  };

  if (confirmed) {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardContent className="py-16 text-center">
          <div className="w-20 h-20 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold mb-4">Réservation Confirmée !</h2>
          <p className="text-muted-foreground mb-2">
            Votre rendez-vous a été enregistré avec succès.
          </p>
          <p className="text-muted-foreground mb-6">
            Vous recevrez un email de confirmation à {formData.email}
          </p>
          <div className="bg-muted/50 p-6 rounded-lg text-left max-w-md mx-auto">
            <p className="mb-2"><strong>Service:</strong> {serviceTypes.find(s => s.value === formData.serviceType)?.label}</p>
            <p className="mb-2"><strong>Date:</strong> {formData.date}</p>
            <p className="mb-2"><strong>Heure:</strong> {formData.time}</p>
            <p><strong>Durée:</strong> {formData.duration}</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-3xl">Réserver une Séance</CardTitle>
        <div className="flex gap-2 mt-4">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`flex-1 h-2 rounded-full ${
                s <= step ? "bg-primary" : "bg-muted"
              }`}
            />
          ))}
        </div>
      </CardHeader>
      <CardContent>
        {step === 1 && (
          <div>
            <h3 className="text-xl font-semibold mb-6">Choisissez votre service</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {serviceTypes.map((service) => {
                const Icon = service.icon;
                return (
                  <Card
                    key={service.value}
                    className="cursor-pointer hover-elevate active-elevate-2 overflow-visible"
                    onClick={() => handleServiceSelect(service.value)}
                    data-testid={`service-${service.value}`}
                  >
                    <CardContent className="p-6 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-md bg-destructive/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-destructive" />
                      </div>
                      <div className="text-lg font-semibold">{service.label}</div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h3 className="text-xl font-semibold mb-6">Date et horaire</h3>
            <div className="space-y-6">
              <div>
                <Label htmlFor="date">Date *</Label>
                <Input
                  id="date"
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  required
                  min={new Date().toISOString().split('T')[0]}
                  data-testid="input-date"
                />
              </div>

              <div>
                <Label>Créneau horaire *</Label>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 mt-2">
                  {timeSlots.map((time) => (
                    <Button
                      key={time}
                      type="button"
                      variant={formData.time === time ? "default" : "outline"}
                      onClick={() => setFormData({ ...formData, time })}
                      className="font-['Montserrat']"
                      data-testid={`time-${time}`}
                    >
                      {time}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <Label>Durée *</Label>
                <div className="grid grid-cols-3 gap-3 mt-2">
                  {durations.map((dur) => (
                    <Button
                      key={dur.value}
                      type="button"
                      variant={formData.duration === dur.value ? "default" : "outline"}
                      onClick={() => setFormData({ ...formData, duration: dur.value })}
                      className="font-['Montserrat']"
                      data-testid={`duration-${dur.value}`}
                    >
                      <Clock className="w-4 h-4 mr-2" />
                      {dur.label}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <Button type="button" variant="outline" onClick={() => setStep(1)}>
                  Retour
                </Button>
                <Button
                  type="button"
                  onClick={() => setStep(3)}
                  disabled={!formData.date || !formData.time || !formData.duration}
                  className="flex-1"
                >
                  Continuer
                </Button>
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <form onSubmit={handleSubmit}>
            <h3 className="text-xl font-semibold mb-6">Vos coordonnées</h3>
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Nom Complet *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  data-testid="input-name"
                />
              </div>

              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  data-testid="input-email"
                />
              </div>

              <div>
                <Label htmlFor="phone">Téléphone *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  data-testid="input-phone"
                />
              </div>

              <div>
                <Label htmlFor="message">Message / Détails du projet</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  data-testid="input-message"
                />
              </div>

              <div className="flex gap-3">
                <Button type="button" variant="outline" onClick={() => setStep(2)}>
                  Retour
                </Button>
                <Button type="submit" className="flex-1 font-['Montserrat']" data-testid="button-confirm">
                  CONFIRMER LA RÉSERVATION
                </Button>
              </div>
            </div>
          </form>
        )}
      </CardContent>
    </Card>
  );
}
