import type { Metadata } from 'next'

export const siteConfig = {
  name: "Diya Ulpatha - Authentic Ayurvedic Wellness Center",
  description: "Experience authentic Ayurvedic healing in Sri Lanka. Traditional treatments, Panchakarma therapy, accommodation, and professional training programs. Expert doctors, natural healing.",
  url: "https://diyaulpatha.com",
  ogImage: "/images/og-image.jpg",
  creator: "Diya Ulpatha Wellness Center",
  keywords: [
    "Ayurveda Sri Lanka",
    "Panchakarma treatment",
    "Ayurvedic massage",
    "traditional healing",
    "wellness retreat",
    "herbal medicine",
    "Ayurvedic doctor",
    "natural healing",
    "detox therapy",
    "meditation retreat",
    "Kandy wellness center",
    "authentic Ayurveda",
    "holistic healing",
    "Ayurvedic accommodation",
    "wellness training"
  ]
}

export function generateMetadata({
  title,
  description,
  image,
  keywords,
  noIndex = false,
  canonicalUrl
}: {
  title?: string
  description?: string
  image?: string
  keywords?: string[]
  noIndex?: boolean
  canonicalUrl?: string
}): Metadata {
  const metaTitle = title 
    ? `${title} | ${siteConfig.name}`
    : siteConfig.name
  
  const metaDescription = description || siteConfig.description
  const metaImage = image || siteConfig.ogImage
  const metaKeywords = keywords 
    ? [...siteConfig.keywords, ...keywords]
    : siteConfig.keywords

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: metaKeywords.join(', '),
    authors: [{ name: siteConfig.creator }],
    creator: siteConfig.creator,
    publisher: siteConfig.creator,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: canonicalUrl || '/',
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: canonicalUrl || siteConfig.url,
      siteName: siteConfig.name,
      images: [
        {
          url: metaImage,
          width: 1200,
          height: 630,
          alt: metaTitle,
        }
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: [metaImage],
      creator: '@diyaulpatha',
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-verification-code',
      yandex: 'your-yandex-verification-code',
    },
  }
}

// Structured Data Schemas
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  "name": "Diya Ulpatha Ayurvedic Wellness Center",
  "alternateName": "Diya Ulpatha",
  "url": "https://diyaulpatha.com",
  "logo": "https://diyaulpatha.com/images/logo.png",
  "description": "Authentic Ayurvedic wellness center in Sri Lanka offering traditional treatments, Panchakarma therapy, and professional training programs.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Wellness Center Road",
    "addressLocality": "Kandy",
    "addressRegion": "Central Province",
    "postalCode": "20000",
    "addressCountry": "LK"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 7.2906,
    "longitude": 80.6337
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+94-11-222-3344",
    "contactType": "customer service",
    "email": "info@diyaulpatha.com",
    "availableLanguage": ["English", "Sinhala"]
  },
  "medicalSpecialty": [
    "Ayurvedic Medicine",
    "Panchakarma Therapy",
    "Herbal Medicine",
    "Wellness Therapy"
  ],
  "priceRange": "$$",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday", 
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "08:00",
    "closes": "20:00"
  }
}

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Diya Ulpatha",
  "url": "https://diyaulpatha.com",
  "description": "Authentic Ayurvedic wellness center offering traditional healing treatments in Sri Lanka",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://diyaulpatha.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
