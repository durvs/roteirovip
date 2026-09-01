export const site = {
  name: "Roteiro VIP",
  legalName: "Roteiro VIP LLC",
  tagline: "Sua Viagem ao Estilo VIP",
  address: {
    street: "7901 Kingspointe Parkway",
    city: "Orlando",
    state: "FL",
    zip: "32819",
    country: "USA",
  },
  phone: "+1 (407) 367-9716",
  phoneHref: "tel:+14073679716",
  whatsappHref: "https://wa.me/14073679716",
  mapsQuery: "7901 Kingspointe Parkway, Orlando, FL 32819",
  // Florida Seller of Travel registration (Fla. Stat. 559.926-559.939).
  // Fill in when available, e.g. "ST12345". Rendered only when set.
  sellerOfTravelNo: "",
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
  },
} as const;

export const fullAddress = `${site.address.street}, ${site.address.city}, ${site.address.state} ${site.address.zip}`;

export const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(site.mapsQuery)}&output=embed`;
export const mapsLinkUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.mapsQuery)}`;

// Páginas individuais de serviço ainda não existem: tudo aponta para a seção
// #servicos da home. Trocar os hrefs quando as páginas forem criadas.
export const services = [
  { label: "Roteiro dia a dia", href: "/#servicos" },
  { label: "Ingressos e fura-fila", href: "/#servicos" },
  { label: "Guia dentro do parque", href: "/#servicos" },
  { label: "Casa e carro", href: "/#servicos" },
  { label: "Concierge", href: "/#servicos" },
  { label: "Chofer", href: "/#servicos" },
  { label: "Babysitter", href: "/#servicos" },
  { label: "Registro VIP", href: "/#servicos" },
];

export const legalLinks = [
  { label: "Termos de Uso", href: "/termos-de-uso" },
  { label: "Política de Privacidade", href: "/politica-de-privacidade" },
];
