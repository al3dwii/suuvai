import type { Metadata } from 'next';
import HomeTemplate from '@/components/landing/HomeTemplate';
import { LOCALES } from '@/utils/i18n';
import {
  siteUrl,
  siteName,
  defaultTitle,
  defaultDescription,
  ogImage,
} from '@/utils/seo';

type Props = { params: { locale: (typeof LOCALES)[number] } };

/* ------------------------------------------------------------------ */
/* ① generateMetadata – now fully indexable & locale‑aware            */
/* ------------------------------------------------------------------ */
export function generateMetadata({ params }: Props): Metadata {
  const { locale } = params;

  /* Self‑canonical URL for the current locale */
  const canonical = `${siteUrl}/${locale}`;

  /* Localised meta */
const title =
  locale === 'ar'
    ? 'أتمتة الموارد البشرية والتشغيل والامتثال'
    : 'Workforce & Operations Compliance Automation';

const description =
  locale === 'ar'
    ? 'أدِر التوظيف، الرواتب، الامتثال، وتحليلات الأداء باستخدام أدوات ذكاء اصطناعي متكاملة في منصة واحدة.'
    : 'Manage hiring, payroll, compliance and performance analytics with integrated AI-powered tools in one secure platform.';

  return {
    /** ----------------------------------------------------------------
     * BASIC TAGS
     * ---------------------------------------------------------------- */
    title,
    description,

    /** ----------------------------------------------------------------
     * ROBOTS – explicitly allow indexing & following
     * ---------------------------------------------------------------- */
    robots: {
      index: true,
      follow: true,
    },

    /** ----------------------------------------------------------------
     * ALTERNATES – self‑canonical + hreflangs (+ x‑default for Google)
     * ---------------------------------------------------------------- */
    alternates: {
      canonical,                  // Self‑canonical
      languages: {
        en: `${siteUrl}/en`,
        ar: `${siteUrl}/ar`,
        'x-default': siteUrl,     // Fallback if locale unknown
      },
    },

    /** ----------------------------------------------------------------
     * OPEN GRAPH
     * ---------------------------------------------------------------- */
    openGraph: {
      type: 'website',
      url: canonical,
      title,
      description,
      siteName,
      locale,
      images: ogImage(),          // expects [{ url, width, height, alt }]
    },

    /** ----------------------------------------------------------------
     * TWITTER CARDS
     * ---------------------------------------------------------------- */
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ogImage().map((img) => img.url),
    },
  };
}

/* ------------------------------------------------------------------ */
/* ② Page component – unchanged                                       */
/* ------------------------------------------------------------------ */
export default function Page({ params }: Props) {
  return <HomeTemplate locale={params.locale} />;
}
