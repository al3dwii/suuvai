// app/(public)/[locale]/solutions/[pillar]/page.tsx
import { dataSource } from '@/lib/data';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PillarTemplate from '@/components/PillarTemplate';
import { siteUrl } from '@/utils/seo';


export async function generateStaticParams() {
  const slugs = await dataSource.getAllPillars();
  return [
    ...slugs.map((slug) => ({ locale: 'ar', pillar: slug })),
    ...slugs.map((slug) => ({ locale: 'en', pillar: slug })),
  ];
}

export async function generateMetadata({ params }: { params: { locale: 'en' | 'ar'; pillar: string } }): Promise<Metadata> {
  const { locale, pillar: slug } = params;
  const item = await dataSource.findPillar(slug, locale);
  if (!item) throw notFound();

  const title = `${item.title} – suuvai`;
  const description = item.description;
  const canonical = `${siteUrl}/${locale}/solutions/${slug}`;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        ar: `${siteUrl}/ar/solutions/${slug}`,
        en: `${siteUrl}/en/solutions/${slug}`,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: 'suuvai',
      locale,
    },
  };
}


export default async function PillarPage({
  params,
}: {
  params: { locale: 'en' | 'ar'; pillar: string };
}) {
  const item = await dataSource.findPillar(params.pillar, params.locale);
  if (!item) throw notFound();

  return <PillarTemplate locale={params.locale} pillar={item} />;
}

