// ==========================================================================
// RESUME SITE — Unified Script (Dark Mode + Bilingual + Interactions)
// ==========================================================================

(function () {
    'use strict';

    // ========================================================================
    // 1. COMPLETE TRANSLATIONS DICTIONARY (fa / en)
    // ========================================================================

    const translations = {
        fa: {
            switch_lang: 'English',
            switch_flag: '🇬🇧',
            switch_to_dark: 'حالت شب',
            switch_to_light: 'حالت روز',
            back_to_profile: 'بازگشت به پروفایل',
            // ---------- Index Page ----------
            index_title: 'امیرحسین خسروی — پروفایل شخصی',
            index_desc: 'پروفایل شخصی — فارغ‌التحصیل مقطع لیسانس رشته مدیریت صنعتی',
            index_og_title: 'امیرحسین خسروی — پروفایل شخصی',
            index_og_desc: 'فارغ‌التحصیل مقطع لیسانس، رشته مدیریت صنعتی',
            profile_caption: 'کارشناس فناوری و مدیریت',
            profile_eyebrow: 'Profile — Dossier',
            profile_name: 'امیرحسین خسروی',
            profile_subtitle: 'فارغ‌التحصیل مقطع لیسانس، رشته مدیریت صنعتی',
            contact_email: 'ایمیل',
            contact_phone: 'شماره تماس',
            contact_telegram: 'تلگرام من',
            btn_career: 'مسیر حرفه‌ای من',
            btn_skills: 'توانمندی‌های من',
            btn_certificates: 'گواهینامه‌های من',
            about_eyebrow: 'About',
            about_title: 'درباره من',
            info_resident: 'ساکن',
            info_resident_value: 'مشهد',
            info_birth: 'سال تولد',
            info_birth_value: '۱۳۸۱',
            info_experience: 'سال سابقه کار',
            info_projects: 'پروژه موفق',
            about_text_1: 'فردی مسئولیت‌پذیر، یادگیرنده و علاقه‌مند به توسعه مهارت‌های حرفه‌ای با پیشینه‌ای ترکیبی در حوزه مدیریت، فناوری و فعالیت‌های اجرایی هستم. در مسیر تحصیلی و کاری خود تلاش کرده‌ام علاوه بر کسب دانش تخصصی، تجربه عملی در مواجهه با مسائل واقعی، ارتباط با مشتری، کار تیمی و اجرای پروژه‌ها به دست آورم.',
            about_text_2: 'تجربه فعالیت در حوزه‌های مختلف به من توانایی تحلیل مسئله، یادگیری سریع، سازگاری با شرایط جدید و ارائه راهکارهای عملی را آموخته است. همواره تلاش می‌کنم با رویکردی ساختارمند، دقت در انجام وظایف و مسئولیت‌پذیری در قبال نتایج، ارزش قابل توجهی برای مجموعه‌ای که در آن فعالیت می‌کنم ایجاد کنم.',
            about_text_3: 'علاقه‌مند به یادگیری مداوم و توسعه فردی هستم و باور دارم رشد حرفه‌ای حاصل ترکیب دانش، تجربه، خلاقیت و توانایی همکاری مؤثر با دیگران است. هدف من حضور در محیطی حرفه‌ای است که بتوانم در کنار افراد توانمند، دانش و مهارت‌های خود را توسعه داده و در بهبود فرآیندها و دستیابی به اهداف سازمان نقش مؤثری ایفا کنم.',
            footer_copyright: 'تمامی حقوق مادی و معنوی محفوظ است.',
            // ---------- Career Page ----------
            career_title_meta: 'مسیر حرفه‌ای من — امیرحسین خسروی',
            career_desc_meta: 'سوابق کاری و مسیر حرفه‌ای امیرحسین خسروی',
            career_og_title: 'مسیر حرفه‌ای من — امیرحسین خسروی',
            career_eyebrow: 'Professional Journey & Experience',
            career_title: 'مسیر حرفه‌ای و سوابق کاری',
            timeline_1_year: '۱۳۹۵',
            timeline_1_title: 'کارشناس فروش و ارتباط با مشتری در خرده‌فروشی',
            timeline_1_dur: '۶ ماه سابقه',
            timeline_1_desc: 'ارائه خدمات به مشتریان، مدیریت سفارش‌ها و تجربه تعامل مستقیم با مشتری',
            timeline_2_year: '۱۳۹۶',
            timeline_2_title: 'کارشناس فروش محصولات مصرفی و مدیریت فرآیند فروش',
            timeline_2_dur: '۶ ماه سابقه',
            timeline_2_desc: 'معرفی محصولات، راهنمایی مشتریان و پیگیری فرآیند فروش',
            timeline_3_year: '۱۳۹۸ - ۱۳۹۹',
            timeline_3_title: 'کارشناس فروش محصولات دیجیتال و لوازم جانبی موبایل',
            timeline_3_dur: '۲ سال سابقه',
            timeline_3_desc: 'فروش و مشاوره محصولات دیجیتال، شناخت بازار موبایل و لوازم جانبی، ارتباط با تأمین‌کنندگان و مدیریت سفارش‌ها',
            timeline_4_year: '۱۴۰۰',
            timeline_4_title: 'تکنسین تعمیرات تلفن همراه و بردهای الکترونیکی',
            timeline_4_dur: '۱ سال سابقه',
            timeline_4_desc: 'عیب‌یابی سخت‌افزاری و نرم‌افزاری موبایل، تعمیر و تعویض قطعات، تحلیل مشکلات فنی و ارائه راهکار مناسب',
            timeline_5_year: '۱۴۰۲ - ۱۴۰۵',
            timeline_5_title: 'فعالیت فریلنسری در حوزه‌های فنی، دیجیتال و اجرایی',
            timeline_5_dur: '۳ سال سابقه',
            timeline_5_desc: 'اجرای پروژه‌های مستقل، ارتباط با مشتری، مدیریت زمان، حل مسئله و ارائه خدمات تخصصی متناسب با نیاز کارفرما',
            timeline_6_year: '۱۴۰۲ - ۱۴۰۳',
            timeline_6_title: 'کارشناس حسابداری و امور مالی',
            timeline_6_dur: '۶ ماه سابقه',
            timeline_6_desc: 'ثبت و بررسی اطلاعات مالی، مدیریت اسناد، پیگیری امور حسابداری و آشنایی با فرآیندهای مالی سازمانی',
            timeline_7_year: '۱۴۰۲ - ۱۴۰۴',
            timeline_7_title: 'مدیر تیم‌های اجرایی، هنری و فنی',
            timeline_7_dur: '۳ سال سابقه',
            timeline_7_desc: 'برنامه‌ریزی و هماهنگی فعالیت تیم‌ها، تقسیم وظایف، مدیریت اجرا، هدایت نیروها و نظارت بر روند انجام پروژه‌ها و مراسمات',
            timeline_8_year: '۱۴۰۳',
            timeline_8_title: 'کارشناس نصب و پشتیبانی تجهیزات IT و سیستم‌های امنیتی',
            timeline_8_dur: '۶ ماه سابقه',
            timeline_8_desc: 'نصب و راه‌اندازی دوربین‌های مداربسته و تجهیزات امنیتی، پشتیبانی فنی و عیب‌یابی تجهیزات',
            timeline_9_year: '۱۴۰۴',
            timeline_9_title: 'کارشناس فروش تلفنی و توسعه ارتباط با مشتریان',
            timeline_9_dur: '۶ ماه سابقه',
            timeline_9_desc: 'برقراری ارتباط با مشتریان، معرفی خدمات و محصولات، پیگیری سرنخ‌های فروش و افزایش تعامل مشتری',
            timeline_10_year: '۱۴۰۴',
            timeline_10_title: 'کارشناس بازاریابی حضوری و توسعه بازار',
            timeline_10_dur: '۳ ماه سابقه',
            timeline_10_desc: 'شناسایی مشتریان بالقوه، معرفی محصولات و خدمات، ایجاد ارتباط مستقیم و جمع‌آوری بازخورد بازار',
            timeline_11_year: '۱۴۰۴ - ۱۴۰۵',
            timeline_11_title: 'کارشناس بازاریابی دیجیتال و فعالیت‌های آنلاین',
            timeline_11_dur: '۶ ماه سابقه',
            timeline_11_desc: 'فعالیت در شبکه‌های اجتماعی، تولید و مدیریت محتوای دیجیتال، بررسی رفتار مخاطب و اجرای فعالیت‌های بازاریابی آنلاین',
            now_badge: 'اکنون',
            // ---------- Skills Page ----------
            skills_title_meta: 'توانمندی‌ها و مهارت‌های تخصصی',
            skills_desc_meta: 'لیست کامل مهارت‌ها، ابزارها و توانمندی‌های فنی، هوش مصنوعی، مدیریتی و نرم‌افزاری',
            skills_og_title: 'توانمندی‌ها و مهارت‌های تخصصی',
            skills_og_desc: 'لیست کامل مهارت‌ها، ابزارها و توانمندی‌های فنی، هوش مصنوعی، مدیریتی و نرم‌افزاری',
            skills_eyebrow: 'Skills & Capabilities',
            skills_title: 'توانمندی‌ها و مهارت‌های تخصصی',
            stats_skills: 'مهارت و تخصص',
            stats_ai: 'حوزه هوش مصنوعی',
            stats_management: 'حوزه مدیریت',
            search_placeholder: 'جستجوی مهارت (مثلاً Python، فوتوشاپ یا تعمیرات)...',
            empty_search: 'نتیجه‌ای برای جستجوی شما یافت نشد. لطفاً عبارت دیگری را امتحان کنید.',
            filter_all: 'همه',
            filter_hardware: 'مهارت‌های فنی',
            filter_dev: 'برنامه‌نویسی و وب',
            filter_ai: 'هوش مصنوعی',
            filter_manage: 'تحلیلی و مدیریتی',
            filter_software: 'نرم‌افزارها',
            filter_lang: 'زبان‌ها',
            view_compact: 'نمای فشرده',
            view_full: 'نمای کامل',
            section_hardware: 'مهارت‌های فنی',
            section_dev: 'برنامه‌نویسی و توسعه',
            section_ai: 'هوش مصنوعی',
            section_manage: 'توانمندی‌های تحلیلی و مدیریتی',
            section_software: 'نرم‌افزارها',
            section_lang: 'زبان‌ها',
            badge_good: 'خوب',
            badge_mid: 'متوسط',
            badge_basic: 'آشنا',
            show_details: 'نمایش جزئیات',
            hide_details: 'بستن جزئیات',
            proficiency_label: 'میزان تسلط',
            skill_hw_mobile: '📱 تعمیرات سخت‌افزار تلفن همراه',
            desc_hw_mobile: 'عیب‌یابی، تعمیر و تعویض قطعات سخت‌افزاری تلفن همراه و آشنایی با تعمیرات برد، میکروسولد و ریبال.',
            skill_sw_mobile: '⚙️ تعمیرات نرم‌افزار تلفن همراه',
            desc_sw_mobile: 'فلش، آنلاک، حذف FRP، روت، بازیابی اطلاعات، دانگرید و رفع مشکلات نرم‌افزاری انواع تلفن همراه.',
            skill_security_sys: '📹 نصب و راه‌اندازی سیستم‌های امنیتی',
            desc_security_sys: 'نصب، راه‌اندازی و پیکربندی دوربین‌های مداربسته، DVR/NVR، سیستم‌های دزدگیر و کنترل تردد.',
            skill_pc_setup: '🖥️ نصب و پشتیبانی سیستم‌های رایانه‌ای',
            desc_pc_setup: 'نصب سیستم‌عامل، نرم‌افزارهای کاربردی، درایورها و ارائه خدمات پشتیبانی و رفع اشکال رایانه‌های شخصی.',
            skill_troubleshoot: '🔍 عیب‌یابی سخت‌افزار و نرم‌افزار',
            desc_troubleshoot: 'شناسایی و رفع مشکلات سخت‌افزاری و نرم‌افزاری تجهیزات رایانه‌ای و تلفن همراه.',
            skill_networks: '🌐 شبکه‌های کامپیوتری',
            desc_networks: 'راه‌اندازی و پیکربندی اولیه شبکه‌های کوچک و آشنایی با مفاهیم پایه شبکه.',
            skill_linux: '🐧 Linux',
            desc_linux: 'آشنایی با محیط، ساختار فایل‌ها و دستورات پایه سیستم‌عامل Linux.',
            skill_python: '🐍 Python',
            desc_python: 'توسعه اسکریپت‌ها، ربات‌ها، ابزارهای اتوماسیون و پروژه‌های کاربردی با زبان Python.',
            skill_html5: '📄 HTML5',
            desc_html5: 'طراحی ساختار صفحات وب مطابق استانداردهای HTML5.',
            skill_css3: '🎨 CSS3',
            desc_css3: 'طراحی و پیاده‌سازی رابط کاربری و قالب‌بندی صفحات وب.',
            skill_js: '⚡ JavaScript',
            desc_js: 'آشنایی با مفاهیم پایه و توسعه تعاملات سمت کاربر در صفحات وب.',
            skill_ai_gen: '🤖 ابزارهای هوش مصنوعی مولد',
            desc_ai_gen: 'بهره‌گیری از ابزارهای هوش مصنوعی برای تحقیق، تولید محتوا، تحلیل اطلاعات و افزایش بهره‌وری.',
            skill_prompt_eng: '🎯 مهندسی پرامپت',
            desc_prompt_eng: 'طراحی و بهینه‌سازی پرامپت برای مدل‌های زبانی به‌منظور تولید پاسخ‌های دقیق، تحلیل اطلاعات و حل مسائل.',
            skill_ai_research: '🔬 تحقیق و جمع‌آوری اطلاعات با AI',
            desc_ai_research: 'جمع‌آوری، ارزیابی و سازمان‌دهی اطلاعات تخصصی با استفاده از ابزارهای هوش مصنوعی.',
            skill_ai_solve: '💡 تحلیل و حل مسئله با AI',
            desc_ai_solve: 'استفاده از هوش مصنوعی برای تحلیل مسائل، بررسی راهکارها و تصمیم‌سازی.',
            skill_ai_workflows: '🔄 طراحی جریان‌های کاری مبتنی بر AI',
            desc_ai_workflows: 'طراحی و بهینه‌سازی فرایندهای کاری با استفاده از ابزارهای هوش مصنوعی و اتوماسیون.',
            skill_research_dev: '📚 تحقیق و پژوهش',
            desc_research_dev: 'جمع‌آوری، تحلیل و ارزیابی منابع برای تدوین گزارش‌ها و پروژه‌های پژوهشی.',
            skill_doc: '📋 مستندسازی',
            desc_doc: 'تهیه مستندات فنی، آموزشی و اجرایی برای پروژه‌ها و فرایندها.',
            skill_tech_report: '📝 نگارش گزارش‌های فنی',
            desc_tech_report: 'تنظیم گزارش‌های ساختاریافته و مستند با رویکرد فنی و تحلیلی.',
            skill_sys_analysis: '📊 تحلیل سیستم‌ها',
            desc_sys_analysis: 'بررسی نیازها، تحلیل ساختار سیستم‌ها و ارائه راهکارهای بهبود.',
            skill_process_improve: '⚙️ تحلیل و بهبود فرایندها',
            desc_process_improve: 'شناسایی گلوگاه‌ها و ارائه پیشنهاد برای افزایش بهره‌وری و بهینه‌سازی فرایندها.',
            skill_excel_data: '📈 تحلیل داده با Excel',
            desc_excel_data: 'سازمان‌دهی، تحلیل و گزارش‌دهی داده‌ها با استفاده از قابلیت‌های Microsoft Excel.',
            skill_process_mapping: '🔀 ترسیم فرایندها',
            desc_process_mapping: 'طراحی و مستندسازی فرایندهای کاری با نمودارهای استاندارد.',
            skill_system_modeling: '🌐 مدل‌سازی سیستم‌ها',
            desc_system_modeling: 'آشنایی با مدل‌سازی سیستم‌های پویا و شبیه‌سازی مفاهیم پایه با Vensim.',
            skill_project_mgmt: '📅 مدیریت پروژه',
            desc_project_mgmt: 'آشنایی با برنامه‌ریزی، زمان‌بندی و پیگیری فعالیت‌های پروژه.',
            skill_photoshop: '🎨 Adobe Photoshop',
            desc_photoshop: 'طراحی و ویرایش پوستر، بنر، کارت ویزیت و سایر محتوای گرافیکی.',
            skill_illustrator: '✒️ Adobe Illustrator',
            desc_illustrator: 'طراحی لوگو، المان‌های گرافیکی و آثار برداری.',
            skill_flstudio: '🎵 FL Studio',
            desc_flstudio: 'ساخت، تنظیم و ویرایش پروژه‌های صوتی و موسیقی.',
            skill_word: '📄 Microsoft Word',
            desc_word: 'تهیه، ویرایش و قالب‌بندی اسناد حرفه‌ای.',
            skill_excel: '📊 Microsoft Excel',
            desc_excel: 'مدیریت، تحلیل و سازمان‌دهی داده‌ها و تهیه گزارش.',
            skill_powerpoint: '📑 Microsoft PowerPoint',
            desc_powerpoint: 'طراحی و ارائه اسلایدهای حرفه‌ای.',
            skill_msproject: '📅 Microsoft Project',
            desc_msproject: 'آشنایی با برنامه‌ریزی، زمان‌بندی و مدیریت پروژه.',
            skill_visio: '📐 Microsoft Visio',
            desc_visio: 'ترسیم نمودارها، فلوچارت‌ها و فرایندهای سازمانی.',
            skill_vensim: '🔄 Vensim',
            desc_vensim: 'مدل‌سازی و شبیه‌سازی مقدماتی سیستم‌های پویا.',
            skill_rafie: '💰 نرم‌افزار حسابداری رافع',
            desc_rafie: 'آشنایی با ثبت و مدیریت عملیات مالی و حسابداری.',
            skill_parsian: '💳 نرم‌افزار حسابداری پارسیان',
            desc_parsian: 'آشنایی با فرآیندهای مالی، ثبت اسناد و گزارش‌گیری.',
            skill_mahak: '💼 نرم‌افزار حسابداری محک',
            desc_mahak: 'آشنایی با مدیریت امور مالی و عملیات حسابداری.',
            skill_lang_en: '🇬🇧 انگلیسی (English)',
            desc_lang_en: 'تسلط خوب بر مهارت‌های ارتباطی و درک متون تخصصی.',
            skill_lang_ar: '🇸🇦 عربی (Arabic)',
            desc_lang_ar: 'آشنایی با متون و مکاتبات پایه.',
            skill_lang_cn: '🇨🇳 چینی (Chinese)',
            desc_lang_cn: 'آشنایی مقدماتی با زبان و اصطلاحات.',
            // ---------- Certificates Page ----------
            certs_title_meta: 'گواهینامه‌ها و مدارک — امیرحسین خسروی',
            certs_desc_meta: 'آرشیو گواهینامه‌ها، مدارک تحصیلی و مهارت‌های امیرحسین خسروی',
            certs_og_title: 'گواهینامه‌ها و مدارک — امیرحسین خسروی',
            certs_og_desc: 'آرشیو گواهینامه‌ها، مدارک تحصیلی و مهارت‌های امیرحسین خسروی',
            certs_eyebrow: 'Official Credentials & Certificates',
            certs_title: 'مدارک و گواهینامه‌ها',
            certs_cat_mgmt_title: 'مدیریت و کسب‌وکار',
            certs_cat_mgmt_en: '/ Management',
            certs_cat_tech_title: 'فناوری و مهندسی',
            certs_cat_tech_en: '/ Technical',
            certs_cat_creative_title: 'رسانه و ارتباطات',
            certs_cat_creative_en: '/ Creative',
            cert_seal: 'VER',
            cert_status_verified: 'Verified',
            cert_mgmt_degree_title: 'کارشناسی مدیریت صنعتی',
            cert_mgmt_degree_desc: 'مدرک تحصیلی مقطع لیسانس',
            cert_mgmt_degree_id: 'ID: B.SC-01',
            cert_rafie_title: 'نرم‌افزار حسابداری رافع ۱۴۰۰',
            cert_rafie_desc: 'گواهی مهارت کاربردی',
            cert_rafie_id: 'ID: ACC-R14',
            cert_parsian_title: 'نرم‌افزار حسابداری پارسیان',
            cert_parsian_desc: 'گواهی مهارت کاربردی',
            cert_parsian_id: 'ID: ACC-PAR',
            cert_hw_title: 'تعمیرات سخت‌افزار تلفن همراه',
            cert_hw_desc: 'گواهی تخصصی مهارت',
            cert_hw_id: 'ID: HW-MOB',
            cert_sw_title: 'تعمیرات نرم‌افزار تلفن همراه',
            cert_sw_desc: 'گواهی تخصصی مهارت',
            cert_sw_id: 'ID: SW-MOB',
            cert_icdl_title: 'ICDL',
            cert_icdl_desc: 'مهارت‌های هفت‌گانه کامپیوتر',
            cert_icdl_id: 'ID: INT-07',
            cert_ps_title: 'Photoshop',
            cert_ps_desc: 'طراحی گرافیک و ویرایش تصویر',
            cert_ps_id: 'ID: ART-PS',
            cert_photo_title: 'عکاسی',
            cert_photo_desc: 'مهارت‌های ثبت تصویر',
            cert_photo_id: 'ID: ART-PH',
            cert_video_title: 'تصویربرداری',
            cert_video_desc: 'مهارت‌های ضبط و تدوین',
            cert_video_id: 'ID: ART-VD',
            cert_journalism_title: 'خبرنویسی و خبرنگاری',
            cert_journalism_desc: 'ارتباطات و رسانه',
            cert_journalism_id: 'ID: COM-JR',
            // ---------- Navigation ----------
            nav_profile: 'پروفایل',
            nav_career: 'مسیر حرفه‌ای',
            nav_skills: 'مهارت‌ها',
            nav_certs: 'گواهینامه‌ها'
        },
        en: {
            switch_lang: 'فارسی',
            switch_flag: '🇮🇷',
            switch_to_dark: 'Dark Mode',
            switch_to_light: 'Light Mode',
            back_to_profile: 'Back to Profile',
            // ---------- Index Page ----------
            index_title: 'Amirhossein Khosravi — Personal Profile',
            index_desc: 'Personal Profile — Bachelor\'s Degree in Industrial Management',
            index_og_title: 'Amirhossein Khosravi — Personal Profile',
            index_og_desc: 'Bachelor\'s Degree in Industrial Management',
            profile_caption: 'Technology & Management Specialist',
            profile_eyebrow: 'Profile — Dossier',
            profile_name: 'Amirhossein Khosravi',
            profile_subtitle: 'Bachelor\'s Degree in Industrial Management',
            contact_email: 'Email',
            contact_phone: 'Phone',
            contact_telegram: 'My Telegram',
            btn_career: 'My Career Path',
            btn_skills: 'My Skills',
            btn_certificates: 'My Certificates',
            about_eyebrow: 'About',
            about_title: 'About Me',
            info_resident: 'Resident',
            info_resident_value: 'Mashhad',
            info_birth: 'Birth Year',
            info_birth_value: '2002',
            info_experience: 'Years of Experience',
            info_projects: 'Successful Projects',
            about_text_1: 'I am a responsible, fast-learning individual passionate about developing professional skills with a combined background in management, technology, and operational activities. Throughout my academic and professional journey, I have strived to gain not only specialized knowledge but also practical experience in dealing with real-world challenges, customer relations, teamwork, and project execution.',
            about_text_2: 'Working across various fields has taught me analytical thinking, rapid adaptation to new situations, and the ability to provide practical solutions. I consistently aim to bring significant value to any organization I work with through a structured approach, attention to detail, and accountability for results.',
            about_text_3: 'I am deeply committed to continuous learning and personal growth. I believe professional development is the result of combining knowledge, experience, creativity, and effective collaboration. My goal is to work in a professional environment where I can grow alongside talented individuals, contribute to process improvements, and help achieve organizational objectives.',
            footer_copyright: 'All rights reserved.',
            // ---------- Career Page ----------
            career_title_meta: 'My Career Path — Amirhossein Khosravi',
            career_desc_meta: 'Work experience and professional journey of Amirhossein Khosravi',
            career_og_title: 'My Career Path — Amirhossein Khosravi',
            career_eyebrow: 'Professional Journey & Experience',
            career_title: 'Professional Journey & Work Experience',
            timeline_1_year: '2016',
            timeline_1_title: 'Retail Sales & Customer Relations Specialist',
            timeline_1_dur: '6 months experience',
            timeline_1_desc: 'Providing customer service, order management, and direct customer interaction experience.',
            timeline_2_year: '2017',
            timeline_2_title: 'Consumer Products Sales & Sales Process Management',
            timeline_2_dur: '6 months experience',
            timeline_2_desc: 'Product introduction, customer guidance, and sales process follow-up.',
            timeline_3_year: '2019 - 2020',
            timeline_3_title: 'Digital Products & Mobile Accessories Sales Specialist',
            timeline_3_dur: '2 years experience',
            timeline_3_desc: 'Sales and consulting for digital products, mobile market and accessories knowledge, supplier communication, and order management.',
            timeline_4_year: '2021',
            timeline_4_title: 'Mobile Phone & Electronic Board Repair Technician',
            timeline_4_dur: '1 year experience',
            timeline_4_desc: 'Hardware and software diagnostics for mobile devices, component repair and replacement, technical issue analysis and solution provision.',
            timeline_5_year: '2023 - 2026',
            timeline_5_title: 'Freelance Work in Technical, Digital & Operational Fields',
            timeline_5_dur: '3 years experience',
            timeline_5_desc: 'Executing independent projects, client communication, time management, problem-solving, and providing specialized services tailored to client needs.',
            timeline_6_year: '2023 - 2024',
            timeline_6_title: 'Accounting & Finance Specialist',
            timeline_6_dur: '6 months experience',
            timeline_6_desc: 'Recording and reviewing financial data, document management, accounting follow-ups, and familiarity with organizational financial processes.',
            timeline_7_year: '2023 - 2025',
            timeline_7_title: 'Team Manager for Operational, Artistic & Technical Teams',
            timeline_7_dur: '3 years experience',
            timeline_7_desc: 'Planning and coordinating team activities, task delegation, execution management, team leadership, and overseeing project and event progress.',
            timeline_8_year: '2024',
            timeline_8_title: 'IT Equipment & Security Systems Installation Specialist',
            timeline_8_dur: '6 months experience',
            timeline_8_desc: 'Installation and setup of CCTV cameras and security equipment, technical support, and equipment troubleshooting.',
            timeline_9_year: '2025',
            timeline_9_title: 'Telemarketing & Customer Relationship Development Specialist',
            timeline_9_dur: '6 months experience',
            timeline_9_desc: 'Communicating with customers, introducing services and products, following sales leads, and increasing customer engagement.',
            timeline_10_year: '2025',
            timeline_10_title: 'Field Marketing & Market Development Specialist',
            timeline_10_dur: '3 months experience',
            timeline_10_desc: 'Identifying potential customers, introducing products and services, establishing direct communication, and collecting market feedback.',
            timeline_11_year: '2025 - 2026',
            timeline_11_title: 'Digital Marketing & Online Activities Specialist',
            timeline_11_dur: '6 months experience',
            timeline_11_desc: 'Social media activities, digital content production and management, audience behavior analysis, and executing online marketing campaigns.',
            now_badge: 'Now',
            // ---------- Skills Page ----------
            skills_title_meta: 'Skills & Capabilities',
            skills_desc_meta: 'Complete list of technical, AI, management, software skills and capabilities',
            skills_og_title: 'Skills & Capabilities',
            skills_og_desc: 'Complete list of technical, AI, management, software skills and capabilities',
            skills_eyebrow: 'Skills & Capabilities',
            skills_title: 'Skills & Capabilities',
            stats_skills: 'Skills & Expertise',
            stats_ai: 'AI Domains',
            stats_management: 'Management Areas',
            search_placeholder: 'Search skills (e.g. Python, Photoshop, or Repair)...',
            empty_search: 'No results found for your search. Please try a different term.',
            filter_all: 'All',
            filter_hardware: 'Technical Skills',
            filter_dev: 'Programming & Web',
            filter_ai: 'Artificial Intelligence',
            filter_manage: 'Analytical & Management',
            filter_software: 'Software',
            filter_lang: 'Languages',
            view_compact: 'Compact View',
            view_full: 'Full View',
            section_hardware: 'Technical Skills',
            section_dev: 'Programming & Development',
            section_ai: 'Artificial Intelligence',
            section_manage: 'Analytical & Management Capabilities',
            section_software: 'Software',
            section_lang: 'Languages',
            badge_good: 'Good',
            badge_mid: 'Intermediate',
            badge_basic: 'Familiar',
            show_details: 'Show details',
            hide_details: 'Hide details',
            proficiency_label: 'Proficiency',
            skill_hw_mobile: '📱 Mobile Hardware Repair',
            desc_hw_mobile: 'Diagnosis, repair, and replacement of mobile hardware components, including board-level repair, micro-soldering, and reballing.',
            skill_sw_mobile: '⚙️ Mobile Software Repair',
            desc_sw_mobile: 'Flashing, unlocking, FRP removal, rooting, data recovery, downgrading, and resolving software issues on various mobile devices.',
            skill_security_sys: '📹 Security Systems Installation & Setup',
            desc_security_sys: 'Installation, configuration, and setup of CCTV cameras, DVR/NVR systems, alarm systems, and access control systems.',
            skill_pc_setup: '🖥️ Computer Systems Installation & Support',
            desc_pc_setup: 'Operating system installation, application software setup, driver installation, and providing support and troubleshooting for personal computers.',
            skill_troubleshoot: '🔍 Hardware & Software Troubleshooting',
            desc_troubleshoot: 'Identifying and resolving hardware and software issues on computer systems and mobile devices.',
            skill_networks: '🌐 Computer Networks',
            desc_networks: 'Setting up and basic configuration of small networks, with familiarity with fundamental networking concepts.',
            skill_linux: '🐧 Linux',
            desc_linux: 'Familiarity with the Linux environment, file structure, and basic system commands.',
            skill_python: '🐍 Python',
            desc_python: 'Developing scripts, bots, automation tools, and practical projects using Python.',
            skill_html5: '📄 HTML5',
            desc_html5: 'Structuring web pages according to HTML5 standards.',
            skill_css3: '🎨 CSS3',
            desc_css3: 'Designing and implementing user interfaces and web page styling.',
            skill_js: '⚡ JavaScript',
            desc_js: 'Understanding core concepts and developing client-side interactivity for web pages.',
            skill_ai_gen: '🤖 Generative AI Tools',
            desc_ai_gen: 'Leveraging AI tools for research, content creation, data analysis, and productivity enhancement.',
            skill_prompt_eng: '🎯 Prompt Engineering',
            desc_prompt_eng: 'Designing and optimizing prompts for language models to generate accurate responses, analyze information, and solve problems.',
            skill_ai_research: '🔬 AI-Powered Research & Data Collection',
            desc_ai_research: 'Collecting, evaluating, and organizing specialized information using AI tools.',
            skill_ai_solve: '💡 AI-Assisted Problem Solving & Analysis',
            desc_ai_solve: 'Using AI to analyze problems, evaluate solutions, and support decision-making.',
            skill_ai_workflows: '🔄 AI-Based Workflow Design',
            desc_ai_workflows: 'Designing and optimizing workflows using AI tools and automation.',
            skill_research_dev: '📚 Research & Investigation',
            desc_research_dev: 'Gathering, analyzing, and evaluating resources for compiling reports and research projects.',
            skill_doc: '📋 Documentation',
            desc_doc: 'Preparing technical, educational, and operational documentation for projects and processes.',
            skill_tech_report: '📝 Technical Report Writing',
            desc_tech_report: 'Writing structured and well-documented reports with a technical and analytical approach.',
            skill_sys_analysis: '📊 Systems Analysis',
            desc_sys_analysis: 'Analyzing requirements, system structures, and proposing improvement solutions.',
            skill_process_improve: '⚙️ Process Analysis & Improvement',
            desc_process_improve: 'Identifying bottlenecks and proposing solutions to increase efficiency and optimize processes.',
            skill_excel_data: '📈 Data Analysis with Excel',
            desc_excel_data: 'Organizing, analyzing, and reporting data using Microsoft Excel capabilities.',
            skill_process_mapping: '🔀 Process Mapping',
            desc_process_mapping: 'Designing and documenting workflows using standard diagrams.',
            skill_system_modeling: '🌐 System Modeling',
            desc_system_modeling: 'Familiarity with dynamic system modeling and basic simulation concepts using Vensim.',
            skill_project_mgmt: '📅 Project Management',
            desc_project_mgmt: 'Understanding planning, scheduling, and tracking project activities.',
            skill_photoshop: '🎨 Adobe Photoshop',
            desc_photoshop: 'Designing and editing posters, banners, business cards, and other graphic content.',
            skill_illustrator: '✒️ Adobe Illustrator',
            desc_illustrator: 'Logo design, graphic elements, and vector artwork creation.',
            skill_flstudio: '🎵 FL Studio',
            desc_flstudio: 'Creating, arranging, and editing audio and music projects.',
            skill_word: '📄 Microsoft Word',
            desc_word: 'Preparing, editing, and formatting professional documents.',
            skill_excel: '📊 Microsoft Excel',
            desc_excel: 'Managing, analyzing, and organizing data, and preparing reports.',
            skill_powerpoint: '📑 Microsoft PowerPoint',
            desc_powerpoint: 'Designing and delivering professional slide presentations.',
            skill_msproject: '📅 Microsoft Project',
            desc_msproject: 'Understanding project planning, scheduling, and management.',
            skill_visio: '📐 Microsoft Visio',
            desc_visio: 'Creating diagrams, flowcharts, and organizational processes.',
            skill_vensim: '🔄 Vensim',
            desc_vensim: 'Introductory dynamic system modeling and simulation.',
            skill_rafie: '💰 Rafie Accounting Software',
            desc_rafie: 'Understanding financial transaction recording and management.',
            skill_parsian: '💳 Parsian Accounting Software',
            desc_parsian: 'Understanding financial processes, document entry, and reporting.',
            skill_mahak: '💼 Mahak Accounting Software',
            desc_mahak: 'Understanding financial management and accounting operations.',
            skill_lang_en: '🇬🇧 English',
            desc_lang_en: 'Good command of communication skills and understanding of specialized texts.',
            skill_lang_ar: '🇸🇦 Arabic',
            desc_lang_ar: 'Familiarity with basic texts and correspondence.',
            skill_lang_cn: '🇨🇳 Chinese',
            desc_lang_cn: 'Basic familiarity with the language and terminology.',
            // ---------- Certificates Page ----------
            certs_title_meta: 'Certificates & Credentials — Amirhossein Khosravi',
            certs_desc_meta: 'Archive of certificates, academic degrees, and skills of Amirhossein Khosravi',
            certs_og_title: 'Certificates & Credentials — Amirhossein Khosravi',
            certs_og_desc: 'Archive of certificates, academic degrees, and skills of Amirhossein Khosravi',
            certs_eyebrow: 'Official Credentials & Certificates',
            certs_title: 'Credentials & Certificates',
            certs_cat_mgmt_title: 'Management & Business',
            certs_cat_mgmt_en: '/ Management',
            certs_cat_tech_title: 'Technology & Engineering',
            certs_cat_tech_en: '/ Technical',
            certs_cat_creative_title: 'Media & Communications',
            certs_cat_creative_en: '/ Creative',
            cert_seal: 'VER',
            cert_status_verified: 'Verified',
            cert_mgmt_degree_title: 'Bachelor of Industrial Management',
            cert_mgmt_degree_desc: 'Bachelor\'s Degree',
            cert_mgmt_degree_id: 'ID: B.SC-01',
            cert_rafie_title: 'Rafie Accounting Software 2021',
            cert_rafie_desc: 'Practical Skills Certificate',
            cert_rafie_id: 'ID: ACC-R14',
            cert_parsian_title: 'Parsian Accounting Software',
            cert_parsian_desc: 'Practical Skills Certificate',
            cert_parsian_id: 'ID: ACC-PAR',
            cert_hw_title: 'Mobile Hardware Repair',
            cert_hw_desc: 'Specialized Skills Certificate',
            cert_hw_id: 'ID: HW-MOB',
            cert_sw_title: 'Mobile Software Repair',
            cert_sw_desc: 'Specialized Skills Certificate',
            cert_sw_id: 'ID: SW-MOB',
            cert_icdl_title: 'ICDL',
            cert_icdl_desc: 'Computer Skills (7 Modules)',
            cert_icdl_id: 'ID: INT-07',
            cert_ps_title: 'Photoshop',
            cert_ps_desc: 'Graphic Design & Image Editing',
            cert_ps_id: 'ID: ART-PS',
            cert_photo_title: 'Photography',
            cert_photo_desc: 'Image Capture Skills',
            cert_photo_id: 'ID: ART-PH',
            cert_video_title: 'Videography',
            cert_video_desc: 'Recording & Editing Skills',
            cert_video_id: 'ID: ART-VD',
            cert_journalism_title: 'Journalism & News Writing',
            cert_journalism_desc: 'Communications & Media',
            cert_journalism_id: 'ID: COM-JR',
            // ---------- Navigation ----------
            nav_profile: 'Profile',
            nav_career: 'Career',
            nav_skills: 'Skills',
            nav_certs: 'Certificates'
        }
    };

    // ========================================================================
    // 2. CORE THEME ENGINE (Dark / Light)
    // ========================================================================

    function getPreferredTheme() {
        try {
            const stored = localStorage.getItem('theme');
            if (stored === 'dark' || stored === 'light') return stored;
        } catch (_) {}
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    function applyTheme(theme, animate = true) {
        const html = document.documentElement;
        if (animate) {
            html.classList.add('theme-transition');
            setTimeout(() => html.classList.remove('theme-transition'), 500);
        }
        html.setAttribute('data-theme', theme);
        try {
            localStorage.setItem('theme', theme);
        } catch (_) {}
        const btn = document.getElementById('themeToggle');
        if (btn) btn.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
    }

    function toggleTheme() {
        const btn = document.getElementById('themeToggle');
        if (btn) {
            btn.classList.add('switching');
            setTimeout(() => btn.classList.remove('switching'), 500);
        }
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        applyTheme(next, true);
        updateThemeUI(next);
    }

    function updateThemeUI(theme) {
        const btn = document.getElementById('themeToggle');
        if (!btn) return;
        const label = btn.querySelector('.theme-label');
        const sunIcon = btn.querySelector('.theme-icon:not(.moon)');
        const moonIcon = btn.querySelector('.theme-icon.moon');
        if (!sunIcon || !moonIcon) return;
        
        const lang = document.documentElement.lang === 'fa' ? 'fa' : 'en';
        const t = translations[lang] || translations.fa;
        
        if (theme === 'dark') {
            if (label) label.textContent = t.switch_to_light || 'حالت روز';
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'block';
            btn.setAttribute('aria-label', t.switch_to_light || 'حالت روز');
        } else {
            if (label) label.textContent = t.switch_to_dark || 'حالت شب';
            sunIcon.style.display = 'block';
            moonIcon.style.display = 'none';
            btn.setAttribute('aria-label', t.switch_to_dark || 'حالت شب');
        }
        btn.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
    }

    // ========================================================================
    // 3. BILINGUAL ENGINE
    // ========================================================================

    let currentLang = 'fa';

    function applyTranslations(lang, animate = true) {
        const data = translations[lang];
        if (!data) return;
        const allTranslatable = document.querySelectorAll('[data-i18n], [data-i18n-placeholder]');
        if (animate) {
            const direction = lang === 'en' ? 'slide-left' : 'slide-right';
            allTranslatable.forEach(el => el.classList.add('changing', direction));
            setTimeout(() => {
                document.querySelectorAll('[data-i18n]').forEach(el => {
                    const key = el.getAttribute('data-i18n');
                    if (data[key] !== undefined) el.textContent = data[key];
                });
                document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
                    const key = el.getAttribute('data-i18n-placeholder');
                    if (data[key] !== undefined) el.placeholder = data[key];
                });
                const titleEl = document.querySelector('title[data-i18n]');
                if (titleEl) {
                    const key = titleEl.getAttribute('data-i18n');
                    if (data[key] !== undefined) document.title = data[key];
                }
                document.querySelectorAll('meta[data-i18n]').forEach(el => {
                    const key = el.getAttribute('data-i18n');
                    if (data[key] !== undefined) el.setAttribute('content', data[key]);
                });
                allTranslatable.forEach(el => el.classList.remove('changing', 'slide-left', 'slide-right'));
                const theme = document.documentElement.getAttribute('data-theme') || 'light';
                updateThemeUI(theme);
                translatePercentages();

                const eyebrow = document.querySelector('.page-career .career-header-content .eyebrow');
                if (eyebrow) {
                    if (lang === 'en') { eyebrow.style.display = 'none'; } else { eyebrow.style.display = ''; }
                }
                const certsEyebrow = document.querySelector('.page-certificates .eyebrow');
                if (certsEyebrow) {
                    if (lang === 'en') { certsEyebrow.style.display = 'none'; } else { certsEyebrow.style.display = ''; }
                }
            }, 400);
        } else {
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (data[key] !== undefined) el.textContent = data[key];
            });
            document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
                const key = el.getAttribute('data-i18n-placeholder');
                if (data[key] !== undefined) el.placeholder = data[key];
            });
            const titleEl = document.querySelector('title[data-i18n]');
            if (titleEl) {
                const key = titleEl.getAttribute('data-i18n');
                if (data[key] !== undefined) document.title = data[key];
            }
            document.querySelectorAll('meta[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (data[key] !== undefined) el.setAttribute('content', data[key]);
            });
            const theme = document.documentElement.getAttribute('data-theme') || 'light';
            updateThemeUI(theme);
            translatePercentages();

            const eyebrow = document.querySelector('.page-career .career-header-content .eyebrow');
            if (eyebrow) {
                if (lang === 'en') { eyebrow.style.display = 'none'; } else { eyebrow.style.display = ''; }
            }
            const certsEyebrow = document.querySelector('.page-certificates .eyebrow');
            if (certsEyebrow) {
                if (lang === 'en') { certsEyebrow.style.display = 'none'; } else { certsEyebrow.style.display = ''; }
            }
        }
    }

    function setLanguage(lang) {
        if (!translations[lang]) return;
        currentLang = lang;
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
        document.body.classList.toggle('lang-en', lang === 'en');
        applyTranslations(lang, true);
        try { localStorage.setItem('lang', lang); } catch (_) {}
    }

    function toggleLanguage() {
        const nextLang = currentLang === 'fa' ? 'en' : 'fa';
        setLanguage(nextLang);
    }

    // ========================================================================
    // 4. NAVIGATION HELPERS
    // ========================================================================

    function setActiveNavItem() {
        const currentPath = window.location.pathname.split('/').pop() || 'index.html';
        const pageMap = {
            'index.html': 'profile',
            'career.html': 'career',
            'skills.html': 'skills',
            'certificates.html': 'certificates'
        };
        const currentPage = pageMap[currentPath] || 'profile';
        
        document.querySelectorAll('.nav-pill, .tab-item').forEach(el => {
            el.classList.toggle('active', el.dataset.page === currentPage);
        });
    }

    function navigateWithTransition(url) {
        if (!document.startViewTransition) {
            window.location.href = url;
            return;
        }
        document.startViewTransition(() => {
            window.location.href = url;
        });
    }

    function initNavigation() {
        setActiveNavItem();
        document.querySelectorAll('.nav-pill, .tab-item, .btn:not([target="_blank"])').forEach(link => {
            const href = link.getAttribute('href');
            if (href && !link.getAttribute('target') && !link.classList.contains('btn-primary')) {
                link.addEventListener('click', function(e) {
                    if (this.tagName === 'A' && this.getAttribute('href')) {
                        e.preventDefault();
                        navigateWithTransition(this.getAttribute('href'));
                    }
                });
            }
        });
        document.querySelectorAll('.btn[href]:not([target="_blank"])').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                navigateWithTransition(this.getAttribute('href'));
            });
        });
    }

    // ========================================================================
    // 5. EXISTING INTERACTIONS (Reveal, Counters, Timeline, Skills, Tilt, etc.)
    // ========================================================================

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function revealOnLoad() {
        const loadEls = document.querySelectorAll('[data-reveal="load"]');
        if (!loadEls.length) return;
        if (prefersReducedMotion) {
            loadEls.forEach(el => el.classList.add('is-visible'));
            return;
        }
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                loadEls.forEach(el => el.classList.add('is-visible'));
            });
        });
    }

    function revealOnScroll() {
        const scrollEls = document.querySelectorAll('[data-reveal="scroll"], [data-reveal]');
        if (!scrollEls.length || prefersReducedMotion || !('IntersectionObserver' in window)) {
            scrollEls.forEach(el => el.classList.add('is-visible'));
            return;
        }
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const card = el.closest('.skill-card, .cert-card, .timeline-row');
                    if (card) {
                        const parent = card.parentElement;
                        if (parent) {
                            const siblings = parent.querySelectorAll('.skill-card, .cert-card, .timeline-row');
                            const index = Array.from(siblings).indexOf(card);
                            if (index !== -1) {
                                el.style.transitionDelay = `${index * 50}ms`;
                            }
                        }
                    }
                    el.classList.add('is-visible');
                    obs.unobserve(el);
                }
            });
        }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
        scrollEls.forEach(el => observer.observe(el));
    }

    function setFooterYear() {
        const yearEl = document.getElementById('year');
        if (yearEl) yearEl.textContent = new Date().getFullYear();
    }

    function initIndexCounters() {
        const counters = document.querySelectorAll('.page-index .counter');
        if (!counters.length) return;
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const target = +counter.getAttribute('data-target');
                    let count = 0;
                    const duration = 15000;
                    const stepTime = 90;
                    const totalSteps = duration / stepTime;
                    const step = Math.max(1, target / totalSteps);
                    const timer = setInterval(() => {
                        count += step;
                        if (count >= target) {
                            counter.innerText = target;
                            clearInterval(timer);
                            const statBox = counter.closest('.info-card');
                            if (statBox) {
                                statBox.classList.add('pulse-complete');
                                setTimeout(() => statBox.classList.remove('pulse-complete'), 600);
                            }
                        } else {
                            requestAnimationFrame(() => {
                                counter.innerText = Math.floor(count);
                            });
                        }
                    }, stepTime);
                    obs.unobserve(counter);
                }
            });
        }, { threshold: 0.3 });
        counters.forEach(counter => observer.observe(counter));
    }

    function initCareerTimeline() {
        const rows = document.querySelectorAll('.page-career .timeline-row');
        if (!rows.length) return;
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
        rows.forEach(row => observer.observe(row));

        const windingPath = document.getElementById('scrollWindingPath');
        if (windingPath) {
            const pathLength = windingPath.getTotalLength();
            windingPath.style.strokeDasharray = pathLength;
            windingPath.style.strokeDashoffset = pathLength;
            
            let ticking = false;
            let lastUpdate = 0;
            const throttledUpdate = function() {
                const now = Date.now();
                const limit = window.innerWidth < 769 ? 100 : 16;
                if (now - lastUpdate < limit) return;
                lastUpdate = now;
                
                if (!ticking) {
                    requestAnimationFrame(() => {
                        const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
                        const progress = Math.min(Math.max(window.scrollY / scrollTotal, 0), 1);
                        windingPath.style.strokeDashoffset = pathLength - (progress * pathLength);
                        ticking = false;
                    });
                    ticking = true;
                }
            };
            window.addEventListener('scroll', throttledUpdate, { passive: true });
            throttledUpdate();

            const cards = document.querySelectorAll('.page-career .timeline-card');
            if (cards.length) {
                cards.forEach(card => {
                    card.addEventListener('mouseenter', () => {
                        windingPath.style.stroke = 'var(--clr-accent)';
                        windingPath.style.transition = 'stroke 0.4s ease';
                    });
                    card.addEventListener('mouseleave', () => {
                        windingPath.style.stroke = '';
                    });
                });
            }
        }

        const wrappers = document.querySelectorAll('.page-career .geo-wrapper');
        if (wrappers.length && !prefersReducedMotion && window.innerWidth > 768) {
            let mouseX = 0, mouseY = 0, isMoving = false;
            window.addEventListener('mousemove', e => {
                mouseX = (e.clientX / window.innerWidth - 0.5) * 60;
                mouseY = (e.clientY / window.innerHeight - 0.5) * 60;
                if (!isMoving) {
                    requestAnimationFrame(animateShapes);
                    isMoving = true;
                }
            });
            function animateShapes() {
                wrappers.forEach(wrapper => {
                    const speed = parseFloat(wrapper.getAttribute('data-speed')) || 1;
                    wrapper.style.transform = `translate(${mouseX * speed}px, ${mouseY * speed}px)`;
                });
                isMoving = false;
            }
        }
    }

    function initSkillsPage() {
        const cards = document.querySelectorAll('.page-skills .skill-card');
        if (!cards.length) return;

        function setCompactViewBasedOnWidth() {
            const isMobile = window.innerWidth <= 768;
            const body = document.body;
            const viewToggleText = document.getElementById('viewToggleText');
            const lang = document.documentElement.lang === 'fa' ? 'fa' : 'en';
            const t = translations[lang] || translations.fa;
            
            if (isMobile) {
                body.classList.add('compact-view');
                if (viewToggleText) {
                    viewToggleText.textContent = t.view_full || 'نمای کامل';
                }
                cards.forEach(c => c.classList.remove('expanded'));
            } else {
                body.classList.remove('compact-view');
                if (viewToggleText) {
                    viewToggleText.textContent = t.view_compact || 'نمای فشرده';
                }
            }
        }

        setCompactViewBasedOnWidth();
        let resizeTimer;
        window.addEventListener('resize', function() {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(setCompactViewBasedOnWidth, 200);
        });

        if (!prefersReducedMotion) {
            cards.forEach(card => {
                card.addEventListener('mousemove', function (e) {
                    if (window.innerWidth < 769 || document.body.classList.contains('compact-view')) return;
                    const rect = this.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    this.style.setProperty('--rx', `${((y - centerY) / centerY) * -8}deg`);
                    this.style.setProperty('--ry', `${((x - centerX) / centerX) * 8}deg`);
                });
                card.addEventListener('mouseleave', function () {
                    if (window.innerWidth < 769) return;
                    this.style.setProperty('--rx', '0deg');
                    this.style.setProperty('--ry', '0deg');
                });
            });
        }

        cards.forEach(card => {
            card.addEventListener('click', function (e) {
                this.classList.toggle('expanded');
                const labelSpan = this.querySelector('.toggle-btn span');
                const progressFill = this.querySelector('.progress-fill');
                const lang = document.documentElement.lang === 'fa' ? 'fa' : 'en';
                const t = translations[lang] || translations.fa;
                if (this.classList.contains('expanded')) {
                    if (labelSpan) labelSpan.textContent = t.hide_details || 'بستن جزئیات';
                    if (progressFill) progressFill.style.width = progressFill.getAttribute('data-width');
                } else {
                    if (labelSpan) labelSpan.textContent = t.show_details || 'نمایش جزئیات';
                    if (progressFill) progressFill.style.width = '0%';
                }
            });
            const toggleBtn = card.querySelector('.toggle-btn');
            if (toggleBtn) {
                toggleBtn.addEventListener('click', function (e) {
                    e.stopPropagation();
                });
            }
        });

        const statNums = document.querySelectorAll('.page-skills .stat-num');
        let counted = false;
        function countUpStats() {
            if (counted) return;
            statNums.forEach(num => {
                const target = +num.getAttribute('data-target');
                const duration = 2000;
                const increment = target / (duration / 16);
                let current = 0;
                function updateCounter() {
                    current += increment;
                    if (current < target) {
                        num.innerText = Math.ceil(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        num.innerText = target;
                    }
                }
                updateCounter();
            });
            counted = true;
        }
        const headerObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !counted) {
                    countUpStats();
                }
            });
        }, { threshold: 0.3 });
        const pageHeader = document.querySelector('.page-skills .page-header');
        if (pageHeader) headerObserver.observe(pageHeader);

        const searchInput = document.getElementById('searchInput');
        const filterBtns = document.querySelectorAll('.page-skills .filter-btn');
        const sections = document.querySelectorAll('.page-skills .skills-section');
        const dividers = document.querySelectorAll('.page-skills .divider');

        function filterCards() {
            const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
            const activeFilter = document.querySelector('.page-skills .filter-btn.active')?.getAttribute('data-filter') || 'all';
            cards.forEach(card => {
                const title = card.querySelector('h3')?.textContent.toLowerCase() || '';
                const desc = card.querySelector('.skill-desc')?.textContent.toLowerCase() || '';
                const cat = card.getAttribute('data-cat');
                const matchesSearch = title.includes(searchTerm) || desc.includes(searchTerm);
                const matchesFilter = activeFilter === 'all' || cat === activeFilter;
                if (matchesSearch && matchesFilter) {
                    card.classList.remove('hidden-by-filter');
                } else {
                    card.classList.add('hidden-by-filter');
                    card.classList.remove('expanded');
                }
            });
            sections.forEach((sec, index) => {
                const visibleCards = sec.querySelectorAll('.skill-card:not(.hidden-by-filter)').length;
                sec.style.display = visibleCards === 0 ? 'none' : 'block';
                if (dividers[index]) dividers[index].style.display = visibleCards === 0 ? 'none' : 'flex';
            });

            const visibleCardsTotal = document.querySelectorAll('.page-skills .skill-card:not(.hidden-by-filter)');
            let emptyState = document.querySelector('.empty-state');
            if (visibleCardsTotal.length === 0) {
                if (!emptyState) {
                    emptyState = document.createElement('div');
                    emptyState.className = 'empty-state';
                    const lang = document.documentElement.lang === 'fa' ? 'fa' : 'en';
                    const t = translations[lang] || translations.fa;
                    emptyState.innerHTML = `
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                        <p>${t.empty_search || 'نتیجه‌ای یافت نشد'}</p>
                    `;
                    const toolbar = document.querySelector('.page-skills .toolbar');
                    if (toolbar) toolbar.after(emptyState);
                }
                emptyState.style.display = 'flex';
            } else {
                if (emptyState) emptyState.style.display = 'none';
            }
        }

        if (searchInput) searchInput.addEventListener('input', filterCards);
        filterBtns.forEach(btn => {
            btn.addEventListener('click', function () {
                filterBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                filterBtns.forEach(b => b.setAttribute('aria-pressed', 'false'));
                this.setAttribute('aria-pressed', 'true');
                filterCards();
            });
            btn.setAttribute('role', 'button');
            btn.setAttribute('aria-pressed', btn.classList.contains('active') ? 'true' : 'false');
        });

        const viewToggleBtn = document.getElementById('viewToggleBtn');
        const viewToggleText = document.getElementById('viewToggleText');
        if (viewToggleBtn) {
            viewToggleBtn.addEventListener('click', function () {
                document.body.classList.toggle('compact-view');
                const isCompact = document.body.classList.contains('compact-view');
                const lang = document.documentElement.lang === 'fa' ? 'fa' : 'en';
                const t = translations[lang] || translations.fa;
                if (viewToggleText) {
                    viewToggleText.textContent = isCompact ? (t.view_full || 'نمای کامل') : (t.view_compact || 'نمای فشرده');
                }
                if (isCompact) {
                    cards.forEach(c => c.classList.remove('expanded'));
                }
            });
        }

        filterCards();
    }

    function initCertTilt() {
        if (prefersReducedMotion) return;
        const certCards = document.querySelectorAll('.page-certificates .cert-card');
        certCards.forEach(card => {
            card.addEventListener('mousemove', function (e) {
                if (window.innerWidth < 769) return;
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = ((y - centerY) / centerY) * -4;
                const rotateY = ((x - centerX) / centerX) * 4;
                this.style.transform = `perspective(1000px) translateY(-5px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            });
            card.addEventListener('mouseleave', function () {
                if (window.innerWidth < 769) return;
                this.style.transform = '';
            });
        });
    }

    function initCategoryPills() {
        const pills = document.querySelectorAll('.category-pill');
        const sections = document.querySelectorAll('.category-section');
        if (!pills.length || !sections.length) return;

        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.id;
                    pills.forEach(pill => {
                        pill.classList.toggle('active', pill.getAttribute('href') === '#' + id);
                    });
                }
            });
        }, { threshold: 0.3 });

        sections.forEach(sec => sectionObserver.observe(sec));

        pills.forEach(pill => {
            pill.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if (targetId) {
                    const target = document.querySelector(targetId);
                    if (target) {
                        target.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            });
        });
    }

    function translatePercentages() {
        const isEnglish = document.body.classList.contains('lang-en');
        const percentSpans = document.querySelectorAll('.progress-label-row span:last-child');
        percentSpans.forEach(span => {
            let text = span.textContent;
            if (isEnglish) {
                text = text.replace(/۰/g, '0').replace(/۱/g, '1').replace(/۲/g, '2')
                           .replace(/۳/g, '3').replace(/۴/g, '4').replace(/۵/g, '5')
                           .replace(/۶/g, '6').replace(/۷/g, '7').replace(/۸/g, '8')
                           .replace(/۹/g, '9').replace(/٪/g, '%');
            } else {
                text = text.replace(/0/g, '۰').replace(/1/g, '۱').replace(/2/g, '۲')
                           .replace(/3/g, '۳').replace(/4/g, '۴').replace(/5/g, '۵')
                           .replace(/6/g, '۶').replace(/7/g, '۷').replace(/8/g, '۸')
                           .replace(/9/g, '۹').replace(/%/g, '٪');
            }
            span.textContent = text;
        });
    }

    function initScrollIndicator() {
        const indicator = document.querySelector('.scroll-indicator');
        if (indicator) {
            indicator.addEventListener('click', function() {
                const aboutSection = document.getElementById('about');
                if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: 'smooth' });
                }
            });
        }
    }

    // ========================================================================
    // 6. OPTIMIZE WILL-CHANGE FOR MOBILE
    // ========================================================================
    function optimizeWillChange() {
        const isMobile = window.innerWidth < 769;
        const cards = document.querySelectorAll('.skill-card, .cert-card, .timeline-card');
        cards.forEach(card => {
            if (isMobile) {
                card.style.willChange = 'auto';
            } else {
                card.style.willChange = '';
            }
        });
    }

    // ========================================================================
    // 7. INITIALIZATION
    // ========================================================================

    document.addEventListener('DOMContentLoaded', function () {
        let savedLang = 'fa';
        try {
            const stored = localStorage.getItem('lang');
            if (stored && translations[stored]) savedLang = stored;
        } catch (_) {}
        currentLang = savedLang;
        document.documentElement.lang = savedLang;
        document.documentElement.dir = savedLang === 'fa' ? 'rtl' : 'ltr';
        document.body.classList.toggle('lang-en', savedLang === 'en');
        applyTranslations(savedLang, false);

        const theme = document.documentElement.getAttribute('data-theme') || 'light';
        updateThemeUI(theme);

        const langToggle = document.getElementById('langToggle');
        if (langToggle) langToggle.addEventListener('click', toggleLanguage);

        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) themeToggle.addEventListener('click', toggleTheme);

        revealOnLoad();
        revealOnScroll();
        setFooterYear();
        initIndexCounters();
        initCareerTimeline();
        initSkillsPage();
        initCertTilt();
        initCategoryPills();
        initScrollIndicator();
        initNavigation();
        translatePercentages();
        optimizeWillChange();

        const media = window.matchMedia('(prefers-color-scheme: dark)');
        function systemThemeListener(e) {
            if (!localStorage.getItem('theme')) {
                const newTheme = e.matches ? 'dark' : 'light';
                document.documentElement.setAttribute('data-theme', newTheme);
                updateThemeUI(newTheme);
            }
        }
        try {
            media.addEventListener('change', systemThemeListener);
        } catch (_) {
            media.addListener(systemThemeListener);
        }

        const langObserver = new MutationObserver(() => {
            translatePercentages();
            const theme = document.documentElement.getAttribute('data-theme') || 'light';
            updateThemeUI(theme);
        });
        langObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });

        let resizeTimer;
        window.addEventListener('resize', function() {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(optimizeWillChange, 500);
        });
    });

})();