import ManagedServicesClient from './ManagedServicesClient';

export const metadata = {
  title: "Managed Zoho Services | Zoho Admin Support & CRM Maintenance | FI Digital",
  description: "Scale your business with expert Managed Zoho Services. We provide US-based Zoho admin support, SLA-backed maintenance, and strategic optimization for Zoho One platforms. Book a fit call today.",
  keywords: "managed zoho services, zoho managed services usa, zoho admin support, zoho partner managed services, zoho crm maintenance",
};

const faqs = [
  { q: "What is Zoho Managed Services?", a: "Zoho Managed Services is FI Digital's monthly retainer for US SMBs already live on Zoho. It covers monthly admin hours, SLA-backed incident response, user support, small enhancements, data hygiene, monthly reporting, and quarterly optimization reviews — delivered by a US-based Zoho Premium Partner team. This managed zoho services model is designed to provide enterprise-grade administration to mid-market companies." },
  { q: "Who is Zoho Managed Services for?", a: "SMBs already live on Zoho who need ongoing admin and support without hiring a full-time Zoho resource. Also for teams inheriting an existing implementation, or whose internal admin capacity is insufficient for the platform's ongoing needs. It is the ideal solution for companies looking for reliable zoho managed services usa." },
  { q: "How much does it cost?", a: "We publish a starting monthly fee on the Packages page. The retainer price depends on monthly hours included, number of Zoho modules supported, user count, and SLA response tier. Enterprise-tier pricing is custom — contact us for a quote tailored to your zoho partner managed services needs." },
  { q: "What is the minimum commitment?", a: "90 days (3 months). After the initial term the retainer is month-to-month. We keep clients by doing good work — not lock-in clauses. This flexibility is a core part of our zoho crm maintenance philosophy." },
  { q: "What SLA does FI Digital offer for incident response?", a: "SLA response times are tiered by retainer level. P1 business-critical incidents: next business day (Essential), 4 hours (Professional), 2 hours (Enterprise). Our zoho admin support is optimized for US business hours: Monday–Friday, 9am–6pm ET." },
  { q: "Can I use monthly hours for new features or enhancements?", a: "Yes. Monthly hours can be applied to admin tasks, incident response, user support, and small enhancements. Larger enhancements — new module implementations, Zoho Creator app builds, or complex new integrations — are scoped separately. This is a key benefit of managed zoho services." },
  { q: "What if I need more hours than my retainer includes?", a: "We offer a retainer upgrade or an overage rate at a published blended rate. We will always flag before you exceed your included hours so there are no surprise invoices. Transparency is vital in zoho managed services usa." },
  { q: "We had Zoho implemented by another partner — can FI Digital take over?", a: "Yes. We frequently take over from other Zoho partners. We start with a Zoho Optimization Audit to document the current state, then move into the managed-services retainer with full system context. This is the hallmark of a true zoho partner managed services." },
  { q: "What Zoho modules does the retainer cover?", a: "All Zoho modules — CRM, Desk, Books, People, Analytics, Creator, Campaigns, Projects, Inventory, Zoho One, and more. The modules in scope are defined and documented during the onboarding system audit, ensuring comprehensive zoho crm maintenance." },
  { q: "Is our Zoho data stored in the US?", a: "Zoho US customers are hosted on Zoho US data centers by default. We confirm and document this in a Delivery Security Summary available on request, which is standard for our zoho managed services usa clients." },
  { q: "How do we get started?", a: "Book a fit call. In 30 minutes we will review your current Zoho setup, recommend the right retainer tier, and schedule the onboarding kickoff for your new zoho admin support team." }
];

export default function ManagedServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Managed Zoho Services",
    "provider": {
      "@type": "Organization",
      "name": "FI Digital",
      "url": "https://fidigital.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Atlanta",
        "addressRegion": "GA",
        "addressCountry": "US"
      }
    },
    "description": "Enterprise-grade managed zoho services for US SMBs. Includes zoho admin support, crm maintenance, and SLA-backed incident response.",
    "areaServed": "US",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Zoho Managed Services Packages",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Essential Zoho Support" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Professional Zoho Administration" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Enterprise Zoho Governance" } }
      ]
    },
    "mainEntity": {
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a
        }
      }))
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ManagedServicesClient />
    </>
  );
}
