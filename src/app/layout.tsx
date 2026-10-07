import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://colunaraquiropraxia.com.br"),
  title: "Colunara Quiropraxia | Alívio de Dores na Coluna e Massoterapia em Joaçaba - SC",
  description:
    "Clínica especializada em coluna vertebral, quiropraxia clínica e massoterapia no centro de Joaçaba - SC. Nota 4,8 ★ no Google. Atendimento humanizado com a terapeuta Thaise. Agende sua consulta no WhatsApp!",
  keywords: [
    "quiropraxia joaçaba",
    "quiropraxista joaçaba",
    "colunara quiropraxia",
    "dor na coluna joaçaba",
    "nervo ciatico tratamento",
    "massoterapia clinica joaçaba",
    "hernia de disco quiropraxia",
    "dor lombar sc",
    "ajuste quiropraxista herval d oeste",
    "thaise quiropraxia",
  ],
  authors: [{ name: "Colunara Quiropraxia - Thaise" }],
  openGraph: {
    title: "Colunara Quiropraxia | Sua Coluna em Boas Mãos em Joaçaba",
    description:
      "Alívio de dores na coluna, hérnia de disco, nervo ciático e torcicolo. Atendimento clínico com a terapeuta Thaise em Joaçaba - SC. Estacionamento e acessibilidade total.",
    url: "https://colunaraquiropraxia.com.br",
    siteName: "Colunara Quiropraxia",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/clinic-interior.jpg",
        width: 1200,
        height: 630,
        alt: "Consultório Colunara Quiropraxia Joaçaba SC",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Colunara Quiropraxia",
    "image": "https://colunaraquiropraxia.com.br/images/logo.png",
    "@id": "https://colunaraquiropraxia.com.br",
    "url": "https://colunaraquiropraxia.com.br",
    "telephone": "+5549988974419",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "R. Frei Edgar, 290 - Sala 502",
      "addressLocality": "Joaçaba",
      "addressRegion": "SC",
      "postalCode": "89600-000",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -27.1725,
      "longitude": -51.5074
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "21:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "11"
    },
    "medicalSpecialty": "Chiropractic",
    "founder": {
      "@type": "Person",
      "name": "Thaise"
    }
  };

  return (
    <html lang="pt-BR" className={`${jakarta.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className="min-h-screen bg-[#060910] text-slate-100 antialiased selection:bg-teal-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
