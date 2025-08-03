// lib/data.ts
// -----------------------------------------------------------------------------
//  Suuvai Solutions – data model with 7 Ops-centric pillars (EN + AR)
// -----------------------------------------------------------------------------

export type Tool = {
  slug: string;
  name_en: string;
  name_ar: string;
};

export type Pillar = {
  slug: string;
  title_en: string;
  title_ar: string;
  description_en: string;
  description_ar: string;
  tools: Tool[];
};

export type LocalizedTool = Tool & { name: string };

export type LocalizedPillar = Pillar & {
  title: string;
  description: string;
  tools: LocalizedTool[];
};

/* -------------------------------------------------------------------------- */
/*  Pillars                                                                   */
/* -------------------------------------------------------------------------- */
export const pillars: Pillar[] = [
  /* 1. Payroll & Time Management ------------------------------------------ */
  {
    slug: 'payroll-time-management',
    title_en: 'Payroll & Time Management',
    title_ar: 'الرواتب وإدارة الوقت',
    description_en:
      'Calculate net pay, track working hours and schedule meetings across time zones in one place.',
    description_ar:
      'احسب صافي الرواتب، تتبّع ساعات العمل، وجدول الاجتماعات عبر المناطق الزمنية في مكان واحد.',
    tools: [
      { slug: 'payroll-calculator-online',   name_en: 'Online Payroll Calculator',     name_ar: 'حاسبة الرواتب عبر الإنترنت' },
      { slug: 'online-time-tracking',        name_en: 'Online Time Tracking',          name_ar: 'تتبع الوقت عبر الإنترنت' },
      { slug: 'time-zone-meeting-planner',   name_en: 'Time Zone Meeting Planner',     name_ar: 'مخطط اجتماعات عبر المناطق الزمنية' },
    ],
  },

  /* 2. Talent Acquisition & HR Compliance ---------------------------------- */
  {
    slug: 'hr-talent-compliance',
    title_en: 'Talent Acquisition & HR Compliance',
    title_ar: 'استقطاب المواهب وامتثال الموارد البشرية',
    description_en:
      'Ensure every résumé is ATS-friendly and hiring stays fully compliant.',
    description_ar:
      'تأكّد من توافق جميع السير الذاتية مع أنظمة تتبع المتقدمين وضمان توظيف متوافق بالكامل.',
    tools: [
      { slug: 'resume-ats-checker', name_en: 'ATS Resume Checker', name_ar: 'فاحص سيرة ذاتية ATS' },
    ],
  },

  /* 3. Finance & Operational Automation ------------------------------------ */
  {
    slug: 'finance-automation',
    title_en: 'Finance & Operational Automation',
    title_ar: 'الأتمتة المالية والتشغيلية',
    description_en:
      'Extract invoice data, monitor prices, manage debt and screen investments automatically.',
    description_ar:
      'استخرج بيانات الفواتير، راقب الأسعار، أدر الديون وفرص الاستثمار بشكل تلقائي.',
    tools: [
      { slug: 'invoice-ocr-receipt-scanner', name_en: 'Invoice & Receipt OCR',  name_ar: 'ماسح فواتير وإيصالات OCR' },
      { slug: 'value-stock-screener',        name_en: 'Value Stock Screener',  name_ar: 'مصفاة الأسهم منخفضة القيمة' },
      { slug: 'pricing-intelligence-software', name_en: 'Pricing Intelligence Software', name_ar: 'برنامج ذكاء التسعير' },
      { slug: 'debt-payoff-calculator',      name_en: 'Debt Payoff Calculator', name_ar: 'حاسبة سداد الديون' },
    ],
  },

  /* 4. Governance, Risk & Legal Compliance --------------------------------- */
  {
    slug: 'governance-legal-compliance',
    title_en: 'Governance, Risk & Legal Compliance',
    title_ar: 'الحوكمة والمخاطر والامتثال القانوني',
    description_en:
      'Draft policies, run ISO audits, sign documents and log board decisions with ease.',
    description_ar:
      'أنشئ السياسات، نفّذ تدقيق ISO، وقّع المستندات وسجّل قرارات مجلس الإدارة بسهولة.',
    tools: [
      { slug: 'privacy-policy-generator',        name_en: 'Privacy Policy Generator',        name_ar: 'مولد سياسة الخصوصية' },
      { slug: 'iso-27001-checklist',             name_en: 'ISO 27001 Checklist',             name_ar: 'قائمة تدقيق ISO 27001' },
      { slug: 'web-accessibility-checker',       name_en: 'Web Accessibility Checker',       name_ar: 'فاحص إمكانية الوصول للمواقع' },
      { slug: 'electronic-signature-creator',    name_en: 'Electronic Signature Creator',    name_ar: 'إنشاء توقيع إلكتروني' },
      { slug: 'board-meeting-minutes-template',  name_en: 'Board Meeting Minutes Template',  name_ar: 'قالب محضر اجتماع مجلس الإدارة' },
    ],
  },

  /* 5. Dashboards & Performance Analytics ---------------------------------- */
  {
    slug: 'dashboards-analytics',
    title_en: 'Dashboards & Performance Analytics',
    title_ar: 'لوحات المعلومات وتحليلات الأداء',
    description_en:
      'Build interactive KPI dashboards and surface insights across teams and projects.',
    description_ar:
      'أنشئ لوحات مؤشرات KPI تفاعلية واستخرج الرؤى عبر الفرق والمشاريع.',
    tools: [
      { slug: 'kpi-dashboard-software', name_en: 'KPI Dashboard Software', name_ar: 'برنامج لوحة مؤشرات الأداء' },
    ],
  },

  /* 6. Logistics & Process Tools ------------------------------------------ */
  {
    slug: 'logistics-process',
    title_en: 'Logistics & Process Tools',
    title_ar: 'أدوات اللوجستيات والعمليات',
    description_en:
      'Generate compliant shipping labels and streamline fulfilment paperwork.',
    description_ar:
      'أنشئ ملصقات شحن متوافقة وسهّل مستندات العمليات اللوجستية.',
    tools: [
      { slug: 'shipping-label-generator', name_en: 'Shipping Label Generator', name_ar: 'مولد ملصقات الشحن' },
    ],
  },

  /* 7. Sustainability & ESG Footprint -------------------------------------- */
  {
    slug: 'sustainability-esg',
    title_en: 'Sustainability & ESG Footprint',
    title_ar: 'الاستدامة وبصمة الكربون',
    description_en:
      'Measure, report and reduce your organisation’s carbon footprint.',
    description_ar:
      'قِس بصمتك الكربونية واصنع تقارير الاستدامة وقلّل الانبعاثات.',
    tools: [
      { slug: 'carbon-footprint-calculator', name_en: 'Carbon Footprint Calculator', name_ar: 'حاسبة البصمة الكربونية' },
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*  Data-access helpers                                                       */
/* -------------------------------------------------------------------------- */

export const dataSource = {
  /** Return just the pillar slugs (useful for static params) */
  getAllPillars: async (): Promise<string[]> => pillars.map((p) => p.slug),

  /** Fetch a pillar localized to the requested locale */
  findPillar: async (
    slug: string,
    locale: 'en' | 'ar'
  ): Promise<LocalizedPillar | undefined> => {
    const pillar = pillars.find((p) => p.slug === slug);
    if (!pillar) return undefined;

    return {
      ...pillar,
      title: locale === 'ar' ? pillar.title_ar : pillar.title_en,
      description: locale === 'ar' ? pillar.description_ar : pillar.description_en,
      tools: pillar.tools.map((tool) => ({
        ...tool,
        name: locale === 'ar' ? tool.name_ar : tool.name_en,
      })),
    };
  },
};

