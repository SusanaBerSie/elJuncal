const PHONE_NUMBER = "573102873928";

const openWhatsapp = (message) => {
  const url = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};

export { openWhatsapp };