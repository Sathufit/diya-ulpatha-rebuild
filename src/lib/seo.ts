import type { Metadata } from 'next'

export const siteConfig = {
  name: "Diya Ulpatha - Tea Garden Resort",
  description: "Experience comfort and nature at Diya Ulpatha Tea Garden Resort in Matugama. Accommodation packages, day outings, and event spaces in a beautiful tea garden setting.",
  url: "https://diyaulpatha.com",
  ogImage: "/images/og-image.jpg",
  creator: "Diya Ulpatha Tea Garden Resort",
  location: {
    full: "Diya Ulpatha Tea Garden Resort, Horawala Welipenna, Mawathagoda Road, Matugama 12100",
    city: "Matugama",
    district: "Kalutara",
    country: "Sri Lanka"
  },
  contact: {
    whatsapp: "+94776251855",
    phone: "+94776251855",
    email: "diyaulpatha@gmail.com"
  },
  keywords: [
    "tea garden resort Sri Lanka",
    "Matugama accommodation",
    "day out packages Sri Lanka",
    "resort near Colombo",
    "family resort Sri Lanka",
    "wedding venues Sri Lanka",
    "team building Sri Lanka",
    "overnight packages",
    "swimming pool resort"
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
  }
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Resort",
  "name": "Diya Ulpatha Tea Garden Resort",
  "alternateName": "Diya Ulpatha",
  "url": "https://diyaulpatha.com",
  "logo": "https://diyaulpatha.com/images/logo.png",
  "description": "Tea garden resort offering accommodation, day packages, and event spaces in Matugama, Sri Lanka",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Horawala Welipenna, Mawathagoda Road",
    "addressLocality": "Matugama",
    "addressRegion": "Kalutara District",
    "postalCode": "12100",
    "addressCountry": "LK"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 6.5444,
    "longitude": 80.1607
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+94-77-625-1855",
    "contactType": "reservations",
    "email": "diyaulpatha@gmail.com",
    "availableLanguage": ["English", "Sinhala"]
  },
  "priceRange": "$$",
  "amenityFeature": [
    "Swimming Pool",
    "Restaurant",
    "Playground",
    "Volleyball Court",
    "Badminton Court",
    "Tea Garden"
  ]
}
