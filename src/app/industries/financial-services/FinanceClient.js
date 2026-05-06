"use client";

import Link from 'next/link';
import Image from 'next/image';
import pageStyles from '../../page.module.css';
import styles from './finance.module.css';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const practicesData = [
  { practice: "Zoho Implementation Stack", what: "Zoho CRM for RIA / CPA / fintech sales and onboarding; Zoho Desk for service; integrations to Redtail, Wealthbox, Salesforce FSC", outcome: "Single CRM, unified client view, no double entry" },
  { practice: "Product Engineering", what: "Client portals, onboarding workflows, KYC / KYB apps, lender application workflows, custom fintech UIs", outcome: "Cut onboarding cycle time 40% with a branded portal" },
  { practice: "AI & Digital Workers", what: "Document AI on statements, tax docs, applications; meeting-summary copilots with compliance guardrails; RAG over internal knowledge", outcome: "Back-office document cycle time cut 50% with HITL" },
  { practice: "Data Engineering", what: "Snowflake / Fabric warehouse unifying CRM, custodian, accounting, marketing; BI on AUM, pipeline, realization", outcome: "One trusted BI view the compliance officer approves" }
];

const outcomesData = [
  { firm: "20-Advisor RIA", result: "Consolidated Redtail + Orion + Microsoft 365 into a Zoho + Snowflake reporting stack that cut quarterly client-report cycle time by 70%." },
  { firm: "Regional CPA Firm", result: "Shipped a document-AI workflow on tax statements that pulled 4 FTE-hours out of every engagement." },
  { firm: "Fintech Lender", result: "Deployed a governed meeting-summary copilot that saved 6 hours per underwriter per week while meeting GLBA Safeguards Rule expectations." }
];

export default function FinanceClient() {
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
            src="/images/industry-finance-v2.png"
            alt="Financial Services Technology Partner"
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
            <div className="hero-animate">
              <span className={pageStyles.eyebrow}>Built for US RIAs, CPA firms, fintech operators, and lenders</span>
            </div>
            <h1 className={`hero-animate ${pageStyles.heroH1}`}>CRM, reporting, and governed AI for RIAs, CPA firms, fintech, and lenders.</h1>
            <p className={`hero-animate ${pageStyles.heroSub}`} style={{ maxWidth: '750px' }}>
              A CRM that every advisor updates. A reporting layer that satisfies SOC 2, GLBA, and the state you operate in. A document-AI workflow that reads statements, extracts KYC data, and routes exceptions to a human. A governed AI pilot that drafts the low-risk client email without ever touching regulated content. FI Digital ships that stack for RIAs, CPA firms, fintech operators, and mid-market lenders.
            </p>
            <div className={`hero-animate ${pageStyles.heroCtas}`}>
              <Link href="/book-a-fit-call/?industry=financial-services" className="btn btn-primary">Book a fit call &rarr;</Link>
              <Link href="/packages/" className="btn btn-secondary">See relevant packages &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: THE CHALLENGE */}
      <section className={`${styles.sectionWhy} scroll-section`}>
        <div className="container">
          <div className={styles.whyTextCentered}>
            <h2 className={pageStyles.sectionTitleCentered}>The Industry Challenge</h2>
            <p className={styles.whyParagraphCentered}>
              US financial-services SMBs sit on three hard constraints: regulated data, regulated workflows, and state-by-state AI disclosure. The cloud-native AI demos that run on other SMB sites do not survive contact with a custodian, a compliance officer, or a state insurance regulator. FI Digital engages financial-services clients with that constraint first — governance, then workflow, then technology. Our AI pilots ship with audit logs, a kill-switch, human-in-the-loop approval, and a disclosure plan mapped to the states where your clients live.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: PRACTICES TABLE */}
      <section className={`${styles.sectionPackages} scroll-section`}>
        <div className="container">
          <h2 className={pageStyles.sectionTitleCentered}>How Each Practice Serves Financial Services</h2>
          
          <div className={styles.tableWrapper}>
            <table className={styles.packagesTable}>
              <thead>
                <tr>
                  <th>Practice</th>
                  <th>What it does for this industry</th>
                  <th>Example outcome</th>
                </tr>
              </thead>
              <tbody className="stagger-grid">
                {practicesData.map((pkg, i) => (
                  <tr key={i} className="stagger-card">
                    <td className={styles.packageName}>{pkg.practice}</td>
                    <td className={styles.packageOutcome}>{pkg.what}</td>
                    <td className={styles.packageTimeline}>{pkg.outcome}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 3: OUTCOMES */}
      <section className={`${styles.sectionOutcomes} scroll-section`}>
        <div className="container">
          <h2 className={pageStyles.sectionTitleCentered}>Proof & Examples</h2>
          
          <div className={`${styles.outcomesGrid} stagger-grid`}>
            {outcomesData.map((outcome, i) => (
              <div key={i} className={`stagger-card ${styles.outcomeCard}`}>
                <span className={styles.outcomeFirm}>{outcome.firm}</span>
                <p className={styles.outcomeText}>{outcome.result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="scroll-section" style={{ padding: '6rem 0', textAlign: 'center', backgroundColor: 'var(--bg-primary)' }}>
        <div className="container">
          <h2 className={pageStyles.sectionTitleCentered}>Ready to modernize your financial operations?</h2>
          <p className={pageStyles.sectionIntroCentered} style={{ marginBottom: '3rem' }}>
            Book a Fit Call to discuss your current systems or view case studies of RIAs and CPA firms we've transformed.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/book-a-fit-call/?industry=financial-services" className="btn btn-primary">Book a Fit Call</Link>
            <Link href="/case-studies/?industry=financial-services" className="btn btn-outline">View Case Studies</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
