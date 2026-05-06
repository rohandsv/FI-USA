"use client";

import Link from 'next/link';
import Image from 'next/image';
import pageStyles from '../../page.module.css';
import styles from './mfg.module.css';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const practicesData = [
  { practice: "Zoho Implementation Stack", what: "Zoho CRM for quote-to-order, integrated with NetSuite / Dynamics / Sage / SAP Business One; Zoho Creator for shop-floor workflow apps", outcome: "Quote-to-order in one system, no double entry" },
  { practice: "Product Engineering", what: "Customer / distributor portal, warranty and claims workflows, mobile apps for field sales, EDI and API integrations", outcome: "Reduce inbound order-status email by 40%" },
  { practice: "AI & Digital Workers", what: "Document AI on POs, invoices, and BOLs; sales-assistant copilot for quote lookup; planner copilot for demand signals", outcome: "Order / invoice cycle time cut by 30%" },
  { practice: "Data Engineering", what: "Snowflake / Fabric warehouse unifying ERP, CRM, WMS, and fulfillment; BI on inventory turns, backorders, OTIF", outcome: "One version of the truth for S&OP" }
];

const outcomesData = [
  { firm: "250-Person Distributor", result: "Reduced quote turnaround from 48 hours to 4 with a Zoho + NetSuite integration." },
  { firm: "Regional Food Manufacturer", result: "Cut invoice-matching AP labor by 60% with a document-AI workflow on SAP Business One." },
  { firm: "Building-Products Distributor", result: "Unified Dynamics 365 Business Central with a custom distributor portal that deflected 35% of inbound support calls." }
];

export default function MfgClient() {
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
            src="/images/industry-mfg-v2.png"
            alt="Manufacturing and Distribution Technology Partner"
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
              <span className={pageStyles.eyebrow}>Built for US manufacturers and distributors, 50 to 500 employees</span>
            </div>
            <h1 className={`hero-animate ${pageStyles.heroH1}`}>Connect ERP, CRM, and the shop floor — without an SAP-scale budget.</h1>
            <p className={`hero-animate ${pageStyles.heroSub}`} style={{ maxWidth: '750px' }}>
              Mid-market manufacturers and distributors do not have Fortune-500 budgets, but they have Fortune-500 problems. Six planning spreadsheets. A CRM nobody updates because the ERP is still the source of truth. Inventory counts that go stale by Tuesday. A BI tool that three people know how to use. FI Digital connects the ERP, CRM, and shop floor, adds integration engineering that finally makes the data flow, and deploys AI on the workflows that are draining your cost to serve.
            </p>
            <div className={`hero-animate ${pageStyles.heroCtas}`}>
              <Link href="/book-a-fit-call/?industry=manufacturing-distribution" className="btn btn-primary">Book a fit call &rarr;</Link>
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
              US manufacturing and distribution buyers tell us the same story: the business runs on NetSuite, Dynamics, Sage, SAP Business One, or Microsoft Dynamics 365 Business Central, and each one has a customer service team, a planning team, and a sales team looking at a different dashboard. Meanwhile, AI vendors are pitching the C-suite on agents that cannot access half the data they need. The order of operations is the opposite: connect the systems, trust the reporting, then layer AI on the workflows where cost to serve is highest.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: PRACTICES TABLE */}
      <section className={`${styles.sectionPackages} scroll-section`}>
        <div className="container">
          <h2 className={pageStyles.sectionTitleCentered}>How Each Practice Serves Manufacturing & Distribution</h2>
          
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
          <h2 className={pageStyles.sectionTitleCentered}>Ready to connect your operations?</h2>
          <p className={pageStyles.sectionIntroCentered} style={{ marginBottom: '3rem' }}>
            Book a Fit Call to discuss your systems or view case studies of manufacturers and distributors we've transformed.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/book-a-fit-call/?industry=manufacturing-distribution" className="btn btn-primary">Book a Fit Call</Link>
            <Link href="/case-studies/?industry=manufacturing-distribution" className="btn btn-outline">View Case Studies</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
