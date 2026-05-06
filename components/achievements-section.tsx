import { Award, TrendingUp, Shield, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const achievements = [
  {
    icon: Award,
    title: "Premio a la Excelencia",
    description: "Reconocimiento por cumplimiento ejemplar del Reglamento 522-06",
    highlight: true,
  },
  {
    icon: TrendingUp,
    title: "Mejora Sostenida",
    description: "Reducción significativa en indicadores de accidentabilidad",
    highlight: false,
  },
  {
    icon: Shield,
    title: "Sistema Preventivo",
    description: "Fortalecimiento integral del sistema de gestión preventiva",
    highlight: false,
  },
  {
    icon: Star,
    title: "Reconocimiento Institucional",
    description: "Destacada gestión efectiva en seguridad y salud ocupacional",
    highlight: false,
  },
]

const valueProps = [
  {
    title: "Enfoque preventivo y estratégico",
    description: "Anticipación de riesgos antes de que se conviertan en problemas",
  },
  {
    title: "Liderazgo técnico",
    description: "Dirección experta en implementación de sistemas de gestión",
  },
  {
    title: "Trabajo con contratistas",
    description: "Gestión integral de seguridad para personal externo",
  },
  {
    title: "Orientación a resultados",
    description: "Métricas claras y mejora continua medible",
  },
  {
    title: "Mejora continua",
    description: "Evolución constante de procesos y procedimientos",
  },
  {
    title: "Compromiso con la vida",
    description: "La seguridad y bienestar como prioridad absoluta",
  },
]

export function AchievementsSection() {
  return (
    <section id="logros" className="py-24 bg-primary text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-secondary uppercase tracking-widest mb-4">
            Resultados Comprobados
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Logros Destacados
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Reconocimientos y resultados que respaldan años de dedicación a la
            excelencia en seguridad ocupacional
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className={`bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 ${
                achievement.highlight ? "ring-2 ring-secondary" : ""
              }`}
            >
              <CardContent className="p-6 text-center">
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 ${
                    achievement.highlight ? "bg-secondary" : "bg-white/20"
                  }`}
                >
                  <achievement.icon
                    className={`w-7 h-7 ${
                      achievement.highlight ? "text-primary" : "text-white"
                    }`}
                  />
                </div>
                <h3 className="font-bold text-white mb-2">{achievement.title}</h3>
                <p className="text-sm text-white/70">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Value Added Section */}
        <div className="bg-white/5 rounded-2xl p-8 sm:p-12 border border-white/10">
          <h3 className="text-2xl font-bold text-white text-center mb-10">
            Valor Agregado
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {valueProps.map((prop, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-8 h-8 bg-secondary/20 rounded-lg flex items-center justify-center shrink-0 mt-1">
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
                <div>
                  <h4 className="font-semibold text-white mb-1">{prop.title}</h4>
                  <p className="text-sm text-white/60">{prop.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
