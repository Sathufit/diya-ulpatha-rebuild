import { Metadata } from 'next'
import { generateMetadata } from '@/lib/seo'

export const metadata: Metadata = generateMetadata({
  title: "Ayurvedic Treatments - Traditional Healing Therapies",
  description: "Discover authentic Ayurvedic treatments including Panchakarma, Abhyanga massage, herbal therapies & detox programs. Expert practitioners, natural healing, personalized care in Sri Lanka.",
  keywords: [
    "Panchakarma treatment Sri Lanka",
    "Ayurvedic massage therapy",
    "herbal detox treatment",
    "traditional healing methods",
    "Abhyanga massage",
    "Shirodhara therapy",
    "Ayurvedic body treatments",
    "natural wellness therapy"
  ],
  canonicalUrl: "/treatments"
})

export default function TreatmentsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
