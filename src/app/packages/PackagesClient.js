"use client";

import Link from 'next/link';
import Image from 'next/image';
import pageStyles from '../page.module.css';
import styles from './packages.module.css';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const packagesData = [
  {
    title: "Zoho CRM QuickStart",
    who: "Operations-led SMBs with 25 to 150 users who want to exit spreadsheets and legacy CRM in 3 to 5 weeks.",
    included: [
      "Sales process design",
      "CRM configuration (up to 3 pipelines, 2 roles)",
      "Lead and deal automation",
      "Data migration from one source (CSV, HubSpot, Salesforce, Pipedrive)",
      "Integration with one email / calendar tool",
      "User training (up to 2 role-specific sessions)",
      "30 days of post-go-live admin support"
    ],
    timeline: "3 to 5 weeks",
    model: "Fixed fee",
    priceFloor: "[public price floor to be confirmed]",
    variables: "Number of users, additional pipelines, data-migration volume, additional integrations, and custom objects or Zoho Creator apps."
  },
  {
    title: "Zoho Managed Services",
    who: "SMBs live on Zoho who need ongoing admin, optimization, and enhancement without a full-time Zoho resource in-house.",
    included: [
      "Monthly admin hours (tiered)",
      "Incident response with published SLA",
      "Quarterly optimization review",
      "User support",
      "Small enhancement work",
      "Monthly reporting"
    ],
    timeline: "Month to month (90-day minimum)",
    model: "Monthly retainer",
    priceFloor: "[public price floor to be confirmed]",
    variables: "Hours, number of modules, number of users, and response-time SLA tier."
  },
  {
    title: "Product Discovery Sprint",
    who: "Growth-stage companies about to build or modernize software.",
    included: [
      "2 weeks of 1 senior engineer + 1 account/product lead + 1 optional designer",
      "Stakeholder interviews",
      "Reference architecture",
      "Risk register",
      "Fixed-fee build proposal",
      "Decision-ready report"
    ],
    timeline: "2 weeks",
    model: "Fixed fee",
    priceFloor: "[public price floor to be confirmed]",
    variables: "One flat fee across most engagements; regulated workloads (HIPAA, PCI, GLBA) priced separately."
  },
  {
    title: "One-Workflow AI Pilot",
    who: "Teams that have one workflow draining headcount and want measured AI lift in 4 to 6 weeks.",
    included: [
      "Workflow discovery",
      "Foundation-model selection",
      "Prompt and guardrail design",
      "Integration with 1 source system and 1 destination system",
      "Shadow-mode deployment",
      "2-week measured production",
      "Final report with lift, cost, and scaling plan"
    ],
    timeline: "4 to 6 weeks",
    model: "Fixed fee",
    priceFloor: "[public price floor to be confirmed]",
    variables: "Number of integrations, data volume, governance scope (state AI laws, HIPAA, GLBA), and whether a production go-live is in scope."
  },
  {
    title: "AI Opportunity Workshop",
    who: "Leadership teams that want a scored map of AI candidates before committing to a pilot.",
    included: [
      "1-2 week workshop with 1 AI engineer + 1 account lead",
      "Candidate workflow long-list",
      "ROI hypotheses",
      "Governance readiness score",
      "Recommended pilot"
    ],
    timeline: "1 to 2 weeks",
    model: "Fixed fee",
    priceFloor: "[public price floor to be confirmed]",
    variables: "One flat fee across most engagements; highly customized or cross-functional scopes priced on discovery."
  },
  {
    title: "Data Foundation Assessment",
    who: "Teams facing a platform decision (Databricks / Snowflake / Fabric / warehouse-plus-dbt) or teams whose reporting is unreliable.",
    included: [
      "Current-state data audit",
      "Reference architecture",
      "Platform recommendation",
      "Governance plan",
      "Fixed-fee build proposal"
    ],
    timeline: "2 to 3 weeks",
    model: "Fixed fee",
    priceFloor: "[public price floor to be confirmed]",
    variables: "Flat fee for most standard SMB analytics data footprints."
  },
  {
    title: "Analytics Support Retainer",
    who: "Teams live on a warehouse + BI tool who need ongoing pipeline operations, dashboard maintenance, and model refresh.",
    included: [
      "Monthly pipeline SLA",
      "Dashboard support",
      "dbt model maintenance",
      "Small enhancement",
      "Monthly review"
    ],
    timeline: "Month to month (90-day minimum)",
    model: "Monthly retainer",
    priceFloor: "[public price floor to be confirmed]",
    variables: "Hours per month, response SLA, and number of data platform pipelines."
  },
  {
    title: "Custom Build (Proposal after Discovery)",
    who: "Engagements that do not fit a package — MVP builds, multi-system data platforms, multi-workflow AI rollouts, or full Zoho One deployments.",
    included: [
      "Scoped after Discovery Sprint or Assessment",
      "Milestone-based proposal",
      "Fixed fee per milestone"
    ],
    timeline: "Varies (typically 10 to 24 weeks)",
    model: "Milestone or phased fixed fee",
    priceFloor: "Determined after discovery",
    variables: "Scale of system architecture, custom API requirements, and governance scopes."
  }
];

export default function PackagesClient() {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Hero Animations
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

    // Scroll Animations
    const sections = gsap.utils.toArray('.scroll-section');
    sections.forEach(section => {
      gsap.fromTo(section,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef}>
      {/* HERO SECTION */}
      <section className={pageStyles.heroSection} style={{ minHeight: 'auto', paddingTop: '160px', paddingBottom: '4rem' }}>
        <div className={pageStyles.heroImageWrapper}>
          <Image
            src="/images/solutions-hero2.webp"
            alt="FI Digital Packages and Starting Offers"
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
          <div className={pageStyles.heroContent} style={{ maxWidth: '800px' }}>
            <h1 className={`hero-animate ${pageStyles.heroH1}`}>Start where you feel the pain.</h1>
            <p className={`hero-animate ${pageStyles.heroSub}`} style={{ maxWidth: '750px' }}>
              FI Digital does not publish hourly rates. We publish packages, fixed-fee diagnostics, and monthly starting points — because US SMB buyers should know what a project starts at before they sit on three sales calls. Every package below tells you who it is for, what is included, how long it takes, and how pricing is presented. Pricing numbers are placeholders on this brief — the US sales leader will confirm the public floor price for each offer before publish.
            </p>
            <div className={`hero-animate ${pageStyles.heroCtas}`}>
              <Link href="/book-a-fit-call/" className="btn btn-primary">Book a fit call to scope your package &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      {/* PACKAGES GRID */}
      <section className={`${styles.sectionPackages} scroll-section`}>
        <div className="container">
          <div className={`${styles.packagesGrid} stagger-grid`}>
            {packagesData.map((pkg, i) => (
              <div key={i} className={`${styles.packageCard} stagger-card`}>
                
                {/* LEFT COLUMN: Title, Model, Price, CTA */}
                <div className={styles.packageLeft}>
                  <div className={styles.packageTimeline}>{pkg.timeline}</div>
                  <h2 className={styles.packageTitle}>{pkg.title}</h2>
                  <p className={styles.packagePrice}>
                    <strong>Model:</strong> {pkg.model} <br/>
                    Starting from <strong>{pkg.priceFloor}</strong>
                  </p>
                  <div style={{ marginTop: '2.5rem' }}>
                    <Link href="/book-a-fit-call/" className="btn btn-primary">
                      Book a Fit Call &rarr;
                    </Link>
                  </div>
                </div>
                
                {/* RIGHT COLUMN: Who, What, Variables */}
                <div className={styles.packageRight}>
                  <div className={styles.featureGroup}>
                    <div className={styles.featureTitle}>Who it is for</div>
                    <p className={styles.featureText}>{pkg.who}</p>
                  </div>
                  
                  <div className={styles.featureGroup}>
                    <div className={styles.featureTitle}>What is included</div>
                    <ul className={styles.featureList}>
                      {pkg.included.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.featureGroup}>
                    <div className={styles.featureTitle}>What changes the price</div>
                    <p className={styles.featureText}>{pkg.variables}</p>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
