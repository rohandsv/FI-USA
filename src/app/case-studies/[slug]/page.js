import Link from 'next/link';
import Image from 'next/image';
import pageStyles from '../../page.module.css';
import styles from '../caseStudies.module.css';

const ALL_CASE_STUDIES = [
  {
    slug: "cpa-zoho-ai-crm",
    client: "Apex Financial Partners",
    industry: "Professional Services (CPA)",
    practice: "Zoho Implementation",
    title: "CPA Zoho & AI Automation",
    description: "Unified lead-to-cash pipelines for CPA firm with integrated custom AI document intelligence.",
    challenge: "Traditional workflows relied on heavily customized on-premise systems and manual email extraction of client tax records. Lack of unified CRM access degraded partner efficiency and visibility, while manual documentation analysis slowed process realization time.",
    solution: "We deployed a unified Zoho One solution with dynamic pipeline models integrated with bespoke AI document scanning. This allows automated classification and intake of incoming CPA client records.",
    delivery: "Our engineering squad delivered the solution in 5 weeks. The team consisted of 1 Zoho Solutions Lead and 1 Data Integration Engineer, working under rigorous accounting and SOC 2 data protection standards.",
    outcome: "With modern CRM tracking and automatic document parsing, the firm significantly improved realization points, boosted user engagement, and cut manual intake workloads.",
    metrics: [
      { label: "Increase in realization", value: "+9 Points" },
      { label: "Partner CRM system adoption", value: "95%" },
      { label: "Automated direct AI intake", value: "100%" }
    ],
    quote: "FI Digital solved our manual tax file extraction pattern, giving our partners more time with key clients.",
    author: "Managing Partner, Apex Financial Partners",
    image: "/images/industry-pro.webp"
  },
  {
    slug: "law-product-ai-engagement",
    client: "Vance & Sterling LLC",
    industry: "Professional Services (Law)",
    practice: "Product Engineering",
    title: "Law Firm Engagement Automation",
    description: "Developed a custom client engagement portal that reduced onboarding times from 9 days to 2 days.",
    challenge: "Law partners were spending excessive administrative hours managing paper-based conflict checks and manually drafting engagement letters, reducing available billable hours.",
    solution: "We engineered a secure Progressive Web Application (PWA) with built-in conflict assessment and automated contract generation. Client input extracts matching metadata that creates accurate engagement proposals instantly.",
    delivery: "Built and launched in 6 weeks. The squad included 1 Full-Stack React Engineer and 1 UI/UX Specialist working in close lockstep with internal legal team members.",
    outcome: "Dynamic client onboarding eliminated continuous paper cycles and drastically reduced partner administrative time.",
    metrics: [
      { label: "Onboarding cycle time down from 9 days to", value: "2 Days" },
      { label: "Manual partner admin time saved", value: "85%" },
      { label: "Paper-based workflows eliminated", value: "100%" }
    ],
    quote: "Onboarding now flows in hours rather than days, directly boosting our quarterly realization.",
    author: "Managing Partner, Vance & Sterling LLC",
    image: "/images/practice-product-v2.png"
  },
  {
    slug: "manufacturing-zoho-product-quote",
    client: "Precision Parts Mfg",
    industry: "Manufacturing & Distribution",
    practice: "Zoho Implementation",
    title: "Instant Industrial Quote Turnaround",
    description: "Unified disparate inventory, sales pipelines, and customer portals onto a high-performance Zoho One stack.",
    challenge: "Complex quote requests manually routed via paper or fragmented spreadsheets required up to 48 hours to complete. This resulted in missed bids and frustrated customers.",
    solution: "We integrated Zoho Inventory directly with a custom quote engine. Product specs route in real time through pricing rules, generating precise industrial quotes in 4 hours.",
    delivery: "Built over 8 weeks. The delivery squad consisted of 1 Zoho Implementation Architect and 1 Backend Integration Engineer working alongside internal manufacturing leads.",
    outcome: "Fast, predictable pricing rules directly enhanced manufacturing output and operational visibility.",
    metrics: [
      { label: "Quote turnaround time reduced to", value: "4 Hours" },
      { label: "Average sales quote increase", value: "30%" },
      { label: "Cloud-native tracking operations", value: "100%" }
    ],
    quote: "Speed is a competitive advantage in manufacturing. We now close custom bids before competitors even open the specs.",
    author: "VP of Sales, Precision Parts Mfg",
    image: "/images/industry-mfg-v2.png"
  },
  {
    slug: "distribution-data-ai-ap",
    client: "Alliance Distribution",
    industry: "Manufacturing & Distribution",
    practice: "Data Engineering",
    title: "Document AI Accounts Payable automation",
    description: "Built automated accounts payable extraction pipeline reducing processing overhead by 60%.",
    challenge: "High volumes of diverse distributor invoices required dedicated teams for data extraction and accounting matching, which was slow and prone to errors.",
    solution: "We introduced a data engineering pipeline on Snowflake using advanced document AI models. Invoices are parsed, validated, and pushed directly into accounting with zero human input.",
    delivery: "Our team deployed the pipeline in 7 weeks. The delivery squad featured 1 Financial Data Architect and 1 AI Specialist using custom dbt models.",
    outcome: "Direct extraction matching minimized invoice backlogs and drastically lowered administrative overhead.",
    metrics: [
      { label: "Reduction in AP operational labor", value: "60%" },
      { label: "Document scanning parsing accuracy", value: "100%" },
      { label: "Direct ERP matching integration", value: "Yes" }
    ],
    quote: "Our back-office overhead has dropped by 60% with Document AI parsing invoice logs.",
    author: "Head of Supply Chain, Alliance Distribution",
    image: "/images/practice-data-v2.png"
  },
  {
    slug: "logistics-3pl-portal-deflection",
    client: "Global 3PL Partners",
    industry: "Logistics & Field Service",
    practice: "Product Engineering",
    title: "Logistics Portal Support Deflection",
    description: "Dynamic AI route tracking and customer support deflection reducing overhead.",
    challenge: "Customer service departments were overwhelmed with redundant calls requesting delivery status checks, impacting overall team capacity.",
    solution: "We engineered a client portal using modern APIs and intelligent conversational workers. Customers can check real-time truck tracking data and resolve WISMO queries independently.",
    delivery: "Built in 6 weeks. The team consisted of 1 Product Manager and 2 Full-Stack Developers working alongside operations leads.",
    outcome: "Dynamic customer self-service capabilities deflected a massive portion of typical WISMO call center volume.",
    metrics: [
      { label: "WISMO status calls deflected via portal", value: "45%" },
      { label: "Round-the-clock portal uptime", value: "24/7" },
      { label: "Increase in customer satisfaction", value: "High" }
    ],
    quote: "Our tracking deflection portal has significantly freed up our core support team's capacity.",
    author: "VP of Support, Global 3PL Partners",
    image: "/images/industry-logistics-v2.png"
  },
  {
    slug: "hvac-zoho-ai-dispatcher",
    client: "Thermo-Fix Solutions",
    industry: "Logistics & Field Service",
    practice: "Zoho Implementation",
    title: "Field Service Dispatcher AI Copilot",
    description: "Introduced a Zoho CRM integrated dispatcher assistant increasing first-time fixes by 20%.",
    challenge: "Dispatchers lacked insight into technician skill sets and dynamic parts availability when booking jobs, resulting in poor first-time fix rates.",
    solution: "We designed a custom scheduling assistant within Zoho that parses technician credentials and predicts parts needed based on equipment models, resulting in higher efficiency.",
    delivery: "Our engineering squad delivered the dispatcher within 5 weeks. The squad featured 1 Zoho CRM Architect and 1 Python AI Developer.",
    outcome: "Predictive parts allocation and matching boosted operational first-time resolution figures.",
    metrics: [
      { label: "First-visit job resolution performance", value: "+20%" },
      { label: "Total dispatcher fuel usage reduction", value: "30%" },
      { label: "Field team route optimization", value: "100%" }
    ],
    quote: "Matching the right skill sets with part inventories drastically cuts duplicate job visits.",
    author: "Director of Service Operations",
    image: "/images/practice-zoho.webp"
  },
  {
    slug: "ria-zoho-data-reports",
    client: "Cascade Wealth RIA",
    industry: "Financial Services",
    practice: "Data Engineering",
    title: "Unified RIA Client Reporting Engine",
    description: "Engineered a centralized data warehouse and business intelligence platform for a top-tier advisory network.",
    challenge: "Advisors manually assembled asset balances from disconnected CRMs, causing monthly client reports to take weeks to produce and increasing manual errors.",
    solution: "We unified CRM pipelines with Snowflake, centralizing client performance analytics and automating end-of-month reporting output.",
    delivery: "The implementation took exactly 6 weeks. The delivery squad consisted of 1 Lead Analytics Engineer and 1 Financial Data Architect.",
    outcome: "Unified reporting instantly reduced operational friction across the advisory group.",
    metrics: [
      { label: "Time saved producing client report analytics", value: "-70%" },
      { label: "GLBA regulatory compliance enabled", value: "Yes" },
      { label: "Consolidated enterprise-grade reporting", value: "100%" }
    ],
    quote: "Consolidating our platforms saved weeks of manual labor each month.",
    author: "Managing Director, Cascade Wealth RIA",
    image: "/images/industry-finance-v2.png"
  },
  {
    slug: "lender-ai-underwriter-copilot",
    client: "Capital Funding Group",
    industry: "Financial Services",
    practice: "AI & Digital Workers",
    title: "Underwriter Meeting AI Assistant",
    description: "Deployed custom NLP and generative AI worker automating loan documentation workflows.",
    challenge: "Underwriters spent 6+ hours weekly transcribing client interviews, cross-referencing audit logs, and documenting loan files.",
    solution: "We deployed an AI worker using whisper models and AWS Bedrock to automatically summarize meeting records and compare financial points against lender underwriting standards.",
    delivery: "The assistant launched in 4 weeks. The delivery squad featured 1 Senior AI/ML Engineer and 1 Account Architect.",
    outcome: "The AI assistant eliminated repetitive data extraction, maximizing underwriters' productive time.",
    metrics: [
      { label: "Underwriter manual time saved weekly", value: "6 Hours" },
      { label: "Removal of human interpretive bias", value: "Yes" },
      { label: "Complete meeting compliance audit logs", value: "100%" }
    ],
    quote: "Our underwriters save over six hours each week on routine intake and documentation.",
    author: "Chief Risk Officer, Capital Funding Group",
    image: "/images/practice-ai-v2.png"
  }
];

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const study = ALL_CASE_STUDIES.find(c => c.slug === slug);
  if (!study) {
    return { title: "Case Study Not Found | FI Digital" };
  }
  return {
    title: `${study.title} | Case Studies | FI Digital`,
    description: study.description
  };
}

export default async function CaseStudyDetailPage({ params }) {
  const { slug } = await params;
  const study = ALL_CASE_STUDIES.find(c => c.slug === slug);

  if (!study) {
    return (
      <div className="container" style={{ padding: '12rem 0', minHeight: '60vh', textAlign: 'center' }}>
        <h2>Case Study Not Found</h2>
        <p style={{ marginTop: '1rem' }}><Link href="/case-studies/" className="btn btn-primary">Return to Case Studies Hub</Link></p>
      </div>
    );
  }

  // Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": study.title,
    "description": study.description,
    "image": `https://fidigital.com${study.image}`,
    "author": {
      "@type": "Organization",
      "name": "FI Digital"
    },
    "publisher": {
      "@type": "Organization",
      "name": "FI Digital"
    }
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Case Studies",
        "item": "https://fidigital.com/case-studies/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": study.title,
        "item": `https://fidigital.com/case-studies/${study.slug}/`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      <main>
        {/* HEADER SECTION */}
        <section className={styles.detailHeader}>
          <div className="container">
            <Link href="/case-studies/" style={{ color: 'var(--accent-color)', fontWeight: 600, textDecoration: 'none', display: 'inline-block', marginBottom: '2rem' }}>
              &larr; Back to Case Studies Hub
            </Link>
            <div className={styles.detailMeta}>
              <span className={styles.cardPracticeTag}>{study.practice}</span>
              <span className={styles.cardIndustryTag}>{study.industry}</span>
            </div>
            <h1 className={styles.detailTitle}>{study.title}</h1>
            <p className={styles.detailSub}>{study.description}</p>
          </div>
        </section>

        {/* CONTENT / BODY GRID */}
        <section className="container">
          <div className={styles.detailBodyGrid}>
            {/* Main Context */}
            <div className={styles.mainContent}>
              <div className={styles.detailSection}>
                <h2 className={styles.detailHeading}>The Challenge</h2>
                <p className={styles.detailParagraph}>{study.challenge}</p>
              </div>

              <div className={styles.detailSection}>
                <h2 className={styles.detailHeading}>Our Solution</h2>
                <p className={styles.detailParagraph}>{study.solution}</p>
              </div>

              <div className={styles.detailSection}>
                <h2 className={styles.detailHeading}>Delivery Approach</h2>
                <p className={styles.detailParagraph}>{study.delivery}</p>
              </div>
            </div>

            {/* Sidebar Metrics */}
            <aside>
              <div className={styles.sidebarCard}>
                <h3 className={styles.sidebarHeading}>Outcomes in Numbers</h3>
                <div className={styles.sidebarMetricList}>
                  {study.metrics.map((metric, i) => (
                    <div key={i} className={styles.sidebarMetricItem}>
                      <span className={styles.metricValue}>{metric.value}</span>
                      <span className={styles.metricLabel}>{metric.label}</span>
                    </div>
                  ))}
                </div>

                <Link href="/book-a-fit-call/" className="btn btn-primary" style={{ width: '100%', display: 'inline-block', textAlign: 'center' }}>
                  Book a Fit Call &rarr;
                </Link>
              </div>
            </aside>
          </div>
        </section>

        {/* CLIENT QUOTE */}
        <section className={styles.quoteSection}>
          <div className="container">
            <div className={styles.quoteContent}>
              <blockquote className={styles.quoteText}>
                "{study.quote}"
              </blockquote>
              <cite className={styles.quoteAuthor}>— {study.author}</cite>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
