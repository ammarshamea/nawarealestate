export interface Project {
  id:        string;
  name:      { en: string; ar: string };
  category:  { en: string; ar: string };
  tag:       string;
  location:  { en: string; ar: string };
  area:      string;
  units:     string;
  status:    { en: string; ar: string };
  year:      string;
  desc:      { en: string; ar: string };
  longDesc:  { en: string; ar: string };
  img:       string;
  gallery:   string[];
  amenities: { en: string; ar: string }[];
  investment: {
    roi:     string;
    type:    { en: string; ar: string };
    tenure:  { en: string; ar: string };
    note:    { en: string; ar: string };
  };
  features: { en: string; ar: string }[];
  categoryKey: string;
}

export const projects: Project[] = [
  {
    id: "nawah-palms",
    name: { en: "Nawah Palms", ar: "نخيل نواة" },
    category: { en: "Luxury Compounds", ar: "المجمعات الفاخرة" },
    categoryKey: "Luxury Compounds",
    tag: "Flagship",
    location: { en: "North Riyadh", ar: "شمال الرياض" },
    area: "45,000 m²",
    units: "120 Units",
    status: { en: "Delivering 2025", ar: "تسليم 2025" },
    year: "2025",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=900&q=85",
    ],
    desc: {
      en: "A gated luxury compound offering villas and townhouses with resort-style amenities in North Riyadh.",
      ar: "مجمع فاخر مسوّر يقدم فللاً وتاون هاوس بمرافق تشبه المنتجعات في شمال الرياض.",
    },
    longDesc: {
      en: "Nawah Palms is our flagship residential compound — a meticulously master-planned gated community set across 45,000 m² in the prestigious north of Riyadh. The compound comprises 120 units including luxury villas, spacious townhouses, and exclusive garden duplexes, each designed to the highest international standards. Residents enjoy resort-style living with a clubhouse, temperature-controlled pools, landscaped gardens, fitness centers, and 24/7 security. Every detail — from the Italian-imported marble flooring to the smart-home automation systems — reflects Nawah's unwavering commitment to elevating the Saudi residential experience.",
      ar: "نخيل نواة هو مجمعنا السكني الرئيسي — مجتمع مسوّر مخطط بعناية على مساحة 45,000 م² في الشمال المرموق من الرياض. يضم المجمع 120 وحدة تشمل فللاً فاخرة وتاون هاوس فسيحة ودوبلكس حديقة حصرية، كل منها مصمم وفق أعلى المعايير الدولية. يتمتع السكان بحياة تشبه المنتجعات مع نادٍ وحمامات سباحة مكيفة وحدائق منسقة ومراكز لياقة وأمن على مدار الساعة. كل تفصيل — من الرخام الإيطالي المستورد إلى أنظمة المنزل الذكي — يعكس التزام نواة الثابت بالارتقاء بالتجربة السكنية السعودية.",
    },
    amenities: [
      { en: "Private Swimming Pools", ar: "مسابح خاصة" },
      { en: "Clubhouse & Lounge",     ar: "نادي وصالة استقبال" },
      { en: "Fitness & Wellness Center", ar: "مركز اللياقة والعافية" },
      { en: "Landscaped Gardens",     ar: "حدائق منسقة" },
      { en: "Children's Play Area",   ar: "منطقة العاب الأطفال" },
      { en: "24/7 Security",          ar: "أمن على مدار الساعة" },
      { en: "Smart Home Automation",  ar: "أتمتة المنزل الذكي" },
      { en: "Underground Parking",    ar: "مواقف سيارات تحت الأرض" },
    ],
    investment: {
      roi:   "10–14% p.a.",
      type:  { en: "Freehold Residential", ar: "تملك حر — سكني" },
      tenure: { en: "Perpetual Ownership", ar: "ملكية دائمة" },
      note: {
        en: "Payment plans available. Contact our investor advisors for detailed financial modelling.",
        ar: "خطط سداد متاحة. تواصل مع مستشاري الاستثمار للحصول على النمذجة المالية التفصيلية.",
      },
    },
    features: [
      { en: "Italian marble imported finishes", ar: "تشطيبات رخام إيطالي مستورد" },
      { en: "Home automation by Crestron",      ar: "أتمتة المنزل بنظام Crestron" },
      { en: "Central A/C with smart controls",  ar: "تكييف مركزي بضوابط ذكية"     },
      { en: "Floor-to-ceiling glazing",         ar: "نوافذ من الأرض للسقف"         },
      { en: "Private rooftop terraces",         ar: "تراسات خاصة على السطح"         },
    ],
  },

  {
    id: "al-noor-villas",
    name: { en: "Al Noor Villas", ar: "فلل النور" },
    category: { en: "Private Villas", ar: "الفلل الخاصة" },
    categoryKey: "Private Villas",
    tag: "Exclusive",
    location: { en: "Diplomatic Quarter", ar: "الحي الدبلوماسي" },
    area: "12,000 m²",
    units: "18 Villas",
    status: { en: "Available", ar: "متاح" },
    year: "2024",
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=900&q=85",
    ],
    desc: {
      en: "Bespoke private villas in Riyadh's most prestigious neighborhood — the Diplomatic Quarter.",
      ar: "فلل خاصة حصرية في أرقى أحياء الرياض — الحي الدبلوماسي.",
    },
    longDesc: {
      en: "Al Noor Villas represents the pinnacle of Saudi residential luxury. Situated within the exclusive Diplomatic Quarter of Riyadh, this intimate collection of 18 villas offers unparalleled privacy and prestige. Each villa is a unique masterpiece — bespoke in design, palatial in scale, and equipped with the finest materials sourced from Italy, France, and the UK. With private pools, dedicated household staff quarters, and direct access to the Quarter's parks and walking trails, Al Noor offers a lifestyle reserved for the very few.",
      ar: "تمثل فلل النور قمة الفخامة السكنية السعودية. تقع في الحي الدبلوماسي الحصري بالرياض، وتقدم هذه المجموعة الحميمة المؤلفة من 18 فيلا خصوصية ومكانة لا مثيل لها. كل فيلا تحفة فريدة — حصرية في تصميمها، فسيحة في حجمها، ومجهزة بأفضل المواد من إيطاليا وفرنسا والمملكة المتحدة. مع مسابح خاصة وغرف طاقم منزلي مخصصة وإمكانية الوصول المباشر إلى حدائق الحي ومسارات المشي، تقدم فلل النور أسلوب حياة محجوز للقلة المختارين.",
    },
    amenities: [
      { en: "Private Pool & Garden",    ar: "حديقة ومسبح خاص"        },
      { en: "Staff Quarters",           ar: "غرف طاقم المنزل"         },
      { en: "Private Cinema Room",      ar: "غرفة سينما خاصة"         },
      { en: "Wine Cellar / Majlis",     ar: "مجلس / قبو"               },
      { en: "4-Car Private Garage",     ar: "مرآب خاص لأربع سيارات"   },
      { en: "Rooftop Entertainment",    ar: "ترفيه على السطح"          },
    ],
    investment: {
      roi:   "8–12% p.a.",
      type:  { en: "Freehold Luxury Villa", ar: "تملك حر — فيلا فاخرة" },
      tenure: { en: "Perpetual Ownership",  ar: "ملكية دائمة"           },
      note: {
        en: "Limited collection of 18 villas. Viewing by private appointment only.",
        ar: "مجموعة محدودة من 18 فيلا. المشاهدة بموعد خاص فقط.",
      },
    },
    features: [
      { en: "Private elevator per villa",       ar: "مصعد خاص لكل فيلا"          },
      { en: "Bespoke kitchen by Bulthaup",      ar: "مطبخ مخصص من Bulthaup"       },
      { en: "Dornbracht bathroom fixtures",     ar: "تجهيزات حمام Dornbracht"      },
      { en: "Climate-controlled wine room",     ar: "غرفة نبيذ ذات تحكم مناخي"    },
      { en: "Lutron smart lighting systems",    ar: "أنظمة إضاءة ذكية Lutron"     },
    ],
  },

  {
    id: "nawah-tower",
    name: { en: "Nawah Tower", ar: "برج نواة" },
    category: { en: "Commercial Towers", ar: "الأبراج التجارية" },
    categoryKey: "Commercial Towers",
    tag: "Landmark",
    location: { en: "King Fahd Road", ar: "طريق الملك فهد" },
    area: "28,000 m²",
    units: "42 Floors",
    status: { en: "Under Construction", ar: "تحت الإنشاء" },
    year: "2026",
    img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=900&q=85",
    ],
    desc: {
      en: "Grade-A commercial tower at the heart of Riyadh's most prominent business corridor.",
      ar: "برج تجاري من الفئة A في قلب أبرز ممر تجاري في الرياض.",
    },
    longDesc: {
      en: "Nawah Tower will become one of Riyadh's most recognizable commercial landmarks. Designed by an internationally acclaimed architecture firm, the 42-floor Grade-A tower rises above King Fahd Road with a distinctive crystalline facade that captures and reflects the Saudi sun in breathtaking patterns. The tower provides 28,000 m² of leasable Grade-A office space, a podium retail experience, a sky lobby at floor 30, and a panoramic rooftop event space. Engineered for LEED Gold certification, it represents the future of sustainable commercial development in Saudi Arabia.",
      ar: "سيصبح برج نواة أحد أبرز المعالم التجارية في الرياض. مصمم من قبل شركة هندسة معمارية ذات شهرة دولية، يرتفع البرج من 42 طابقًا من الفئة A فوق طريق الملك فهد بواجهة بلورية مميزة تلتقط أشعة الشمس السعودية وتعكسها في أنماط رائعة. يوفر البرج 28,000 م² من مساحات المكاتب من الدرجة A المؤجرة وتجربة تجزئة في البودروم وبهو سماء في الطابق 30 ومساحة فعاليات بانورامية على السطح.",
    },
    amenities: [
      { en: "Sky Lobby at Floor 30",     ar: "بهو سماء في الطابق 30"    },
      { en: "Panoramic Rooftop Venue",   ar: "مكان فعاليات بانورامي"    },
      { en: "Retail Podium",             ar: "بودروم تجاري"              },
      { en: "Concierge Services",        ar: "خدمات الكونسيرج"           },
      { en: "EV Charging Parking",       ar: "مواقف شحن السيارات الكهربائية" },
      { en: "Conference Facilities",     ar: "مرافق مؤتمرات"             },
    ],
    investment: {
      roi:   "9–13% p.a.",
      type:  { en: "Commercial Freehold / Leaseback", ar: "تجاري تملك حر / إعادة تأجير" },
      tenure: { en: "Perpetual Ownership",  ar: "ملكية دائمة" },
      note: {
        en: "Pre-leasing available. Anchor tenant opportunities from Floor 1–10.",
        ar: "الإيجار المسبق متاح. فرص المستأجر الرئيسي من الطابق 1 إلى 10.",
      },
    },
    features: [
      { en: "LEED Gold target certification", ar: "استهداف شهادة LEED الذهبية" },
      { en: "Crystalline glass curtain wall", ar: "واجهة زجاجية بلورية"         },
      { en: "Floor plates 600–800 m²",        ar: "لوحات طوابق 600–800 م²"     },
      { en: "Raised access flooring",          ar: "أرضية وصول مرفوعة"          },
      { en: "Fibre optic connectivity",        ar: "اتصال بالألياف الضوئية"      },
    ],
  },

  {
    id: "serenity-residences",
    name: { en: "Serenity Residences", ar: "مساكن الهدوء" },
    category: { en: "Premium Apartments", ar: "الشقق الفاخرة" },
    categoryKey: "Premium Apartments",
    tag: "New Launch",
    location: { en: "Al Olaya District", ar: "حي العليا" },
    area: "19,000 m²",
    units: "200 Apartments",
    status: { en: "Delivering 2026", ar: "تسليم 2026" },
    year: "2026",
    img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1560184897-ae75f418493e?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=85",
    ],
    desc: {
      en: "Ultra-premium sky apartments with panoramic Riyadh city views and full concierge services.",
      ar: "شقق سماء فائقة الفخامة بإطلالات بانورامية على الرياض وخدمات كونسيرج كاملة.",
    },
    longDesc: {
      en: "Serenity Residences redefines urban apartment living in Riyadh. Rising 32 floors above Al Olaya's golden mile, this landmark tower houses 200 ultra-premium apartments — from studios to 4-bedroom penthouses — each with floor-to-ceiling glazing capturing the Riyadh skyline. A sky garden on floor 15, a residents-only rooftop infinity pool, and a full-service concierge team ensure that every day at Serenity is effortlessly exceptional.",
      ar: "تُعيد مساكن الهدوء تعريف الحياة في شقق المدينة بالرياض. تتصاعد 32 طابقًا فوق الميل الذهبي في العليا، وتضم هذه البرج الشاهق 200 شقة فائقة الفخامة — من الاستوديوهات إلى البنتهاوس المكونة من 4 غرف نوم — كل منها مع نوافذ من الأرض للسقف تلتقط أفق الرياض.",
    },
    amenities: [
      { en: "Rooftop Infinity Pool",   ar: "مسبح لانهائي على السطح"     },
      { en: "Sky Garden at Floor 15",  ar: "حديقة سماء في الطابق 15"    },
      { en: "Full Concierge Service",  ar: "خدمة كونسيرج كاملة"          },
      { en: "Residents' Lounge",       ar: "صالة السكان"                 },
      { en: "Valet Parking",           ar: "خدمة صف السيارات"            },
      { en: "Co-Working Space",        ar: "مساحة عمل مشترك"             },
    ],
    investment: {
      roi:   "8–11% p.a.",
      type:  { en: "Residential Freehold", ar: "تملك حر سكني" },
      tenure: { en: "Perpetual Ownership", ar: "ملكية دائمة"  },
      note: {
        en: "Early investor pricing available on floors 1–12. Limited availability.",
        ar: "أسعار المستثمر المبكر متاحة في الطوابق 1–12. توافر محدود.",
      },
    },
    features: [
      { en: "Panoramic floor-to-ceiling glazing", ar: "نوافذ بانورامية من الأرض للسقف" },
      { en: "Italian kitchen by Molteni",          ar: "مطبخ إيطالي من Molteni"          },
      { en: "Private balcony per unit",            ar: "شرفة خاصة لكل وحدة"              },
      { en: "Smart home control panel",            ar: "لوحة تحكم المنزل الذكي"           },
      { en: "Double-glazed acoustic windows",      ar: "نوافذ مزدوجة عازلة للصوت"         },
    ],
  },

  {
    id: "nawah-business-hub",
    name: { en: "Nawah Business Hub", ar: "مركز نواة للأعمال" },
    category: { en: "Business Centers", ar: "مراكز الأعمال" },
    categoryKey: "Business Centers",
    tag: "Premium",
    location: { en: "King Abdullah Financial District", ar: "مركز الملك عبدالله المالي" },
    area: "22,000 m²",
    units: "15 Floors",
    status: { en: "Available", ar: "متاح" },
    year: "2023",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=900&q=85",
    ],
    desc: {
      en: "An integrated business hub within KAFD offering flexible Grade-A office spaces and premium services.",
      ar: "مركز أعمال متكامل داخل KAFD يقدم مساحات مكتبية مرنة من الفئة A وخدمات راقية.",
    },
    longDesc: {
      en: "Nawah Business Hub is strategically located within the King Abdullah Financial District — Saudi Arabia's most prestigious financial address. The 15-floor building provides 22,000 m² of flexible Grade-A office space, designed for the modern enterprise. From private executive suites to open collaborative floors, the Hub offers a full ecosystem: meeting rooms, auditoriums, premium catering, and 24/7 facility management. Its LEED Platinum certification reflects Nawah's commitment to sustainability and operational excellence.",
      ar: "يقع مركز نواة للأعمال استراتيجيًا داخل مركز الملك عبدالله المالي — أرقى عنوان مالي في المملكة العربية السعودية. يوفر المبنى المكون من 15 طابقًا 22,000 م² من مساحات المكاتب المرنة من الفئة A، مصممة للمؤسسة الحديثة.",
    },
    amenities: [
      { en: "Executive Meeting Suites",  ar: "غرف اجتماع تنفيذية"         },
      { en: "Auditorium (200 seats)",    ar: "قاعة محاضرات (200 مقعد)"    },
      { en: "Premium Business Lounge",   ar: "صالة أعمال راقية"            },
      { en: "In-house Catering",         ar: "تموين داخلي"                 },
      { en: "Biometric Access Control",  ar: "تحكم بالوصول البيومتري"      },
      { en: "24/7 Facility Management",  ar: "إدارة منشآت على مدار الساعة" },
    ],
    investment: {
      roi:   "9–12% p.a.",
      type:  { en: "Commercial Freehold", ar: "تجاري تملك حر" },
      tenure: { en: "Perpetual Ownership", ar: "ملكية دائمة"  },
      note: {
        en: "LEED Platinum certified. Suitable for institutional investors.",
        ar: "حاصل على شهادة LEED البلاتينية. مناسب للمستثمرين المؤسسيين.",
      },
    },
    features: [
      { en: "LEED Platinum certified",            ar: "معتمد بلاتيني LEED"                },
      { en: "Floor plates 1,200–1,400 m²",        ar: "لوحات طوابق 1,200–1,400 م²"       },
      { en: "Dedicated broadband infrastructure", ar: "بنية تحتية للنطاق العريض المخصص"  },
      { en: "Secure underground parking",         ar: "مواقف مؤمنة تحت الأرض"            },
      { en: "On-site medical clinic",             ar: "عيادة طبية في الموقع"              },
    ],
  },

  {
    id: "the-golden-mile",
    name: { en: "The Golden Mile", ar: "الميل الذهبي" },
    category: { en: "Retail Destinations", ar: "وجهات التسوق" },
    categoryKey: "Retail Destinations",
    tag: "Coming Soon",
    location: { en: "West Riyadh", ar: "غرب الرياض" },
    area: "35,000 m²",
    units: "180 Retail Units",
    status: { en: "Delivering 2026", ar: "تسليم 2026" },
    year: "2026",
    img: "https://images.unsplash.com/photo-1555636222-cae831e670b3?auto=format&fit=crop&w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1555636222-cae831e670b3?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=900&q=85",
    ],
    desc: {
      en: "A curated luxury retail destination blending high-end brands with premium dining and entertainment.",
      ar: "وجهة تجزئة فاخرة تمزج العلامات التجارية الراقية مع تجارب الطعام والترفيه الفاخرة.",
    },
    longDesc: {
      en: "The Golden Mile is set to transform the retail landscape of West Riyadh. Spread across 35,000 m², this curated luxury destination brings together 180 premium retail units, anchored by flagship stores of the world's most iconic luxury brands. Beyond shopping, The Golden Mile offers an unmatched dining and entertainment experience — from Michelin-starred restaurant concepts to a rooftop sunset terrace and a luxury cinema. It is not merely a mall; it is a lifestyle destination.",
      ar: "الميل الذهبي سيحول مشهد التجزئة في غرب الرياض. يمتد على 35,000 م²، وتجمع هذه الوجهة الفاخرة المختارة 180 وحدة تجزئة راقية، تتمحور حول المتاجر الرئيسية لأبرز العلامات التجارية الفاخرة في العالم.",
    },
    amenities: [
      { en: "Luxury Brand Flagships",    ar: "متاجر العلامات الفاخرة الرئيسية" },
      { en: "Fine Dining Restaurant Row", ar: "صف مطاعم الطعام الراقي"          },
      { en: "Luxury Cinema",             ar: "سينما فاخرة"                      },
      { en: "Rooftop Sunset Terrace",    ar: "تراس غروب الشمس على السطح"       },
      { en: "VIP Valet Service",         ar: "خدمة صف السيارات VIP"            },
      { en: "Concierge Shopping Service", ar: "خدمة كونسيرج التسوق"            },
    ],
    investment: {
      roi:   "11–15% p.a.",
      type:  { en: "Retail Freehold", ar: "تجزئة تملك حر" },
      tenure: { en: "Perpetual Ownership", ar: "ملكية دائمة" },
      note: {
        en: "Anchor and in-line unit opportunities available. Pre-leasing in progress.",
        ar: "فرص الوحدات الرئيسية والمضمنة متاحة. الإيجار المسبق جارٍ.",
      },
    },
    features: [
      { en: "Climate-controlled retail boulevard", ar: "بوليفار تجاري مكيف"               },
      { en: "Gold-accented architectural finishes", ar: "تشطيبات معمارية بلمسات ذهبية"    },
      { en: "Automated valet parking system",       ar: "نظام ركن سيارات آلي"              },
      { en: "Advanced security & surveillance",     ar: "أمن ومراقبة متقدمان"              },
      { en: "Dedicated loading bays",               ar: "مناطق تحميل مخصصة"               },
    ],
  },

  {
    id: "nawah-gardens",
    name: { en: "Nawah Gardens", ar: "حدائق نواة" },
    category: { en: "Luxury Compounds", ar: "المجمعات الفاخرة" },
    categoryKey: "Luxury Compounds",
    tag: "New Project",
    location: { en: "East Riyadh", ar: "شرق الرياض" },
    area: "38,000 m²",
    units: "95 Units",
    status: { en: "Delivering 2026", ar: "تسليم 2026" },
    year: "2026",
    img: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=85",
    ],
    desc: {
      en: "Lush garden compound with expansive green corridors and resort-style lifestyle facilities.",
      ar: "مجمع حدائقي خضراء مع ممرات خضراء فسيحة ومرافق أسلوب حياة تشبه المنتجعات.",
    },
    longDesc: {
      en: "Nawah Gardens is an escape from the city within the city. Designed around the concept of biophilic living, this garden compound in East Riyadh dedicates over 40% of its land to green spaces — shaded promenades, planted courtyards, water features, and fruit orchards. The 95 residential units range from garden-level duplexes to penthouse residences, all oriented to maximize views of the lush landscape. It is the first Nawah compound to achieve LEED Silver certification.",
      ar: "حدائق نواة ملاذ من المدينة داخل المدينة. مصمم حول مفهوم العيش الحيوي، يخصص هذا المجمع الحدائقي في شرق الرياض أكثر من 40% من أرضه للمساحات الخضراء.",
    },
    amenities: [
      { en: "Biophilic Garden Design",   ar: "تصميم حدائق حيوي"           },
      { en: "Shaded Walking Promenades", ar: "ممشى مظلل"                   },
      { en: "Water Features & Fountains", ar: "عناصر مائية ونوافير"       },
      { en: "Outdoor Fitness Trail",     ar: "مسار لياقة خارجي"            },
      { en: "Fruit Orchards",            ar: "بساتين فاكهة"                },
      { en: "Community Clubhouse",       ar: "نادي المجتمع"                },
    ],
    investment: {
      roi:   "10–13% p.a.",
      type:  { en: "Freehold Residential", ar: "تملك حر سكني" },
      tenure: { en: "Perpetual Ownership", ar: "ملكية دائمة"  },
      note: {
        en: "LEED Silver certified compound. Garden units highly sought after.",
        ar: "مجمع حاصل على شهادة LEED الفضية. وحدات الحديقة مطلوبة بشدة.",
      },
    },
    features: [
      { en: "LEED Silver certified",          ar: "معتمد فضي LEED"                   },
      { en: "40%+ green space ratio",         ar: "نسبة مساحة خضراء 40%+"            },
      { en: "Solar-powered common areas",     ar: "مناطق مشتركة تعمل بالطاقة الشمسية" },
      { en: "Rainwater harvesting system",    ar: "نظام تجميع مياه الأمطار"          },
      { en: "EV charging stations",           ar: "محطات شحن السيارات الكهربائية"     },
    ],
  },

  {
    id: "crown-villas",
    name: { en: "Crown Villas", ar: "فلل تاج" },
    category: { en: "Private Villas", ar: "الفلل الخاصة" },
    categoryKey: "Private Villas",
    tag: "Ultra Luxury",
    location: { en: "Al Nakheel", ar: "النخيل" },
    area: "8,500 m²",
    units: "12 Villas",
    status: { en: "Available", ar: "متاح" },
    year: "2024",
    img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=85",
    ],
    desc: {
      en: "Ultra-luxury private villas in Al Nakheel featuring private pools, private cinema, and bespoke interiors.",
      ar: "فلل خاصة فائقة الفخامة في النخيل مع مسابح خاصة وسينما خاصة وتصاميم داخلية حصرية.",
    },
    longDesc: {
      en: "Crown Villas is the crown jewel of Nawah's residential portfolio. This ultra-exclusive collection of just 12 villas in the prestigious Al Nakheel district of Riyadh represents the very highest expression of Saudi residential luxury. Each villa spans over 700 m² on a private plot, featuring a private temperature-controlled pool, an indoor private cinema, a sky terrace, and a dedicated smart-home control room. The interiors are crafted by internationally renowned designers — each villa is a one-of-a-kind piece of residential art.",
      ar: "فلل تاج هي جوهرة تاج محفظة نواة السكنية. هذه المجموعة الحصرية للغاية المؤلفة من 12 فيلا فقط في حي النخيل المرموق بالرياض تمثل أعلى تعبير عن الفخامة السكنية السعودية.",
    },
    amenities: [
      { en: "Temperature-Controlled Pool", ar: "مسبح مكيف الحرارة"         },
      { en: "Private Cinema Room",         ar: "غرفة سينما خاصة"           },
      { en: "Sky Terrace",                 ar: "تراس سماء"                  },
      { en: "Smart Home Control Room",     ar: "غرفة تحكم المنزل الذكي"    },
      { en: "6-Car Private Garage",        ar: "مرآب خاص لست سيارات"        },
      { en: "Helicopter Landing Pad",      ar: "منصة هليكوبتر"              },
    ],
    investment: {
      roi:   "7–10% p.a.",
      type:  { en: "Ultra-Luxury Freehold", ar: "تملك حر فاخر" },
      tenure: { en: "Perpetual Ownership",  ar: "ملكية دائمة"  },
      note: {
        en: "Only 12 villas. By private appointment and financial verification only.",
        ar: "فقط 12 فيلا. بموعد خاص وتحقق مالي فقط.",
      },
    },
    features: [
      { en: "Bespoke interior by international designer", ar: "تصميم داخلي حصري بمصمم دولي"  },
      { en: "700+ m² per villa",                          ar: "700+ م² لكل فيلا"              },
      { en: "Helicopter pad on rooftop",                  ar: "منصة طائرة على السطح"           },
      { en: "Private 6-car subterranean garage",          ar: "مرآب تحت الأرض لست سيارات"    },
      { en: "Whole-home Crestron automation",             ar: "أتمتة Crestron للمنزل بالكامل" },
    ],
  },
];

export function getProject(id: string) {
  return projects.find((p) => p.id === id) ?? null;
}

export function getRelated(id: string, limit = 3) {
  return projects.filter((p) => p.id !== id).slice(0, limit);
}
