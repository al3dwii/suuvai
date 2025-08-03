// app/(public)/[locale]/solutions/page.tsx
import Link from 'next/link';
import type { Metadata } from 'next';
import { dataSource } from '@/lib/data';
import type { Locale } from '@/utils/i18n';
import { LOCALES } from '@/utils/i18n';
import { siteUrl } from '@/utils/seo';

import SolutionsGrid from './SolutionsGrid';


export default async function SolutionsPage({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  const slugs   = await dataSource.getAllPillars();
  const pillars = (
    await Promise.all(slugs.map((s) => dataSource.findPillar(s, locale)))
  ).filter(Boolean);           // strip nulls

  return (
    <main className="container mt-16 pt-16 min-h-screen mx-auto px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold">
        {locale === 'ar' ? 'الحلول' : 'Solutions'}
      </h1>

      {/* now rendered purely on the client */}
      <SolutionsGrid locale={locale} pillars={pillars as any[]} />
    </main>
  );
}

