// import { ArrowRight } from "lucide-react";
// import { cn } from "@/components/ui/cn";
// import { Button } from "@/components/ui/custom-button";
import { SignedIn, SignedOut } from "@clerk/nextjs";
// import { LocaleLink } from "@/components/LocaleLink";
import Link from 'next/link';
import { HOME_EN, HOME_AR, HomeCopy } from '@/content/home';
import { LOCALES } from '@/utils/i18n';

type Props = { locale: (typeof LOCALES)[number] };

export default function Hero({ locale }: Props) {
    const t: HomeCopy = locale === 'ar' ? HOME_AR : HOME_EN;
      const isAr = locale === 'ar';

  
  return (
    <div dir={isAr ? 'rtl' : 'ltr'} className="bg__image relative flex flex-col text-center items-center justify-center space-y-6 py-20">
      <div className="bg-gradient-primary h-full w-full absolute top-0 left-0 z-10" />

  

      <button
        className="flex mt-10 items-center p-2 text-white justify-center z-20 text-[14px] rounded-full bg-[#3e3469]"
      >
         جاهز بدقة عالية في دقائق 
      </button>
      

      <h1 className="text-white capitalize text-center text-4xl md:text-[60px] z-20 px-10 font-[700] leading-[50px] md:leading-[60px] sm:text-center">
          {t.hero.title}
      </h1>
        <p className="text-slate-300 text-[16px] md:text-[18px] z-20 px-10 text-justify max-w-[920px]">
            {t.hero.subtitle}  </p>   

        {/* <p className="text-gray-600">{t.hero.subtitle}</p> */}
       

     <p className="z-20 max-w-[450px] font-semibold text-center rounded-xl text-yellow-300 text-[16px]">
        سجل وجرب الخدمة مجاناً 
      </p>

       <Link
          href={`/${locale}/dashboard`}
          className="relative z-20 inline-block rounded-lg hover:bg-primary px-6 py-3
                    font-semibold text-white shadow bg-primary/60"
        >
          {t.hero.cta}
        </Link>
     
    </div>
  );
};
