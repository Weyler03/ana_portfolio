import { Zap, Factory, AlertTriangle, Settings, FlaskConical, Flame } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const experienceAreas = [
  {
    icon: Zap,
    title: "Generación de Energía",
    description: "Plantas de generación eléctrica",
  },
  {
    icon: Factory,
    title: "Instalaciones Industriales",
    description: "Entornos industriales críticos",
  },
  {
    icon: AlertTriangle,
    title: "Riesgos Eléctricos",
    description: "Gestión de seguridad eléctrica",
  },
  {
    icon: Settings,
    title: "Riesgos Mecánicos",
    description: "Control de equipos y maquinaria",
  },
  {
    icon: FlaskConical,
    title: "Riesgos Químicos",
    description: "Manejo de sustancias peligrosas",
  },
  {
    icon: Flame,
    title: "Prevención de Incendios",
    description: "Sistemas contra incendios",
  },
]

const auditItems = [
  "Diseño de programas de auditorías",
  "Auditor interno de sistemas integrados",
  "Identificación de brechas",
  "Acciones correctivas",
  "Auditorías Ministerio de Trabajo",
  "Seguimiento de hallazgos",
  "Mejora continua",
]

const brigadeItems = [
  { title: "Formación de brigadas", icon: "👥" },
  { title: "Simulacros", icon: "🎯" },
  { title: "Control de Incendios", icon: "🔥" },
  { title: "Evacuaciones", icon: "🚪" },
  { title: "Primeros auxilios", icon: "🩹" },
  { title: "Protocolos de emergencia", icon: "📋" },
  { title: "Respuesta industrial", icon: "🏭" },
]

export function ExperienceSection() {
  return (
    <section id="experiencia" className="py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Experience Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-secondary uppercase tracking-widest mb-4">
            Trayectoria
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Experiencia en Empresas de Alto Riesgo
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Responsable de planificar, implementar y supervisar programas
            integrales de Seguridad y Salud Ocupacional en entornos industriales
            de alta complejidad.
          </p>
        </div>

        {/* Experience Areas Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {experienceAreas.map((area, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center shrink-0">
                  <area.icon className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-bold text-card-foreground mb-1">
                    {area.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {area.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Audits Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-semibold text-primary">
                Auditorías Internas
              </span>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Especialista en Sistemas de Gestión
            </h3>
            <div className="space-y-3">
              {auditItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border"
                >
                  <div className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center shrink-0">
                    <svg
                      className="w-4 h-4 text-secondary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-card-foreground">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Brigades Section */}
          <div>
            <div className="inline-flex items-center gap-2 bg-secondary/20 rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-semibold text-secondary">
                Brigadas de Emergencia
              </span>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Respuesta ante Emergencias
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {brigadeItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border hover:border-secondary/50 transition-colors"
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-sm font-medium text-card-foreground">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
