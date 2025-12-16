import { Organization, WithContext } from 'schema-dts';

export function getOrganizationSchema(): WithContext<Organization> {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "B.Design",
    "alternateName": "BDesign Perú",
    "url": "https://www.bdesign.agency",
    "logo": "https://www.bdesign.agency/logo-bdesign.png",
    "image": "https://www.bdesign.agency/og-image.jpg",
    "description": "Especialistas en muebles de melamine a medida y diseño de interiores en Lima, Perú. Cocinas modulares, closets personalizados, escritorios, reposteros y más.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lima",
      "addressCountry": "PE"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+51-972-589-821",
      "contactType": "customer service",
      "availableLanguage": ["es", "Spanish"]
    },
    "sameAs": [
      "https://www.instagram.com/b.design2111/",
      "https://www.facebook.com/profile.php?id=61554683582193",
      "https://www.tiktok.com/@b..design"
    ]
  };
}
