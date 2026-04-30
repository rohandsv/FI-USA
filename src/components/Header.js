"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "../context/ThemeContext";
import styles from "./Header.module.css";
import { useState, useEffect } from "react";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Add shadow/glass effect when scrolled
      setIsScrolled(currentScrollY > 20);

      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsHidden(true);
        setIsMobileMenuOpen(false); // Close mobile menu on scroll
      } else {
        setIsHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""} ${isHidden ? styles.hidden : ""}`}>
      <div className={`container ${styles.headerContainer}`}>
        <Link href="/" className={styles.logo}>
          <Image 
            src={theme === 'dark' ? "/logos/logo-on-dark1.png" : "/logos/logo-on-light1.png"} 
            alt="FI Digital" 
            width={180} 
            height={45} 
            style={{ objectFit: 'contain' }} 
            priority 
          />
        </Link>

        <button 
          className={`${styles.mobileMenuToggle} ${isMobileMenuOpen ? styles.active : ""}`} 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`${styles.navigation} ${isMobileMenuOpen ? styles.mobileOpen : ""}`}>
          <Link href="/" className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          
          <div className={styles.navGroup}>
            <Link href="/solutions/" className={styles.navLabel} onClick={() => setIsMobileMenuOpen(false)}>
              Solutions <span className={styles.chevron}>▾</span>
            </Link>
            <div className={styles.megaMenuContainer}>
              <ul className={styles.navList}>
                <li className={styles.hasSub}>
                  <Link href="/solutions/zoho-implementation/">Zoho Implementation Stack <span className={styles.chevronRight}>▸</span></Link>
                  <ul className={styles.subList}>
                    <li><Link href="/solutions/zoho-implementation/zoho-crm-quickstart/" onClick={() => setIsMobileMenuOpen(false)}>Zoho CRM QuickStart</Link></li>
                    <li><Link href="/solutions/zoho-implementation/managed-services/" onClick={() => setIsMobileMenuOpen(false)}>Zoho Managed Services</Link></li>
                  </ul>
                </li>
                <li><Link href="/solutions/product-engineering/" onClick={() => setIsMobileMenuOpen(false)}>Product Engineering</Link></li>
                <li><Link href="/solutions/ai-digital-workers/" onClick={() => setIsMobileMenuOpen(false)}>AI & Digital Workers</Link></li>
                <li><Link href="/solutions/data-engineering/" onClick={() => setIsMobileMenuOpen(false)}>Data Engineering</Link></li>
              </ul>
            </div>
          </div>

          <div className={styles.navGroup}>
            <span className={styles.navLabel}>
              Industries <span className={styles.chevron}>▾</span>
            </span>
            <div className={styles.megaMenuContainer}>
              <ul className={styles.navList}>
                <li><Link href="/industries/professional-services/" onClick={() => setIsMobileMenuOpen(false)}>Professional Services</Link></li>
                <li><Link href="/industries/manufacturing-distribution/" onClick={() => setIsMobileMenuOpen(false)}>Manufacturing & Distribution</Link></li>
                <li><Link href="/industries/logistics-field-service/" onClick={() => setIsMobileMenuOpen(false)}>Logistics & Field Service</Link></li>
                <li><Link href="/industries/financial-services/" onClick={() => setIsMobileMenuOpen(false)}>Financial Services</Link></li>
              </ul>
            </div>
          </div>

          <div className={styles.navGroup}>
            <span className={styles.navLabel}>
              Company <span className={styles.chevron}>▾</span>
            </span>
            <div className={styles.megaMenuContainer}>
              <ul className={styles.navList}>
                <li><Link href="/about/" onClick={() => setIsMobileMenuOpen(false)}>Why FI Digital</Link></li>
                <li><Link href="/case-studies/" onClick={() => setIsMobileMenuOpen(false)}>Case Studies Hub</Link></li>
                <li><Link href="/trust-security/" onClick={() => setIsMobileMenuOpen(false)}>Trust & Security</Link></li>
              </ul>
            </div>
          </div>

          <Link href="/packages/" className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>Packages</Link>

          <div className={styles.navActions}>
            <button 
              className={styles.themeToggle} 
              onClick={toggleTheme}
              aria-label="Toggle Dark Mode"
            >
              {theme === 'dark' ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5"></circle>
                  <line x1="12" y1="1" x2="12" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="23"></line>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                  <line x1="1" y1="12" x2="3" y2="12"></line>
                  <line x1="21" y1="12" x2="23" y2="12"></line>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              )}
            </button>
            <Link href="/book-a-fit-call/" className="btn btn-primary" onClick={() => setIsMobileMenuOpen(false)}>
              Book a Call
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
