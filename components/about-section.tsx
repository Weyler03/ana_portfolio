import { Award, BookOpen, GraduationCap, Shield, Target, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const certifications = [
  "ISO 45001",
  "ISO 14001",
  "ISO 9001",
  "OSHA",
]

const education = [
  {
    icon: GraduationCap,
    title: "Ingeniería Industrial",
    description: "Formación técnica sólida",
  },
  {
    icon: BookOpen,
    title: "Maestría en Gestión Integrada",
    description: "Seguridad, Medio Ambiente y Calidad",
  },
]

const diplomas = [
  "Seguridad y Salud Ocupacional",
  "Prevención de Riesgos Laborales",
  "Higiene Industrial",
  "Auditorías de Sistemas de Gestión",
]

export function AboutSection() {
  return (
    <section id="sobre-mi" className="py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Profile Section */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-secondary uppercase tracking-widest mb-4">
            Conóceme
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Perfil Profesional
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Profesional en Seguridad y Salud Ocupacional, con sólida formación
              académica y amplia experiencia en empresas de alto riesgo,
              especialmente en el sector energético, industrial y de procesos
              críticos.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Especializada en implementación, seguimiento y mejora de sistemas
              de gestión, auditorías internas y programas de prevención de
              riesgos laborales, asegurando estricto cumplimiento legal y
              estándares internacionales.
            </p>
            <p className="text-lg text-foreground font-medium">
              Mi enfoque está orientado a la prevención, excelencia operativa,
              cultura de seguridad y resultados sostenibles.
            </p>
          </div>
        </div>

        {/* Education Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {education.map((item, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-card-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Diplomas Section */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-foreground mb-6 text-center">
            Diplomados y Entrenamientos
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {diplomas.map((diploma, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-4 flex items-center gap-3 hover:border-secondary/50 transition-colors"
              >
                <Shield className="w-5 h-5 text-secondary shrink-0" />
                <span className="text-sm font-medium text-card-foreground">
                  {diploma}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-primary rounded-2xl p-8 sm:p-12">
          <div className="text-center mb-8">
            <Award className="w-12 h-12 text-secondary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">
              Certificaciones Internacionales
            </h3>
            <p className="text-white/70">
              Estándares de clase mundial en gestión de seguridad
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white/10 border border-white/20 rounded-lg px-6 py-3 backdrop-blur-sm"
              >
                <span className="text-lg font-bold text-secondary">{cert}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Value Props */}
        <div className="grid sm:grid-cols-3 gap-6 mt-12">
          <div className="text-center p-6">
            <Target className="w-10 h-10 text-secondary mx-auto mb-4" />
            <h4 className="font-bold text-foreground mb-2">Enfoque Preventivo</h4>
            <p className="text-sm text-muted-foreground">
              Estrategias orientadas a la prevención y mejora continua
            </p>
          </div>
          <div className="text-center p-6">
            <Shield className="w-10 h-10 text-secondary mx-auto mb-4" />
            <h4 className="font-bold text-foreground mb-2">Liderazgo Técnico</h4>
            <p className="text-sm text-muted-foreground">
              Experiencia en ambientes industriales de alto riesgo
            </p>
          </div>
          <div className="text-center p-6">
            <Users className="w-10 h-10 text-secondary mx-auto mb-4" />
            <h4 className="font-bold text-foreground mb-2">Compromiso Total</h4>
            <p className="text-sm text-muted-foreground">
              Dedicación a la protección de vidas y bienestar
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
