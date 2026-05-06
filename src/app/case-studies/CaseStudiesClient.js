"use client";

import { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import pageStyles from '../page.module.css';
import styles from './caseStudies.module.css';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const ALL_CASE_STUDIES = [
  {
    slug: "cpa-zoho-ai-crm",
    client: "Apex Financial Partners",
    industry: "Professional Services",
    practice: "Zoho Implementation",
    title: "CPA Zoho & AI Automation",
    description: "Unified lead-to-cash pipelines for CPA firm with integrated custom AI document intelligence.",
    challenge: "Traditional workflows relied on heavily customized on-premise systems and manual email extraction of client tax records. Lack of unified CRM access degraded partner efficiency and visibility, while manual documentation analysis slowed process realization time.",
    solution: "We deployed a unified Zoho One solution with dynamic pipeline models integrated with bespoke AI document scanning. This allows automated classification and intake of incoming CPA client records.",
    delivery: "Timeline: 5 weeks. Squad size: 1 Zoho Solutions Lead, 1 Data Integration Engineer.",
    metrics: ["Realization +9 Points", "95% Partner Adoption", "100% Tax Document AI Intake"],
    image: "/images/industry-pro.webp"
  },
  {
    slug: "law-product-ai-engagement",
    client: "Vance & Sterling LLC",
    industry: "Professional Services",
    practice: "Product Engineering",
    title: "Law Firm Engagement Automation",
    description: "Developed a custom client engagement portal that reduced onboarding times from 9 days to 2 days.",
    challenge: "Law partners were spending excessive administrative hours managing paper-based conflict checks and manually drafting engagement letters, reducing available billable hours.",
    solution: "We engineered a secure Progressive Web Application (PWA) with built-in conflict assessment and automated contract generation. Client input extracts matching metadata that creates accurate engagement proposals instantly.",
    delivery: "Timeline: 6 weeks. Squad size: 1 Full-Stack Engineer, 1 UI/UX Specialist.",
    metrics: ["Engagement Time: 9 to 2 days", "85% Less Partner Admin Time", "Zero-Paper Process"],
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
    delivery: "Timeline: 8 weeks. Squad size: 1 Zoho Developer, 1 Backend Integration Engineer.",
    metrics: ["Quotes: 48h to 4h", "30% Quote Increase", "Cloud-Native Tracking"],
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
    delivery: "Timeline: 7 weeks. Squad size: 1 Data Architect, 1 ML/AI Engineer.",
    metrics: ["60% Less AP Labor", "100% Extraction Accuracy", "Direct ERP Integration"],
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
    delivery: "Timeline: 6 weeks. Squad size: 1 Product Manager, 2 Full-Stack Engineers.",
    metrics: ["45% Status Calls Deflected", "24/7 Portal Availability", "High Customer Satisfaction"],
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
    delivery: "Timeline: 5 weeks. Squad size: 1 Zoho Architect, 1 Python AI Developer.",
    metrics: ["First-Time-Fix +20%", "30% Lower Fuel Usage", "Optimized Mobile Dispatch"],
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
    delivery: "Timeline: 6 weeks. Squad size: 1 Lead Analytics Engineer, 1 Financial Data Architect.",
    metrics: ["Client-Report Cycle -70%", "GLBA Compliance Enabled", "100% Cloud-Native Data"],
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
    delivery: "Timeline: 4 weeks. Squad size: 1 Senior AI/ML Developer, 1 Account Architect.",
    metrics: ["6 Hours Saved Weekly", "Zero Human Bias", "Complete Audit Logs"],
    image: "/images/practice-ai-v2.png"
  }
];

const PRACTICES = ["All", "Zoho Implementation", "Product Engineering", "AI & Digital Workers", "Data Engineering"];
const INDUSTRIES = ["All", "Professional Services", "Manufacturing & Distribution", "Logistics & Field Service", "Financial Services"];

export default function CaseStudiesClient() {
  const [activePractice, setActivePractice] = useState("All");
  const [activeIndustry, setActiveIndustry] = useState("All");
  const containerRef = useRef(null);

  useGSAP(() => {
    // Hero entry animations
    gsap.fromTo('.hero-animate', 
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        stagger: 0.15, 
        ease: "power3.out",
        delay: 0.1
      }
    );

    // Fade and scroll animations on filtered items
    gsap.fromTo('.case-card',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" }
    );
  }, { scope: containerRef, dependencies: [activePractice, activeIndustry] });

  const filteredStudies = ALL_CASE_STUDIES.filter(study => {
    const practiceMatch = activePractice === "All" || study.practice === activePractice;
    const industryMatch = activeIndustry === "All" || study.industry.includes(activeIndustry.split(" ")[0]);
    return practiceMatch && industryMatch;
  });

  return (
    <div ref={containerRef}>
      {/* HERO SECTION */}
      <section className={pageStyles.heroSection} style={{ minHeight: 'auto', paddingTop: '160px', paddingBottom: '4rem' }}>
        <div className={pageStyles.heroImageWrapper}>
          <Image
            src="/images/home-hero.webp"
            alt="Case Studies at FI Digital"
            fill
            priority
            className={pageStyles.heroImageReal}
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.parentElement.classList.add(pageStyles.heroImagePlaceholder);
            }}
          />
        </div>

        <div className={`container ${pageStyles.heroContainer}`}>
          <div className={pageStyles.heroContent} style={{ maxWidth: '850px' }}>
            <h1 className={`hero-animate ${pageStyles.heroH1}`}>Real outcomes. Real numbers. Real clients.</h1>
            <p className={`hero-animate ${pageStyles.heroSub}`} style={{ maxWidth: '750px' }}>
              We publish case studies with measurable outcomes. Every story follows the same structure: challenge, solution, delivery approach, outcome in numbers, and the practices used. Filter by practice and industry.
            </p>
          </div>
        </div>
      </section>

      {/* FILTER CONTROLS */}
      <section className={styles.filterSection}>
        <div className="container">
          <div className={styles.filterGroup}>
            <span className={styles.filterLabel}>Filter by Practice:</span>
            <div className={styles.chipWrapper}>
              {PRACTICES.map((p) => (
                <button 
                  key={p}
                  className={`${styles.filterChip} ${activePractice === p ? styles.active : ''}`}
                  onClick={() => setActivePractice(p)}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.filterGroup} style={{ marginTop: '1.5rem' }}>
            <span className={styles.filterLabel}>Filter by Industry:</span>
            <div className={styles.chipWrapper}>
              {INDUSTRIES.map((ind) => (
                <button 
                  key={ind}
                  className={`${styles.filterChip} ${activeIndustry === ind ? styles.active : ''}`}
                  onClick={() => setActiveIndustry(ind)}
                >
                  {ind}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDIES GRID */}
      <section className={styles.gridSection}>
        <div className="container">
          {filteredStudies.length === 0 ? (
            <div className={styles.noResults}>
              <p>No case studies match the selected filters. Please try another combination.</p>
            </div>
          ) : (
            <div className={styles.casesGrid}>
              {filteredStudies.map((study) => (
                <div key={study.slug} className={`${styles.caseCard} case-card`}>
                  <div className={styles.cardImageWrapper}>
                    <Image 
                      src={study.image}
                      alt={study.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{ objectFit: 'cover' }}
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement.classList.add(styles.imagePlaceholder);
                      }}
                    />
                  </div>
                  <div className={styles.cardBody}>
                    <div className={styles.cardMeta}>
                      <span className={styles.cardPracticeTag}>{study.practice}</span>
                      <span className={styles.cardIndustryTag}>{study.industry}</span>
                    </div>
                    <h3 className={styles.cardTitle}>{study.title}</h3>
                    <p className={styles.cardDesc}>{study.description}</p>
                    
                    <div className={styles.metricPills}>
                      {study.metrics.slice(0, 3).map((metric, i) => (
                        <span key={i} className={styles.metricPill}>{metric}</span>
                      ))}
                    </div>

                    <Link href={`/case-studies/${study.slug}/`} className={styles.cardLink}>
                      Read Full Case Study &rarr;
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
