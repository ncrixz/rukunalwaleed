/* =====================================================
   Rukn Al Waleed — site interactions + i18n
   ===================================================== */

(function () {
  'use strict';

  // ---------- Translations (Arabic primary, English secondary) ----------
  const I18N = {
    ar: {
      'topbar.hours': 'يومياً حتى 11:30 مساءً',
      'topbar.langToggle': 'English',

      'brand.name': 'مؤسسة ركن الوليد',
      'brand.tag': 'للتبريد والتكييف',

      'nav.home': 'الرئيسية',
      'nav.services': 'خدماتنا',
      'nav.electronics': 'الأجهزة',
      'nav.about': 'من نحن',
      'nav.why': 'لماذا نحن',
      'nav.gallery': 'المعرض',
      'nav.contact': 'اتصل بنا',
      'nav.cta': 'اتصل الآن',

      'hero.badge': 'تقييم العملاء على Google',
      'hero.title': 'ابقَ بارداً، تنفّس بنقاء',
      'hero.lead': 'إصلاح جميع أنواع المكيفات والثلاجات والغسالات في تبوك',
      'hero.subtitle': 'مؤسسة ركن الوليد للتبريد والتكييف — مركز متخصص في إصلاح وصيانة جميع أنواع المكيفات والثلاجات والغسالات بمختلف الموديلات والماركات. تشخيص دقيق، قطع غيار أصلية، وضمان حقيقي على كل عمل.',
      'hero.ctaPrimary': '☎ اتصل الآن: 0508301100',
      'hero.ctaSecondary': 'تعرّف على خدماتنا',
      'hero.statRating': 'تقييم Google',
      'hero.statYears': 'سنة خبرة',
      'hero.statHours': 'حتى آخر اليوم',

      'services.eyebrow': 'خدماتنا الرئيسية',
      'services.title': 'إصلاح جميع أنواع المكيفات والثلاجات والغسالات',
      'services.subtitle': 'تخصصنا الرئيسي إصلاح وصيانة المكيفات والثلاجات والغسالات بجميع أنواعها وماركاتها، إضافة إلى خدمات تعبئة الفريون والفحص الكهربائي والتنظيف العميق.',
      'services.s1.t': 'جميع أنواع المكيفات',
      'services.s1.d': 'إصلاح وصيانة جميع أنواع المكيفات: السبليت، الشباك، المركزي، الكونسيلد، الكاسيت، والصحراوي — لجميع الماركات بضمان حقيقي.',
      'services.s1.l1': 'سبليت ومركزي',
      'services.s1.l2': 'شباك وكاسيت',
      'services.s1.l3': 'كونسيلد ودكت',
      'services.s1.l4': 'صحراوي وبورتابل',
      'services.s2.t': 'جميع أنواع الثلاجات',
      'services.s2.d': 'إصلاح الثلاجات والفريزرات والمبردات التجارية بكافة أحجامها وماركاتها: مشاكل التبريد، الكومبريسور، الترموستات، والتسريبات.',
      'services.s2.l1': 'باب واحد ومزدوج',
      'services.s2.l2': 'سايد باي سايد',
      'services.s2.l3': 'فريزر صدر ورأسي',
      'services.s2.l4': 'ثلاجات تجارية وعرض',
      'services.s3.t': 'جميع أنواع الغسالات',
      'services.s3.d': 'صيانة وإصلاح الغسالات الأوتوماتيك والنشافات بمختلف الأنواع: أعطال الموتور، البلف، البوردة، الطبلة، والتصريف.',
      'services.s3.l1': 'فوق تحميل',
      'services.s3.l2': 'أمام تحميل',
      'services.s3.l3': 'أوتوماتيك وعادي',
      'services.s3.l4': 'نشافات وغسيل وتجفيف',
      'services.s4.t': 'تعبئة الفريون',
      'services.s4.d': 'إعادة شحن وتعبئة جميع أنواع غازات التبريد (R22, R410A, R32) بالكميات الصحيحة، مع فحص الضغط والأداء قبل التسليم.',
      'services.s5.t': 'الفحص الكهربائي',
      'services.s5.d': 'فحص شامل للوحات الكهربائية والمكثفات والكومبريسور والموتورات لاكتشاف الأعطال قبل أن تتسبب في تعطل كامل للجهاز.',
      'services.s6.t': 'التنظيف وكشف التسريبات',
      'services.s6.d': 'تنظيف عميق للمكيفات والأجهزة، وكشف تسريبات الفريون بأجهزة دقيقة ومعالجتها جذرياً لمنع تكرار المشكلة.',

      'elec.eyebrow': 'إصلاح الأجهزة',
      'elec.title': 'إصلاح جميع أنواع الأجهزة الإلكترونية والكهربائية',
      'elec.subtitle': 'بالإضافة إلى التكييف والتبريد، فريقنا الفني يتعامل مع مختلف الأجهزة المنزلية والإلكترونية. تشخيص دقيق، قطع غيار أصلية، وأسعار شفافة على جميع الأنواع.',
      'elec.c1.t': 'شاشات التلفزيون',
      'elec.c1.d': 'LED · LCD · سمارت · بلازما',
      'elec.c2.t': 'الغسالات والنشافات',
      'elec.c2.d': 'أوتوماتيك · فوق تحميل · أمام تحميل',
      'elec.c3.t': 'غسالات الصحون',
      'elec.c3.d': 'منزلي وتجاري',
      'elec.c4.t': 'الأفران والميكروويف',
      'elec.c4.d': 'كهربائي · غاز · ميكروويف',
      'elec.c5.t': 'برادات الماء والمياه',
      'elec.c5.d': 'منزلي · مكتبي · تجاري',
      'elec.c10.t': 'أجهزة المطبخ الصغيرة',
      'elec.c10.d': 'خلاطات · قلايات · محامص · غلايات',
      'elec.c11.t': 'المكانس الكهربائية',
      'elec.c11.d': 'عادي · بخار · روبوت',
      'elec.note': 'لا تتردد في السؤال — لدينا خبرة في إصلاح أنواع كثيرة من الأجهزة الكهربائية والإلكترونية. اتصل بنا أو أرسل لنا صورة عبر واتساب وسنخبرك مباشرة.',
      'elec.ctaCall': '☎ اتصل: 0508301100',
      'elec.ctaWa': '💬 تواصل عبر واتساب',

      'about.eyebrow': 'من نحن',
      'about.title': 'خبرة محلية يثق بها أهل تبوك',
      'about.p1': 'مؤسسة ركن الوليد للتبريد والتكييف هي ورشة متخصصة تقع في حي الأمير ممدوح بن عبدالعزيز، السليمانية، تبوك. نقدّم خدمات إصلاح وصيانة المكيفات والثلاجات والمبردات بكفاءة عالية، ونؤمن بأن الجودة الحقيقية هي ما يجعل العميل يعود إلينا في كل مرة.',
      'about.p2': 'فريقنا من الفنيين المدرّبين يعتمد على أحدث أجهزة التشخيص وقطع الغيار الأصلية فقط، مع التزام صارم بمواعيد التنفيذ ونظافة الموقع. تقييمنا 4.8 على Google لم يأتِ من فراغ — بل ثمرة سنوات من العمل الجاد والصدق مع كل عميل.',
      'about.t1': 'فنيون معتمدون وذوو خبرة طويلة',
      'about.t2': 'قطع غيار أصلية وضمان على الإصلاح',
      'about.t3': 'تسعير شفاف بدون رسوم خفية',
      'about.t4': 'التزام بالمواعيد ونظافة الموقع',
      'about.cta': '☎ تواصل معنا',
      'about.badgeText': 'تقييم العملاء',

      'why.eyebrow': 'لماذا تختارنا',
      'why.title': 'أسباب تجعلنا الخيار المفضل',
      'why.subtitle': 'نقدم تجربة خدمة مختلفة تجمع بين الاحترافية، السرعة، والثقة.',
      'why.f1.t': 'استجابة سريعة',
      'why.f1.d': 'نصل إلى موقعك في أسرع وقت ممكن، خصوصاً في حالات الطوارئ الصيفية.',
      'why.f2.t': 'تسعير عادل',
      'why.f2.d': 'عرض سعر واضح قبل بدء العمل، ولا توجد أي مفاجآت في الفاتورة النهائية.',
      'why.f3.t': 'ضمان حقيقي',
      'why.f3.d': 'جميع أعمالنا مضمونة، وقطع الغيار التي نستخدمها أصلية ومرفقة بضمان المصنّع.',
      'why.f4.t': 'عقود صيانة',
      'why.f4.d': 'عقود سنوية للمنازل والمنشآت تحافظ على أداء أجهزتك وتحميك من الأعطال المفاجئة.',

      'gallery.eyebrow': 'من أعمالنا',
      'gallery.title': 'لمحات من المشاريع والصيانة',
      'gallery.subtitle': 'صور من بعض أعمال الصيانة والإصلاح التي نفذها فريقنا.',

      'tst.eyebrow': 'آراء عملائنا',
      'tst.title': 'يثقون بنا في كل موسم',
      'tst.sub': 'تقييم 4.8 على Google من عملاء جربوا الخدمة وعادوا إلينا.',
      'tst.q1': '«خدمة ممتازة وسرعة في الاستجابة. الفني محترف ونظيف في عمله، والأسعار معقولة جداً. أنصح بهم.»',
      'tst.r1': 'عميل سكني — تبوك',
      'tst.q2': '«تعاقدنا معهم على صيانة مكيفات الفرع، والنتيجة فاقت التوقعات. التزام تام بالمواعيد وجودة عالية.»',
      'tst.r2': 'مديرة فرع — قطاع تجزئة',
      'tst.q3': '«اتصلت بهم متأخراً بسبب عطل مفاجئ، وحضروا في نفس اليوم وأصلحوا المشكلة. شكراً لكم.»',
      'tst.r3': 'صاحب مطعم',

      'contact.eyebrow': 'تواصل معنا',
      'contact.title': 'اطلب زيارة فنية الآن',
      'contact.subtitle': 'أرسل لنا بياناتك وسيتواصل معك فريقنا خلال ساعات العمل لتأكيد موعد الزيارة وتقديم عرض السعر، أو اتصل مباشرة على رقمنا أدناه.',
      'contact.addrT': 'العنوان',
      'contact.addrV': 'حي الأمير ممدوح بن عبدالعزيز، السليمانية، تبوك 47312',
      'contact.phoneT': 'الهاتف',
      'contact.waT': 'واتساب',
      'contact.hoursT': 'ساعات العمل',
      'contact.hoursV': 'يومياً حتى 11:30 مساءً',

      'form.title': 'طلب خدمة سريع',
      'form.hint': 'سنتواصل معك في أقرب وقت ممكن.',
      'form.name': 'الاسم',
      'form.phone': 'رقم الجوال',
      'form.service': 'نوع الخدمة',
      'form.message': 'تفاصيل الطلب',
      'form.submit': 'إرسال الطلب عبر واتساب',
      'form.s.ac': 'إصلاح مكيف',
      'form.s.fridge': 'إصلاح ثلاجة / فريزر',
      'form.s.washer': 'إصلاح غسالة / نشافة',
      'form.s.gas': 'تعبئة فريون',
      'form.s.elec': 'فحص كهربائي',
      'form.s.clean': 'تنظيف عام',
      'form.s.leak': 'كشف وإصلاح تسريب',
      'form.s.tv': 'إصلاح تلفزيون',
      'form.s.dish': 'إصلاح غسالة صحون',
      'form.s.oven': 'إصلاح فرن / ميكروويف',
      'form.s.water': 'إصلاح براد ماء',
      'form.s.kitchen': 'جهاز مطبخ صغير',
      'form.s.vacuum': 'مكنسة كهربائية',
      'form.s.other': 'أخرى',

      'footer.about': 'شريكك الموثوق لخدمات إصلاح وصيانة التكييف والتبريد في تبوك. ابقَ بارداً، تنفّس بنقاء.',
      'footer.linksT': 'روابط سريعة',
      'footer.contactT': 'تواصل',
      'footer.copyright': 'مؤسسة ركن الوليد للتبريد والتكييف. جميع الحقوق محفوظة.',
    },

    en: {
      'topbar.hours': 'Daily until 11:30 PM',
      'topbar.langToggle': 'العربية',

      'brand.name': 'Rukn Al Waleed Est.',
      'brand.tag': 'Refrigeration & Air Conditioning',

      'nav.home': 'Home',
      'nav.services': 'Services',
      'nav.electronics': 'Appliances',
      'nav.about': 'About',
      'nav.why': 'Why Us',
      'nav.gallery': 'Gallery',
      'nav.contact': 'Contact',
      'nav.cta': 'Call Now',

      'hero.badge': 'Customer rating on Google',
      'hero.title': 'Stay Cool. Breathe Fresh.',
      'hero.lead': 'Repair for all types of ACs, refrigerators, and washing machines in Tabuk',
      'hero.subtitle': 'Rukn Al Waleed — a specialized workshop for repairing and maintaining all types of air conditioners, refrigerators, and washing machines across all models and brands. Accurate diagnosis, original spare parts, and a real warranty on every job.',
      'hero.ctaPrimary': '☎ Call now: 050 830 1100',
      'hero.ctaSecondary': 'Explore our services',
      'hero.statRating': 'Google rating',
      'hero.statYears': 'Years of experience',
      'hero.statHours': 'Open till late',

      'services.eyebrow': 'Our Main Services',
      'services.title': 'Repair for all types of ACs, refrigerators, and washing machines',
      'services.subtitle': 'Our main specialty is repairing and maintaining ACs, refrigerators, and washing machines of all types and brands — alongside refrigerant refilling, electrical check-ups, and deep cleaning.',
      'services.s1.t': 'All AC Types',
      'services.s1.d': 'Repair and maintenance for all AC types: split, window, central, concealed, cassette, and desert coolers — across all major brands, with a real warranty.',
      'services.s1.l1': 'Split & central',
      'services.s1.l2': 'Window & cassette',
      'services.s1.l3': 'Concealed & ducted',
      'services.s1.l4': 'Desert & portable',
      'services.s2.t': 'All Refrigerator Types',
      'services.s2.d': 'Repair for refrigerators, freezers, and commercial coolers in every size and brand: cooling issues, compressors, thermostats, and gas leaks.',
      'services.s2.l1': 'Single & double door',
      'services.s2.l2': 'Side-by-side',
      'services.s2.l3': 'Chest & upright freezers',
      'services.s2.l4': 'Commercial & display fridges',
      'services.s3.t': 'All Washing Machine Types',
      'services.s3.d': 'Service and repair for automatic and semi-automatic washers and dryers: motor faults, valves, control boards, drums, and drainage.',
      'services.s3.l1': 'Top-load',
      'services.s3.l2': 'Front-load',
      'services.s3.l3': 'Automatic & semi-auto',
      'services.s3.l4': 'Dryers & washer-dryers',
      'services.s4.t': 'Refrigerant Gas Refilling',
      'services.s4.d': 'Recharging and refilling all types of refrigerants (R22, R410A, R32) with the correct amounts, plus pressure and performance checks before handover.',
      'services.s5.t': 'Electrical Check-Up',
      'services.s5.d': 'Comprehensive inspection of electrical boards, capacitors, compressors, and motors to catch faults before they cause a complete breakdown.',
      'services.s6.t': 'Cleaning & Leak Detection',
      'services.s6.d': 'Deep cleaning of ACs and appliances, plus precise refrigerant leak detection and proper repair to prevent the issue from recurring.',

      'elec.eyebrow': 'Appliance Repair',
      'elec.title': 'Repair for all kinds of electronics & appliances',
      'elec.subtitle': 'Beyond AC and refrigeration, our technicians service a wide range of household and electronic devices. Accurate diagnosis, original spare parts, and transparent pricing across all categories.',
      'elec.c1.t': 'Televisions',
      'elec.c1.d': 'LED · LCD · Smart · Plasma',
      'elec.c2.t': 'Washers & Dryers',
      'elec.c2.d': 'Automatic · top-load · front-load',
      'elec.c3.t': 'Dishwashers',
      'elec.c3.d': 'Home and commercial',
      'elec.c4.t': 'Ovens & Microwaves',
      'elec.c4.d': 'Electric · gas · microwave',
      'elec.c5.t': 'Water Coolers & Dispensers',
      'elec.c5.d': 'Home · office · commercial',
      'elec.c10.t': 'Small Kitchen Appliances',
      'elec.c10.d': 'Blenders · fryers · toasters · kettles',
      'elec.c11.t': 'Vacuum Cleaners',
      'elec.c11.d': 'Standard · steam · robot',
      'elec.note': "Don't hesitate to ask — we have experience repairing many types of electrical and electronic devices. Call us or send a photo on WhatsApp and we'll let you know right away.",
      'elec.ctaCall': '☎ Call: 050 830 1100',
      'elec.ctaWa': '💬 Chat on WhatsApp',

      'about.eyebrow': 'About Us',
      'about.title': 'Local expertise trusted by Tabuk',
      'about.p1': 'Rukn Al Waleed Refrigeration & Air Conditioning is a specialized workshop located in the Prince Mamduh Ibn Abdul Aziz district, Assulimaniyah, Tabuk. We deliver high-quality repair and maintenance for ACs, refrigerators, and coolers — and we believe genuine quality is what brings customers back to us every time.',
      'about.p2': 'Our team of trained technicians uses modern diagnostic equipment and only original spare parts, with strict commitment to schedules and a clean job site. Our 4.8 Google rating did not come by chance — it is the result of years of hard work and honesty with every customer.',
      'about.t1': 'Certified, experienced technicians',
      'about.t2': 'Original spare parts and a real warranty',
      'about.t3': 'Transparent pricing with no hidden fees',
      'about.t4': 'On-time arrival and a clean worksite',
      'about.cta': '☎ Get in touch',
      'about.badgeText': 'Customer rating',

      'why.eyebrow': 'Why Choose Us',
      'why.title': 'Reasons we are the preferred choice',
      'why.subtitle': 'A different service experience that combines professionalism, speed, and trust.',
      'why.f1.t': 'Fast Response',
      'why.f1.d': 'We arrive at your site as quickly as possible, especially during summer emergencies.',
      'why.f2.t': 'Fair Pricing',
      'why.f2.d': 'A clear quote before work starts, with no surprises on the final invoice.',
      'why.f3.t': 'Real Warranty',
      'why.f3.d': 'All our work is guaranteed, and the spare parts we use are original with manufacturer warranty.',
      'why.f4.t': 'Maintenance Contracts',
      'why.f4.d': 'Annual contracts for homes and businesses keep your systems running and protect you from sudden breakdowns.',

      'gallery.eyebrow': 'Our Work',
      'gallery.title': 'Glimpses from our projects',
      'gallery.subtitle': 'A look at some of the maintenance and repair jobs delivered by our team.',

      'tst.eyebrow': 'Customer Reviews',
      'tst.title': 'Trusted season after season',
      'tst.sub': '4.8 stars on Google from customers who tried our service and came back.',
      'tst.q1': '"Excellent service and fast response. The technician was professional and tidy, and prices are very reasonable. Highly recommended."',
      'tst.r1': 'Residential customer — Tabuk',
      'tst.q2': '"We signed a maintenance contract for our branch ACs and the result exceeded expectations. Punctual and high quality."',
      'tst.r2': 'Branch manager — Retail',
      'tst.q3': '"I called them late after a sudden breakdown and they arrived the same day and fixed it. Thank you."',
      'tst.r3': 'Restaurant owner',

      'contact.eyebrow': 'Contact Us',
      'contact.title': 'Request a service visit now',
      'contact.subtitle': 'Send us your details and our team will get back to you during business hours to confirm the visit and provide a quote — or call us directly on the number below.',
      'contact.addrT': 'Address',
      'contact.addrV': 'Prince Mamduh Ibn Abdul Aziz district, Assulimaniyah, Tabuk 47312',
      'contact.phoneT': 'Phone',
      'contact.waT': 'WhatsApp',
      'contact.hoursT': 'Working hours',
      'contact.hoursV': 'Daily until 11:30 PM',

      'form.title': 'Quick service request',
      'form.hint': "We'll get back to you as soon as possible.",
      'form.name': 'Full name',
      'form.phone': 'Mobile number',
      'form.service': 'Service type',
      'form.message': 'Request details',
      'form.submit': 'Send request via WhatsApp',
      'form.s.ac': 'AC repair',
      'form.s.fridge': 'Fridge / freezer repair',
      'form.s.washer': 'Washer / dryer repair',
      'form.s.gas': 'Refrigerant refilling',
      'form.s.elec': 'Electrical check-up',
      'form.s.clean': 'General cleaning',
      'form.s.leak': 'Leak detection & repair',
      'form.s.tv': 'TV repair',
      'form.s.dish': 'Dishwasher repair',
      'form.s.oven': 'Oven / microwave repair',
      'form.s.water': 'Water cooler repair',
      'form.s.kitchen': 'Small kitchen appliance',
      'form.s.vacuum': 'Vacuum cleaner',
      'form.s.other': 'Other',

      'footer.about': 'Your trusted partner for AC and refrigeration repair and maintenance in Tabuk. Stay cool. Breathe fresh.',
      'footer.linksT': 'Quick links',
      'footer.contactT': 'Contact',
      'footer.copyright': 'Rukn Al Waleed Refrigeration & Air Conditioning. All rights reserved.',
    },
  };

  // ---------- Helpers ----------
  const $ = (sel, ctx) => (ctx || document).querySelector(sel);
  const $$ = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));

  function applyLanguage(lang) {
    const html = document.documentElement;
    html.lang = lang;
    html.dir = lang === 'ar' ? 'rtl' : 'ltr';

    const dict = I18N[lang] || I18N.ar;

    $$('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (key && dict[key] != null) {
        el.textContent = dict[key];
      }
    });

    // Update meta title for accessibility
    const titleAr = 'مؤسسة ركن الوليد للتبريد والتكييف | Rukn Al Waleed Refrigeration & AC — Tabuk';
    const titleEn = 'Rukn Al Waleed Refrigeration & AC — Tabuk | مؤسسة ركن الوليد للتبريد والتكييف';
    document.title = lang === 'en' ? titleEn : titleAr;

    try { localStorage.setItem('rk_lang', lang); } catch (_) {}
  }

  function initLanguage() {
    let lang = 'ar';
    try {
      const saved = localStorage.getItem('rk_lang');
      if (saved === 'ar' || saved === 'en') lang = saved;
    } catch (_) {}
    applyLanguage(lang);
  }

  function toggleLanguage() {
    const current = document.documentElement.lang === 'en' ? 'en' : 'ar';
    applyLanguage(current === 'ar' ? 'en' : 'ar');
  }

  // ---------- Mobile nav ----------
  function initNav() {
    const toggle = $('#navToggle');
    const nav = $('#siteNav');
    if (!toggle || !nav) return;

    toggle.addEventListener('click', () => nav.classList.toggle('open'));
    $$('a', nav).forEach((a) => a.addEventListener('click', () => nav.classList.remove('open')));
  }

  // ---------- Reveal on scroll ----------
  function initReveal() {
    const targets = $$('.card, .feature, .quote, .gallery figure, .hero__content, .hero__media, .about__media, .form, .map');
    targets.forEach((t) => t.classList.add('reveal'));

    if (!('IntersectionObserver' in window)) {
      targets.forEach((t) => t.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    targets.forEach((t) => io.observe(t));
  }

  // ---------- Contact form -> WhatsApp ----------
  function initForm() {
    const form = $('#contactForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const lang = document.documentElement.lang === 'en' ? 'en' : 'ar';
      const data = new FormData(form);
      const name = (data.get('name') || '').toString().trim();
      const phone = (data.get('phone') || '').toString().trim();
      const service = (data.get('service') || '').toString().trim();
      const message = (data.get('message') || '').toString().trim();

      const note = $('#formNote');

      if (!name || !phone) {
        if (note) {
          note.hidden = false;
          note.className = 'form__note err';
          note.textContent = lang === 'en'
            ? 'Please enter your name and mobile number.'
            : 'الرجاء إدخال الاسم ورقم الجوال.';
        }
        return;
      }

      const lines = lang === 'en'
        ? [
            'New service request',
            `Name: ${name}`,
            `Phone: ${phone}`,
            `Service: ${service}`,
            message ? `Details: ${message}` : null,
          ]
        : [
            'طلب خدمة جديد',
            `الاسم: ${name}`,
            `الجوال: ${phone}`,
            `الخدمة: ${service}`,
            message ? `التفاصيل: ${message}` : null,
          ];

      const text = encodeURIComponent(lines.filter(Boolean).join('\n'));
      const waUrl = `https://wa.me/966508301100?text=${text}`;
      window.open(waUrl, '_blank', 'noopener');

      if (note) {
        note.hidden = false;
        note.className = 'form__note ok';
        note.textContent = lang === 'en'
          ? 'Opening WhatsApp to send your request…'
          : 'يتم فتح واتساب لإرسال طلبك…';
      }
      form.reset();
    });
  }

  // ---------- Year ----------
  function setYear() {
    const y = $('#year');
    if (y) y.textContent = String(new Date().getFullYear());
  }

  // ---------- Boot ----------
  document.addEventListener('DOMContentLoaded', () => {
    initLanguage();
    setYear();
    initNav();
    initReveal();
    initForm();

    const langBtn = $('#langToggle');
    if (langBtn) langBtn.addEventListener('click', toggleLanguage);
  });
})();
