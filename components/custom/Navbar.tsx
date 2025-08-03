// src/components/Navigation.tsx
'use client';
import { Link } from "@/i18n/navigation";

// import Link from 'next/link';
import Image from 'next/image';
import { UserButton, useUser } from '@clerk/nextjs';
// import { LocaleLink } from '@/components/LocaleLink';
// import { LocaleToggle } from '@/components/LocaleToggle';
import LocaleToggle from '@/components/LocaleToggle';


export default function Navigation() {
  const { isSignedIn } = useUser();

  return (
    <header className="fixed top-0 z-50 flex w-full justify-center bg-primary pt-8 backdrop-blur-xl text-black">
      <div className="container flex h-16 items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="relative h-10 w-10 animate-spin">
            <Image
              fill
              alt="Logo"
              src="/logo.png"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <span className="ml-2 text-2xl font-bold text-white">suuvai</span>
        </Link>

        {/* Main nav */}
        <nav className="hidden md:flex">
          <ul className="flex items-center gap-4 text-white">
             <li>
              <Link href="/solutions">الحلول</Link>
            </li>
            <li>
              <Link href="/learn">التعلم</Link>
            </li>
            <li>
              <Link href="/pricing">الاشتراك</Link>
            </li>
            <li>
              <Link href="/blog">المدونة</Link>
            </li>
            
          </ul>
        </nav>
              


        {/* Right side: mode, auth, locale */}
        <div className="flex items-center gap-4">
          <LocaleToggle />

          {isSignedIn ? (
            <>
              <Link
                href="/dashboard"
                className="bg-[#7d63ff] text-white py-2 px-3 rounded-md hover:bg-[#7d63ff]/80"
              >
                لوحة التحكم
              </Link>
              <UserButton afterSignOutUrl="/" />
            </>
          ) : (
            <div className="flex gap-2">
              <Link
                href="/sign-up"
                className="bg-[#7859ff] text-white py-2 px-4 rounded-xl hover:bg-[#7859ff]/80"
              >
                التسجيل
              </Link>
              <Link
                href="/sign-in"
                className="bg-[#5f4b8b]/60 text-white py-2 px-4 rounded-xl hover:bg-[#7859ff]/80"
              >
                الدخول
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
