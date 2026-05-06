"use client";

import Link from 'next/link';
import Image from 'next/image';
import styles from './pro.module.css';
import pageStyles from '../../page.module.css';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const practicesData = [
  { practice: "Zoho Implementation Stack", what: "Zoho CRM + Zoho Desk + Zoho Books + Zoho Projects unified into a practice operating system; client portal via Zoho Creator or Product Engineering", outcome: "Partners update CRM, realization visibility, unified client view" },
  { practice: "Product Engineering", what: "Custom client portals, conflicts-check workflows, engagement-letter automation, audit evidence workflows", outcome: "Branded client portal that deflects 30-40% of inbound email" },
  { practice: "AI & Digital Workers", what: "Meeting summarizers, email drafters, client-intake triage, document AI for engagement letters and contracts, SOC 2 disclosure generator", outcome: "4-6 hours per fee earner per week returned" },
  { practice: "Data Engineering", what: "Practice performance BI (realization, utilization, WIP, matter profitability) with trusted reporting", outcome: "One dashboard the managing partner actually trusts" }
];

const outcomesData = [
  { firm: "60-Partner Regional CPA Firm", result: "Reduced manual time entry by 35% with a Zoho + AI time-capture workflow." },
  { firm: "120-Lawyer Firm", result: "Cut engagement-letter cycle time from 9 days to 2 with a document-AI workflow integrated with iManage." },
  { firm: "40-Person Digital Agency", result: "Unified Zoho CRM, Projects, and Books to cut month-end close from 9 days to 3." }
];

export default function ProClient() {
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
      <section className={styles.heroSection}>
        <div className={styles.heroImageWrapper}>
          <Image
            src="/images/industry-pro.webp"
            alt="Professional Services Technology Partner"
            fill
            priority
            className={styles.heroImageReal}
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.parentElement.classList.add(styles.heroImagePlaceholder);
            }}
          />
        </div>

        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroContent}>
            <div className="hero-animate">
              <span className={styles.eyebrow}>Built for US professional-services firms, 25 to 500 employees</span>
            </div>
            <h1 className={`hero-animate ${styles.heroH1}`}>Technology for CPA firms, law firms, agencies, and consulting firms.</h1>
            <p className={`hero-animate ${styles.heroSub}`}>
              Accounting, law, marketing agency, and management-consulting firms run on three things: a CRM your partners actually update, a time-and-billing system that does not bleed realization, and a client portal clients do not complain about. Layer in AI that drafts the low-value emails and summarizes the long ones, and you have a modern professional-services firm. FI Digital builds that stack for firms between 25 and 500 employees, as a Zoho Premium Partner with governed AI and integration engineering in-house.
            </p>
            <div className={`hero-animate ${styles.heroCtas}`}>
              <Link href="/book-a-fit-call/?industry=professional-services" className="btn btn-primary">Book a fit call &rarr;</Link>
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
              Professional-services firms in the US sit on decades of practice-management software that was built before partners carried smartphones. Client portals are often afterthoughts. Time and billing systems do not talk to CRM. Conflicts checks run on spreadsheets. Reporting latency lets realization leak quarter after quarter. Meanwhile, state bars, the AICPA, and client procurement teams are pushing firms toward SOC 2 Type II, CCPA / CPRA, and explicit AI disclosure. FI Digital lands on the intersection of all three — modern operations, trusted reporting, and governed AI.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: PRACTICES TABLE */}
      <section className={`${styles.sectionPackages} scroll-section`}>
        <div className="container">
          <h2 className={pageStyles.sectionTitleCentered}>How Each Practice Serves Professional Services</h2>
          
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
          <h2 className={pageStyles.sectionTitleCentered}>Ready to modernize your firm?</h2>
          <p className={pageStyles.sectionIntroCentered} style={{ marginBottom: '3rem' }}>
            Book a Fit Call to discuss your operations or view case studies of firms like yours.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/book-a-fit-call/?industry=professional-services" className="btn btn-primary">Book a Fit Call</Link>
            <Link href="/case-studies/?industry=professional-services" className="btn btn-outline">View Case Studies</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
