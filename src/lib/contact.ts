export const PHONE_E164 = "+254791259510";
export const PHONE_DISPLAY = "+254 791 259 510";
export const WHATSAPP_NUMBER = "254791259510";
export const EMAIL = "ayawin.ke@gmail.com";

export const getWhatsAppLink = (message?: string) => {
  const text = message
    ? encodeURIComponent(message)
    : encodeURIComponent("Hello Martin! I'm interested in your accounting services.");
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
};
