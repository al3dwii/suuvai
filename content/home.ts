/* content/home.ts
 * Pure data → easily statically analysed & tree-shaken
 */
export interface HomeCopy {
  hero: { title: string; subtitle: string; cta: string };
  features: Array<{ icon: string; title: string; desc: string }>;
  faqs: Array<{ q: string; a: string }>;
}

/* ─────────────────────────  ENGLISH  ───────────────────────── */

export const HOME_EN: HomeCopy = {
  hero: {
    title: 'Workforce & Operations Compliance Automation',
    subtitle:
      'Hire, pay and protect your team with 16 AI-powered tools — from payroll calculators and ATS résumé scoring to ISO 27001 checklists, e-signatures and shipping-label generators — all in one secure workspace.',
    cta: 'Try all tools free',
  },
  features: [
    {
      icon: 'Users',
      title: 'End-to-end HR & Ops',
      desc: 'Payroll, time-tracking, meeting planners, résumé/ATS checks and KPI dashboards in one hub.',
    },
    {
      icon: 'Zap',
      title: 'AI insights & automation',
      desc: 'Instant calculations, OCR, policy drafting and pricing intelligence powered by specialised AI pipelines.',
    },
    {
      icon: 'ShieldCheck',
      title: 'Security & compliance-first',
      desc: 'ISO 27001-ready infrastructure, ADA/WCAG audits and eIDAS-compliant signatures — with auto-deletion after 24 h.',
    },
    {
      icon: 'Globe',
      title: 'Built for global teams',
      desc: 'Multi-currency payroll, time-zone planners and full RTL localisation (English, Arabic and more).',
    },
  ],
  faqs: [
    {
      q: 'Is there a free tier?',
      a: 'Yes. Every account starts with free credits so you can test all 16 tools before upgrading.',
    },
    {
      q: 'How is my data secured?',
      a: 'Files travel over TLS 1.3, are processed in isolated containers, and auto-deleted within 24 hours.',
    },
    {
      q: 'Can I integrate with my HRIS or ERP?',
      a: 'Pro and Enterprise plans include REST & Zapier endpoints for payroll, OCR and dashboard modules.',
    },
  ],
};

/* ───────────────────────────  ARABIC  ────────────────────────── */

export const HOME_AR: HomeCopy = {
  hero: {
    title: 'أتمتة الموارد البشرية والتشغيل والامتثال',
    subtitle:
      'قم بالتوظيف والدفع وحماية فريقك عبر 16 أداة مدعومة بالذكاء الاصطناعي — من حاسبات الرواتب وفحص السيرة الذاتية بنظام ATS إلى قوائم تدقيق ISO 27001 والتوقيعات الإلكترونية ومولدات ملصقات الشحن — في مساحة عمل واحدة آمنة.',
    cta: 'جرّب الأدوات مجاناً',
  },
  features: [
    {
      icon: 'Users',
      title: 'من التوظيف إلى العمليات',
      desc: 'رواتب، تتبع وقت، مخططات اجتماعات، فحص سير ذاتية ولوحات مؤشرات أداء — كلها في مكان واحد.',
    },
    {
      icon: 'Zap',
      title: 'ذكاء وتلقائية',
      desc: 'حسابات فورية، OCR، إنشاء سياسات وتحليل أسعار يعمل ببايبات ذكاء اصطناعي متخصصة.',
    },
    {
      icon: 'ShieldCheck',
      title: 'أمان وامتثال أولاً',
      desc: 'بنية جاهزة لـ ISO 27001، تدقيق WCAG/ADA، وتوقيعات متوافقة مع eIDAS مع حذف تلقائي خلال 24 ساعة.',
    },
    {
      icon: 'Globe',
      title: 'مصمم لفرق عالمية',
      desc: 'رواتب بعملات متعددة، مخططات مناطق زمنية، ودعم RTL كامل (الإنجليزية، العربية، وأكثر).',
    },
  ],
  faqs: [
    {
      q: 'هل توجد خطة مجانية؟',
      a: 'نعم، كل حساب جديد يحصل على رصيد مجاني لاختبار جميع الأدوات قبل الترقية.',
    },
    {
      q: 'كيف يتم تأمين بياناتي؟',
      a: 'يتم نقل الملفات عبر TLS 1.3 ومعالجتها في حاويات معزولة ثم حذفها تلقائياً خلال 24 ساعة.',
    },
    {
      q: 'هل يمكن الدمج مع نظام الموارد البشرية الخاص بي؟',
      a: 'تشمل خطط Pro و Enterprise واجهات REST و Zapier للوصول إلى وحدات الرواتب و OCR ولوحات التحكم.',
    },
  ],
};

// /* content/home.ts
//  * Pure data → easily statically analysed & tree‑shaken
//  */
// export interface HomeCopy {
//   hero: { title: string; subtitle: string; cta: string };
//   features: Array<{ icon: string; title: string; desc: string }>;
//   faqs: Array<{ q: string; a: string }>;
// }

// export const HOME_EN: HomeCopy = {
//   hero: {
//     title: 'AI‑Powered Content Automation & File Conversion Hub',
//     subtitle:
//       'Convert, optimise & repurpose DOCX, PDF, PPTX, media, CAD, code and data using 30+ specialised AI pipelines — all in one privacy‑first workspace.',
//     cta: 'Get started for free',
//   },
//   features: [
//     { icon: 'FileText', title: 'Universal formats', desc: 'DOCX, PDF, PPTX, audio, video, spreadsheets, CAD, code and more.' },
//     { icon: 'Zap', title: '30+ AI converters', desc: 'From summarising documents to generating slides, transcribing audio and translating code.' },
//     { icon: 'ShieldCheck', title: 'Privacy‑first', desc: 'Files are processed securely and automatically deleted after 24\u00A0hours.' },
//     { icon: 'Globe', title: 'Multilingual', desc: 'English, Arabic and more — RTL support out of the box.' },
//   ],
//   faqs: [ /* update FAQ copy if needed */ ],
// };

// export const HOME_AR: HomeCopy = {
//   hero: {
//     title: 'تحويل الملفات وإنشاء المحتوى بالذكاء الصناعي',
//     subtitle:
//       'حوِّل المستندات، الفيديوهات، العروض التقديمية، والبيانات باستخدام أكثر من ٣٠ أداة متخصصة في مكان واحد وبخصوصية تامة.',
//     cta: 'ابدأ مجاناً',
//   },
//   features: [
//     { icon: 'FileText', title: 'تنسيقات شاملة', desc: 'DOCX، PDF، PPTX، صوت، فيديو، جداول، CAD، كود وغيرها.' },
//     { icon: 'Zap', title: 'أكثر من ٣٠ محولاً ذكياً', desc: 'من تلخيص المستندات إلى إنشاء عروض الشرائح وترجمة الكود.' },
//     { icon: 'ShieldCheck', title: 'خصوصية أولاً', desc: 'يتم معالجة الملفات بأمان وحذفها بعد ٢٤ ساعة.' },
//     { icon: 'Globe', title: 'دعم متعدد اللغات', desc: 'الإنجليزية والعربية وغيرها — مع دعم RTL.' },
//   ],
//   faqs: [ /* عيّن الأسئلة الشائعة الجديدة هنا */ ],
// };
