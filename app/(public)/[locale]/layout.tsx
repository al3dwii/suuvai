// app/(public)/[locale]/layout.tsx
import { NextIntlClientProvider } from 'next-intl';
import Providers from '@/components/Providers';
import PlanWrapper from '@/components/PlanWrapper';
import { auth } from '@clerk/nextjs/server';
import { db } from '@/lib/db';
import { getAllUserData, UserData } from '@/lib/getAllUserData';

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: 'en' | 'ar' };
}) {
  /* 1  Ensure the signed‑in user has a credits record */
  const { userId } = await auth();
  let userData: UserData | null = null;

  if (userId) {
    await db.userCredits.upsert({
      where:  { userId },
      create: { userId, credits: 500, usedCredits: 0 },
      update: {},
    });
    userData = await getAllUserData(userId);
  }

  /* 2  Load locale messages */
  const messages = (await import(`../../../messages/${locale}.json`)).default;

  /* 3  Wrap page content with providers */
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Providers userData={userData}>
        <PlanWrapper>{children}</PlanWrapper>
      </Providers>
    </NextIntlClientProvider>
  );
}
