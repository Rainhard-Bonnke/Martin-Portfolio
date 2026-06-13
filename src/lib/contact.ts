export const PHONE_E164 = "+254791259510";
export const PHONE_DISPLAY = "0791 259 510";
export const WHATSAPP_NUMBER = "254791259510";
export const EMAIL = "martinkoyih@gmail.com";
export const LOCATION = "Ruiru, Kenya";
export const CV_PATH = "/Martin_Koyi_CV_StockController.docx";
export const CV_FILENAME = "Martin_Koyi_CV_StockController.docx";

export const getWhatsAppLink = (message?: string) => {
  const text = message
    ? encodeURIComponent(message)
    : encodeURIComponent("Hello Martin, I viewed your portfolio and would like to connect regarding a stock controller opportunity.");
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
};
