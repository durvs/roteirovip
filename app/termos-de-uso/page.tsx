import type { Metadata } from "next";
import Link from "next/link";
import LegalDoc, { type LegalSection } from "@/components/LegalDoc";
import { site, fullAddress } from "@/lib/site";

export const metadata: Metadata = {
  title: "Termos de Uso — Roteiro VIP",
  description: `Termos e condições de uso do site e dos serviços de assessoria e intermediação de viagens da ${site.legalName}.`,
};

const UPDATED = "janeiro de 2026";

const sections: LegalSection[] = [
  {
    id: "aceitacao",
    title: "Aceitação dos Termos",
    body: (
      <>
        <p>
          Estes Termos de Uso (&quot;Termos&quot;) constituem um acordo legal entre você (&quot;Cliente&quot;, &quot;você&quot;) e a <strong>{site.legalName}</strong> (&quot;Roteiro VIP&quot;, &quot;nós&quot;), sociedade de responsabilidade limitada constituída sob as leis do Estado da Flórida, Estados Unidos da América, com sede em {fullAddress}, EUA.
        </p>
        <p>
          Ao acessar este site, solicitar um orçamento, contratar qualquer serviço ou se comunicar conosco por qualquer canal, você declara ter lido, compreendido e aceito integralmente estes Termos e a nossa <Link href="/politica-de-privacidade">Política de Privacidade</Link>. Se você não concorda com estes Termos, não utilize o site nem os nossos serviços.
        </p>
        <p>
          Você declara ter pelo menos 18 anos de idade e plena capacidade legal para celebrar este acordo, inclusive em nome dos demais viajantes incluídos na sua solicitação.
        </p>
      </>
    ),
  },
  {
    id: "natureza",
    title: "Natureza dos Serviços: Assessoria e Intermediação",
    body: (
      <>
        <p>
          A Roteiro VIP é uma empresa de <strong>assessoria, planejamento e intermediação de serviços de viagem</strong> com foco na região de Orlando, Flórida. Nossa atividade consiste em orientar o Cliente, elaborar roteiros, prestar consultoria e, quando solicitado, intermediar a contratação de produtos e serviços fornecidos por terceiros.
        </p>
        <p>
          <strong>A Roteiro VIP não é</strong> operadora, proprietária ou administradora de parques temáticos, atrações, hotéis, companhias aéreas, locadoras de veículos, restaurantes, empresas de transporte, seguradoras ou qualquer outro prestador de serviço turístico (&quot;Fornecedores&quot;). Ingressos, hospedagem, passagens, transporte, passeios e demais produtos são fornecidos exclusivamente pelos respectivos Fornecedores, sob os termos, condições e políticas de cada um deles.
        </p>
        <p>
          Ao contratar através da Roteiro VIP, você reconhece que atuamos <strong>na qualidade de intermediária (agente)</strong> entre você e os Fornecedores, e que a relação contratual referente à prestação do serviço final é estabelecida diretamente entre você e o Fornecedor.
        </p>
      </>
    ),
  },
  {
    id: "fornecedores",
    title: "Fornecedores Terceiros e Prestadores Independentes",
    body: (
      <>
        <p>
          Serviços como motorista particular (chofer), babysitter, fotografia (Registro VIP), transporte e similares podem ser executados por <strong>profissionais e empresas independentes</strong>, que não são empregados, sócios, agentes ou representantes legais da Roteiro VIP. Esses profissionais são responsáveis pela sua própria habilitação, licenciamento, seguros e conduta.
        </p>
        <p>
          A Roteiro VIP emprega esforços razoáveis para indicar Fornecedores de boa reputação, mas <strong>não controla, supervisiona nem garante</strong> a execução dos serviços por eles prestados. Assim, a Roteiro VIP não se responsabiliza por:
        </p>
        <ul>
          <li>atos, omissões, negligência, atrasos, falhas ou inadimplemento de qualquer Fornecedor;</li>
          <li>cancelamentos, alterações de horário, fechamento de atrações, indisponibilidade de ingressos ou mudanças de políticas dos Fornecedores;</li>
          <li>qualidade, segurança, adequação ou legalidade dos produtos e serviços fornecidos por terceiros;</li>
          <li>perdas, danos, lesões, doenças, morte ou despesas decorrentes dos serviços prestados por Fornecedores;</li>
          <li>conteúdo, práticas ou políticas de privacidade de sites de terceiros para os quais este site eventualmente redirecione.</li>
        </ul>
        <p>
          Reclamações relativas a serviços de Fornecedores devem ser dirigidas diretamente ao Fornecedor. A Roteiro VIP poderá, a seu critério e sem qualquer obrigação, auxiliar o Cliente na comunicação com o Fornecedor.
        </p>
      </>
    ),
  },
  {
    id: "reservas",
    title: "Orçamentos, Reservas, Preços e Pagamentos",
    body: (
      <>
        <p>
          Orçamentos são meramente informativos, não constituem oferta vinculante e estão sujeitos a disponibilidade e a alteração de preços pelos Fornecedores até a confirmação da compra. Valores em dólares americanos (USD), salvo indicação expressa em contrário; conversões cambiais, tarifas bancárias e impostos são de responsabilidade do Cliente.
        </p>
        <p>
          Os honorários da Roteiro VIP pelos serviços de assessoria e planejamento serão informados previamente e são devidos pela prestação do serviço de assessoria, <strong>independentemente</strong> da efetiva realização da viagem ou de eventuais cancelamentos junto aos Fornecedores.
        </p>
        <p>
          Políticas de alteração, cancelamento, reembolso e no-show de ingressos, hotéis, passagens e demais produtos são definidas <strong>exclusivamente pelos Fornecedores</strong> e serão informadas ao Cliente antes da confirmação. Muitos produtos (em especial ingressos de parques e tarifas promocionais) são não reembolsáveis e intransferíveis.
        </p>
        <p>
          O Cliente é responsável por conferir todos os dados (nomes conforme documento de viagem, datas, quantidades) antes da confirmação. Custos decorrentes de informações incorretas fornecidas pelo Cliente serão de sua exclusiva responsabilidade.
        </p>
      </>
    ),
  },
  {
    id: "documentacao",
    title: "Documentação, Imigração e Saúde",
    body: (
      <>
        <p>
          É responsabilidade exclusiva do Cliente e de cada viajante obter e portar passaporte válido, vistos (inclusive visto americano ou autorização ESTA, quando aplicável), autorizações para viagem de menores, certificados de vacinação e quaisquer outros documentos exigidos pelas autoridades de imigração, alfândega e saúde dos países de origem, trânsito e destino.
        </p>
        <p>
          A Roteiro VIP pode fornecer orientações gerais, mas <strong>não garante</strong> a concessão de vistos nem a admissão nos Estados Unidos, decisão que cabe exclusivamente às autoridades competentes. A negativa de embarque ou de entrada não gera direito a reembolso dos honorários da Roteiro VIP nem obriga a Roteiro VIP a reembolsar valores pagos a Fornecedores.
        </p>
      </>
    ),
  },
  {
    id: "riscos",
    title: "Riscos Inerentes e Assunção de Risco",
    body: (
      <>
        <p>
          Viagens e visitas a parques temáticos envolvem riscos inerentes, incluindo, sem limitação: atrações de alta intensidade, longas caminhadas, exposição ao calor e a condições climáticas adversas (incluindo furacões e tempestades), grandes aglomerações, acidentes de trânsito, doenças, furtos e imprevistos de ordem pública ou sanitária. Ao viajar, <strong>você assume voluntariamente esses riscos</strong>, para si e pelos viajantes sob sua responsabilidade.
        </p>
        <p>
          Recomendamos fortemente a contratação de <strong>seguro-viagem</strong> com cobertura médica, de cancelamento e de bagagem. A Roteiro VIP não é seguradora e não fornece cobertura de qualquer natureza. Despesas médicas nos Estados Unidos são de responsabilidade exclusiva do viajante.
        </p>
        <p>
          Restrições de altura, idade ou saúde para atrações são definidas pelos parques. É dever do viajante avaliar suas condições físicas e de saúde e respeitar as regras de segurança de cada Fornecedor.
        </p>
      </>
    ),
  },
  {
    id: "garantias",
    title: "Isenção de Garantias",
    body: (
      <>
        <p>
          NA MÁXIMA EXTENSÃO PERMITIDA PELA LEI APLICÁVEL, O SITE, SEU CONTEÚDO E OS SERVIÇOS DA ROTEIRO VIP SÃO FORNECIDOS &quot;NO ESTADO EM QUE SE ENCONTRAM&quot; (&quot;AS IS&quot;) E &quot;CONFORME DISPONÍVEIS&quot;, SEM GARANTIAS DE QUALQUER NATUREZA, EXPRESSAS OU IMPLÍCITAS, INCLUINDO GARANTIAS DE COMERCIALIZAÇÃO, ADEQUAÇÃO A UM FIM ESPECÍFICO E NÃO VIOLAÇÃO.
        </p>
        <p>
          Informações sobre horários, filas, preços, atrações, eventos, clima e disponibilidade são fornecidas apenas a título informativo, podem mudar sem aviso e não são garantidas. Conteúdos do blog e de redes sociais têm caráter meramente informativo e não constituem aconselhamento jurídico, médico, financeiro ou imigratório.
        </p>
      </>
    ),
  },
  {
    id: "limitacao",
    title: "Limitação de Responsabilidade",
    body: (
      <>
        <p>
          NA MÁXIMA EXTENSÃO PERMITIDA PELA LEI, A ROTEIRO VIP, SEUS SÓCIOS, DIRETORES, EMPREGADOS E COLABORADORES <strong>NÃO SERÃO RESPONSÁVEIS</strong> POR QUAISQUER DANOS INDIRETOS, INCIDENTAIS, ESPECIAIS, CONSEQUENCIAIS, PUNITIVOS OU EXEMPLARES, INCLUINDO LUCROS CESSANTES, PERDA DE DADOS, PERDA DE OPORTUNIDADE, DANOS MORAIS OU FRUSTRAÇÃO DE EXPECTATIVAS, AINDA QUE ADVERTIDOS DA POSSIBILIDADE DE TAIS DANOS.
        </p>
        <p>
          EM QUALQUER HIPÓTESE, A RESPONSABILIDADE TOTAL E AGREGADA DA ROTEIRO VIP DECORRENTE DE OU RELACIONADA A ESTES TERMOS OU AOS SERVIÇOS FICA LIMITADA AO <strong>VALOR DOS HONORÁRIOS DE ASSESSORIA EFETIVAMENTE PAGOS PELO CLIENTE À ROTEIRO VIP</strong> NOS 12 (DOZE) MESES ANTERIORES AO EVENTO QUE DEU ORIGEM À RECLAMAÇÃO, EXCLUÍDOS OS VALORES REPASSADOS A FORNECEDORES.
        </p>
        <p>
          A Roteiro VIP não responde por eventos de força maior ou caso fortuito, incluindo, sem limitação, fenômenos naturais, furacões, pandemias, greves, atos governamentais, fechamento de fronteiras, falhas de transporte, atos de terrorismo, falhas de sistemas de terceiros e quaisquer outros eventos fora do seu controle razoável.
        </p>
        <p>
          Algumas jurisdições não permitem a exclusão de determinadas garantias ou a limitação de certos danos; nesses casos, as limitações acima se aplicam na máxima extensão permitida.
        </p>
      </>
    ),
  },
  {
    id: "indenizacao",
    title: "Indenização",
    body: (
      <p>
        Você concorda em defender, indenizar e isentar a Roteiro VIP e seus sócios, diretores, empregados e colaboradores de toda e qualquer reclamação, perda, responsabilidade, dano, custo ou despesa (incluindo honorários advocatícios razoáveis) decorrente de: (a) violação destes Termos; (b) uso indevido do site ou dos serviços; (c) violação de leis, regulamentos ou direitos de terceiros, inclusive normas dos Fornecedores; ou (d) informações incorretas ou incompletas fornecidas por você.
      </p>
    ),
  },
  {
    id: "marcas",
    title: "Propriedade Intelectual e Marcas de Terceiros",
    body: (
      <>
        <p>
          Todo o conteúdo deste site (textos, roteiros, layouts, logotipos, fotografias e marcas da Roteiro VIP) é de propriedade da {site.legalName} ou licenciado a ela e é protegido pelas leis de propriedade intelectual dos Estados Unidos e por tratados internacionais. É vedada a reprodução, distribuição ou uso comercial sem autorização prévia por escrito.
        </p>
        <p>
          Disney, Walt Disney World, Magic Kingdom, EPCOT, Hollywood Studios, Animal Kingdom, Universal Orlando, Islands of Adventure, SeaWorld, Busch Gardens, LEGOLAND e demais nomes de parques, atrações e personagens são marcas registradas dos seus respectivos titulares. <strong>A Roteiro VIP não é afiliada, patrocinada, endossada ou autorizada por nenhum desses titulares</strong>, e a menção a tais marcas se dá exclusivamente para fins informativos e de identificação dos destinos.
        </p>
      </>
    ),
  },
  {
    id: "uso-do-site",
    title: "Uso do Site e Conduta do Usuário",
    body: (
      <>
        <p>Ao utilizar este site, você concorda em não:</p>
        <ul>
          <li>fornecer informações falsas, enganosas ou de terceiros sem autorização;</li>
          <li>utilizar robôs, scrapers ou meios automatizados para acessar ou copiar o conteúdo;</li>
          <li>tentar violar a segurança do site, introduzir código malicioso ou interferir no seu funcionamento;</li>
          <li>utilizar o site para fins ilícitos ou que violem direitos de terceiros.</li>
        </ul>
        <p>
          Podemos suspender ou encerrar o acesso de qualquer usuário que viole estes Termos, sem prejuízo das demais medidas legais cabíveis.
        </p>
      </>
    ),
  },
  {
    id: "privacidade",
    title: "Privacidade e Comunicações",
    body: (
      <p>
        O tratamento dos seus dados pessoais é regido pela nossa <Link href="/politica-de-privacidade">Política de Privacidade</Link>, que integra estes Termos. Ao nos contatar, você autoriza que respondamos por e-mail, telefone ou WhatsApp. Você pode solicitar a interrupção das comunicações a qualquer momento.
      </p>
    ),
  },
  {
    id: "lei-aplicavel",
    title: "Lei Aplicável e Resolução de Disputas",
    body: (
      <>
        <p>
          Estes Termos são regidos e interpretados de acordo com as <strong>leis do Estado da Flórida, Estados Unidos da América</strong>, sem consideração a regras de conflito de leis, e, no que couber, pelas leis federais dos Estados Unidos.
        </p>
        <p>
          Antes de iniciar qualquer procedimento, as partes se comprometem a tentar resolver amigavelmente a controvérsia mediante notificação por escrito e negociação de boa-fé pelo prazo de 30 (trinta) dias.
        </p>
        <p>
          Não havendo acordo, as partes elegem os <strong>tribunais estaduais e federais localizados no Condado de Orange, Flórida</strong>, como foro exclusivo para dirimir quaisquer disputas decorrentes destes Termos ou dos serviços, renunciando a qualquer outro, por mais privilegiado que seja. Você consente com a jurisdição pessoal desses tribunais.
        </p>
        <p>
          NA MÁXIMA EXTENSÃO PERMITIDA PELA LEI, VOCÊ E A ROTEIRO VIP RENUNCIAM AO DIREITO A JULGAMENTO POR JÚRI E CONCORDAM QUE QUALQUER DISPUTA SERÁ RESOLVIDA EM CARÁTER INDIVIDUAL, E NÃO COMO AUTOR OU MEMBRO DE AÇÃO COLETIVA (&quot;CLASS ACTION WAIVER&quot;).
        </p>
        <p>
          Qualquer reclamação decorrente destes Termos ou dos serviços deverá ser proposta no prazo de 1 (um) ano contado do fato que lhe deu origem, sob pena de decadência, salvo prazo maior imposto por lei inderrogável.
        </p>
      </>
    ),
  },
  {
    id: "disposicoes-gerais",
    title: "Disposições Gerais",
    body: (
      <>
        <ul>
          <li><strong>Alterações.</strong> Podemos atualizar estes Termos a qualquer momento, mediante publicação da nova versão neste site com a data de atualização. O uso continuado após a publicação implica aceitação das alterações.</li>
          <li><strong>Independência das cláusulas.</strong> Se qualquer disposição for considerada inválida ou inexequível, as demais permanecerão em pleno vigor.</li>
          <li><strong>Não renúncia.</strong> A tolerância da Roteiro VIP quanto ao descumprimento de qualquer disposição não constitui renúncia ao direito de exigi-la posteriormente.</li>
          <li><strong>Acordo integral.</strong> Estes Termos, a Política de Privacidade e as condições específicas informadas em cada orçamento ou contrato constituem o acordo integral entre as partes sobre o seu objeto.</li>
          <li><strong>Cessão.</strong> Você não pode ceder seus direitos ou obrigações sem nosso consentimento prévio por escrito.</li>
          <li><strong>Idioma.</strong> Estes Termos são redigidos em português para conveniência dos nossos clientes. Termos jurídicos devem ser interpretados conforme o seu significado sob a lei da Flórida.</li>
          <li><strong>Sobrevivência.</strong> As cláusulas de isenção de garantias, limitação de responsabilidade, indenização, propriedade intelectual e lei aplicável sobrevivem ao término da relação.</li>
        </ul>
      </>
    ),
  },
  {
    id: "contato",
    title: "Contato",
    body: (
      <>
        <p>Dúvidas sobre estes Termos podem ser encaminhadas para:</p>
        <p>
          <strong>{site.legalName}</strong>
          <br />
          {site.address.street}
          <br />
          {site.address.city}, {site.address.state} {site.address.zip}, {site.address.country}
          <br />
          Telefone / WhatsApp: {site.phone}
          <br />
          <Link href="/contato">Formulário de contato</Link>
        </p>
        {site.sellerOfTravelNo && (
          <p className="text-sm text-gray-500">Fla. Seller of Travel Reg. No. {site.sellerOfTravelNo}</p>
        )}
      </>
    ),
  },
];

export default function TermosPage() {
  return (
    <LegalDoc
      eyebrow="Jurídico"
      title="Termos de Uso"
      updatedAt={UPDATED}
      intro={
        <p>
          Leia com atenção. Estes Termos contêm disposições importantes sobre a natureza dos nossos serviços de <strong>intermediação</strong>, a responsabilidade de <strong>fornecedores terceiros</strong>, <strong>limitações de responsabilidade</strong>, <strong>renúncia a júri e a ações coletivas</strong> e o <strong>foro exclusivo na Flórida</strong>.
        </p>
      }
      sections={sections}
    />
  );
}
