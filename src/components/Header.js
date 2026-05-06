"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "../context/ThemeContext";
import styles from "./Header.module.css";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileGroup, setActiveMobileGroup] = useState(null);
  const [activeSolutionCategory, setActiveSolutionCategory] = useState('zoho');
  const pathname = usePathname() || "";
  
  const isActive = (basePath) => {
    if (!pathname) return false;
    const normalizedPathname = pathname.endsWith('/') ? pathname : pathname + '/';
    const normalizedBasePath = basePath.endsWith('/') ? basePath : basePath + '/';
    return normalizedPathname.startsWith(normalizedBasePath);
  };

  const isExact = (path) => {
    if (!pathname) return false;
    const normalizedPathname = pathname.endsWith('/') ? pathname : pathname + '/';
    const normalizedPath = path.endsWith('/') ? path : path + '/';
    return normalizedPathname === normalizedPath;
  };
  
  const toggleMobileGroup = (group) => {
    if (activeMobileGroup === group) {
      setActiveMobileGroup(null);
    } else {
      setActiveMobileGroup(group);
    }
  };
  
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
          <Link href="/" className={`${styles.navLink} ${isExact('/') ? styles.active : ''}`} onClick={() => setIsMobileMenuOpen(false)}>Home</Link>

          {/* Solutions Mega Menu */}
          <div className={`${styles.navGroup} ${styles.megaGroup} ${activeMobileGroup === 'solutions' ? styles.mobileGroupActive : ''}`}>
            <Link 
              href="/solutions/"
              className={`${styles.navLabel} ${isActive('/solutions') ? styles.active : ''}`}
              onClick={(e) => {
                if (window.innerWidth <= 768) {
                  e.preventDefault();
                  toggleMobileGroup('solutions');
                }
              }}
            >
              Solutions <span className={styles.chevron}>▾</span>
            </Link>
            <div className={styles.megaMenuContainer}>
              <div className={styles.megaMenuContent}>
                <div className={styles.megaMenuSide}>
                  <Link 
                    href="/solutions/zoho-implementation/"
                    className={`${styles.megaCategory} ${activeSolutionCategory === 'zoho' ? styles.megaCategoryActive : ''}`}
                    onMouseEnter={() => setActiveSolutionCategory('zoho')}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Zoho Implementation <span className={styles.megaChevron}>›</span>
                  </Link>
                  <Link 
                    href="/solutions/product-engineering/" 
                    className={`${styles.megaCategory} ${isActive('/solutions/product-engineering') ? styles.megaCategoryActiveLink : ''}`}
                    onMouseEnter={() => setActiveSolutionCategory('product')}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Product Engineering
                  </Link>
                  <Link 
                    href="/solutions/ai-digital-workers/" 
                    className={`${styles.megaCategory} ${isActive('/solutions/ai-digital-workers') ? styles.megaCategoryActiveLink : ''}`}
                    onMouseEnter={() => setActiveSolutionCategory('ai')}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    AI & Digital Workers
                  </Link>
                  <Link 
                    href="/solutions/data-engineering/" 
                    className={`${styles.megaCategory} ${isActive('/solutions/data-engineering') ? styles.megaCategoryActiveLink : ''}`}
                    onMouseEnter={() => setActiveSolutionCategory('data')}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Data Engineering
                  </Link>
                </div>
                <div className={styles.megaMenuMain}>
                  {activeSolutionCategory === 'zoho' && (
                    <div className={styles.megaMenuList}>
                      <Link href="/solutions/zoho-implementation/zoho-crm-quickstart/" className={`${styles.megaMenuItem} ${isActive('/solutions/zoho-implementation/zoho-crm-quickstart') ? styles.activePage : ''}`} onClick={() => setIsMobileMenuOpen(false)}>
                        • Zoho CRM QuickStart
                      </Link>
                      <Link href="/solutions/zoho-implementation/managed-services/" className={`${styles.megaMenuItem} ${isActive('/solutions/zoho-implementation/managed-services') ? styles.activePage : ''}`} onClick={() => setIsMobileMenuOpen(false)}>
                        • Managed Services
                      </Link>
                    </div>
                  )}
                  {activeSolutionCategory === 'product' && (
                    <div className={styles.megaMenuList}>
                      <div className={styles.megaMenuTitle}>Product Engineering</div>
                      <p className={styles.megaDescription}>Full-cycle product development from concept to scale.</p>
                      <Link href="/solutions/product-engineering/" className={styles.megaMenuLink} onClick={() => setIsMobileMenuOpen(false)}>Learn more →</Link>
                    </div>
                  )}
                  {activeSolutionCategory === 'ai' && (
                    <div className={styles.megaMenuList}>
                      <div className={styles.megaMenuTitle}>AI & Digital Workers</div>
                      <p className={styles.megaDescription}>Intelligent automation and AI agents for enterprise efficiency.</p>
                      <Link href="/solutions/ai-digital-workers/" className={styles.megaMenuLink} onClick={() => setIsMobileMenuOpen(false)}>Learn more →</Link>
                    </div>
                  )}
                  {activeSolutionCategory === 'data' && (
                    <div className={styles.megaMenuList}>
                      <div className={styles.megaMenuTitle}>Data Engineering</div>
                      <p className={styles.megaDescription}>Scalable data pipelines and robust infrastructure.</p>
                      <Link href="/solutions/data-engineering/" className={styles.megaMenuLink} onClick={() => setIsMobileMenuOpen(false)}>Learn more →</Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Industries Dropdown */}
          <div className={`${styles.navGroup} ${activeMobileGroup === 'industries' ? styles.mobileGroupActive : ''}`}>
            <span 
              className={`${styles.navLabel} ${isActive('/industries') ? styles.active : ''}`}
              onClick={() => toggleMobileGroup('industries')}
            >
              Industries <span className={styles.chevron}>▾</span>
            </span>
            <div className={styles.megaMenuContainer}>
              <ul className={styles.navList}>
                <li><Link href="/industries/professional-services/" className={isActive('/industries/professional-services') ? styles.activeDropdown : ''} onClick={() => setIsMobileMenuOpen(false)}>Professional Services</Link></li>
                <li><Link href="/industries/manufacturing-distribution/" className={isActive('/industries/manufacturing-distribution') ? styles.activeDropdown : ''} onClick={() => setIsMobileMenuOpen(false)}>Manufacturing & Distribution</Link></li>
                <li><Link href="/industries/logistics-field-service/" className={isActive('/industries/logistics-field-service') ? styles.activeDropdown : ''} onClick={() => setIsMobileMenuOpen(false)}>Logistics & Field Service</Link></li>
                <li><Link href="/industries/financial-services/" className={isActive('/industries/financial-services') ? styles.activeDropdown : ''} onClick={() => setIsMobileMenuOpen(false)}>Financial Services</Link></li>
              </ul>
            </div>
          </div>

          {/* Contact Menu */}
          <div className={styles.navGroup}>
            <Link 
              href="/contact/" 
              className={`${styles.navLabel} ${isActive('/contact') ? styles.active : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>

          {/* More Dropdown */}
          <div className={`${styles.navGroup} ${activeMobileGroup === 'more' ? styles.mobileGroupActive : ''}`}>
            <span 
              className={`${styles.navLabel} ${activeMobileGroup === 'more' ? styles.active : ''}`}
              onClick={() => toggleMobileGroup('more')}
            >
              More <span className={styles.chevron}>▾</span>
            </span>
            <div className={styles.megaMenuContainer}>
              <ul className={styles.navList}>
                <li><Link href="/about/" className={isActive('/about') ? styles.activeDropdown : ''} onClick={() => setIsMobileMenuOpen(false)}>Why FI Digital (About)</Link></li>
                <li><Link href="/trust-security/" className={isActive('/trust-security') ? styles.activeDropdown : ''} onClick={() => setIsMobileMenuOpen(false)}>Trust & Security</Link></li>
                <li className={styles.menuDivider}></li>
                <li><Link href="/solutions/zoho-implementation/" className={isActive('/solutions/zoho-implementation') ? styles.activeDropdown : ''} onClick={() => setIsMobileMenuOpen(false)}>Zoho Implementation</Link></li>
                <li><Link href="/packages/" className={isActive('/packages') ? styles.activeDropdown : ''} onClick={() => setIsMobileMenuOpen(false)}>Packages</Link></li>
                <li><Link href="/case-studies/" className={isActive('/case-studies') ? styles.activeDropdown : ''} onClick={() => setIsMobileMenuOpen(false)}>Case Studies</Link></li>
              </ul>
            </div>
          </div>

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
            <Link href="/book-a-fit-call/" className={`btn btn-primary ${styles.desktopCta}`} onClick={() => setIsMobileMenuOpen(false)}>
              Book a Discovery Session
            </Link>
          </div>
          
          <div className={styles.mobileOnlyContact}>
            <a href="tel:+18665550199" className={styles.mobilePhone}>+1-866-555-0199</a>
          </div>
        </nav>
      </div>

      {/* Mobile Sticky Bottom CTA */}
      <div className={styles.mobileStickyBottom}>
        <Link href="/book-a-fit-call/" className="btn btn-primary" style={{ width: '100%', borderRadius: 0, padding: '1rem', fontSize: '1.1rem' }}>
          Book a fit call
        </Link>
      </div>
    </header>
  );
}
