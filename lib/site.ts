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
  // Telefone fixo do escritório
  phone: "+1 (407) 367-9716",
  phoneHref: "tel:+14073679716",
  // E-mail institucional (privacidade, termos, assuntos administrativos)
  email: "contato@roteirovip.com.br",
  emailHref: "mailto:contato@roteirovip.com.br",
  // WhatsApp de atendimento a novos clientes (leads); não usar em páginas legais
  whatsapp: "+1 (321) 217-0838",
  whatsappHref: "https://wa.me/13212170838",
  mapsQuery: "7901 Kingspointe Parkway, Orlando, FL 32819",
  // Florida Seller of Travel registration (Fla. Stat. 559.926-559.939).
  // Fill in when available, e.g. "ST12345". Rendered only when set.
  sellerOfTravelNo: "",
  social: {
    facebook: "https://www.facebook.com/roteirovip",
    instagram: "https://www.instagram.com/roteirovip",
  },
} as const;

export const fullAddress = `${site.address.street}, ${site.address.city}, ${site.address.state} ${site.address.zip}`;

export const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(site.mapsQuery)}&output=embed`;
export const mapsLinkUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.mapsQuery)}`;

export const services = [
  { label: "Roteiro dia a dia", href: "/servicos/roteiro-dia-a-dia" },
  { label: "Ingressos e fura-fila", href: "/servicos/ingressos-e-fura-fila" },
  { label: "Guia dentro do parque", href: "/servicos/guia-dentro-do-parque" },
  { label: "Casa e carro", href: "/servicos/casa-e-carro" },
  { label: "Concierge", href: "/servicos/concierge" },
  { label: "Chofer", href: "/servicos/chofer" },
  { label: "Babysitter", href: "/servicos/babysitter" },
  { label: "Registro VIP", href: "/servicos/registro-vip" },
];

export const legalLinks = [
  { label: "Termos de Uso", href: "/termos-de-uso" },
  { label: "Política de Privacidade", href: "/politica-de-privacidade" },
];
