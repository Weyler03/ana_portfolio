import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-industrial.jpg"
          alt="Industrial background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-secondary/20 border border-secondary/30 rounded-full px-4 py-2 mb-6 animate-fade-in-up">
              <Shield className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium text-secondary">
                Especialista Certificada
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-in-up animation-delay-100">
              ANA ELENA POZO
            </h1>

            <p className="text-xl sm:text-2xl text-secondary font-semibold mb-4 animate-fade-in-up animation-delay-200">
              Especialista en Seguridad y Salud Ocupacional
            </p>

            <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in-up animation-delay-300 leading-relaxed">
              Protegiendo vidas, fortaleciendo empresas y garantizando
              cumplimiento normativo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up animation-delay-400">
              <Button
                asChild
                size="lg"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold text-base px-8"
              >
                <Link href="#contacto">
                  Solicitar Asesoría
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent / border-white/30 text-white hover:bg-white/10 font-semibold text-base px-8"
              >
                <Link href="#servicios">Ver Servicios</Link>
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="hidden lg:flex justify-center animate-fade-in animation-delay-300">
            <div className="relative">
              <div className="absolute -inset-4 bg-secondary/20 rounded-2xl blur-xl" />
              <div className="relative w-80 h-96 rounded-2xl overflow-hidden border-4 border-white/20 shadow-2xl">
                <Image
                  src="/images/ana.jpeg"
                  alt="Ana Elena Pozo - Especialista en Seguridad Ocupacional"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-card rounded-xl p-4 shadow-xl border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-card-foreground">+15 años</p>
                    <p className="text-xs text-muted-foreground">de experiencia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-secondary rounded-full" />
        </div>
      </div>
    </section>
  )
}
