import Link from "next/link"
import { Linkedin, Mail, Phone, Shield } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-white">ANA ELENA POZO</h3>
                <p className="text-xs text-white/60">Seguridad y Salud Ocupacional</p>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              Protegiendo vidas, fortaleciendo empresas y garantizando
              cumplimiento normativo en seguridad industrial.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Enlaces Rápidos</h4>
            <div className="space-y-3">
              <Link
                href="#inicio"
                className="block text-sm text-white/70 hover:text-secondary transition-colors"
              >
                Inicio
              </Link>
              <Link
                href="#sobre-mi"
                className="block text-sm text-white/70 hover:text-secondary transition-colors"
              >
                Sobre Mí
              </Link>
              <Link
                href="#servicios"
                className="block text-sm text-white/70 hover:text-secondary transition-colors"
              >
                Servicios
              </Link>
              <Link
                href="#experiencia"
                className="block text-sm text-white/70 hover:text-secondary transition-colors"
              >
                Experiencia
              </Link>
              <Link
                href="#contacto"
                className="block text-sm text-white/70 hover:text-secondary transition-colors"
              >
                Contacto
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contacto</h4>
            <div className="space-y-3">
              <a
                href="mailto:contacto@anaelenapozo.com"
                className="flex items-center gap-3 text-sm text-white/70 hover:text-secondary transition-colors"
              >
                <Mail className="w-4 h-4" />
                contacto@anaelenapozo.com
              </a>
              <a
                href="https://wa.me/18095550123"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-white/70 hover:text-secondary transition-colors"
              >
                <Phone className="w-4 h-4" />
                +1 (829) 657-4806
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-white/70 hover:text-secondary transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} Ana Elena Pozo. Todos los derechos
            reservados.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-white" />
            </a>
            <a
              href="mailto:contacto@anaelenapozo.com"
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-white" />
            </a>
            <a
              href="https://wa.me/18296574806"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors"
              aria-label="WhatsApp"
            >
              <Phone className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
