"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function ContactSection() {
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    correo: "",
    telefono: "",
    mensaje: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    alert("¡Mensaje enviado! Nos pondremos en contacto pronto.")
    setFormData({
      nombre: "",
      empresa: "",
      correo: "",
      telefono: "",
      mensaje: "",
    })
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contacto" className="py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-secondary uppercase tracking-widest mb-4">
            Contáctame
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Solicitar Asesoría
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ¿Listo para fortalecer la seguridad en su empresa? Complete el
            formulario y me pondré en contacto a la brevedad.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="bg-card border-border">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground mb-1">
                    Correo Electrónico
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    contacto@anaelenapozo.com
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground mb-1">
                    WhatsApp
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    +1 (829) 657-4806
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground mb-1">
                    Ubicación
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Santo Domingo, República Dominicana
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="p-6 bg-primary rounded-xl">
              <h3 className="font-bold text-white mb-2">
                Consulta sin compromiso
              </h3>
              <p className="text-sm text-white/70">
                Agenda una llamada inicial gratuita para conocer las necesidades
                específicas de tu empresa.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="lg:col-span-2 bg-card border-border">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="nombre"
                      className="block text-sm font-medium text-card-foreground mb-2"
                    >
                      Nombre Completo
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all text-foreground"
                      placeholder="Su nombre"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="empresa"
                      className="block text-sm font-medium text-card-foreground mb-2"
                    >
                      Empresa
                    </label>
                    <input
                      type="text"
                      id="empresa"
                      name="empresa"
                      value={formData.empresa}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all text-foreground"
                      placeholder="Nombre de su empresa"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="correo"
                      className="block text-sm font-medium text-card-foreground mb-2"
                    >
                      Correo Electrónico
                    </label>
                    <input
                      type="email"
                      id="correo"
                      name="correo"
                      value={formData.correo}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all text-foreground"
                      placeholder="correo@empresa.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="telefono"
                      className="block text-sm font-medium text-card-foreground mb-2"
                    >
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all text-foreground"
                      placeholder="+1 (809) 000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="mensaje"
                    className="block text-sm font-medium text-card-foreground mb-2"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all resize-none text-foreground"
                    placeholder="Describa brevemente sus necesidades de seguridad ocupacional..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold"
                >
                  Solicitar Asesoría
                  <Send className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
