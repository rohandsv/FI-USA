"use client";

import Link from 'next/link';
import Image from 'next/image';
import pageStyles from '../page.module.css';
import styles from './trust.module.css';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function TrustClient() {
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
            alt="Trust and Security at FI Digital"
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
            <h1 className={`hero-animate ${pageStyles.heroH1}`}>Trust & Security at FI Digital</h1>
            <p className={`hero-animate ${pageStyles.heroSub}`} style={{ maxWidth: '750px' }}>
              US SMB buyers now expect clarity on AI use, data handling, access controls, and implementation posture early in the buying cycle. This page pre-answers the questions your security, compliance, and legal teams will ask. If something is not covered here, email privacy@fidigital.com and we will send the relevant documentation under NDA.
            </p>
            <div className={`hero-animate ${pageStyles.heroCtas}`}>
              <Link href="/book-a-fit-call/" className="btn btn-primary">Book a Fit Call &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: DELIVERY SECURITY POSTURE */}
      <section className={`${styles.sectionPosture} scroll-section`}>
        <div className="container">
          <div className={styles.postureContent}>
            <h2 className={pageStyles.sectionTitleCentered}>Delivery Security Posture</h2>
            
            <div className={styles.postureGrid}>
              {[
                {
                  title: "SOC 2 Type II Alignment",
                  text: "Our delivery practices align with SOC 2 Type II controls — access management, change management, monitoring, and vendor risk."
                },
                {
                  title: "Signed Summaries",
                  text: "A signed Delivery Security Summary is available on NDA for every engagement."
                },
                {
                  title: "Regional Defaults",
                  text: "All client workloads deploy on US regions by default: AWS us-east / us-west, Azure East US / Central US, Zoho US data centers, Snowflake AWS US, Databricks AWS US."
                },
                {
                  title: "DPA & BAA Support",
                  text: "All engagements start with a signed MSA plus a DPA. BAAs are signed when PHI is in scope."
                },
                {
                  title: "RBAC & Time-Bounded Access",
                  text: "Role-based access control, least-privilege, and time-bounded access for FI Digital staff on client systems."
                },
                {
                  title: "No Derivative Rights",
                  text: "All client code is versioned in client-owned repositories; we do not retain derivative rights."
                }
              ].map((item, i) => (
                <div key={i} className={styles.postureCard}>
                  <div className={styles.postureIcon}>✓</div>
                  <div className={styles.postureBody}>
                    <h3 className={styles.postureTitle}>{item.title}</h3>
                    <p className={styles.postureText}>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* SECTION: DATA HANDLING AND PRIVACY */}
      <section className={`${styles.sectionAlt} scroll-section`}>
        <div className="container">
          <div className={styles.introTextCentered}>
            <h2 className={pageStyles.sectionTitleCentered}>Data Handling & Privacy</h2>
            <p className={styles.introParagraphCentered}>
              Enterprise-grade compliance frameworks applied to all data ingestion, migration, and transformation processes.
            </p>
          </div>
          
          <div className={styles.postureGrid}>
            {[
              {
                title: "Comprehensive Data Act Alignment",
                text: "CCPA / CPRA, Virginia CDPA, Colorado Privacy Act, and Connecticut Data Privacy Act aligned data handling for customer data flows."
              },
              {
                title: "Financial Security Expectations",
                text: "GLBA Safeguards Rule aligned handling for financial-services client workloads."
              },
              {
                title: "Healthcare Compliance & BAA",
                text: "HIPAA-aligned delivery with signed BAA for healthcare-adjacent workflows."
              },
              {
                title: "Classification & Encryption",
                text: "Data classification, PII tagging, and encryption at rest and in transit on every production build."
              },
              {
                title: "Retention & Deletion",
                text: "Data retention and deletion policies scoped per engagement."
              }
            ].map((item, i) => (
              <div key={i} className={styles.postureCard}>
                <div className={styles.postureIcon}>✓</div>
                <div className={styles.postureBody}>
                  <h3 className={styles.postureTitle}>{item.title}</h3>
                  <p className={styles.postureText}>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: AI GOVERNANCE */}
      <section className={`${styles.sectionPosture} scroll-section`}>
        <div className="container">
          <div className={styles.introTextCentered}>
            <h2 className={pageStyles.sectionTitleCentered}>AI Governance</h2>
            <p className={styles.introParagraphCentered}>
              Every AI pilot ships with: a model card; prompt and output logs retained 90+ days; an evaluation set run before every production change; a human-in-the-loop escalation path; and a kill-switch that turns off the AI without a deploy. We do not ship autonomous agents into customer-facing workflows without approved guardrails.
            </p>
          </div>
          
          <div className={styles.postureGrid}>
            {[
              {
                title: "Enterprise Foundation Models",
                text: "Claude (Anthropic), GPT-4o / GPT-5 (OpenAI), AWS Bedrock, Azure OpenAI, and open models (Llama, Mistral) on AWS / Azure where air-gap is required."
              },
              {
                title: "No Training on Prompts",
                text: "All enterprise / API plans confirm no-training-on-prompts, safeguarding corporate IP."
              },
              {
                title: "State AI Law Alignment",
                text: "Colorado AI Act, Utah AI Policy Act, Illinois AI Video Interview Act, NYC Local Law 144."
              },
              {
                title: "Contextual AI Disclosures",
                text: "AI disclosure plan scoped per engagement to match jurisdictions where the pilot touches customers or employees."
              }
            ].map((item, i) => (
              <div key={i} className={styles.postureCard}>
                <div className={styles.postureIcon}>✓</div>
                <div className={styles.postureBody}>
                  <h3 className={styles.postureTitle}>{item.title}</h3>
                  <p className={styles.postureText}>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: ACCESS MODEL */}
      <section className={`${styles.sectionAlt} scroll-section`}>
        <div className="container">
          <div className={styles.introTextCentered}>
            <h2 className={pageStyles.sectionTitleCentered}>Access Model</h2>
            <p className={styles.introParagraphCentered}>
              Zero-trust architecture governing staff interactions with systems.
            </p>
          </div>
          
          <div className={styles.postureGrid}>
            {[
              {
                title: "Strict SSO & MFA Policies",
                text: "Our staff access to client systems is SSO-enforced, MFA-enforced, time-bounded, and logged."
              },
              {
                title: "Rapid Offboarding Protocols",
                text: "We offboard staff from client systems within 24 hours of engagement change."
              },
              {
                title: "Subcontractor Compliance",
                text: "Any subcontractors are named, approved, and contractually bound to the same posture."
              },
              {
                title: "Zero Unauthorized Offshore Access",
                text: "We do not permit offshore access to client PHI or regulated financial data without an explicit, contractually bound agreement."
              }
            ].map((item, i) => (
              <div key={i} className={styles.postureCard}>
                <div className={styles.postureIcon}>✓</div>
                <div className={styles.postureBody}>
                  <h3 className={styles.postureTitle}>{item.title}</h3>
                  <p className={styles.postureText}>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: INSURANCE & ENTITY */}
      <section className={`${styles.sectionPosture} scroll-section`}>
        <div className="container">
          <div className={styles.introTextCentered}>
            <h2 className={pageStyles.sectionTitleCentered}>Insurance & Entity</h2>
            <p className={styles.introParagraphCentered}>
              Registered corporate credentials and active risk coverage protecting client interests.
            </p>
          </div>
          
          <div className={styles.postureGrid}>
            {[
              {
                title: "US Registered Entity",
                text: "FI Digital LLC — a US legal entity headquartered in Atlanta, Georgia."
              },
              {
                title: "Professional Indemnity Insurance",
                text: "Professional indemnity / E&O insurance in place for all client scopes."
              },
              {
                title: "General Liability",
                text: "General liability insurance active across US operations."
              },
              {
                title: "Cyber Liability",
                text: "Enterprise cyber liability insurance in place."
              },
              {
                title: "Available Under NDA",
                text: "Certificates of insurance are available on request under NDA."
              }
            ].map((item, i) => (
              <div key={i} className={styles.postureCard}>
                <div className={styles.postureIcon}>✓</div>
                <div className={styles.postureBody}>
                  <h3 className={styles.postureTitle}>{item.title}</h3>
                  <p className={styles.postureText}>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
