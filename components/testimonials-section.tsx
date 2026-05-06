import { Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    quote:
      "La implementación del sistema de gestión de seguridad transformó nuestra operación. Redujimos incidentes en un 80% en el primer año.",
    author: "Carlos Martínez",
    role: "Gerente de Operaciones",
    company: "Empresa Energética Nacional",
  },
  {
    quote:
      "Profesionalismo excepcional. Su conocimiento del Reglamento 522-06 nos ayudó a cumplir todos los requisitos legales sin contratiempos.",
    author: "María Fernández",
    role: "Directora de Recursos Humanos",
    company: "Grupo Industrial del Caribe",
  },
  {
    quote:
      "Las capacitaciones fueron altamente efectivas. Nuestro equipo ahora tiene una cultura de seguridad arraigada en cada proceso.",
    author: "Roberto Sánchez",
    role: "Jefe de Planta",
    company: "Manufactura Dominicana S.A.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-secondary uppercase tracking-widest mb-4">
            Testimonios
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Empresas que han transformado su cultura de seguridad con nuestra
            asesoría profesional
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:shadow-xl transition-all duration-300"
            >
              <CardContent className="p-8">
                <Quote className="w-10 h-10 text-secondary/30 mb-4" />
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-lg font-bold text-primary">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-card-foreground">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                    <p className="text-xs text-secondary">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
