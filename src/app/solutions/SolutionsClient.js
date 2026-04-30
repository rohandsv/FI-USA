"use client";

import Link from 'next/link';
import Image from 'next/image';
import styles from './solutions.module.css';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const practices = [
  {
    title: "Zoho Implementation Stack",
    promise: "Make Zoho One the operating system for your business.",
    useCases: "CRM rollouts · service desk foundations · managed optimization",
    who: "Operations-led SMBs that want to exit spreadsheets.",
    link: "/solutions/zoho-implementation/",
    ctaText: "See the Zoho practice",
    icon: "/images/real-zoho-practice.jpg"
  },
  {
    title: "Product Engineering",
    promise: "Ship production software without staff-augmentation roulette.",
    useCases: "Discovery sprints · MVP builds · customer portals · app modernization",
    who: "Growth-stage product, operations, and service companies.",
    link: "/solutions/product-engineering/",
    ctaText: "See the Product Engineering practice",
    icon: "/images/real-product-practice.jpg"
  },
  {
    title: "AI & Digital Workers",
    promise: "Put AI where it earns its keep — with audit logs and a kill-switch.",
    useCases: "Support copilots · internal knowledge assistants · document AI",
    who: "Teams that want measurable AI lift in one workflow first.",
    link: "/solutions/ai-digital-workers/",
    ctaText: "See the AI practice",
    icon: "/images/real-ai-practice.jpg"
  },
  {
    title: "Data Engineering",
    promise: "Build the trustworthy data foundation AI and reporting both need.",
    useCases: "Data foundation assessments · lakehouses · ETL modernization · BI acceleration",
    who: "Teams with reporting chaos or an AI readiness gap.",
    link: "/solutions/data-engineering/",
    ctaText: "See the Data practice",
    icon: "/images/real-data-practice.jpg"
  }
];

export default function SolutionsClient() {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Hero Entrance Animation
    gsap.fromTo(".hero-animate",
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: "power3.out", delay: 0.1 }
    );

    // Scroll Reveal Animations for generic sections
    const sections = gsap.utils.toArray('.scroll-section');
    sections.forEach((sec) => {
      gsap.fromTo(sec,
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, ease: "power3.out",
          scrollTrigger: {
            trigger: sec,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Stagger cards in grids
    const grids = gsap.utils.toArray('.stagger-grid');
    grids.forEach((grid) => {
      const cards = grid.querySelectorAll('.stagger-card');
      gsap.fromTo(cards,
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power2.out",
          scrollTrigger: {
            trigger: grid,
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
            src="/images/solutions-hero2.webp"
            alt="Solutions Hub"
            fill
            priority
            className={styles.heroImageReal}
            onError={(e) => {
              // Fallback to placeholder if image not generated yet
              e.currentTarget.style.display = 'none';
              e.currentTarget.parentElement.classList.add(styles.heroImagePlaceholder);
            }}
          />
        </div>

        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroContent}>
            <div className="hero-animate">
              <span className={styles.eyebrow}>Solutions Hub</span>
            </div>
            <h1 className={`hero-animate ${styles.heroH1}`}>Four practices.<br />One execution partner.</h1>
            <p className={`hero-animate ${styles.heroSub}`}>
              Most SMB technology problems do not live in one practice. A CRM rollout needs integration engineering. An AI pilot needs clean data. A customer portal needs Zoho as the system of record. FI Digital delivers all four as one team so the seams disappear.
            </p>
            <div className={`hero-animate ${styles.heroCtas}`}>
              <Link href="/packages/" className="btn btn-primary">See packages &rarr;</Link>
              <Link href="/book-a-fit-call/" className="btn btn-secondary">Talk to a solution expert &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      {/* THE FOUR PRACTICES */}
      <section className={`${styles.sectionPractices} scroll-section`}>
        <div className="container">
          <h2 className={styles.sectionTitleCentered}>The Four Practices</h2>

          <div className={`${styles.practicesGrid} stagger-grid`}>
            {practices.map((practice, index) => (
              <div key={index} className={`stagger-card ${styles.practiceCard}`}>
                <div className={styles.practiceImageLarge}>
                  <Image
                    src={practice.icon}
                    alt={practice.title}
                    fill
                    className={styles.practiceImage}
                    onError={(e) => e.target.style.display = 'none'}
                  />
                </div>

                <div className={styles.practiceContent}>
                  <div className={styles.practiceHeader}>
                    <h3>{practice.title}</h3>
                    <p className={styles.practicePromise}>{practice.promise}</p>
                  </div>

                  <div className={styles.practiceDetails}>
                    <div className={styles.detailRow}>
                      <span className={styles.detailLabel}>Top Use Cases</span>
                      <span className={styles.detailText}>{practice.useCases}</span>
                    </div>
                    <div className={styles.detailRow}>
                      <span className={styles.detailLabel}>Who it is for</span>
                      <span className={styles.detailText}>{practice.who}</span>
                    </div>
                  </div>

                  <Link href={practice.link} className={styles.cardCta}>
                    {practice.ctaText} &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW THE FOUR PRACTICES CONNECT */}
      <section className={`${styles.sectionConnector} scroll-section`}>
        <div className={`container ${styles.connectorContainer}`}>
          <div className={styles.connectorTextCol}>
            <h2>How the Four Practices Connect</h2>
            <p>
              Zoho gives you a system of record. Product Engineering gives you the custom software that Zoho will never ship natively — customer portals, partner apps, and workflow tools.
            </p>
            <p>
              AI & Digital Workers layer on top of Zoho and your custom apps to triage, summarize, draft, and route. Data Engineering gives all three a single source of truth so the reports, the copilots, and the AI agents all speak the same language.
            </p>
            <div className={styles.connectorWarning}>
              <p>Buying one practice and skipping the others is the most expensive mistake SMBs make — we design the bundles to prevent it.</p>
            </div>
          </div>

          <div className={styles.connectorImageCol}>
            <Image
              src="/images/real-solutions-connector.jpg"
              alt="Team collaborating on the 4-node connected architecture"
              fill
              className={styles.connectorImage}
              onError={(e) => e.target.style.display = 'none'}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
