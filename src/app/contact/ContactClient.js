"use client";

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import pageStyles from '../page.module.css';
import styles from './contact.module.css';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function ContactClient() {
  const [iframeHeight, setIframeHeight] = useState(800);
  const containerRef = useRef(null);

  useGSAP(() => {
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
  }, { scope: containerRef });

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data?.type === 'zoho-resize') {
        setIframeHeight(event.data.height + 40);
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <div ref={containerRef}>
      {/* HERO SECTION */}
      <section className={pageStyles.heroSection} style={{ minHeight: 'auto', paddingTop: '160px', paddingBottom: '4rem' }}>
        <div className={pageStyles.heroImageWrapper}>
          <Image
            src="/images/home-hero.webp"
            alt="Contact FI Digital"
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
            <h1 className={`hero-animate ${pageStyles.heroH1}`}>Contact FI Digital</h1>
            <p className={`hero-animate ${pageStyles.heroSub}`} style={{ maxWidth: '750px' }}>
              We are a US-registered firm with US-based account leads. Tell us what you are trying to solve and we will route your inquiry to the right practice lead within one US business day.
            </p>
          </div>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className={styles.formSection}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className={styles.formCard}>
            <iframe
              src="/zoho-form.html"
              style={{
                width: '100%',
                height: `${iframeHeight}px`,
                border: 'none',
                overflow: 'hidden',
                transition: 'height 0.3s ease'
              }}
              title="Contact Form"
            />
            <div style={{ marginTop: '2rem', textAlign: 'center' }}>
              <p className={styles.footerPrompt}>
                Prefer to skip the form? <Link href="/book-a-fit-call/" style={{ color: 'var(--accent-color)', fontWeight: 600 }}>Book a fit call immediately &rarr;</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className={styles.trustStripSection}>
        <div className="container">
          <div className={styles.trustStripWrapper}>
            <div className={styles.trustItem}>
              <strong>Corporate Identity:</strong> FI Digital LLC · 123 Innovation Drive, Suite 400, Atlanta, GA 30301
            </div>
            <div className={styles.trustItem}>
              <strong>Direct Phone:</strong> <a href="tel:+18665550199">+1-866-555-0199</a> (ET business hours)
            </div>
            <div className={styles.trustItem}>
              <strong>Contact Channels:</strong> hello@fidigital.com | privacy@fidigital.com | security@fidigital.com
            </div>
            <div className={styles.trustItem}>
              <strong>Operational Hours:</strong> Monday-Friday, 9am-6pm ET (24/5 for managed-services clients)
            </div>
            <div className={styles.trustItem}>
              <strong>Response SLA:</strong> One US business day on every form submission
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
