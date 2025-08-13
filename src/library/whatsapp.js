
import { CLIENT_WHATSAPP_NUMBER } from './constants'

export function buildWhatsAppLink(message) {
  const text = encodeURIComponent(message || 'Hello, I am interested in your services')
  return `https://wa.me/${CLIENT_WHATSAPP_NUMBER}?text=${text}`
}