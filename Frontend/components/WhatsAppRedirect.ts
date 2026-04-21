export const WHATSAPP_NUMBER = "9869132423";

export function buildWhatsAppMessage(formData: {
  name: string;
  email: string;
  phone: string;
  dob: string;
  service: string;
  date: string;
  time: string;
  notes: string;
}): string {
  const message = `
🦷 *New Appointment Request — SmileCraft Dental*

👤 *Patient Name:* ${formData.name}
📧 *Email:* ${formData.email}
📞 *Phone:* ${formData.phone}
🎂 *Date of Birth:* ${formData.dob}

🔹 *Service:* ${formData.service}
📅 *Preferred Date:* ${formData.date}
⏰ *Preferred Time:* ${formData.time}
📝 *Notes:* ${formData.notes || "None"}

_Sent from SmileCraft website_
  `.trim();

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
