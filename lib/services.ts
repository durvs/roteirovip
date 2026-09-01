export type Service = {
  slug: string;
  name: string;
  /** Uma linha, usada nos cards e no título da página */
  tagline: string;
  /** Descrição curta para cards */
  short: string;
  image: string;
  /** Parágrafos de abertura da página */
  intro: string[];
  /** O que está incluído */
  includes: string[];
  /** Como funciona, em ordem */
  steps: { title: string; text: string }[];
  /** Observação de intermediação/limites, quando houver */
  note?: string;
  cta: string;
};

export const services: Service[] = [
  {
    slug: "roteiro-dia-a-dia",
    name: "Roteiro dia a dia",
    tagline: "Cada dia da viagem com propósito.",
    short:
      "Cada dia da viagem definido: parque, dia livre, compras, chegada e retorno. Revisado quantas vezes for preciso, sem custo adicional.",
    image: "/images/passagem-aerea.webp",
    intro: [
      "Uma viagem a Orlando tem mais decisões do que parece: qual parque em qual dia, quando descansar, onde encaixar as compras, como não colocar Magic Kingdom e Epcot em dias seguidos com crianças pequenas. O roteiro dia a dia resolve isso antes do embarque.",
      "Tudo começa em uma reunião por vídeo. A partir dela, montamos a sequência completa, do dia da chegada ao voo de volta, e ajustamos quantas vezes forem necessárias até ficar do jeito da família.",
    ],
    includes: [
      "Reunião inicial por vídeo para entender pessoas, idades, datas e voos",
      "Day by day completo: parques, dias livres, compras, chegada e retorno",
      "Ordem dos parques pensada para o ritmo das crianças e dos adultos",
      "Encaixe de eventos sazonais (festas de Halloween, jogos, experiências especiais)",
      "Revisões sem limite até a versão final",
      "Versão final com horários de shows e reservas confirmadas",
    ],
    steps: [
      { title: "Conversa", text: "Você conta quantas pessoas vão, as idades e as datas em mente. Agendamos uma reunião por vídeo." },
      { title: "Proposta", text: "Apresentamos a primeira versão do day by day junto com sugestões de hospedagem." },
      { title: "Ajustes", text: "Trocamos parques de lugar, tiramos, incluímos. Quantas vezes for preciso." },
      { title: "Versão final", text: "O roteiro fechado, com reservas e horários, fica no grupo da família no WhatsApp." },
    ],
    cta: "Quero meu roteiro",
  },
  {
    slug: "ingressos-e-fura-fila",
    name: "Ingressos e fura-fila",
    tagline: "Os ingressos certos, nos dias certos, já no aplicativo.",
    short:
      "Intermediamos a emissão dos ingressos da Disney e da Universal, acompanhamos a vinculação ao aplicativo e a compra do Express Pass e do Lightning Lane.",
    image: "/images/universal-studios.webp",
    intro: [
      "Ingresso de quantos dias, park hopper ou não, Express Pass de um parque ou de três, Lightning Lane Multi Pass ou Single Pass: cada combinação muda o valor e a experiência. Cuidamos de escolher a certa para o roteiro da família e intermediamos a emissão junto aos parques.",
      "Depois de emitidos, acompanhamos a vinculação na conta My Disney Experience e no aplicativo da Universal, para que no dia do parque esteja tudo no celular de vocês.",
    ],
    includes: [
      "Ingressos multi-dia da Disney e Park-to-Park da Universal, emitidos junto aos parques",
      "Ingressos avulsos para quem chega em outra data",
      "Vinculação dos ingressos ao My Disney Experience e ao app da Universal",
      "Universal Express Pass, de um ou vários dias",
      "Disney Lightning Lane Multi Pass, comprado e agendado pelo guia no dia do parque",
      "Orientação sobre o Lightning Lane Single Pass, com lista de atrações e alturas mínimas",
      "Ingressos das festas sazonais (Mickey's Not-So-Scary, Halloween Horror Nights)",
    ],
    steps: [
      { title: "Definição", text: "Com o roteiro pronto, definimos quantos dias de cada parque e quais fura-filas fazem sentido." },
      { title: "Orçamento", text: "Você recebe o valor por pessoa e por parque, em dólar e em reais." },
      { title: "Emissão", text: "Intermediamos a emissão para garantir a tarifa. Os vouchers chegam no grupo da família." },
      { title: "No aplicativo", text: "Acompanhamos a vinculação na conta Disney e no app da Universal antes da viagem." },
    ],
    note: "Os ingressos são emitidos pelos próprios parques e seguem as regras de cada um. A Roteiro VIP intermedia a compra e a configuração.",
    cta: "Quero um orçamento de ingressos",
  },
  {
    slug: "guia-dentro-do-parque",
    name: "Guia dentro do parque",
    tagline: "Alguém que conhece o parque, ao lado da sua família o dia inteiro.",
    short:
      "Um guia parceiro acompanha a família no parque, agendando atrações e restaurantes enquanto vocês aproveitam.",
    image: "/images/disney-world.webp",
    intro: [
      "Um guia parceiro, em português, acompanha a família da abertura ao fechamento do parque. Ele agenda as filas rápidas no celular enquanto vocês estão na atração anterior, sabe onde os personagens aparecem, qual show vale a pena e onde almoçar sem perder tempo.",
      "Antes da viagem, vocês respondem um questionário curto: atrações radicais ou tranquilas, personagens favoritos, restrições de saúde, altura das crianças. O dia é montado em cima disso.",
    ],
    includes: [
      "Guia parceiro em português durante todo o dia de parque",
      "Questionário pré-viagem para personalizar o dia",
      "Agendamento do Lightning Lane em tempo real, sem vocês precisarem mexer no app",
      "Sequência de atrações respeitando altura mínima e perfil de cada pessoa",
      "Disney: guia por parque, para grupos de até 5 pessoas",
      "Universal: pacote de guia com Express Pass incluído",
    ],
    steps: [
      { title: "Questionário", text: "Vocês contam do que gostam, o que preferem evitar e o que não pode faltar." },
      { title: "Planejamento", text: "O guia recebe o perfil da família e monta a ordem do dia." },
      { title: "Dia de parque", text: "Encontro no portão. Dali em diante, o guia cuida da logística e vocês da diversão." },
    ],
    note: "O valor do Lightning Lane Multi Pass da Disney é pago diretamente no cartão cadastrado na conta Disney e não está incluído no guiamento.",
    cta: "Quero um guia no parque",
  },
  {
    slug: "casa-e-carro",
    name: "Casa e carro",
    tagline: "Chegar e encontrar tudo pronto.",
    short:
      "Selecionamos e intermediamos a reserva da casa em condomínio, com piscina aquecida, e do carro retirado no aeroporto. Contrato e vouchers em mãos antes do embarque.",
    image: "/images/assessoria.webp",
    intro: [
      "Para famílias grandes ou várias famílias viajando juntas, casa em condomínio costuma ser melhor que hotel: quartos para todos, cozinha, piscina, lavanderia. Selecionamos opções de acordo com o tamanho do grupo e apresentamos em PDF, com fotos e localização.",
      "Do carro cuidamos da mesma forma: intermediamos a locação com retirada e devolução no aeroporto de Orlando, no veículo certo para o grupo, e enviamos o contrato antes da viagem.",
    ],
    includes: [
      "Seleção de casas em condomínio de acordo com o grupo (de 4 a 12 quartos)",
      "Extras negociados com o fornecedor: piscina aquecida, grill, late check-out",
      "Pré-reserva, contrato e voucher de hospedagem (útil para a entrevista de visto)",
      "Locação de carro (SUV, minivan) com retirada e devolução no aeroporto MCO",
      "Transfer aeroporto–casa para quem chega em outra data",
      "Coleta dos documentos dos condutores e envio do contrato da locadora",
    ],
    steps: [
      { title: "Perfil do grupo", text: "Quantas pessoas, quantos quartos, quantos motoristas, datas." },
      { title: "Opções", text: "Você recebe um PDF com as casas pré-selecionadas e os veículos disponíveis." },
      { title: "Reserva", text: "Escolhida a casa, intermediamos a pré-reserva e o contrato com o fornecedor." },
      { title: "Antes de embarcar", text: "Voucher da casa e contrato do carro no grupo da família." },
    ],
    note: "Hospedagem e locação são contratadas junto a fornecedores parceiros em Orlando; a Roteiro VIP seleciona, negocia e intermedia.",
    cta: "Quero ver opções de casa",
  },
  {
    slug: "concierge",
    name: "Concierge",
    tagline: "Se existe em Orlando, intermediamos a reserva.",
    short:
      "Mesa com personagens, festas de Halloween, jogo da NBA, oficina de sabre de luz. Se existe em Orlando, intermediamos a reserva.",
    image: "/images/epcot.webp",
    intro: [
      "Restaurante com personagens no Magic Kingdom, área reservada para os fogos, jogo do Orlando Magic com assentos juntos, oficina de sabre de luz no Hollywood Studios. As melhores experiências de Orlando abrem reservas com semanas de antecedência e esgotam rápido.",
      "O concierge da Roteiro VIP acompanha os calendários de abertura, sugere o que combina com a família e intermedia cada reserva. Vocês só escolhem.",
    ],
    includes: [
      "Curadoria de restaurantes por parque, com cardápio, fotos e menu infantil",
      "Reservas de restaurante, inclusive para grupos grandes e com personagens",
      "Dessert parties e áreas reservadas para os fogos",
      "Ingressos das festas sazonais: Mickey's Not-So-Scary, Halloween Horror Nights",
      "Ingressos de jogos da NBA (Orlando Magic) com escolha de setor",
      "Experiências Star Wars: Savi's Workshop e Droid Depot",
      "Refeições brasileiras congeladas entregues na casa, para crianças e adultos",
      "Atenção a alergias e restrições alimentares em todas as reservas",
    ],
    steps: [
      { title: "Sugestões", text: "Com o roteiro pronto, o concierge lista o que vale reservar em cada dia." },
      { title: "Escolha", text: "Vocês dizem o que querem. Cardápios e fotos ajudam a decidir." },
      { title: "Reserva", text: "Na data de abertura, intermediamos a reserva e confirmamos no grupo." },
    ],
    cta: "Quero falar com o concierge",
  },
  {
    slug: "chofer",
    name: "Chofer",
    tagline: "Orlando sem dirigir.",
    short: "Motorista particular, por meio de parceiros locais, para quem prefere não dirigir em Orlando.",
    image: "/images/chofer.webp",
    intro: [
      "Nem toda família quer dirigir em outro país, procurar vaga em estacionamento de parque ou voltar cansada de noite pela rodovia. Com chofer, o carro chega na porta, deixa vocês na entrada e busca na hora combinada.",
      "O serviço é prestado por motoristas parceiros de confiança, com veículo adequado ao tamanho do grupo. A Roteiro VIP intermedia e coordena os horários com o roteiro.",
    ],
    includes: [
      "Motorista particular parceiro para os dias contratados",
      "Traslados aeroporto, parques, outlets, restaurantes e casa",
      "Veículo compatível com o grupo e as bagagens",
      "Horários alinhados ao roteiro dia a dia",
    ],
    steps: [
      { title: "Dias e trechos", text: "Você diz em quais dias quer chofer e para onde." },
      { title: "Orçamento", text: "Valor por dia ou por trecho, com o veículo indicado." },
      { title: "Na viagem", text: "O motorista combina os horários diretamente no grupo da família." },
    ],
    cta: "Quero um orçamento de chofer",
  },
  {
    slug: "babysitter",
    name: "Babysitter",
    tagline: "Uma noite livre, com tranquilidade.",
    short: "Profissionais parceiras de confiança, para que os pais tenham uma noite livre com tranquilidade.",
    image: "/images/babysitter.webp",
    intro: [
      "Um jantar a dois, um show só para adultos, uma noite de Halloween Horror Nights enquanto as crianças dormem. Para isso existir, alguém de confiança precisa ficar com os pequenos.",
      "Indicamos profissionais parceiras que já atendem famílias brasileiras em Orlando. A Roteiro VIP intermedia a contratação e alinha horários com o roteiro.",
    ],
    includes: [
      "Profissional parceira de confiança, na casa ou no hotel",
      "Contratação por período (noite, meio dia, dia inteiro)",
      "Horários alinhados com o roteiro e as reservas dos adultos",
    ],
    steps: [
      { title: "Datas", text: "Você indica as noites ou os dias em que quer a babá." },
      { title: "Indicação", text: "Apresentamos a profissional e o valor por período." },
      { title: "Confirmação", text: "Combinado o horário, fica registrado no roteiro." },
    ],
    cta: "Quero uma babá na viagem",
  },
  {
    slug: "registro-vip",
    name: "Registro VIP",
    tagline: "Vocês na foto, todos de uma vez.",
    short: "Fotógrafo parceiro acompanhando a família nos parques. Vocês voltam com as fotos, não apenas com a lembrança.",
    image: "/images/registro-camera.webp",
    intro: [
      "Nas fotos de viagem, sempre falta alguém: quem está segurando o celular. O Registro VIP resolve isso com um fotógrafo parceiro acompanhando a família em um dia de parque, nas atrações, com os personagens e na frente do castelo.",
      "A Roteiro VIP intermedia a sessão e encaixa o horário no roteiro, nos pontos com melhor luz e menos fila.",
    ],
    includes: [
      "Fotógrafo parceiro acompanhando a família em um dia de parque",
      "Fotos nas atrações, com personagens e nos pontos clássicos",
      "Horário planejado dentro do roteiro dia a dia",
      "Entrega das fotos após a sessão",
    ],
    steps: [
      { title: "Dia da sessão", text: "Escolhemos juntos o parque e o período do dia." },
      { title: "Orçamento", text: "Valor por sessão, com duração e entrega definidas." },
      { title: "No parque", text: "O fotógrafo encontra a família e acompanha o roteiro." },
    ],
    cta: "Quero registrar a viagem",
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
