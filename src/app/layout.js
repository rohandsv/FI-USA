import { ThemeProvider } from "../context/ThemeContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ClientScripts from "../components/ClientScripts";
import ZohoSalesIQ from "../components/ZohoSalesIQ";
import FloatingContactButton from "../components/FloatingContactButton";
import "./globals.css";

export const metadata = {
  title: "FI Digital | US SMB transformation partner",
  description: "Zoho Premium Partner plus product engineering, AI automation, and data engineering delivery from one execution partner.",
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://fidigital.com/#organization",
    "name": "FI Digital",
    "legalName": "FI Digital LLC",
    "url": "https://fidigital.com",
    "logo": "https://fidigital.com/assets/logo.png",
    "description": "US SMB transformation partner. Zoho Premium Partner plus product engineering, AI automation, and data engineering delivery from one execution partner.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Innovation Drive, Suite 400",
      "addressLocality": "Atlanta",
      "addressRegion": "GA",
      "postalCode": "30303",
      "addressCountry": "US"
    },
    "telephone": "+1-866-555-0199",
    "email": "hello@fidigital.com",
    "areaServed": "US",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services",
      "itemListElement": [
        { "@type": "Offer", "name": "Zoho Implementation Stack", "url": "https://fidigital.com/solutions/zoho-implementation/" },
        { "@type": "Offer", "name": "Product Engineering", "url": "https://fidigital.com/solutions/product-engineering/" },
        { "@type": "Offer", "name": "AI and Digital Workers", "url": "https://fidigital.com/solutions/ai-digital-workers/" },
        { "@type": "Offer", "name": "Data Engineering", "url": "https://fidigital.com/solutions/data-engineering/" }
      ]
    },
    "sameAs": [
      "https://www.linkedin.com/company/fidigital/",
      "https://clutch.co/profile/fi-digital",
      "https://www.g2.com/sellers/fi-digital"
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <FloatingContactButton />
          <ZohoSalesIQ />
          <ClientScripts />
        </ThemeProvider>
      </body>
    </html>
  );
}
