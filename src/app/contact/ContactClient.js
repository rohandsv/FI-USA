"use client";

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import pageStyles from '../page.module.css';
import styles from './contact.module.css';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ZohoForm from '@/components/ZohoForm';

export default function ContactClient() {
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
              We are a US registered firm with US based account leads. Tell us what you are trying to solve and we will route your inquiry to the right practice lead within one US business day.
            </p>
          </div>
        </div>
      </section>

      {/* TWO-COLUMN: INFO LEFT + FORM RIGHT */}
      <section className={styles.formSection}>
        <div className="container">
          <div className={styles.contactGrid}>
            {/* LEFT — Address & Info */}
            <div className={styles.contactInfo}>
              <div className={styles.infoBlock}>
                <h3 className={styles.infoHeading}>Office</h3>
                <p>FI Digital LLC</p>
                <p>123 Innovation Drive, Suite 400</p>
                <p>Atlanta, GA 30301</p>
              </div>

              <div className={styles.infoBlock}>
                <h3 className={styles.infoHeading}>Phone</h3>
                <p><a href="tel:+18665550199">+1-866-555-0199</a></p>
                <p className={styles.infoMuted}>ET business hours</p>
              </div>

              <div className={styles.infoBlock}>
                <h3 className={styles.infoHeading}>Email</h3>
                <p><a href="mailto:hello@fidigital.com">hello@fidigital.com</a></p>
                <p><a href="mailto:privacy@fidigital.com">privacy@fidigital.com</a></p>
                <p><a href="mailto:security@fidigital.com">security@fidigital.com</a></p>
              </div>

              <div className={styles.infoBlock}>
                <h3 className={styles.infoHeading}>Hours</h3>
                <p>Monday to Friday, 9am to 6pm ET</p>
                <p className={styles.infoMuted}>24/5 for managed services clients</p>
              </div>

              <div className={styles.infoBlock}>
                <h3 className={styles.infoHeading}>Response SLA</h3>
                <p>One US business day on every form submission</p>
              </div>

              <div className={styles.infoBlock} style={{ marginTop: 'auto' }}>
                <p className={styles.infoMuted}>
                  Prefer to skip the form? <Link href="/book-a-fit-call/" style={{ color: 'var(--accent-color)', fontWeight: 600 }}>Book a fit call &#8594;</Link>
                </p>
              </div>
            </div>

            {/* RIGHT — Form */}
            <div className={styles.formCard}>
              <ZohoForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
