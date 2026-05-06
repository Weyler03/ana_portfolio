"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/18296574806?text=Hola,%20me%20gustaría%20solicitar%20información%20sobre%20sus%20servicios%20de%20seguridad%20ocupacional."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 hover:shadow-xl"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />
      <span className="absolute -top-2 -right-2 w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
        <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
      </span>
    </a>
  )
}
