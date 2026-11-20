import { DemoLawyer, DemoScenario, DraftingTemplate, LawSearchEntry, Language, SpecialtyKey } from '../types';

export const UI_COPY = {
  brand: {
    bn: 'আইন সহজ',
    en: 'Ain Shohoj',
  },
  tagline: {
    bn: 'আইন হোক সহজ, ন্যায় হোক কাছে।',
    en: 'Make law simple, bring justice closer.',
  },
  disclaimerBanner: {
    bn: 'এটি কেবল সাধারণ আইনি তথ্য, কোনো আইনি পরামর্শ নয়। চূড়ান্ত সিদ্ধান্তের আগে আইনজীবীর সাথে কথা বলুন।',
    en: 'This is legal information, not legal advice.',
  },
  nav: {
    demo: { bn: 'লাইভ ডেমো', en: 'Live Demo' },
    howItWorks: { bn: 'কীভাবে কাজ করে', en: 'How It Works' },
    forLawyers: { bn: 'আইনজীবীদের জন্য', en: 'For Lawyers' },
    roadmap: { bn: 'রোডম্যাপ', en: 'Roadmap' },
    emergency: { bn: 'জরুরি সহায়তা', en: 'Emergency' },
  },
  hero: {
    headline: {
      bn: 'আইন হোক সহজ',
      en: 'Law Made Simple',
    },
    subline: {
      bn: 'আপনার সমস্যাটি লিখুন। জানুন প্রযোজ্য আইন, করণীয় ধাপ — আর পান যাচাইকৃত আইনজীবীর সহায়তা।',
      en: 'Describe your situation. Learn which Bangladeshi laws apply, what steps to take — and connect with verified lawyers.',
    },
    primaryCta: {
      bn: 'শুরু করুন বিনামূল্যে',
      en: 'Start Free',
    },
    secondaryCta: {
      bn: 'আইনজীবীদের জন্য',
      en: 'For Lawyers',
    },
    topicsCardTitle: {
      bn: 'প্রাথমিক ৫টি আইনি বিষয়',
      en: 'Five Core Legal Topics',
    },
    topicsCardSubtitle: {
      bn: 'যেকোনো বিষয়ে ক্লিক করে ডেমোতে উদাহরণ দেখুন',
      en: 'Select a topic to explore in the live demo',
    },
    topics: [
      {
        key: 'tenant' as const,
        title: { bn: 'ভাড়াটিয়া ও বাড়িভাড়া', en: 'Tenant & Rent' },
        desc: { bn: 'উচ্ছেদ নোটিশ, জামানত ও ভাড়া চুক্তি', en: 'Eviction notice, deposit, rent agreements' },
        scenarioId: 'tenant-eviction',
      },
      {
        key: 'cyber' as const,
        title: { bn: 'সাইবার ও অনলাইন হয়রানি', en: 'Cyber & Online Safety' },
        desc: { bn: 'অনলাইন হুমকি, ভুয়া আইডি ও ডিজিটাল নিরাপত্তা', en: 'Online threats, impersonation, digital safety' },
        scenarioId: 'online-harassment',
      },
      {
        key: 'land' as const,
        title: { bn: 'জমি ও সীমানা বিরোধ', en: 'Land & Boundary' },
        desc: { bn: 'খতিয়ান, দলিল ও সীমানা সংক্রান্ত সমস্যা', en: 'Khatian, deed records, boundary disputes' },
        scenarioId: 'land-boundary',
      },
      {
        key: 'family' as const,
        title: { bn: 'পারিবারিক আইন', en: 'Family Law' },
        desc: { bn: 'দেনমোহর, ভরণপোষণ ও অভিভাবকত্ব', en: 'Dower, maintenance, guardianship' },
        samplePrompt: {
          bn: 'বিবাহবিচ্ছেদের পর সন্তানের ভরণপোষণ ও দেনমোহর আদায়ের আইনি প্রক্রিয়া কী?',
          en: 'What is the legal process for claiming maintenance and dower after divorce in Bangladesh?',
        },
      },
      {
        key: 'consumer' as const,
        title: { bn: 'ভোক্তা অধিকার', en: 'Consumer Rights' },
        desc: { bn: 'ভেজাল পণ্য, প্রতারণা ও সেবা বঞ্চনা', en: 'Defective goods, overcharging, service fraud' },
        samplePrompt: {
          bn: 'অনলাইনে পণ্য কিনে প্রতারিত হলে ভোক্তা অধিকার অধিদপ্তরে অভিযোগ করার নিয়ম কী?',
          en: 'How can I file a complaint with the Directorate of National Consumer Rights Protection for online shopping fraud?',
        },
      },
    ],
  },
  demo: {
    sectionTitle: {
      bn: 'লাইভ ডেমো: আপনার আইনি প্রশ্ন যাচাই করুন',
      en: 'Live Demo: Check Your Legal Situation',
    },
    sectionSubtitle: {
      bn: 'সহজ ভাষায় আপনার সমস্যাটি লিখুন অথবা নিচের তিনটি তাৎক্ষণিক ডেমো উদাহরণ থেকে যেকোনো একটি নির্বাচন করুন।',
      en: 'Write your situation in plain language or select one of the three instant demo scenarios below.',
    },
    inputLabel: {
      bn: 'আপনার সমস্যাটি লিখুন',
      en: 'Describe your situation',
    },
    placeholder: {
      bn: 'উদাহরণ: বাড়িওয়ালা কোনো লিখিত নোটিশ না দিয়েই আমাকে ৭ দিনের মধ্যে বাসা ছাড়তে বলছেন...',
      en: 'Example: My landlord asked me to leave the apartment within 7 days without any written notice...',
    },
    checkButton: {
      bn: 'যাচাই করুন',
      en: 'Check',
    },
    checkingButton: {
      bn: 'বিশ্লেষণ চলছে...',
      en: 'Checking...',
    },
    clearButton: {
      bn: 'মুছুন',
      en: 'Clear',
    },
    scenariosLabel: {
      bn: 'তাৎক্ষণিক ডেমো উদাহরণ (ইন্টারনেট ছাড়াই তাৎক্ষণিক ফলাফল):',
      en: 'Instant Demo Scenarios (loads pre-written sample results):',
    },
    sampleModeBadge: {
      bn: 'তাৎক্ষণিক নমুনা ফলাফল',
      en: 'Pre-written sample result',
    },
    liveModeBadge: {
      bn: 'এআই-ভিত্তিক আইনি তথ্য',
      en: 'Live AI legal information',
    },
    resultLabels: {
      summary: { bn: 'সহজ ভাষায় সারসংক্ষেপ', en: 'Plain-Language Summary' },
      relevantLaws: { bn: 'প্রযোজ্য আইনসমূহ', en: 'Relevant Laws' },
      sectionPrefix: { bn: 'ধারা:', en: 'Section:' },
      documents: { bn: 'প্রস্তুত রাখার মতো কাগজপত্র', en: 'Documents to Prepare' },
      nextSteps: { bn: 'পরবর্তী করণীয় ধাপ', en: 'Next Steps' },
      findLawyer: { bn: 'আইনজীবী খুঁজুন', en: 'Find a Lawyer' },
      uncertaintyTitle: { bn: 'সতর্কতা ও যাচাই', en: 'Note on Certainty' },
    },
  },
  howItWorks: {
    title: {
      bn: 'কীভাবে কাজ করে',
      en: 'How It Works',
    },
    subtitle: {
      bn: 'জটিল আইনি পরিভাষা নয় — তিনটি সহজ ধাপে আপনার করণীয় বুঝে নিন।',
      en: 'No dense legal jargon — understand your options in three clear steps.',
    },
    steps: [
      {
        num: '০১',
        numEn: '01',
        title: { bn: 'সমস্যা বর্ণনা করুন', en: 'Describe' },
        desc: {
          bn: 'আপনার প্রতিদিনের বাংলা বা ইংরেজি ভাষায় কী ঘটেছে তা সংক্ষেপে লিখুন। কোনো আইনি শব্দ জানার প্রয়োজন নেই।',
          en: 'Explain what happened in everyday Bangla or English. You do not need to know legal terminology.',
        },
      },
      {
        num: '০২',
        numEn: '02',
        title: { bn: 'আইন ও অধিকার বুঝুন', en: 'Understand' },
        desc: {
          bn: 'প্রযোজ্য বাংলাদেশি আইন, সম্ভাব্য ধারা এবং কোন কাগজপত্র গুরুত্বপূর্ণ তা গুছিয়ে দেখানো হয়।',
          en: 'See the applicable Bangladeshi Acts, relevant sections where clear, and which documents matter.',
        },
      },
      {
        num: '০৩',
        numEn: '03',
        title: { bn: 'সঠিক পদক্ষেপ নিন', en: 'Take Action' },
        desc: {
          bn: 'ধারাবাহিক করণীয় ধাপ অনুসরণ করুন অথবা প্রয়োজন হলে যাচাইকৃত আইনজীবীর সাথে যোগাযোগ করুন।',
          en: 'Follow practical next steps, prepare your checklist, or connect with a verified lawyer.',
        },
      },
    ],
  },
  features: {
    title: {
      bn: 'কেন আইন সহজ',
      en: 'Core Features',
    },
    subtitle: {
      bn: 'সাধারণ নাগরিকদের জন্য বিশ্বাসযোগ্য ও ব্যবহারবান্ধব আইনি তথ্য ব্যবস্থা।',
      en: 'Built for clarity, caution, and everyday accessibility across Bangladesh.',
    },
    items: [
      {
        title: { bn: 'সহজ বাংলায় নির্দেশনা', en: 'Plain-Bangla Guidance' },
        desc: {
          bn: 'কঠিন আদালতীয় ভাষার বদলে দৈনন্দিন বাংলায় আইনি বিষয়গুলোর পরিষ্কার ব্যাখ্যা।',
          en: 'Everyday Bangla explanations instead of dense, intimidating statutory language.',
        },
        wide: true,
      },
      {
        title: { bn: 'প্রতিটি উত্তরে আইনের উল্লেখ', en: 'Every Answer Cites the Law' },
        desc: {
          bn: 'প্রতিটি তথ্যের সাথে প্রযোজ্য বাংলাদেশি আইনের নাম ও প্রাসঙ্গিক ধারা উল্লেখ থাকে — অনিশ্চিত হলে স্পষ্টভাবে জানানো হয়।',
          en: 'Every response names the relevant Bangladeshi Act and section when confident, or advises checking with a lawyer.',
        },
        wide: true,
      },
      {
        title: { bn: 'প্রয়োজনীয় কাগজপত্রের চেকলিস্ট', en: 'Documents Checklist' },
        desc: {
          bn: 'আইনজীবী বা থানায় যাওয়ার আগে কোন কোন প্রমাণ ও কাগজ গুছিয়ে নেবেন তার সহজ তালিকা।',
          en: 'An interactive checklist of deeds, notices, screenshots, or receipts to prepare beforehand.',
        },
        wide: false,
      },
      {
        title: { bn: 'যাচাইকৃত আইনজীবী সংযোগ', en: 'Verified Lawyer Connection' },
        desc: {
          bn: 'সমস্যার ধরন অনুযায়ী দক্ষ আইনজীবীর সাথে পরামর্শের সহজ পথ।',
          en: 'Connect with lawyers experienced in the specific area of law your matter involves.',
        },
        wide: false,
      },
      {
        title: { bn: 'জরুরি পরিস্থিতিতে দ্রুত দিকনির্দেশনা', en: 'Emergency Guidance' },
        desc: {
          bn: 'হয়রানি, পারিবারিক সহিংসতা বা গ্রেপ্তার পরিস্থিতিতে তাৎক্ষণিক নিরাপত্তা ও আইনি সহায়তার পথনির্দেশ।',
          en: 'Clear immediate guidance for harassment, domestic violence, and arrest situations.',
        },
        wide: false,
      },
    ],
  },
  forLawyers: {
    badge: { bn: 'আইনজীবীদের জন্য · আইন সহজ প্রো', en: 'For Lawyers · Ain Shohoj Pro' },
    title: {
      bn: 'আইনজীবীদের দৈনন্দিন কাজের স্মার্ট সহায়ক',
      en: 'Practical Tools for Legal Practitioners',
    },
    subtitle: {
      bn: 'ধারা অনুসন্ধান, খসড়া তৈরি ও মামলার নোট সংরক্ষণে সময় বাঁচাতে আইন সহজ প্রো।',
      en: 'Save hours on statute lookup, bilingual drafting templates, and structured client notes.',
    },
    tabs: {
      search: { bn: 'দ্রুত আইন অনুসন্ধান', en: 'Fast Law Search' },
      templates: { bn: 'খসড়া টেমপ্লেট', en: 'Drafting Templates' },
      notes: { bn: 'মামলার নোট', en: 'Case Notes' },
    },
    searchPlaceholder: {
      bn: 'আইনের নাম বা বিষয় লিখুন (যেমন: ভাড়া, সাইবার, জমি)...',
      en: 'Filter laws by keyword (e.g., rent, cyber, land)...',
    },
    notesExample: {
      title: { bn: 'ক্লায়েন্ট ইনটেক ও মামলার নোট (নমুনা কর্মক্ষেত্র)', en: 'Client Intake & Case Notes (Sample Workspace)' },
      matter: { bn: 'বিষয়: ভাড়াটিয়া উচ্ছেদ নোটিশ ও জামানত ফেরত', en: 'Matter: Tenant Eviction Notice & Deposit Recovery' },
      items: [
        {
          bn: 'চুক্তিপত্রের মেয়াদ ও নোটিশ পিরিয়ড যাচাই সম্পন্ন',
          en: 'Verified lease duration and written notice clause',
        },
        {
          bn: 'ভাড়া পরিশোধের ব্যাংক/মোবাইল ব্যাংকিং রসিদ সংযুক্ত',
          en: 'Collected bank and MFS rent payment receipts',
        },
        {
          bn: 'পরবর্তী ধাপ: ১৫ দিনের সময়সীমা উল্লেখ করে আইনি নোটিশ প্রেরণ',
          en: 'Next action: Serve formal legal notice citing 15-day statutory window',
        },
      ],
    },
    directoryTitle: {
      bn: 'আইনজীবী খুঁজুন',
      en: 'Find a Lawyer',
    },
    demoDataLabel: {
      bn: 'ডেমো তথ্য (উদাহরণস্বরূপ)',
      en: 'Demo data',
    },
    requestConsult: {
      bn: 'পরামর্শের অনুরোধ',
      en: 'Request Consultation',
    },
    requestedConsult: {
      bn: 'অনুরোধ নথিভুক্ত হয়েছে (ডেমো)',
      en: 'Request noted (Demo)',
    },
  },
  businessModel: {
    title: {
      bn: 'টেকসই ব্যবসায়িক মডেল',
      en: 'Business Model',
    },
    subtitle: {
      bn: 'নাগরিকদের জন্য মূল তথ্য সেবা চিরকাল বিনামূল্যে রেখে, প্রো ও বিটুবি সেবার মাধ্যমে টেকসই আয়।',
      en: 'Free core legal guidance for citizens, sustained by optional templates, lawyer tools, and institutional licences.',
    },
    assumptionLabel: {
      bn: 'সব মূল্যই পরিকল্পনাগত অনুমান (Planning assumptions)',
      en: 'All prices are planning assumptions',
    },
    headers: {
      tier: { bn: 'সেবা স্তর', en: 'Tier' },
      audience: { bn: 'কাদের জন্য', en: 'For Whom' },
      offering: { bn: 'মূল সুবিধা', en: 'Core Offering' },
      pricing: { bn: 'মূল্য (পরিকল্পনাগত অনুমান)', en: 'Price (Planning Assumptions)' },
    },
    rows: [
      {
        tier: { bn: 'সিটিজেন ফ্রি', en: 'Citizen Free' },
        audience: { bn: 'সাধারণ নাগরিক', en: 'Citizens' },
        offering: {
          bn: 'সমস্যা বিশ্লেষণ, প্রযোজ্য আইনের উল্লেখ, করণীয় ধাপ ও জরুরি নির্দেশনা',
          en: 'Plain-language issue check, law citations, next steps, and emergency guidance',
        },
        pricing: { bn: 'বিনামূল্যে (০ টাকা)', en: 'Free (BDT 0)' },
      },
      {
        tier: { bn: 'ডকুমেন্ট টেমপ্লেট প্যাক', en: 'Document Template Packs' },
        audience: { bn: 'নাগরিক ও ক্ষুদ্র উদ্যোক্তা', en: 'Citizens & Small Businesses' },
        offering: {
          bn: 'ভাড়া চুক্তি, লিগ্যাল নোটিশ বা আবেদনের পূরণযোগ্য খসড়া প্যাক',
          en: 'Guided bilingual templates for notices, agreements, and applications',
        },
        pricing: { bn: '৫০ – ৩০০ টাকা (পরিকল্পনাগত অনুমান)', en: 'BDT 50–300 (planning assumption)' },
      },
      {
        tier: { bn: 'আইন সহজ প্রো', en: 'Ain Shohoj Pro' },
        audience: { bn: 'আইনজীবী ও চেম্বার', en: 'Lawyers & Chambers' },
        offering: {
          bn: 'দ্রুত আইন অনুসন্ধান, খসড়া টেমপ্লেট লাইব্রেরি ও মামলার নোট',
          en: 'Fast law search, drafting templates (notice, application, affidavit), case notes',
        },
        pricing: { bn: 'মাসে ৫০০ – ১,৫০০ টাকা (পরিকল্পনাগত অনুমান)', en: 'BDT 500–1,500 / month (planning assumption)' },
      },
      {
        tier: { bn: 'বিটুবি (B2B) লাইসেন্স', en: 'B2B Licences' },
        audience: { bn: 'সংস্থা, এনজিও ও কর্পোরেট টিম', en: 'Organizations & Legal-Aid Bodies' },
        offering: {
          bn: 'টিম-ভিত্তিক লিগ্যাল রিসার্চ ও অভ্যন্তরীণ কমপ্লায়েন্স টুলকিট',
          en: 'Multi-seat practitioner tools and institutional compliance workflows',
        },
        pricing: { bn: '৩য় বছরে চালু (পরিকল্পনাগত অনুমান)', en: 'Launching in Year 3 (planning assumption)' },
      },
    ],
  },
  roadmap: {
    title: {
      bn: '৩ বছরের রোডম্যাপ',
      en: '3-Year Roadmap',
    },
    subtitle: {
      bn: 'ধাপে ধাপে দেশের প্রতিটি মানুষের হাতের নাগালে সহজ আইনি তথ্য পৌঁছে দেওয়ার পরিকল্পনা।',
      en: 'A phased plan to bring reliable legal information across web, mobile, and voice.',
    },
    phases: [
      {
        year: { bn: '১ম বছর', en: 'Year 1' },
        heading: { bn: 'ওয়েব ও অ্যান্ড্রয়েড সূচনা', en: 'Web & Android Launch' },
        desc: {
          bn: 'আইনজীবী-পর্যালোচিত ৫টি মূল বিষয় (পারিবারিক, জমি, ভাড়াটিয়া, সাইবার ও ভোক্তা অধিকার) নিয়ে ওয়েব ও অ্যান্ড্রয়েড অ্যাপ চালু।',
          en: 'Launch web and Android with five lawyer-reviewed topics: family, land, tenant, cyber, and consumer law.',
        },
      },
      {
        year: { bn: '২য় বছর', en: 'Year 2' },
        heading: { bn: 'আইন সহজ প্রো ও যাচাইকৃত ডিরেক্টরি', en: 'Ain Shohoj Pro & Verified Directory' },
        desc: {
          bn: 'আইনজীবীদের জন্য প্রো টুলস চালু এবং মোবাইল মানির মাধ্যমে যাচাইকৃত আইনজীবীর সাথে পরামর্শ বুকিং সুবিধা।',
          en: 'Launch Ain Shohoj Pro for practitioners and a verified lawyer directory with mobile-money booking.',
        },
      },
      {
        year: { bn: '৩য় বছর', en: 'Year 3' },
        heading: { bn: 'বাংলা ভয়েস ও লিগ্যাল এইড অংশীদারিত্ব', en: 'Bangla Voice, B2B & Legal-Aid' },
        desc: {
          bn: 'বাংলায় কথা বলে প্রশ্ন করার সুবিধা (ভয়েস ইনপুট), বিটুবি (B2B) টুলস এবং সরকারি-বেসরকারি লিগ্যাল এইড সংস্থার সাথে অংশীদারিত্ব।',
          en: 'Introduce voice input in Bangla, B2B institutional tools, and formal legal-aid partnerships.',
        },
      },
    ],
  },
  safety: {
    title: {
      bn: 'নিরাপত্তা, নির্ভুলতা ও আস্থা',
      en: 'Safety & Trust',
    },
    subtitle: {
      bn: 'আইনি তথ্যের ক্ষেত্রে সতর্কতা ও স্বচ্ছতা আমাদের প্রথম নীতি।',
      en: 'Built with strict guardrails, clear citations, and zero data monetization.',
    },
    items: [
      {
        title: { bn: 'আইনজীবী-পর্যালোচিত বিষয়বস্তু', en: 'Lawyer-Reviewed Content' },
        desc: {
          bn: 'মূল আইনি কাঠামো ও নমুনা নির্দেশনাগুলো বাংলাদেশের প্রচলিত আইন অনুযায়ী আইনজীবীদের মাধ্যমে পর্যালোচিত।',
          en: 'Core topic guides and scenario workflows are reviewed by legal practitioners familiar with Bangladeshi courts.',
        },
      },
      {
        title: { bn: 'উৎস ও আইনের রেফারেন্স', en: 'Cited Sources' },
        desc: {
          bn: 'কোনো অনুমান নয় — প্রতিটি উত্তরে প্রাসঙ্গিক আইন বা অধ্যাদেশের নাম উল্লেখ থাকে যাতে আপনি নিজেও যাচাই করতে পারেন।',
          en: 'Every answer explicitly names the relevant statute or code so citizens can verify and cross-check.',
        },
      },
      {
        title: { bn: 'অনিশ্চিত হলে স্পষ্টভাবে জানাই', en: 'We Say When We Are Unsure' },
        desc: {
          bn: 'মামলার ফলাফল বা শতকরা হার আমরা কখনো অনুমান করি না। কোনো ধারা নিশ্চিত না হলে সরাসরি আইনজীবীর সাথে যাচাই করার পরামর্শ দিই।',
          en: 'We never predict case outcomes or percentages. When a section or fact is uncertain, we say so and suggest a lawyer.',
        },
      },
      {
        title: { bn: 'গোপনীয়তা সুরক্ষা', en: 'Privacy Guarantee' },
        desc: {
          bn: 'আপনার কোনো তথ্য সংরক্ষণ বা বিক্রি করা হয় না। কোনো অ্যাকাউন্ট বা লগইন ছাড়াই আপনি নিরাপদে তথ্য জানতে পারেন।',
          en: 'Your information is not saved or sold. Browse and check scenarios without creating an account.',
        },
      },
    ],
  },
  emergency: {
    title: {
      bn: 'জরুরি আইনি ও নিরাপত্তা সহায়তা',
      en: 'Emergency Help & Immediate Guidance',
    },
    subtitle: {
      bn: 'তাৎক্ষণিক বিপদে দেরি না করে স্থানীয় হেল্পলাইন, নিকটস্থ থানা বা জেলা লিগ্যাল এইড অফিসে যোগাযোগ করুন।',
      en: 'In urgent danger, contact local helplines, the nearest police station, or a District Legal Aid Office immediately.',
    },
    notice: {
      bn: 'জরুরি প্রয়োজনে স্থানীয় সরকারি হেল্পলাইন (যেমন ৯৯৯ বা ১০৯), নিকটস্থ থানা অথবা জাতীয় আইনগত সহায়তা প্রদান সংস্থার (১৬৪৩০) সাথে যোগাযোগ করুন।',
      en: 'Please contact local helplines (such as 999 or 109 in Bangladesh), the nearest police station, or a legal aid office (NLASO 16430).',
    },
    cards: [
      {
        id: 'harassment',
        title: { bn: 'হয়রানি বা অনলাইন হুমকি', en: 'Harassment & Threats' },
        points: {
          bn: [
            'আলাপচারিতা, প্রোফাইল লিংক, স্ক্রিনশট ও তারিখ সংরক্ষণ করুন — কিছু মুছে ফেলবেন না।',
            'তাৎক্ষণিক ঝুঁকি থাকলে নিকটস্থ থানায় সাধারণ ডায়েরি (জিডি) করুন অথবা ৯৯৯-এ কল করুন।',
            'অনলাইন হয়রানির ক্ষেত্রে সাইবার সাপোর্ট বা নারী ও শিশু হেল্পলাইন (১০৯)-এ সহায়তা নিন।',
          ],
          en: [
            'Preserve screenshots, URLs, timestamps, and messages without deleting evidence.',
            'If threatened, file a General Diary (GD) at the nearest police station or call 999.',
            'Seek specialized cyber support or call the national helpline (109) for immediate protection.',
          ],
        },
      },
      {
        id: 'domestic',
        title: { bn: 'পারিবারিক সহিংসতা', en: 'Domestic Violence' },
        points: {
          bn: [
            'নিজের ও সন্তানদের তাৎক্ষণিক শারীরিক নিরাপত্তাকে অগ্রাধিকার দিন এবং নিরাপদ স্থানে সরে যান।',
            'চিকিৎসা নিলে সরকারি হাসপাতাল বা চিকিৎসকের কাছ থেকে মেডিকেল রিপোর্ট/সার্টিফিকেট সংগ্রহ রাখুন।',
            'পারিবারিক সহিংসতা (প্রতিরোধ ও সুরক্ষা) আইন, ২০১০ অনুযায়ী সুরক্ষা আদেশের জন্য হেল্পলাইন ১০৯ বা লিগ্যাল এইড অফিসে যোগাযোগ করুন।',
          ],
          en: [
            'Prioritize immediate physical safety for yourself and children; move to a safe location.',
            'If injured, seek medical attention and keep hospital records or injury certificates.',
            'Contact helpline 109, the nearest police station, or the District Legal Aid Office for protection orders.',
          ],
        },
      },
      {
        id: 'arrest',
        title: { bn: 'গ্রেপ্তার পরিস্থিতি', en: 'Arrest Situations' },
        points: {
          bn: [
            'শান্ত থাকুন এবং গ্রেপ্তারের কারণ ও গ্রেপ্তারকারী কর্মকর্তার পরিচয় বিনয়ের সাথে জানতে চান।',
            'পরিবারের একজন সদস্য বা বিশ্বস্ত ব্যক্তিকে দ্রুত জানান কোন থানায় নিয়ে যাওয়া হচ্ছে।',
            'সংবিধানের ৩৩ অনুচ্ছেদ অনুযায়ী গ্রেপ্তারকৃত ব্যক্তির আইনজীবীর সাথে পরামর্শ করার এবং ২৪ ঘণ্টার মধ্যে আদালতে হাজির হওয়ার অধিকার রয়েছে।',
          ],
          en: [
            'Stay calm and politely ask for the reason for arrest and the arresting officer’s details.',
            'Inform a family member or trusted contact immediately about which police station is involved.',
            'Under Article 33 of the Constitution, an arrested person has the right to consult a lawyer and be produced before a magistrate within 24 hours.',
          ],
        },
      },
    ],
  },
  footer: {
    disclaimer: {
      bn: 'আইন সহজ কেবল সাধারণ আইনি তথ্য প্রদান করে, কোনো আইনি পরামর্শ দেয় না।',
      en: 'Ain Shohoj gives legal information, not legal advice.',
    },
    contactLabel: {
      bn: 'যোগাযোগ (প্রকল্প অনুসন্ধান):',
      en: 'Contact (Project Inquiries):',
    },
    emailPlaceholder: 'contact@ainshohoj.example',
    location: {
      bn: 'ঢাকা, বাংলাদেশ · প্রতিযোগিতামূলক প্রকল্প প্রোটোটাইপ',
      en: 'Dhaka, Bangladesh · Competition Prototype',
    },
  },
};

export const DEMO_SCENARIOS: DemoScenario[] = [
  {
    id: 'tenant-eviction',
    specialty: 'tenant',
    label: {
      bn: 'ভাড়াটিয়া উচ্ছেদ নোটিশ',
      en: 'Tenant Eviction Notice',
    },
    promptText: {
      bn: 'আমার বাড়িওয়ালা লিখিত চুক্তি থাকা সত্ত্বেও কোনো আগাম নোটিশ ছাড়া ৭ দিনের মধ্যে বাসা ছাড়তে বলছেন এবং জামানতের টাকা ফেরত দিতে চাচ্ছেন না।',
      en: 'My landlord is telling me to vacate the apartment within 7 days without prior written notice despite a lease agreement, and refuses to return my security deposit.',
    },
    result: {
      bn: {
        summary:
          'বাংলাদেশের আইন অনুযায়ী বৈধ চুক্তি বা নিয়মিত ভাড়া পরিশোধ থাকা অবস্থায় বাড়িওয়ালা হঠাৎ বা লিখিত যথাযথ নোটিশ ছাড়া জোরপূর্বক ভাড়াটিয়া উচ্ছেদ করতে পারেন না। পাশাপাশি চুক্তির শর্ত পূরণ করলে জামানতের টাকা ফেরত পাওয়ার আইনগত অধিকার ভাড়াটিয়ার রয়েছে।',
        relevantLaws: [
          {
            lawName: 'বাড়ি ভাড়া নিয়ন্ত্রণ আইন, ১৯৯১ (Premises Rent Control Act, 1991)',
            section: 'ধারা ১৮ (বৈধ ভাড়াটিয়ার উচ্ছেদ থেকে সুরক্ষা — নির্দিষ্ট উপ-ধারা আইনজীবীর সাথে যাচাই করুন)',
            explanation: 'নিয়মিত ভাড়া পরিশোধ ও চুক্তির শর্ত মেনে চললে বিনা কারণে ভাড়াটিয়াকে উচ্ছেদ করা যায় না।',
          },
          {
            lawName: 'সম্পত্তি হস্তান্তর আইন, ১৮৮২ (Transfer of Property Act, 1882)',
            section: 'ধারা ১০৬ (মাসিক ভাড়ার ক্ষেত্রে লিখিত নোটিশের সময়সীমা)',
            explanation: 'চুক্তিতে ভিন্ন কিছু না থাকলে সাধারণত মাসিক ভাড়ার বাসা ছাড়ার আগে লিখিত নোটিশ দেওয়ার নিয়ম রয়েছে।',
          },
          {
            lawName: 'সুনির্দিষ্ট প্রতিকার আইন, ১৮৭৭ (Specific Relief Act, 1877)',
            section: 'ধারাটি আইনজীবীর সাথে যাচাই করুন',
            explanation: 'জোরপূর্বক বা বেআইনিভাবে দখলচ্যুত করার চেষ্টা হলে দেওয়ানি আদালতের মাধ্যমে নিষেধাজ্ঞা চাওয়া যেতে পারে।',
          },
        ],
        documentsToPrepare: [
          'বাড়িভাড়ার লিখিত চুক্তিপত্রের (Rent Agreement) কপি',
          'প্রতি মাসের ভাড়া ও অগ্রিম জামানত পরিশোধের রসিদ, ব্যাংক ট্রান্সফার বা মোবাইল ব্যাংকিং স্টেটমেন্ট',
          'বাড়িওয়ালার পাঠানো কোনো এসএমএস, হোয়াটসঅ্যাপ বার্তা বা লিখিত নোটিশের কপি',
          'জাতীয় পরিচয়পত্র (NID) এবং বাসার ইউটিলিটি বিল পরিশোধের প্রমাণ',
        ],
        nextSteps: [
          'বাড়িওয়ালার সাথে শান্তভাবে লিখিত বা বার্তার মাধ্যমে চুক্তির নোটিশ সময়সীমা ও জামানত সমন্বয়ের কথা উল্লেখ করে যোগাযোগ করুন।',
          'সব ভাড়ার রসিদ ও কথোপকথনের স্ক্রিনশট নিরাপদ স্থানে সংরক্ষণ করুন।',
          'বাড়িওয়ালা জোরপূর্বক তালা লাগানো বা বিদ্যুৎ/পানি সংযোগ বিচ্ছিন্ন করার হুমকি দিলে নিকটস্থ থানায় একটি সাধারণ ডায়েরি (জিডি) করুন।',
          'ভাড়া সংক্রান্ত বিরোধ মীমাংসার জন্য এলাকার ভাড়া নিয়ন্ত্রক (Rent Controller / সহকারী জজ আদালত) বা একজন দেওয়ানি আইনজীবীর সাথে পরামর্শ করুন।',
        ],
        suggestedSpecialty: 'tenant',
        uncertaintyNote:
          'আপনার ভাড়া চুক্তিতে নির্দিষ্ট কোনো নোটিশ পিরিয়ড লেখা আছে কি না, তা সমাধানের ধরন নির্ধারণে গুরুত্বপূর্ণ। চুক্তিপত্রটি একজন আইনজীবীকে দেখিয়ে নিশ্চিত হোন।',
      },
      en: {
        summary:
          'Under Bangladeshi law, a landlord generally cannot forcefully evict a lawful tenant overnight without proper written notice and valid legal grounds. You also have a right to seek return or lawful adjustment of your advance security deposit according to your tenancy agreement.',
        relevantLaws: [
          {
            lawName: 'Premises Rent Control Act, 1991',
            section: 'Section 18 (Protection from eviction while paying rent — verify exact clauses with a lawyer)',
            explanation: 'Protects lawful tenants from arbitrary eviction when rent is paid regularly and terms are observed.',
          },
          {
            lawName: 'Transfer of Property Act, 1882',
            section: 'Section 106 (Notice period for termination of monthly lease)',
            explanation: 'Sets standard notice requirements for terminating a lease unless a written contract specifies otherwise.',
          },
          {
            lawName: 'Specific Relief Act, 1877',
            section: 'Check the section with a lawyer',
            explanation: 'Provides civil remedies against unlawful dispossession or breach of peaceful possession.',
          },
        ],
        documentsToPrepare: [
          'Signed copy of the tenancy / rent agreement',
          'Rent receipts, bank statements, or mobile-money records showing advance deposit and monthly payments',
          'Copies or screenshots of any written notice, SMS, or WhatsApp messages from the landlord',
          'National ID (NID) and utility payment records at the address',
        ],
        nextSteps: [
          'Respond calmly in writing (message or letter) noting the agreed notice period and requesting formal settlement of your deposit.',
          'Preserve all payment receipts and communication logs without altering them.',
          'If the landlord threatens forcible eviction or cuts off utilities, file a General Diary (GD) at the nearest police station.',
          'Consult a civil lawyer or apply before the Rent Controller (Assistant Judge Court) if the dispute cannot be resolved amicably.',
        ],
        suggestedSpecialty: 'tenant',
        uncertaintyNote:
          'Exact notice rules depend on the written clauses in your agreement. Have a lawyer review the contract before taking formal court action.',
      },
    },
  },
  {
    id: 'online-harassment',
    specialty: 'cyber',
    label: {
      bn: 'সামাজিক মাধ্যমে অনলাইন হয়রানি',
      en: 'Online Harassment on Social Media',
    },
    promptText: {
      bn: 'একজন অজ্ঞাত ব্যক্তি সামাজিক মাধ্যমে আমার নামে ভুয়া অ্যাকাউন্ট খুলে ব্যক্তিগত ছবি বিকৃত করে প্রকাশের হুমকি দিচ্ছে এবং টাকা দাবি করছে।',
      en: 'Someone created a fake social media profile using my name, is threatening to publish edited personal photos, and is demanding money.',
    },
    result: {
      bn: {
        summary:
          'ভুয়া পরিচয় ব্যবহার করে মানহানি, ব্যক্তিগত বা বিকৃত ছবি প্রকাশের হুমকি দেওয়া এবং এর বিনিময়ে টাকা দাবি করা বাংলাদেশের প্রচলিত আইনে গুরুতর অপরাধ। এ ধরনের ঘটনায় দ্রুত ডিজিটাল প্রমাণ সংরক্ষণ করে আইনশৃঙ্খলা বাহিনীর সহায়তা নেওয়া জরুরি।',
        relevantLaws: [
          {
            lawName: 'সাইবার নিরাপত্তা আইন, ২০২৩ (Cyber Security Act, 2023)',
            section: 'ধারা ২৪ ও ধারা ২৫ (পরিচয় প্রতারণা ও আক্রমণাত্মক বা মিথ্যা তথ্য — প্রযোজ্য সর্বশেষ ধারা আইনজীবীর সাথে যাচাই করুন)',
            explanation: 'অন্যের পরিচয় ধারণ করে প্রতারণা করা বা অনলাইনে হয়রানিমূলক ও মানহানিকর তথ্য ছড়ানোর বিরুদ্ধে আইনি ব্যবস্থা নেওয়ার সুযোগ দেয়।',
          },
          {
            lawName: 'পর্নোগ্রাফি নিয়ন্ত্রণ আইন, ২০১২ (Pornography Control Act, 2012)',
            section: 'ধারা ৮ (সম্মতি ছাড়া আপত্তিকর ছবি/ভিডিও ধারণ, বিকৃত করা বা প্রকাশের হুমকি)',
            explanation: 'ব্যক্তিগত ছবি বিকৃত করা বা প্রকাশের ভয় দেখিয়ে ব্ল্যাকমেইল করার বিরুদ্ধে কঠোর শাস্তির বিধান রয়েছে।',
          },
          {
            lawName: 'দণ্ডবিধি, ১৮৬০ (Penal Code, 1860)',
            section: 'ধারা ৩৮৩–৩৮৫ ও ধারা ৫০৬ (চাঁদাবাজি ও ভয়ভীতি প্রদর্শন — ধারাটি আইনজীবীর সাথে যাচাই করুন)',
            explanation: 'ভয় দেখিয়ে টাকা দাবি করা বা হুমকি দেওয়ার অপরাধের ক্ষেত্রে প্রযোজ্য হয়।',
          },
        ],
        documentsToPrepare: [
          'ভুয়া অ্যাকাউন্টের প্রোফাইল লিংক (URL) এবং পূর্ণ স্ক্রিনশট',
          'হুমকি ও টাকা দাবির সমস্ত মেসেজ, ভয়েস নোট বা কল লগের স্ক্রিনশট ও তারিখ',
          'বিকাশ/নগদ বা যে মাধ্যমে টাকা দাবি করা হয়েছে সেই নম্বর বা অ্যাকাউন্টের তথ্য',
          'আপনার জাতীয় পরিচয়পত্র (NID) ও মূল অ্যাকাউন্টের প্রমাণ',
        ],
        nextSteps: [
          'হুমকিদাতাকে কোনো টাকা পাঠাবেন না এবং কথোপকথন বা অ্যাকাউন্টের প্রমাণ মুছে ফেলবেন না।',
          'নিকটস্থ থানায় গিয়ে বিস্তারিত বিবরণসহ সাধারণ ডায়েরি (জিডি) বা প্রযোজ্য ক্ষেত্রে মামলা দায়ের করুন।',
          'পুলিশের সাইবার সাপোর্ট ইউনিট (যেমন: Police Cyber Support for Women বা সাইবার ক্রাইম ইনভেস্টিগেশন ইউনিট) এবং জাতীয় জরুরি সেবা ৯৯৯ বা ১০৯-এ যোগাযোগ করুন।',
          'অ্যাকাউন্ট রিপোর্ট করার আগে সব ইউআরএল ও প্রমাণ সংরক্ষণ করে একজন সাইবার ও ফৌজদারি আইনজীবীর পরামর্শ নিন।',
        ],
        suggestedSpecialty: 'cyber',
        uncertaintyNote:
          'সাম্প্রতিক সাইবার আইনের সংশোধনী ও কোন ধারায় মামলা বা জিডি করা উপযুক্ত হবে তা একজন আইনজীবী বা থানার ভারপ্রাপ্ত কর্মকর্তার সাথে যাচাই করা প্রয়োজন।',
      },
      en: {
        summary:
          'Impersonating someone online, threatening to share altered personal images, and demanding money (extortion/blackmail) are serious criminal offences in Bangladesh. Preserving digital evidence immediately and reporting to law enforcement is essential.',
        relevantLaws: [
          {
            lawName: 'Cyber Security Act, 2023',
            section: 'Sections 24 & 25 (Identity fraud & offensive/false information — check current applicability with a lawyer)',
            explanation: 'Addresses online impersonation, identity fraud, and malicious digital harassment.',
          },
          {
            lawName: 'Pornography Control Act, 2012',
            section: 'Section 8 (Non-consensual recording, morphing, or threatening publication)',
            explanation: 'Covers morphed images or blackmail involving intimate or altered visuals.',
          },
          {
            lawName: 'Penal Code, 1860',
            section: 'Sections 383–385 & 506 (Extortion and criminal intimidation — check the section with a lawyer)',
            explanation: 'Applies to demanding money under threat or causing fear of harm to reputation.',
          },
        ],
        documentsToPrepare: [
          'Full profile URLs and clear screenshots of the fake account',
          'Screenshots of all threatening messages, extortion demands, timestamps, and call logs',
          'Any payment number (MFS/bank) shared by the perpetrator',
          'Your National ID (NID) and verification of your genuine social media account',
        ],
        nextSteps: [
          'Do not pay any money and do not delete the chat history or block before capturing full URLs and screenshots.',
          'Visit the nearest police station to file a General Diary (GD) or formal complaint with your collected evidence.',
          'Reach out to specialized cyber policing units (such as Police Cyber Support) or call 999 / 109 if you feel at immediate risk.',
          'Consult a criminal/cyber law advocate to ensure the appropriate sections are recorded.',
        ],
        suggestedSpecialty: 'cyber',
        uncertaintyNote:
          'Cyber law provisions undergo updates; confirm the exact applicable sections and forum with a qualified advocate.',
      },
    },
  },
  {
    id: 'land-boundary',
    specialty: 'land',
    label: {
      bn: 'জমির সীমানা বিরোধ',
      en: 'Land Boundary Dispute',
    },
    promptText: {
      bn: 'আমাদের পৈতৃক জমির সীমানা (আইল) সরিয়ে প্রতিবেশী জোরপূর্বক সীমানা প্রাচীর তুলতে চাইছেন এবং মাপজোখে বাধা দিচ্ছেন।',
      en: 'A neighbor has moved the boundary line of our ancestral land, is trying to build a wall inside our area, and is obstructing a land survey.',
    },
    result: {
      bn: {
        summary:
          'জমির সীমানা বা দখল নিয়ে বিরোধ বাংলাদেশের দেওয়ানি আইনের আওতাভুক্ত বিষয়, তবে হঠাৎ জোরপূর্বক নির্মাণ বা শান্তিভঙ্গের আশঙ্কা থাকলে ফৌজদারি কার্যবিধির মাধ্যমেও তাৎক্ষণিক ব্যবস্থা নেওয়া যায়। জরিপ ও কাগজপত্রের ভিত্তিতে সীমানা নির্ধারণই মূল সমাধান।',
        relevantLaws: [
          {
            lawName: 'রাষ্ট্রীয় অধিগ্রহণ ও প্রজাস্বত্ব আইন, ১৯৫০ (State Acquisition and Tenancy Act, 1950)',
            section: 'ধারাটি আইনজীবীর সাথে যাচাই করুন (খতিয়ান ও সীমানা জরিপ সংক্রান্ত বিধান)',
            explanation: 'জমির রেকর্ড (খতিয়ান), দাগ নম্বর ও জরিপ নকশার ভিত্তিতে মালিকানা ও সীমানা নির্ধারণের কাঠামো প্রদান করে।',
          },
          {
            lawName: 'সুনির্দিষ্ট প্রতিকার আইন, ১৮৭৭ (Specific Relief Act, 1877)',
            section: 'ধারা ৯, ৪২ ও ৫৪ (দখল পুনরুদ্ধার, স্বত্ব ঘোষণা ও স্থায়ী নিষেধাজ্ঞা — ধারাটি আইনজীবীর সাথে যাচাই করুন)',
            explanation: 'জোরপূর্বক নির্মাণকাজ বন্ধ রাখতে অস্থায়ী/স্থায়ী নিষেধাজ্ঞা এবং বেদখল হওয়া অংশ পুনরুদ্ধারের প্রতিকার দেয়।',
          },
          {
            lawName: 'ফৌজদারি কার্যবিধি, ১৮৯৮ (Code of Criminal Procedure, 1898)',
            section: 'ধারা ১৪৫ (স্থাবর সম্পত্তি নিয়ে শান্তিভঙ্গের আশঙ্কা)',
            explanation: 'জমি দখল নিয়ে মারামারি বা শান্তিভঙ্গের আশঙ্কা তৈরি হলে নির্বাহী ম্যাজিস্ট্রেটের আদালতে সাময়িক সুরক্ষা চাওয়া যায়।',
          },
        ],
        documentsToPrepare: [
          'মূল দলিল (Sale Deed / বণ্টননামা / হেবা দলিল) ও তার ফটোকপি',
          'সর্বশেষ জরিপের খতিয়ান (সিএস, এসএ, আরএস ও বিএস/সিটি খতিয়ান) এবং মৌজা ম্যাপ',
          'নামজারি (Mutation) পর্চা ও হালনাগাদ ভূমি উন্নয়ন কর (খাজনা) পরিশোধের রসিদ',
          'বিরোধপূর্ণ অংশের ছবি এবং পূর্ববর্তী কোনো সালিশ বা জরিপ প্রতিবেদনের কপি (যদি থাকে)',
        ],
        nextSteps: [
          'স্থানীয় ভূমি অফিস থেকে আপনার জমির মৌজা ম্যাপ ও খতিয়ানের তথ্য মিলিয়ে নিন এবং একজন নিবন্ধিত আমিন/সার্ভেয়ার দিয়ে প্রাথমিক পরিমাপের উদ্যোগ নিন।',
          'জোরপূর্বক প্রাচীর নির্মাণ বা সংঘর্ষের পরিস্থিতি তৈরি হলে নিজেরা মারামারিতে না জড়িয়ে নিকটস্থ থানায় জিডি করুন বা ৯৯৯-এ জানান।',
          'শান্তিভঙ্গের আশঙ্কা থাকলে স্থানীয় নির্বাহী ম্যাজিস্ট্রেট আদালতে ১৪৫ ধারায় আবেদনের বিষয়ে আইনজীবীর সাথে কথা বলুন।',
          'স্থায়ীভাবে নির্মাণ বন্ধ ও সীমানা নির্ধারণের জন্য দেওয়ানি আদালতে নিষেধাজ্ঞা ও সীমানা নির্ধারণের মামলার বিষয়ে ভূমি-বিশেষজ্ঞ আইনজীবীর পরামর্শ নিন।',
        ],
        suggestedSpecialty: 'land',
        uncertaintyNote:
          'জমির দাগ নম্বর, যৌথ মালিকানা (এজমালি সম্পত্তি) নাকি একক দলিল — এসব তথ্য মামলার ধরন বদলে দেয়। মূল কাগজপত্রসহ একজন দেওয়ানি/ভূমি আইনজীবীর সাথে যাচাই করুন।',
      },
      en: {
        summary:
          'Land boundary and possession disputes in Bangladesh are primarily governed by civil law, though urgent threats to peace or forcible construction can also trigger protective orders from an Executive Magistrate. Verified survey maps and title records are the foundation of resolving boundary issues.',
        relevantLaws: [
          {
            lawName: 'State Acquisition and Tenancy Act, 1950',
            section: 'Check the section with a lawyer (Record-of-Rights and boundary survey provisions)',
            explanation: 'Governs land records (Khatian), plot numbers, and official survey maps used to establish boundaries.',
          },
          {
            lawName: 'Specific Relief Act, 1877',
            section: 'Sections 9, 42 & 54 (Possession recovery, declaration, and injunction — check the section with a lawyer)',
            explanation: 'Allows seeking a civil court injunction to halt unauthorized construction or recover dispossessed land.',
          },
          {
            lawName: 'Code of Criminal Procedure, 1898',
            section: 'Section 145 (Disputes concerning land likely to cause breach of peace)',
            explanation: 'Allows approaching an Executive Magistrate for interim orders if forcible occupation threatens public peace.',
          },
        ],
        documentsToPrepare: [
          'Original title deeds (Sale Deed, Partition Deed, or Inheritance documents)',
          'Relevant Khatian records (CS, SA, RS, BS/City) and certified Mouza Map',
          'Mutation (Namjari) papers and up-to-date Land Development Tax (Khajna) receipts',
          'Photographs of the disputed wall/boundary and any prior local mediation notes',
        ],
        nextSteps: [
          'Verify your Mouza map and Khatian details at the local Land Office and arrange a measurement by a certified surveyor (Amin).',
          'Avoid physical confrontation; if forcible construction is underway, file a General Diary (GD) at the nearest police station.',
          'Consult a land/civil lawyer regarding an interim Executive Magistrate petition (Section 145 CrPC) if breach of peace is imminent.',
          'Prepare your complete title chain for a civil suit seeking demarcation or temporary injunction if needed.',
        ],
        suggestedSpecialty: 'land',
        uncertaintyNote:
          'Whether the land is co-owned (ejmali) or partitioned affects the exact civil remedy. Have a land lawyer inspect your deeds and Mouza map.',
      },
    },
  },
];

export const DEMO_LAWYERS: DemoLawyer[] = [
  {
    id: 'lawyer-1',
    name: { bn: 'অ্যাডভোকেট রাশেদুল করিম (নমুনা)', en: 'Advocate Rashedul Karim (Demo)' },
    enrollmentTitle: { bn: 'সুপ্রিম কোর্ট ও জজ কোর্ট প্র্যাকটিশনার', en: 'High Court & District Court Practitioner' },
    court: { bn: 'ঢাকা জজ কোর্ট', en: 'Dhaka Judge Court' },
    city: { bn: 'ঢাকা', en: 'Dhaka' },
    specialtyKey: 'tenant',
    specialtyLabel: { bn: 'ভাড়াটিয়া, দেওয়ানি ও চুক্তি আইন', en: 'Tenant, Civil & Contract Law' },
    languages: { bn: 'বাংলা, ইংরেজি', en: 'Bangla, English' },
  },
  {
    id: 'lawyer-2',
    name: { bn: 'অ্যাডভোকেট তাসলিমা আক্তার (নমুনা)', en: 'Advocate Taslima Akter (Demo)' },
    enrollmentTitle: { bn: 'ফৌজদারি ও সাইবার আইন প্র্যাকটিশনার', en: 'Criminal & Cyber Law Practitioner' },
    court: { bn: 'ঢাকা ও সাইবার ট্রাইব্যুনাল', en: 'Dhaka & Cyber Tribunal' },
    city: { bn: 'ঢাকা', en: 'Dhaka' },
    specialtyKey: 'cyber',
    specialtyLabel: { bn: 'সাইবার নিরাপত্তা ও পারিবারিক সুরক্ষা', en: 'Cyber Safety & Family Protection' },
    languages: { bn: 'বাংলা, ইংরেজি', en: 'Bangla, English' },
  },
  {
    id: 'lawyer-3',
    name: { bn: 'অ্যাডভোকেট মাহবুবুর রহমান (নমুনা)', en: 'Advocate Mahbubur Rahman (Demo)' },
    enrollmentTitle: { bn: 'ভূমি ও দেওয়ানি আইন প্র্যাকটিশনার', en: 'Land & Civil Litigation Practitioner' },
    court: { bn: 'চট্টগ্রাম জজ কোর্ট', en: 'Chattogram Judge Court' },
    city: { bn: 'চট্টগ্রাম', en: 'Chattogram' },
    specialtyKey: 'land',
    specialtyLabel: { bn: 'জমি, খতিয়ান ও সীমানা বিরোধ', en: 'Land Title, Khatian & Boundary' },
    languages: { bn: 'বাংলা, ইংরেজি', en: 'Bangla, English' },
  },
  {
    id: 'lawyer-4',
    name: { bn: 'অ্যাডভোকেট ফারজানা নাসরিন (নমুনা)', en: 'Advocate Farzana Nasrin (Demo)' },
    enrollmentTitle: { bn: 'পারিবারিক ও ভোক্তা অধিকার আইনজীবী', en: 'Family & Consumer Law Advocate' },
    court: { bn: 'রাজশাহী জজ কোর্ট', en: 'Rajshahi Judge Court' },
    city: { bn: 'রাজশাহী', en: 'Rajshahi' },
    specialtyKey: 'family',
    specialtyLabel: { bn: 'পারিবারিক আইন ও ভোক্তা অধিকার', en: 'Family Law & Consumer Rights' },
    languages: { bn: 'বাংলা, ইংরেজি', en: 'Bangla, English' },
  },
];

export const SPECIALTY_FILTERS: { key: SpecialtyKey; label: Record<Language, string> }[] = [
  { key: 'all', label: { bn: 'সকল বিষয়', en: 'All Areas' } },
  { key: 'tenant', label: { bn: 'ভাড়াটিয়া ও দেওয়ানি', en: 'Tenant & Civil' } },
  { key: 'cyber', label: { bn: 'সাইবার ও নিরাপত্তা', en: 'Cyber & Safety' } },
  { key: 'land', label: { bn: 'জমি ও সীমানা', en: 'Land & Property' } },
  { key: 'family', label: { bn: 'পারিবারিক ও ভোক্তা', en: 'Family & Consumer' } },
];

export const LAW_SEARCH_SAMPLES: LawSearchEntry[] = [
  {
    id: 'rent-1991',
    actName: { bn: 'বাড়ি ভাড়া নিয়ন্ত্রণ আইন, ১৯৯১', en: 'Premises Rent Control Act, 1991' },
    section: { bn: 'ধারা ১৮', en: 'Section 18' },
    topic: { bn: 'ভাড়াটিয়া সুরক্ষা', en: 'Tenant Protection' },
    summary: {
      bn: 'নিয়মিত ভাড়া পরিশোধকারী ভাড়াটিয়াকে আদালতের আদেশ বা চুক্তির শর্ত ভঙ্গ ছাড়া উচ্ছেদ থেকে সুরক্ষা।',
      en: 'Protects rent-paying tenants from arbitrary eviction without statutory grounds.',
    },
  },
  {
    id: 'sr-1877',
    actName: { bn: 'সুনির্দিষ্ট প্রতিকার আইন, ১৮৭৭', en: 'Specific Relief Act, 1877' },
    section: { bn: 'ধারা ৯ ও ৫৪', en: 'Sections 9 & 54' },
    topic: { bn: 'দখল ও নিষেধাজ্ঞা', en: 'Possession & Injunction' },
    summary: {
      bn: 'বেআইনিভাবে দখলচ্যুত হলে দখল পুনরুদ্ধার এবং বেআইনি নির্মাণ বা হস্তক্ষেপ বন্ধে স্থায়ী নিষেধাজ্ঞা।',
      en: 'Recovery of dispossessed immovable property and perpetual injunctions.',
    },
  },
  {
    id: 'crpc-145',
    actName: { bn: 'ফৌজদারি কার্যবিধি, ১৮৯৮', en: 'Code of Criminal Procedure, 1898' },
    section: { bn: 'ধারা ১৪৫', en: 'Section 145' },
    topic: { bn: 'জমি সংক্রান্ত শান্তিভঙ্গ', en: 'Land Breach of Peace' },
    summary: {
      bn: 'স্থাবর সম্পত্তি বা সীমানা নিয়ে শান্তিভঙ্গের আশঙ্কা থাকলে নির্বাহী ম্যাজিস্ট্রেটের মাধ্যমে তাৎক্ষণিক ব্যবস্থা।',
      en: 'Executive Magistrate procedure where a land dispute threatens a breach of the peace.',
    },
  },
  {
    id: 'consumer-2009',
    actName: { bn: 'ভোক্তা অধিকার সংরক্ষণ আইন, ২০০৯', en: 'Consumers’ Right Protection Act, 2009' },
    section: { bn: 'ধারা ৭৬', en: 'Section 76' },
    topic: { bn: 'ভোক্তা অভিযোগ', en: 'Consumer Complaint' },
    summary: {
      bn: 'পণ্য বা সেবায় প্রতারণা, মেয়াদোত্তীর্ণ পণ্য বা অতিরিক্ত মূল্যের বিরুদ্ধে ৩০ দিনের মধ্যে অভিযোগ দায়ের।',
      en: 'Filing formal consumer complaints within 30 days for overcharging or defective goods.',
    },
  },
];

export const DRAFTING_TEMPLATES: DraftingTemplate[] = [
  {
    id: 'notice',
    title: { bn: 'লিগ্যাল নোটিশ', en: 'Legal Notice' },
    subtitle: { bn: 'ভাড়াটিয়া জামানত ফেরত বা চুক্তি লঙ্ঘনের খসড়া', en: 'Draft for security deposit return or breach of contract' },
    body: {
      bn: `প্রেরক: [আইনজীবীর নাম], অ্যাডভোকেট, [আদালতের নাম]\nপ্রাপক: [প্রতিপক্ষের নাম ও ঠিকানা]\nবিষয়: চুক্তি অনুযায়ী নোটিশ সময়সীমা ও বকেয়া জামানত পরিশোধ প্রসঙ্গে আইনি নোটিশ।\n\nমহোদয়,\nআমার মক্কেল [মক্কেলের নাম]-এর নির্দেশক্রমে জানানো যাচ্ছে যে, বিগত [তারিখ] তারিখের লিখিত চুক্তি অনুযায়ী আমার মক্কেল নিয়মিত ভাড়া পরিশোধ করে আসছেন। অতএব এই নোটিশ প্রাপ্তির ১৫ (পনেরো) দিনের মধ্যে...`,
      en: `From: [Advocate Name], Advocate, [Court Name]\nTo: [Recipient Name & Address]\nSubject: Legal Notice regarding statutory notice period and refund of security deposit.\n\nSir/Madam,\nUnder instructions from my client [Client Name], it is stated that pursuant to the rent agreement dated [Date], my client has regularly paid monthly rent. You are hereby called upon within 15 (fifteen) days of receipt of this notice to...`,
    },
  },
  {
    id: 'application',
    title: { bn: 'আবেদনপত্র (জিডি / ম্যাজিস্ট্রেট)', en: 'Application (GD / Magistrate)' },
    subtitle: { bn: 'শান্তিভঙ্গ বা জরুরি সুরক্ষার প্রাথমিক খসড়া কাঠামো', en: 'Initial structure for GD or Section 145 application' },
    body: {
      bn: `বরাবর,\nভারপ্রাপ্ত কর্মকর্তা (ওসি), [থানার নাম] থানা / বিজ্ঞ নির্বাহী ম্যাজিস্ট্রেট আদালত, [জেলা]\nবিষয়: [জমির সীমানা / অনলাইন হয়রানি] সংক্রান্ত বিষয়ে সাধারণ ডায়েরি ও নিরাপত্তা প্রার্থনা।\n\nমহোদয়,\nবিনীত নিবেদন এই যে, আমি [আবেদনকারীর নাম], ঠিকানা [ঠিকানা]। বিগত [তারিখ] তারিখে [ঘটনার সংক্ষিপ্ত বিবরণ ও সংযুক্ত প্রমাণের তালিকা]...`,
      en: `To,\nThe Officer-in-Charge, [Police Station] / Learned Executive Magistrate Court, [District]\nSubject: Prayer for recording General Diary and immediate protection regarding [Matter].\n\nSir/Madam,\nI, [Applicant Name], residing at [Address], respectfully state that on [Date] [concise factual summary and list of attached evidence]...`,
    },
  },
  {
    id: 'affidavit',
    title: { bn: 'হলফনামা (Affidavit)', en: 'Affidavit' },
    subtitle: { bn: 'তথ্য সত্যায়ন ও নথিপত্র দাখিলের মানসম্মত ছক', en: 'Standard verification format for facts and filings' },
    body: {
      bn: `হলফনামা (Affidavit)\nআমি [হলফকারীর নাম], পিতা/স্বামী [নাম], বয়স [বয়স] বছর, জাতীয় পরিচয়পত্র নং [NID], ধর্ম [ধর্ম], পেশা [পেশা], ঠিকানা [ঠিকানা] — অদ্য এই মর্মে হলফপূর্বক ঘোষণা করছি যে:\n১. আমি অত্র মামলার/আবেদনের বিষয়বস্তু সম্পর্কে পূর্ণ অবগত আছি।\n২. উপরোক্ত অনুচ্ছেদে বর্ণিত সকল তথ্য আমার জ্ঞান ও বিশ্বাসমতে সত্য।`,
      en: `AFFIDAVIT\nI, [Deponent Name], S/O or D/O [Parent Name], aged [Age] years, NID No. [NID], resident of [Address], do hereby solemnly affirm and declare as follows:\n1. That I am fully conversant with the facts and circumstances of the matter.\n2. That the statements made in the foregoing paragraphs are true to the best of my knowledge and belief.`,
    },
  },
];
