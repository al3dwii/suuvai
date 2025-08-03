export const mockTools = [
    {
        id: 1,
        name: 'تحويل البي دي اف',
        href: '/pdf-converter',
    },
    {
        id: 2,
        name: 'تحويل الصور',
        href: '/image-converter',
    },       
]

export const mockKnowledgeBase = [
    
    {
        id: 1,
        name: 'بنود الخدمة ',
        href: '/terms-of-service',
    },
    {
        id: 2,
        name: 'سياسية الخصوصية',
        href: 'privacy-policy',
    },    
]

export const mockCompany = [
    {
        id: 1,
        name: 'المدونة',
        href: '/blog',
    },
    {
        id: 2,
        name: 'الباقات',
        href: '/pricing',
    },
]

/* -------------------------------------------------------------------------- */
/*  FAQs – bilingual array keyed by locale                                    */
/* -------------------------------------------------------------------------- */

type FAQ = { id: number; question: string; answer: string };

export const faqs: Record<'en' | 'ar', FAQ[]> = {
  /* ─────────────────────────────  English  ─────────────────────────────── */
  en: [
    {
      id: 1,
      question: 'What is Suuvai and who is it for?',
      answer:
        'Suuvai is an AI-powered suite that automates payroll, time-tracking, HR compliance, legal documents and more—built for operations, HR and finance teams in SMEs and mid-market companies.',
    },
    {
      id: 2,
      question: 'Is there a free plan?',
      answer:
        'Yes. Every new workspace starts with free credits so you can test all 16 tools—no credit-card required.',
    },
    {
      id: 3,
      question: 'How is my data secured?',
      answer:
        'All files are encrypted in transit (TLS 1.3) and at rest. They’re processed in isolated containers and auto-deleted within 24 hours. The platform is designed to be ISO 27001-ready.',
    },
    {
      id: 4,
      question: 'Can I connect Suuvai to my HRIS or ERP?',
      answer:
        'Pro and Enterprise plans include REST and Zapier endpoints so you can push payroll data, pull invoice OCR results or embed KPI dashboards inside your existing systems.',
    },
    {
      id: 5,
      question: 'Which languages and currencies are supported?',
      answer:
        'The UI ships in English and Arabic with full RTL support. Payroll calculators handle multi-currency and country-specific tax rules for the US, Canada and GCC out of the box.',
    },
  ],

  /* ──────────────────────────────  Arabic  ─────────────────────────────── */
  ar: [
    {
      id: 1,
      question: 'ما هو Suuvai ولمن موجّه؟',
      answer:
        'Suuvai منصة مدعومة بالذكاء الاصطناعي لأتمتة الرواتب وتتبع الوقت والامتثال القانوني وإنشاء المستندات، مخصّصة لفرق العمليات والموارد البشرية والمالية في الشركات الصغيرة والمتوسطة والمتوسطة الحجم.',
    },
    {
      id: 2,
      question: 'هل توجد خطة مجانية؟',
      answer:
        'نعم، يحصل كل Workspace جديد على رصيد مجاني يسمح بتجربة جميع الأدوات الـ 16 دون الحاجة إلى بطاقة ائتمان.',
    },
    {
      id: 3,
      question: 'كيف يتم تأمين بياناتي؟',
      answer:
        'يتم تشفير الملفات أثناء النقل (TLS 1.3) وعند التخزين، وتُعالج في حاويات معزولة ثم تُحذف تلقائياً خلال 24 ساعة. تم تصميم المنصة لتتوافق مع متطلبات ISO 27001.',
    },
    {
      id: 4,
      question: 'هل يمكن ربط Suuvai بنظام الموارد البشرية أو الـ ERP الخاص بي؟',
      answer:
        'تتضمن خطط Pro و Enterprise واجهات REST وتكامل Zapier لتمكين إرسال بيانات الرواتب أو جلب نتائج OCR للفواتير أو تضمين لوحات مؤشرات KPI داخل أنظمتك القائمة.',
    },
    {
      id: 5,
      question: 'ما اللغات والعملات المدعومة؟',
      answer:
        'واجهة المستخدم متاحة بالإنجليزية والعربية مع دعم RTL كامل. تدعم حاسبات الرواتب عملات متعددة وقواعد ضريبية لولايات المتحدة وكندا ودول الخليج مباشرة.',
    },
  ],
};


    


    
