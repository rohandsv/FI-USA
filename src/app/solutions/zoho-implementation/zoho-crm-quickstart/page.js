import QuickstartClient from './QuickstartClient';
import styles from '../../../page.module.css';

export const metadata = {
  title: "Zoho CRM QuickStart | Fixed-Fee CRM Setup in 3–5 Weeks | FI Digital",
  description: "Get your Zoho CRM live in 3–5 weeks with FI Digital's fixed-fee QuickStart. Sales pipelines, lead routing, data migration, and user training — all included. Zoho Premium Partner, Atlanta GA.",
  alternates: {
    canonical: "https://fidigital.com/solutions/zoho-implementation/zoho-crm-quickstart/",
  },
};

export default function QuickstartPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the Zoho CRM QuickStart?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Zoho CRM QuickStart is FI Digital's fixed-fee implementation package. In 3 to 5 weeks we configure your CRM, migrate your data from one source system, connect your email and calendar tool, automate your pipeline, run up to 2 role-specific training sessions, and hand you over with 30 days of post-go-live admin support. One fixed scope, one fixed fee."
        }
      },
      {
        "@type": "Question",
        "name": "How much does a Zoho CRM QuickStart cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We publish a starting-from price on the Packages page. The fixed fee depends on user count, data migration complexity, number of pipelines, and integrations in scope. All QuickStart engagements are fixed fee, not hourly. Five factors that move the price above the starting floor are described in Section 4 above."
        }
      },
      {
        "@type": "Question",
        "name": "How long does the QuickStart take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "3 to 5 weeks from signed agreement to go-live. The timeline includes discovery, design, build, a pilot-user review period, training, and go-live cutover. Most QuickStart engagements kick off within 2 weeks of a signed agreement."
        }
      },
      {
        "@type": "Question",
        "name": "Can you migrate our data from Salesforce or HubSpot?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. The QuickStart includes migration from one source system — Salesforce, HubSpot, Pipedrive, or a CSV export. We map fields, migrate accounts, contacts, leads, deals, activities, and notes, and stage the cutover to minimize disruption. Multiple source-system migrations are quoted as an add-on."
        }
      },
      {
        "@type": "Question",
        "name": "What happens after go-live?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The QuickStart includes 30 days of post-go-live admin support. After that, most clients move to a Zoho Managed Services retainer for ongoing admin, optimization, and enhancements — or hand off to an internal admin with our playbooks."
        }
      },
      {
        "@type": "Question",
        "name": "What changes the price?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Five factors: (1) number of users and roles, (2) data migration volume and source-system complexity, (3) number of sales pipelines beyond three, (4) additional integrations beyond one email tool, and (5) custom Zoho Creator apps or complex multi-branch automation."
        }
      },
      {
        "@type": "Question",
        "name": "Is FI Digital a Zoho Premium Partner?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Zoho Premium Partnership is reserved for partners with deep delivery credentials, long tenure, and demonstrated client growth. We have delivered more than 200 Zoho engagements across 10 years and hold certifications across CRM, Desk, Creator, Books, People, Analytics, and Campaigns."
        }
      },
      {
        "@type": "Question",
        "name": "Do you support Zoho CRM Plus or Zoho One?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. The QuickStart is scoped for Zoho CRM Standard and Enterprise editions. If you are on Zoho CRM Plus or Zoho One, we scope a broader rollout with CRM as the lead module. Zoho One rollouts typically run 10 to 16 weeks."
        }
      },
      {
        "@type": "Question",
        "name": "Can we expand beyond the QuickStart later?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. The QuickStart is Phase 1. Clients commonly follow with a Zoho Desk Setup, Zoho Marketing Automation Launch, additional integrations, or a Zoho Creator app build — all as separate fixed-fee engagements by the same team."
        }
      },
      {
        "@type": "Question",
        "name": "Is my Zoho data stored in the US?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "By default, Zoho US customers are hosted on Zoho US data centers. We confirm and document this in a Delivery Security Summary on request."
        }
      },
      {
        "@type": "Question",
        "name": "How do we get started?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Book a fit call. In 30 minutes we will confirm the QuickStart is the right starting point and schedule the scope kickoff. Engagements typically kick off within 2 weeks of a signed agreement."
        }
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Zoho CRM QuickStart",
    "provider": {
      "@type": "Organization",
      "name": "FI Digital"
    },
    "description": "Get a production Zoho CRM live in 3 to 5 weeks with FI Digital's fixed-fee QuickStart implementation.",
    "areaServed": "US",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Zoho Implementation Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Zoho CRM QuickStart"
          }
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main>
        <QuickstartClient />

        {/* FAQ SECTION */}
        <section className={`${styles.sectionFaq} scroll-section`}>
          <div className="container">
            <h2 className={styles.sectionTitleCentered}>FAQ — Zoho CRM QuickStart</h2>
            
            <div className={styles.faqList}>
              {faqSchema.mainEntity.map((faq, index) => (
                <details key={index} className={styles.faqItem}>
                  <summary className={styles.faqQuestion}>{faq.name}</summary>
                  <div className={styles.faqAnswer}>
                    <p>{faq.acceptedAnswer.text}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
