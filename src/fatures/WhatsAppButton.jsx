import { buildWhatsAppLink } from '../library/whatsapp'

export default function WhatsAppButton({ message, children }) {
  const url = buildWhatsAppLink(message)
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      {children || 'Contact on WhatsApp'}
    </a>
  )
}