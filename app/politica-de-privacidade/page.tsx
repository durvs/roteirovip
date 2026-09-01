import type { Metadata } from "next";
import Link from "next/link";
import LegalDoc, { type LegalSection } from "@/components/LegalDoc";
import { site, fullAddress } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de Privacidade — Roteiro VIP",
  description: `Como a ${site.legalName} coleta, utiliza e protege os seus dados pessoais.`,
};

const UPDATED = "Janeiro de 2026";

const sections: LegalSection[] = [
  {
    id: "controlador",
    title: "Quem Somos",
    body: (
      <p>
        Esta Política de Privacidade descreve como a <strong>{site.legalName}</strong>, sociedade constituída no Estado da Flórida, EUA, com sede em {fullAddress}, EUA (&quot;Roteiro VIP&quot;), coleta, utiliza, compartilha e protege os dados pessoais dos usuários deste site e dos seus clientes. Ela integra os nossos <Link href="/termos-de-uso">Termos de Uso</Link>.
      </p>
    ),
  },
  {
    id: "dados-coletados",
    title: "Dados que Coletamos",
    body: (
      <>
        <p><strong>Dados fornecidos por você</strong>, ao preencher formulários, solicitar orçamento ou falar conosco: nome, e-mail, telefone/WhatsApp, datas e detalhes da viagem, número de viajantes, preferências e, quando necessário para reservas junto a Fornecedores, dados de documentos de viagem (passaporte, data de nascimento) e informações de pagamento.</p>
        <p><strong>Dados coletados automaticamente</strong>, ao navegar no site: endereço IP, tipo de navegador e dispositivo, páginas visitadas, data e hora de acesso e cookies ou tecnologias similares utilizadas para funcionamento do site e estatísticas de audiência.</p>
        <p>Não coletamos intencionalmente dados de menores de 18 anos sem o consentimento dos pais ou responsáveis. Dados de menores incluídos em uma viagem são fornecidos pelo adulto responsável.</p>
      </>
    ),
  },
  {
    id: "finalidades",
    title: "Como Utilizamos os Dados",
    body: (
      <ul>
        <li>responder às suas solicitações, elaborar orçamentos e roteiros;</li>
        <li>realizar reservas e contratar serviços junto a Fornecedores em seu nome;</li>
        <li>prestar suporte antes, durante e após a viagem;</li>
        <li>enviar comunicações relacionadas ao serviço contratado e, mediante seu consentimento, materiais promocionais;</li>
        <li>cumprir obrigações legais, contábeis e fiscais;</li>
        <li>prevenir fraudes e proteger a segurança do site;</li>
        <li>melhorar o site e os nossos serviços por meio de estatísticas agregadas.</li>
      </ul>
    ),
  },
  {
    id: "compartilhamento",
    title: "Compartilhamento de Dados",
    body: (
      <>
        <p>Compartilhamos dados pessoais apenas quando necessário, com:</p>
        <ul>
          <li><strong>Fornecedores de viagem</strong> (parques, hotéis, companhias aéreas, transporte, profissionais independentes) estritamente para efetuar as reservas e serviços solicitados. Cada Fornecedor trata os dados conforme a sua própria política de privacidade;</li>
          <li><strong>prestadores de serviço</strong> que nos apoiam (hospedagem do site, e-mail, processamento de pagamentos, ferramentas de análise), sob obrigações de confidencialidade;</li>
          <li><strong>autoridades</strong>, quando exigido por lei, ordem judicial ou para proteger nossos direitos.</li>
        </ul>
        <p>Não vendemos dados pessoais a terceiros.</p>
      </>
    ),
  },
  {
    id: "transferencia",
    title: "Transferência Internacional",
    body: (
      <p>
        A Roteiro VIP está localizada nos Estados Unidos e os dados são armazenados e tratados nos EUA. Se você acessa o site ou contrata nossos serviços a partir do Brasil ou de outro país, você reconhece que seus dados serão transferidos para os Estados Unidos, onde as leis de proteção de dados podem diferir das do seu país. Adotamos medidas razoáveis para proteger os dados em conformidade com esta Política.
      </p>
    ),
  },
  {
    id: "retencao",
    title: "Retenção e Segurança",
    body: (
      <>
        <p>Mantemos os dados pelo tempo necessário para cumprir as finalidades descritas, para atender obrigações legais (inclusive fiscais) e para o exercício regular de direitos em processos. Depois disso, os dados são excluídos ou anonimizados.</p>
        <p>Empregamos medidas técnicas e organizacionais razoáveis para proteger os dados contra acesso não autorizado, perda ou alteração. Nenhum sistema é totalmente seguro; em caso de incidente relevante, notificaremos os afetados conforme exigido pela lei aplicável.</p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Cookies",
    body: (
      <p>
        Utilizamos cookies essenciais ao funcionamento do site e, eventualmente, cookies de análise para entender como o site é usado. Você pode gerenciar ou bloquear cookies nas configurações do seu navegador; algumas funcionalidades podem deixar de funcionar corretamente.
      </p>
    ),
  },
  {
    id: "direitos",
    title: "Seus Direitos",
    body: (
      <>
        <p>Dependendo da legislação aplicável (incluindo a Lei Geral de Proteção de Dados brasileira, a LGPD, para usuários no Brasil, e as leis de privacidade dos EUA), você pode ter o direito de:</p>
        <ul>
          <li>confirmar a existência de tratamento e acessar seus dados;</li>
          <li>corrigir dados incompletos, inexatos ou desatualizados;</li>
          <li>solicitar a anonimização, bloqueio ou eliminação de dados desnecessários;</li>
          <li>solicitar a portabilidade dos dados;</li>
          <li>revogar o consentimento e se opor a comunicações de marketing;</li>
          <li>obter informação sobre com quem compartilhamos seus dados.</li>
        </ul>
        <p>Para exercer esses direitos, entre em contato pelos canais indicados abaixo. Poderemos solicitar comprovação de identidade antes de atender à solicitação.</p>
      </>
    ),
  },
  {
    id: "alteracoes",
    title: "Alterações desta Política",
    body: (
      <p>
        Podemos atualizar esta Política periodicamente. A versão vigente estará sempre disponível nesta página, com a data da última atualização. Alterações relevantes poderão ser comunicadas por e-mail ou aviso no site.
      </p>
    ),
  },
  {
    id: "contato",
    title: "Contato",
    body: (
      <p>
        <strong>{site.legalName}</strong>
        <br />
        {site.address.street}
        <br />
        {site.address.city}, {site.address.state} {site.address.zip}, {site.address.country}
        <br />
        E-mail: <a href={site.emailHref}>{site.email}</a>
        <br />
        Telefone: {site.phone}
        <br />
        <Link href="/contato">Formulário de contato</Link>
      </p>
    ),
  },
];

export default function PrivacidadePage() {
  return (
    <LegalDoc
      eyebrow="Jurídico"
      title="Política de Privacidade"
      updatedAt={UPDATED}
      sections={sections}
    />
  );
}
