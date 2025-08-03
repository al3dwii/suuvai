'use client';
import { faqs } from './mock-data';
import { useCallback, useState } from 'react';
import { useParams } from 'next/navigation';   // ✅ App-router hook

export const Faqs = () => {
  const [active, setActive] = useState<number[]>([]);

  // params = { locale: 'en' | 'ar', ... }
  const params = useParams() as { locale?: string };
  const locale = params.locale === 'ar' ? 'ar' : 'en';

  const toggle = useCallback(
    (id: number) =>
      setActive((prev) =>
        prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
      ),
    []
  );

  const faqList = faqs[locale];

  return (
    <section className="bg-primary">
      <div className="max-w-7xl mx-auto py-5 px-5 md:py-20 md:px-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <h3 className="text-white text-2xl font-extrabold">
          {locale === 'ar' ? 'الأسئلة المتكررة' : 'Frequently Asked Questions'}
        </h3>

        <div>
          {faqList.map((faq) => (
            <div
              key={faq.id}
              onClick={() => toggle(faq.id)}
              className="py-3 text-white group cursor-pointer"
            >
              <div className="flex justify-between items-center border-b border-b-white pb-3">
                <h4 className="text-lg font-semibold">{faq.question}</h4>
              </div>
              <p
                className={
                  active.includes(faq.id)
                    ? 'mt-3 text-[#cccccc] text-[16px]'
                    : 'hidden'
                }
              >
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
