import {
  Shield,
  ClipboardCheck,
  FileCheck,
  GraduationCap,
  Users,
  AlertTriangle,
  FileText,
  Search,
  Briefcase,
  Settings,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: Shield,
    title: "Programas de SST",
    description:
      "Programas integrales de Seguridad y Salud en el Trabajo adaptados a su industria",
  },
  {
    icon: ClipboardCheck,
    title: "Auditorías Internas",
    description:
      "Evaluación exhaustiva de sistemas de gestión y cumplimiento normativo",
  },
  {
    icon: FileCheck,
    title: "Reglamento 522-06",
    description:
      "Asesoría especializada para cumplimiento del reglamento de seguridad laboral",
  },
  {
    icon: GraduationCap,
    title: "Capacitaciones",
    description:
      "Formación e inducción en seguridad industrial para todo el personal",
  },
  {
    icon: Users,
    title: "Brigadas de Emergencia",
    description:
      "Formación y entrenamiento de brigadas de respuesta ante emergencias",
  },
  {
    icon: AlertTriangle,
    title: "Simulacros",
    description:
      "Planificación y ejecución de simulacros de evacuación y emergencias",
  },
  {
    icon: FileText,
    title: "Procedimientos Seguros",
    description:
      "Desarrollo de procedimientos de trabajo seguro y protocolos operativos",
  },
  {
    icon: Search,
    title: "Inspecciones",
    description:
      "Inspecciones de seguridad y evaluación de condiciones laborales",
  },
  {
    icon: Briefcase,
    title: "Asesoría Contratistas",
    description:
      "Gestión de seguridad para contratistas y personal externo",
  },
  {
    icon: Settings,
    title: "Gestión de Riesgos",
    description:
      "Identificación, evaluación y control de riesgos industriales",
  },
]

export function ServicesSection() {
  return (
    <section id="servicios" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-secondary uppercase tracking-widest mb-4">
            Soluciones Profesionales
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Servicios Profesionales
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluciones integrales en seguridad y salud ocupacional para
            empresas que buscan excelencia operativa y cumplimiento normativo
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group bg-card border-border hover:border-secondary/50 hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-secondary transition-colors" />
                </div>
                <h3 className="font-bold text-card-foreground mb-2 text-sm">
                  {service.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
