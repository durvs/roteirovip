import type { Metadata } from "next";
import Link from "next/link";
import LegalDoc, { type LegalSection } from "@/components/LegalDoc";
import { site, fullAddress } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy — Roteiro VIP",
  description: `How ${site.legalName} collects, uses and protects your personal data.`,
  alternates: { canonical: "/en/privacy-policy", languages: { "pt-BR": "/politica-de-privacidade", en: "/en/privacy-policy" } },
};

const sections: LegalSection[] = [
  {
    id: "controller",
    title: "Who We Are",
    body: (
      <p>
        This Privacy Policy describes how <strong>{site.legalName}</strong>, a company organized in the State of Florida, USA, with its principal place of business at {fullAddress}, USA (&quot;Roteiro VIP&quot;), collects, uses, shares and protects the personal data of this website&apos;s users and of its clients. It forms part of our <Link href="/en/terms-of-use">Terms of Use</Link>.
      </p>
    ),
  },
  {
    id: "data-collected",
    title: "Data We Collect",
    body: (
      <>
        <p><strong>Data you provide</strong> when filling out forms, requesting a quote or contacting us: name, e-mail, phone/WhatsApp, travel dates and details, number of travelers, preferences and, when needed for bookings with Suppliers, travel document data (passport, date of birth) and payment information.</p>
        <p><strong>Data collected automatically</strong> while browsing the website: IP address, browser and device type, pages visited, date and time of access, and cookies or similar technologies used for the website&apos;s operation and audience statistics.</p>
        <p>We do not knowingly collect data from persons under 18 without parental or guardian consent. Data about minors included in a trip is provided by the responsible adult.</p>
      </>
    ),
  },
  {
    id: "purposes",
    title: "How We Use the Data",
    body: (
      <ul>
        <li>to respond to your requests and prepare quotes and itineraries;</li>
        <li>to make bookings and hire services from Suppliers on your behalf;</li>
        <li>to provide support before, during and after the trip;</li>
        <li>to send communications related to the contracted service and, with your consent, promotional materials;</li>
        <li>to comply with legal, accounting and tax obligations;</li>
        <li>to prevent fraud and protect the security of the website;</li>
        <li>to improve the website and our services through aggregated statistics.</li>
      </ul>
    ),
  },
  {
    id: "sharing",
    title: "Data Sharing",
    body: (
      <>
        <p>We share personal data only when necessary, with:</p>
        <ul>
          <li><strong>travel Suppliers</strong> (parks, hotels, airlines, transportation, independent professionals) strictly to make the bookings and services you requested. Each Supplier processes the data under its own privacy policy;</li>
          <li><strong>service providers</strong> that support us (website hosting, e-mail, payment processing, analytics tools), under confidentiality obligations;</li>
          <li><strong>authorities</strong>, when required by law, court order or to protect our rights.</li>
        </ul>
        <p>We do not sell personal data to third parties.</p>
      </>
    ),
  },
  {
    id: "international-transfer",
    title: "International Transfer",
    body: (
      <p>
        Roteiro VIP is located in the United States and data is stored and processed in the USA. If you access the website or hire our services from Brazil or another country, you acknowledge that your data will be transferred to the United States, where data protection laws may differ from those of your country. We take reasonable measures to protect the data in accordance with this Policy.
      </p>
    ),
  },
  {
    id: "retention",
    title: "Retention and Security",
    body: (
      <>
        <p>We keep the data for as long as necessary to fulfill the purposes described, to meet legal obligations (including tax obligations) and for the regular exercise of rights in legal proceedings. After that, the data is deleted or anonymized.</p>
        <p>We use reasonable technical and organizational measures to protect the data against unauthorized access, loss or alteration. No system is entirely secure; in the event of a significant incident, we will notify those affected as required by applicable law.</p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Cookies",
    body: (
      <p>
        We use cookies that are essential to the website&apos;s operation and, where applicable, analytics cookies to understand how the website is used. You can manage or block cookies in your browser settings; some features may stop working properly.
      </p>
    ),
  },
  {
    id: "your-rights",
    title: "Your Rights",
    body: (
      <>
        <p>Depending on applicable law (including the Brazilian General Data Protection Law, LGPD, for users in Brazil, and U.S. privacy laws), you may have the right to:</p>
        <ul>
          <li>confirm that processing takes place and access your data;</li>
          <li>correct incomplete, inaccurate or outdated data;</li>
          <li>request the anonymization, blocking or deletion of unnecessary data;</li>
          <li>request data portability;</li>
          <li>withdraw consent and object to marketing communications;</li>
          <li>obtain information about whom we share your data with.</li>
        </ul>
        <p>To exercise these rights, contact us through the channels listed below. We may request proof of identity before fulfilling the request.</p>
      </>
    ),
  },
  {
    id: "changes",
    title: "Changes to this Policy",
    body: (
      <p>
        We may update this Policy from time to time. The current version will always be available on this page. Significant changes may be communicated by e-mail or by a notice on the website.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact",
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
        Phone: {site.phone}
        <br />
        <Link href="/contato">Contact form</Link>
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <LegalDoc
      eyebrow="Legal"
      title="Privacy Policy"
      lang="en"
      alternate={{ lang: "pt", href: "/politica-de-privacidade" }}
      intro={
        <p className="text-sm text-gray-500">
          This English version is provided for convenience. The binding document is the <Link href="/politica-de-privacidade" className="underline">Portuguese version</Link>, which prevails in case of any discrepancy.
        </p>
      }
      sections={sections}
    />
  );
}
