"use client";

import Link from 'next/link';
import Image from 'next/image';
import pageStyles from '../../page.module.css';
import styles from './logistics.module.css';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const practicesData = [
  { practice: "Zoho Implementation Stack", what: "Zoho CRM for sales and job intake; Zoho Creator for dispatch, work-order, and mobile crew apps; Zoho Desk for customer support", outcome: "Single system for sales, dispatch, and service" },
  { practice: "Product Engineering", what: "Custom dispatch platforms, driver / technician mobile apps, customer-facing portals with live job status", outcome: "Cut dispatch cycle time 30% and self-service 40% of status calls" },
  { practice: "AI & Digital Workers", what: "Inbound triage copilot, customer update drafter, dispatcher copilot, document AI on BOLs and invoices", outcome: "Dispatcher handles 25-30% more jobs per shift" },
  { practice: "Data Engineering", what: "Telemetry + TMS + CRM + FSM unified in a warehouse; BI on OTIF, first-time-fix, utilization", outcome: "One BI view of fleet / crew utilization" }
];

const outcomesData = [
  { firm: "Regional Last-Mile Operator", result: "Deflected 45% of status calls with a customer-facing portal." },
  { firm: "Multi-State HVAC Firm", result: "Cut first-time-fix cycle time by 20% with a dispatcher copilot on Zoho Creator." },
  { firm: "150-Truck Fleet", result: "Unified telemetry and TMS data into a Snowflake warehouse to drive weekly S&OP decisions." }
];

export default function LogisticsClient() {
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
            src="/images/industry-logistics-v2.png"
            alt="Logistics and Field Service Technology Partner"
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
              <span className={pageStyles.eyebrow}>Built for US logistics, transportation, field-service, and home-services operators</span>
            </div>
            <h1 className={`hero-animate ${pageStyles.heroH1}`}>Dispatch, driver apps, and AI triage — built for US operators.</h1>
            <p className={`hero-animate ${pageStyles.heroSub}`} style={{ maxWidth: '750px' }}>
              A dispatch screen that does not melt down on peak Fridays. A driver or technician app crews actually use. A service desk that stops dropping tickets. An AI layer that triages inbound work requests, drafts the update-the-customer text, and predicts the dispatch that your most experienced dispatcher would make. FI Digital ships that stack for US logistics and field-service operators with 50 to 500 employees.
            </p>
            <div className={`hero-animate ${pageStyles.heroCtas}`}>
              <Link href="/book-a-fit-call/?industry=logistics-field-service" className="btn btn-primary">Book a fit call &rarr;</Link>
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
              Logistics and field-service operators in the US run on a mix of FSM tools (ServiceTitan, FieldEdge, Jobber, Housecall Pro), TMS tools, and custom apps glued together by spreadsheets and text messages. Our clients come to us when they have outgrown packaged FSM or when they need a custom system because their workflow does not fit the package. We ship dispatch, driver / technician, and customer-facing apps, and we deploy AI on the highest-cost touch points: inbound triage, scheduling, customer updates, and parts ordering.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: PRACTICES TABLE */}
      <section className={`${styles.sectionPackages} scroll-section`}>
        <div className="container">
          <h2 className={pageStyles.sectionTitleCentered}>How Each Practice Serves Logistics & Field Service</h2>
          
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
          <h2 className={pageStyles.sectionTitleCentered}>Ready to modernize your dispatch and crew ops?</h2>
          <p className={pageStyles.sectionIntroCentered} style={{ marginBottom: '3rem' }}>
            Book a Fit Call to discuss your current systems or view case studies of operators we've transformed.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/book-a-fit-call/?industry=logistics-field-service" className="btn btn-primary">Book a Fit Call</Link>
            <Link href="/case-studies/?industry=logistics-field-service" className="btn btn-outline">View Case Studies</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
