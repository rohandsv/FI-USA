"use client";

import Link from 'next/link';
import Image from 'next/image';
import pageStyles from '../page.module.css';
import styles from './about.module.css';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function AboutClient() {
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
            alt="About FI Digital"
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
            <h1 className={`hero-animate ${pageStyles.heroH1}`}>Built to end the duct-tape stack.</h1>
            <p className={`hero-animate ${pageStyles.heroSub}`} style={{ maxWidth: '750px' }}>
              FI Digital is a US SMB transformation partner. We were founded to solve the pattern we kept watching SMBs fall into — a Zoho partner here, a web-app shop there, an AI freelancer off a Slack community, a data contractor on a retainer, and 12 months of duct tape between them. We built one firm with four integrated practices so the seams disappear.
            </p>
            <div className={`hero-animate ${pageStyles.heroCtas}`}>
              <Link href="/book-a-fit-call/" className="btn btn-primary">Book a Fit Call &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: WE BUILD */}
      <section className={`${styles.sectionWhy} scroll-section`}>
        <div className="container">
          <div className={styles.whyTextCentered}>
            <h2 className={pageStyles.sectionTitleCentered}>We build. We do not just advise.</h2>
            <p className={styles.whyParagraphCentered}>
              Most firms that look like us sell advisory engagements and hand you a slide deck. We sell outcomes and ship production code, configuration, and integrations. Every engagement has a US account lead, a senior practice lead, and a delivery squad. Every engagement ends with something you can actually use — a running Zoho system, a production MVP, a live AI pilot, a trusted BI dashboard.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: FOUR PRACTICES, ONE PARTNER */}
      <section className={`${styles.sectionAlt} scroll-section`}>
        <div className="container">
          <div className={styles.whyTextCentered}>
            <h2 className={pageStyles.sectionTitleCentered}>Four practices, one partner</h2>
            <p className={styles.whyParagraphCentered}>
              Zoho Implementation Stack, Product Engineering, AI & Digital Workers, and Data Engineering. Four practices, one account lead, one contract, one set of outcomes. This is the structure most SMB buyers tell us they wish existed. We built the firm to match.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: US-BASED ACCOUNT LEADS */}
      <section className={`${styles.sectionWhy} scroll-section`} style={{ borderTop: 'none' }}>
        <div className="container">
          <div className={styles.whyTextCentered}>
            <h2 className={pageStyles.sectionTitleCentered}>US-based account leads. Global delivery bench.</h2>
            <p className={styles.whyParagraphCentered}>
              Every client has a US-based account lead and a US-based practice lead on every engagement. Our delivery bench includes senior engineers, Zoho-certified consultants, data platform architects, and AI engineers distributed across multiple time zones so we can ship on 24/5 cadences when the work demands it. We do not sell staff-augmentation, we do not quote hourly rates, and we do not put junior consultants in lead roles.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: HOW WE ARE DIFFERENT */}
      <section className={`${styles.sectionAlt} scroll-section`}>
        <div className="container">
          <h2 className={pageStyles.sectionTitleCentered}>How We Are Different</h2>
          
          <div className={styles.tableWrapper}>
            <table className={styles.compareTable}>
              <thead>
                <tr>
                  <th>Competitor archetype</th>
                  <th>How they engage</th>
                  <th>How FI Digital is different</th>
                </tr>
              </thead>
              <tbody className="stagger-grid">
                <tr className="stagger-card">
                  <td className={styles.competitorName}>Large consultancy (Deloitte / Accenture / Bain-X)</td>
                  <td className={styles.howTheyEngage}>Six-month advisory discovery, minimum engagement size that prices out SMBs</td>
                  <td className={styles.howFiDifferent}>Fixed-fee starting offers, US SMB-sized engagements, production build after Discovery</td>
                </tr>
                <tr className="stagger-card">
                  <td className={styles.competitorName}>Offshore dev shop / staff aug</td>
                  <td className={styles.howTheyEngage}>Hourly rates, bodies-in-seats, weak account layer</td>
                  <td className={styles.howFiDifferent}>US account lead, fixed-fee scope, outcome-based, IP transfer on acceptance</td>
                </tr>
                <tr className="stagger-card">
                  <td className={styles.competitorName}>Boutique Zoho partner</td>
                  <td className={styles.howTheyEngage}>Zoho-only capability, no AI / data / engineering depth</td>
                  <td className={styles.howFiDifferent}>Zoho is one of four practices; we can deliver AI, data, and custom product engineering on the same engagement</td>
                </tr>
                <tr className="stagger-card">
                  <td className={styles.competitorName}>Single-practice AI agency</td>
                  <td className={styles.howTheyEngage}>AI pilots without data foundations, no governance discipline, no production handover</td>
                  <td className={styles.howFiDifferent}>One-Workflow AI Pilots on real data foundations with governance shipped from day one</td>
                </tr>
                <tr className="stagger-card">
                  <td className={styles.competitorName}>Freelancer / contractor</td>
                  <td className={styles.howTheyEngage}>No continuity, no insurance, no governance</td>
                  <td className={styles.howFiDifferent}>Registered US entity, professional indemnity, SOC 2-aligned practices, managed-services bench for day two</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 5: LEADERSHIP & DELIVERY */}
      <section className={`${styles.sectionWhy} scroll-section`}>
        <div className="container">
          <div className={styles.whyTextCentered}>
            <h2 className={pageStyles.sectionTitleCentered}>Leadership & Delivery</h2>
            <p className={styles.whyParagraphCentered}>
              The US leadership team is based in Atlanta, Georgia. Each practice is led by a practice lead with 10+ years of SMB and growth-stage experience. Practice leads carry Zoho Premium, AWS, Azure, Databricks, and Snowflake credentials as appropriate. Delivery squads are senior-heavy and are distributed globally so that engagements can ship on fast cadences.
            </p>
          </div>

          <div className={styles.leadersGrid}>
            {[
              { 
                name: "Pratik Modi", 
                role: "CEO & Co-Founder", 
                image: "/images/team/pratikmodi.webp", 
                linkedIn: "https://www.linkedin.com/in/iampratikmodi/" 
              },
              { 
                name: "Paras Shah", 
                role: "CTO & Co-Founder", 
                image: "/images/team/paras.png", 
                linkedIn: "https://www.linkedin.com/in/parasshah1955/" 
              },
              { 
                name: "Nishant Modi", 
                role: "Head of Operational Excellence", 
                image: "/images/team/nishant.webp", 
                linkedIn: "https://www.linkedin.com/in/nishant-modi-0a79b9b0/" 
              }
            ].map((leader, i) => (
              <div key={i} className={styles.leaderCard}>
                <div className={styles.leaderImageWrapper}>
                  <Image 
                    src={leader.image} 
                    alt={leader.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className={styles.leaderContent}>
                  <h3 className={styles.leaderName}>{leader.name}</h3>
                  <div className={styles.leaderRole}>{leader.role}</div>
                  <div className={styles.leaderCredentials}>{leader.credentials}</div>
                  <a href={leader.linkedIn} className={styles.leaderLinkedIn} target="_blank" rel="noopener noreferrer">LinkedIn &rarr;</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: COMMERCIAL PROMISES */}
      <section className={`${styles.sectionAlt} scroll-section`}>
        <div className="container">
          <div className={styles.whyTextCentered}>
            <h2 className={pageStyles.sectionTitleCentered}>Our Commercial Promises</h2>
          </div>

          <div className={styles.promisesGrid}>
            {[
              { title: "Scope in Writing", text: "We will scope in writing before we invoice. No surprises, no hidden fees." },
              { title: "Fixed Fees Preferred", text: "We will publish fixed fees where a fixed fee is possible." },
              { title: "Direct Referrals", text: "We will tell you if your problem is not our problem, and refer you to a better-fit firm if so." },
              { title: "IP Transfer", text: "We will transfer code and IP on acceptance, ensuring complete ownership." },
              { title: "Runbook Documentation", text: "We will give you a runbook and documentation on every production handover." },
              { title: "Enterprise Grade", text: "We will sign SOC 2 aligned security commitments, NDAs, DPAs, and BAAs where applicable." }
            ].map((promise, i) => (
              <div key={i} className={styles.promiseCard}>
                <div className={styles.promiseNumber}>{i + 1}</div>
                <h3 className={styles.promiseTitle}>{promise.title}</h3>
                <p className={styles.promiseText}>{promise.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
