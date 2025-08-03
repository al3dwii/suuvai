// components/StructuredData.tsx
import React from 'react';
import type { Converter as ConverterRow } from '@/lib/server/converters';

type Props = { data: Record<string, any> };

export default function StructuredData({ data }: Props) {
  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/* ---------- Helpers for HowTo & FAQ ---------- */

export function buildHowToSchema(row: ConverterRow, locale: 'en' | 'ar') {
  const isAr = locale === 'ar';
  const steps = isAr
    ? [
        'التسجيل أو تسجيل الدخول.',
        'رفع الملف عبر السحب-والإفلات أو زر «اختر ملف».',
        'اختيار قالب أو تفعيل الاقتراح الذكي.',
        'تخصيص الشرائح (ألوان، خطوط، شعارات).',
        'تنزيل ملف PPTX أو مشاركته عبر رابط.',
      ]
    : [
        'Sign up or sign in.',
        'Upload the file via drag-and-drop or choose file.',
        'Pick a template or enable smart design.',
        'Customize slides (colors, fonts, logos).',
        'Download PPTX or share via link.',
      ];

  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: isAr ? row.label_ar : row.label_en,
    inLanguage: locale,
    step: steps.map((text, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: text,
    })),
  };
}

export function buildFaqSchema(row: ConverterRow, locale: 'en' | 'ar') {
  const isAr = locale === 'ar';
  const faq = isAr
    ? [
        {
          q: `ما هو الحد الأقصى لحجم الملف؟`,
          a: 'حتى 25 م.ب في الخطة المجانية و200 م.ب في المدفوعة.',
        },
        {
          q: 'هل تُحفظ الخطوط العربية واتجاه RTL؟',
          a: 'نعم، نحافظ على الخطوط واتجاه النص من اليمين إلى اليسار.',
        },
      ]
    : [
        {
          q: 'What is the max file size?',
          a: 'Up to 25 MB on the free plan and 200 MB on paid plans.',
        },
        {
          q: 'Do you preserve fonts and RTL?',
          a: 'Yes, fonts and right-to-left direction are preserved.',
        },
      ];

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
}
