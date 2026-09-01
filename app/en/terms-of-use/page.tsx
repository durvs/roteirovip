import type { Metadata } from "next";
import Link from "next/link";
import LegalDoc, { type LegalSection } from "@/components/LegalDoc";
import { site, fullAddress } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use — Roteiro VIP",
  description: `Terms and conditions for the website and the travel advisory and intermediation services of ${site.legalName}.`,
  alternates: { canonical: "/en/terms-of-use", languages: { "pt-BR": "/termos-de-uso", en: "/en/terms-of-use" } },
};

const sections: LegalSection[] = [
  {
    id: "acceptance",
    title: "Acceptance of the Terms",
    body: (
      <>
        <p>
          These Terms of Use (&quot;Terms&quot;) are a legal agreement between you (&quot;Client&quot;, &quot;you&quot;) and <strong>{site.legalName}</strong> (&quot;Roteiro VIP&quot;, &quot;we&quot;, &quot;us&quot;), a limited liability company organized under the laws of the State of Florida, United States of America, with its principal place of business at {fullAddress}, USA.
        </p>
        <p>
          By accessing this website, requesting a quote, hiring any service or communicating with us through any channel, you declare that you have read, understood and fully accepted these Terms and our <Link href="/en/privacy-policy">Privacy Policy</Link>. If you do not agree with these Terms, do not use the website or our services.
        </p>
        <p>
          You declare that you are at least 18 years old and have full legal capacity to enter into this agreement, including on behalf of the other travelers included in your request.
        </p>
      </>
    ),
  },
  {
    id: "nature",
    title: "Nature of the Services: Advisory and Intermediation",
    body: (
      <>
        <p>
          Roteiro VIP is a <strong>travel advisory, planning and intermediation</strong> company focused on the Orlando, Florida area. Our activity consists of guiding the Client, preparing itineraries, providing consulting and, when requested, intermediating the purchase of products and services supplied by third parties.
        </p>
        <p>
          <strong>Roteiro VIP is not</strong> an operator, owner or manager of theme parks, attractions, hotels, airlines, car rental companies, restaurants, transportation companies, insurers or any other travel service provider (&quot;Suppliers&quot;). Tickets, lodging, airfare, transportation, tours and other products are supplied exclusively by the respective Suppliers, under each Supplier&apos;s own terms, conditions and policies.
        </p>
        <p>The services Roteiro VIP organizes, recommends or intermediates include, by way of example:</p>
        <ul>
          <li>preparation of personalized itineraries;</li>
          <li>assistance in purchasing tickets for theme parks and other attractions;</li>
          <li>guiding, in person or virtual, performed by guides hired or recommended by Roteiro VIP, who are independent service providers;</li>
          <li>referral of drivers and transfer services;</li>
          <li>intermediation of vehicle rentals;</li>
          <li>intermediation of lodging (hotels, resorts and vacation homes);</li>
          <li>referral of housekeeping, babysitting and photography services;</li>
          <li>restaurant and experience reservations; and</li>
          <li>other travel support services offered by Roteiro VIP or its partners, upon prior consultation.</li>
        </ul>
        <p>
          This list is illustrative only. With respect to all of these services, <strong>except for the preparation of the personalized itinerary itself</strong>, which is provided directly by Roteiro VIP, Roteiro VIP is not the provider of the final service: it organizes, recommends, advises and acts as a bridge between the Client and the actual Suppliers, which are independent individuals or legal entities with their own responsibility for the performance of their respective services.
        </p>
        <p>
          By purchasing through Roteiro VIP, you acknowledge that we act <strong>as an intermediary (agent)</strong> between you and the Suppliers, and that the contractual relationship regarding the final service is established directly between you and the Supplier.
        </p>
      </>
    ),
  },
  {
    id: "suppliers",
    title: "Third-Party Suppliers and Independent Providers",
    body: (
      <>
        <p>
          Services such as private driver (chauffeur), babysitting, photography (Registro VIP), transportation and the like may be performed by <strong>independent professionals and companies</strong> who are not employees, partners, agents or legal representatives of Roteiro VIP. These professionals are responsible for their own qualifications, licensing, insurance and conduct.
        </p>
        <p>
          Roteiro VIP makes reasonable efforts to recommend reputable Suppliers, but <strong>does not control, supervise or guarantee</strong> the performance of the services they provide. Accordingly, Roteiro VIP is not responsible for:
        </p>
        <ul>
          <li>acts, omissions, negligence, delays, failures or breach by any Supplier;</li>
          <li>cancellations, schedule changes, attraction closures, ticket unavailability or changes to Supplier policies;</li>
          <li>the quality, safety, suitability or legality of products and services supplied by third parties;</li>
          <li>losses, damages, injuries, illness, death or expenses arising from services provided by Suppliers;</li>
          <li>the content, practices or privacy policies of third-party websites to which this website may link.</li>
        </ul>
        <p>
          Complaints regarding Supplier services must be addressed directly to the Supplier. Roteiro VIP may, at its discretion and without any obligation, assist the Client in communicating with the Supplier.
        </p>
      </>
    ),
  },
  {
    id: "tickets",
    title: "Tickets and Attraction Reservation Systems",
    body: (
      <>
        <p>
          Theme park tickets are issued directly by the respective parks (for example, Walt Disney World and Universal Orlando Resort), which unilaterally set their pricing, availability, validity and admission policies. Roteiro VIP intermediates the purchase and assists in linking the tickets to the parks&apos; accounts and apps.
        </p>
        <p>
          Priority attraction reservation systems, such as Disney Lightning Lane (Multi Pass and Single Pass) and Universal Express Pass, are subject to real-time availability determined solely by the park and <strong>may not guarantee access to every desired attraction</strong>, especially on holidays and during peak season. Roteiro VIP and the guides make good-faith efforts to maximize the Client&apos;s experience but do not guarantee any specific outcome regarding attractions, times or availability, as these circumstances are beyond their control.
        </p>
        <p>
          A Client who wishes guaranteed access to attractions, without being subject to scheduling or availability, must purchase specific park products designed for that purpose directly (for example, Lightning Lane Premier Pass), whose existence and conditions will be informed upon request.
        </p>
        <p>
          Amounts charged itemize, where applicable, the price of the park ticket or product and the price of the guiding or organization service provided by Roteiro VIP. The Client is entitled to this itemization upon request.
        </p>
      </>
    ),
  },
  {
    id: "guiding",
    title: "In-Person and Virtual Guiding",
    body: (
      <>
        <p>
          Guides who accompany the Client, in person or virtually, are independent service providers hired or recommended by Roteiro VIP, and not its employees.
        </p>
        <p>
          The contracted guiding period will be informed to the Client in advance in the proposal or quote. Client delays at the meeting point may be deducted from the contracted guiding period. Groups exceeding the maximum number of people per guide, informed in advance, may require additional guiding at extra cost.
        </p>
        <p>
          The guide must strictly follow each park&apos;s rules and policies regarding queues, accessibility accommodations and other admission rules. <strong>Roteiro VIP does not authorize, under any circumstances, the misuse of accessibility accommodations</strong> or any other improper means of priority access. Any conduct by a guide in violation of park rules is the guide&apos;s personal responsibility toward the park and toward Roteiro VIP, which will take appropriate measures upon becoming aware of it.
        </p>
      </>
    ),
  },
  {
    id: "lodging-vehicles",
    title: "Lodging and Vehicle Rentals",
    body: (
      <>
        <p>
          Roteiro VIP may intermediate lodging reservations (hotels, resorts or vacation homes) with third-party Suppliers. The lodging service itself, including the condition of the property, the operation of utilities (water, electricity, air conditioning, internet), cleaning and other operational aspects, is the sole responsibility of the lodging Supplier (hotel chain, property owner or rental platform). Lodging issues must be reported immediately to Roteiro VIP and to the Supplier so that appropriate measures can be taken with the responsible party.
        </p>
        <p>
          Roteiro VIP may intermediate vehicle rentals with partner rental companies. The rental agreement is entered into between the Client and the rental company, which is responsible for the vehicle&apos;s condition, insurance, fines, accidents and all other aspects of the rental. Roteiro VIP assists with negotiation and logistics but is not a party to the rental agreement and is not responsible for its performance.
        </p>
        <p>
          Restaurant reservations, shopping suggestions and other convenience services are provided as organization and courtesy, subject to the availability and policies of each establishment, with no guarantee of outcome by Roteiro VIP.
        </p>
      </>
    ),
  },
  {
    id: "bookings",
    title: "Quotes, Bookings, Prices and Payments",
    body: (
      <>
        <p>
          Quotes are for information only, do not constitute a binding offer and are subject to availability and to price changes by Suppliers until the purchase is confirmed. Amounts are in U.S. dollars (USD) unless expressly stated otherwise; currency conversion, bank fees and taxes are the Client&apos;s responsibility.
        </p>
        <p>
          Roteiro VIP&apos;s fees for advisory and planning services will be informed in advance and are due for the advisory service rendered, <strong>regardless</strong> of whether the trip actually takes place or of any cancellations with Suppliers.
        </p>
        <p>
          Change, cancellation, refund and no-show policies for tickets, hotels, airfare and other products are set <strong>exclusively by the Suppliers</strong> and will be informed to the Client before confirmation. Many products (particularly park tickets and promotional rates) are non-refundable and non-transferable.
        </p>
        <p>
          The Client is responsible for checking all information (names as shown on travel documents, dates, quantities) before confirmation. Costs arising from incorrect information provided by the Client are the Client&apos;s sole responsibility.
        </p>
        <p>
          Payments may be processed through partner payment platforms (for example, Brazil Pays Services LLC), which act as payment and currency-exchange processors or facilitators and are not part of the travel services themselves. Exchange conditions and any processor fees will be informed at the time of payment.
        </p>
      </>
    ),
  },
  {
    id: "documentation",
    title: "Documentation, Immigration and Health",
    body: (
      <>
        <p>
          It is the sole responsibility of the Client and each traveler to obtain and carry a valid passport, visas (including a U.S. visa or ESTA authorization, where applicable), travel authorizations for minors, vaccination certificates and any other documents required by the immigration, customs and health authorities of the countries of origin, transit and destination.
        </p>
        <p>
          Roteiro VIP may provide general guidance but <strong>does not guarantee</strong> the granting of visas or admission to the United States, which is decided solely by the competent authorities. Denied boarding or entry does not entitle the Client to a refund of Roteiro VIP&apos;s fees, nor does it obligate Roteiro VIP to refund amounts paid to Suppliers.
        </p>
      </>
    ),
  },
  {
    id: "risks",
    title: "Inherent Risks and Assumption of Risk",
    body: (
      <>
        <p>
          Travel and theme park visits involve inherent risks, including, without limitation: high-intensity rides, long walks, exposure to heat and adverse weather (including hurricanes and storms), large crowds, traffic accidents, illness, theft and public-order or public-health events. By traveling, <strong>you voluntarily assume these risks</strong>, for yourself and for the travelers under your responsibility.
        </p>
        <p>
          Purchasing <strong>travel insurance</strong> is the Client&apos;s responsibility. We strongly recommend medical, cancellation and baggage coverage suited to each traveler&apos;s needs. Roteiro VIP may offer this option as an additional service through partner insurers, but it is not an insurer and does not provide coverage of any kind. Medical expenses in the United States are the traveler&apos;s sole responsibility.
        </p>
        <p>
          Height, age and health restrictions for attractions are set by the parks. It is the traveler&apos;s duty to assess their physical and health condition and to comply with each Supplier&apos;s safety rules.
        </p>
      </>
    ),
  },
  {
    id: "warranties",
    title: "Disclaimer of Warranties",
    body: (
      <>
        <p>
          TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE WEBSITE, ITS CONTENT AND ROTEIRO VIP&apos;S SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot;, WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT.
        </p>
        <p>
          Information about hours, queues, prices, attractions, events, weather and availability is provided for information only, may change without notice and is not guaranteed. Blog and social media content is for information only and does not constitute legal, medical, financial or immigration advice.
        </p>
      </>
    ),
  },
  {
    id: "limitation",
    title: "Limitation of Liability",
    body: (
      <>
        <p>
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, ROTEIRO VIP, ITS MEMBERS, OFFICERS, EMPLOYEES AND CONTRACTORS <strong>SHALL NOT BE LIABLE</strong> FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE OR EXEMPLARY DAMAGES, INCLUDING LOST PROFITS, LOSS OF DATA, LOSS OF OPPORTUNITY, MORAL DAMAGES OR FRUSTRATED EXPECTATIONS, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
        </p>
        <p>
          IN ANY EVENT, ROTEIRO VIP&apos;S TOTAL AGGREGATE LIABILITY ARISING OUT OF OR RELATED TO THESE TERMS OR THE SERVICES IS LIMITED TO THE <strong>AMOUNT OF ADVISORY FEES ACTUALLY PAID BY THE CLIENT TO ROTEIRO VIP</strong> IN THE 12 (TWELVE) MONTHS PRECEDING THE EVENT GIVING RISE TO THE CLAIM, EXCLUDING AMOUNTS PASSED ON TO SUPPLIERS.
        </p>
        <p>
          Roteiro VIP is not liable for force majeure or fortuitous events, including, without limitation, natural phenomena, hurricanes, pandemics, strikes, government acts, border closures, transportation failures, acts of terrorism, third-party system failures and any other events beyond its reasonable control.
        </p>
        <p>
          Within the limits permitted by applicable law, Roteiro VIP&apos;s liability is limited to the services it provides directly (organization, intermediation and information). Roteiro VIP is not liable for the acts, omissions or conditions of independent third-party Suppliers (parks, guides, rental companies, lodging, restaurants and other providers), without prejudice to consumer rights provided by law regarding the supply chain.
        </p>
        <p>
          <strong>This clause does not exclude, restrict or waive any consumer rights guaranteed by applicable law</strong>, including, where applicable, joint liability among suppliers in the consumer chain under the Brazilian Consumer Protection Code. Some jurisdictions do not allow the exclusion of certain warranties or the limitation of certain damages; in those cases, the above limitations apply to the maximum extent permitted.
        </p>
      </>
    ),
  },
  {
    id: "indemnification",
    title: "Indemnification",
    body: (
      <p>
        You agree to defend, indemnify and hold harmless Roteiro VIP and its members, officers, employees and contractors from any and all claims, losses, liabilities, damages, costs or expenses (including reasonable attorneys&apos; fees) arising from: (a) a breach of these Terms; (b) misuse of the website or the services; (c) violation of laws, regulations or third-party rights, including Supplier rules; or (d) incorrect or incomplete information provided by you.
      </p>
    ),
  },
  {
    id: "trademarks",
    title: "Intellectual Property and Third-Party Trademarks",
    body: (
      <>
        <p>
          All content on this website (texts, itineraries, layouts, logos, photographs and Roteiro VIP trademarks) is owned by or licensed to {site.legalName} and is protected by United States intellectual property laws and international treaties. Reproduction, distribution or commercial use without prior written authorization is prohibited.
        </p>
        <p>
          Disney, Walt Disney World, Magic Kingdom, EPCOT, Hollywood Studios, Animal Kingdom, Universal Orlando, Islands of Adventure, SeaWorld, Busch Gardens, LEGOLAND and other park, attraction and character names are registered trademarks of their respective owners. <strong>Roteiro VIP is not affiliated with, sponsored by, endorsed by or authorized by any of these owners</strong>, and such trademarks are mentioned solely for informational purposes and to identify destinations.
        </p>
      </>
    ),
  },
  {
    id: "website-use",
    title: "Use of the Website and User Conduct",
    body: (
      <>
        <p>By using this website, you agree not to:</p>
        <ul>
          <li>provide false, misleading or third-party information without authorization;</li>
          <li>use bots, scrapers or automated means to access or copy the content;</li>
          <li>attempt to breach the website&apos;s security, introduce malicious code or interfere with its operation;</li>
          <li>use the website for unlawful purposes or in violation of third-party rights.</li>
        </ul>
        <p>
          We may suspend or terminate the access of any user who violates these Terms, without prejudice to any other legal remedies.
        </p>
      </>
    ),
  },
  {
    id: "privacy",
    title: "Privacy and Communications",
    body: (
      <p>
        The processing of your personal data is governed by our <Link href="/en/privacy-policy">Privacy Policy</Link>, which forms part of these Terms. By contacting us, you authorize us to reply by e-mail, phone or WhatsApp. You may ask us to stop communications at any time.
      </p>
    ),
  },
  {
    id: "governing-law",
    title: "Governing Law and Dispute Resolution",
    body: (
      <>
        <p>
          These Terms are governed by and construed in accordance with the <strong>laws of the State of Florida, United States of America</strong>, without regard to conflict-of-laws rules, and, where applicable, the federal laws of the United States.
        </p>
        <p>
          Before initiating any proceeding, the parties agree to attempt to resolve the dispute amicably through written notice and good-faith negotiation for a period of 30 (thirty) days.
        </p>
        <p>
          If no agreement is reached, the parties elect the <strong>state and federal courts located in Orange County, Florida</strong>, as the exclusive venue for any disputes arising from these Terms or the services, waiving any other venue, however privileged. You consent to the personal jurisdiction of those courts.
        </p>
        <p>
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, YOU AND ROTEIRO VIP WAIVE THE RIGHT TO A JURY TRIAL AND AGREE THAT ANY DISPUTE WILL BE RESOLVED ON AN INDIVIDUAL BASIS AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY CLASS ACTION (&quot;CLASS ACTION WAIVER&quot;).
        </p>
        <p>
          Any claim arising from these Terms or the services must be brought within 1 (one) year from the event giving rise to it, after which it is barred, unless a longer period is required by non-waivable law.
        </p>
      </>
    ),
  },
  {
    id: "general",
    title: "General Provisions",
    body: (
      <ul>
        <li><strong>Changes.</strong> We may update these Terms at any time by posting the new version on this website with its update date. Continued use after posting constitutes acceptance of the changes.</li>
        <li><strong>Severability.</strong> If any provision is held invalid or unenforceable, the remaining provisions remain in full force and effect.</li>
        <li><strong>No waiver.</strong> Roteiro VIP&apos;s tolerance of any breach does not constitute a waiver of its right to enforce that provision later.</li>
        <li><strong>Entire agreement.</strong> These Terms, the Privacy Policy and the specific conditions stated in each quote or contract constitute the entire agreement between the parties regarding their subject matter.</li>
        <li><strong>Assignment.</strong> You may not assign your rights or obligations without our prior written consent.</li>
        <li><strong>Language.</strong> These Terms are originally written in Portuguese. This English version is provided for convenience; in case of any discrepancy, the Portuguese version prevails. Legal terms are to be construed according to their meaning under Florida law.</li>
        <li><strong>Survival.</strong> The disclaimer of warranties, limitation of liability, indemnification, intellectual property and governing law clauses survive the termination of the relationship.</li>
      </ul>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    body: (
      <>
        <p>Questions about these Terms may be sent to:</p>
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
        {site.sellerOfTravelNo && (
          <p className="text-sm text-gray-500">Fla. Seller of Travel Reg. No. {site.sellerOfTravelNo}</p>
        )}
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalDoc
      eyebrow="Legal"
      title="Terms of Use"
      lang="en"
      alternate={{ lang: "pt", href: "/termos-de-uso" }}
      intro={
        <>
          <p>
            Please read carefully. These Terms contain important provisions about the nature of our <strong>intermediation</strong> services, the responsibility of <strong>third-party suppliers</strong>, <strong>limitations of liability</strong>, <strong>jury and class action waivers</strong> and the <strong>exclusive venue in Florida</strong>.
          </p>
          <p className="text-sm text-gray-500">
            This English version is provided for convenience. The binding document is the <Link href="/termos-de-uso" className="underline">Portuguese version</Link>, which prevails in case of any discrepancy.
          </p>
        </>
      }
      sections={sections}
    />
  );
}
