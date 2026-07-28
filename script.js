document.addEventListener('DOMContentLoaded', () => {
    
    /* ==========================================================================
       1. Initialize Lucide Icons
       ========================================================================== */
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    /* ==========================================================================
       2. Light / Dark Theme Toggle
       ========================================================================== */
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const body = document.body;

    // Check for saved theme in localStorage, otherwise check system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        body.classList.add('dark-theme');
        body.classList.remove('light-theme');
    } else {
        body.classList.add('light-theme');
        body.classList.remove('dark-theme');
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            if (body.classList.contains('dark-theme')) {
                body.classList.remove('dark-theme');
                body.classList.add('light-theme');
                localStorage.setItem('theme', 'light');
            } else {
                body.classList.add('dark-theme');
                body.classList.remove('light-theme');
                localStorage.setItem('theme', 'dark');
            }
        });
    }

    /* ==========================================================================
       3. Language Translation Dictionary & Engine
       ========================================================================== */
    const translations = {
        en: {
            // Nav
            'nav.home': 'Home',
            'nav.about': 'About',
            'nav.experience': 'Experience',
            'nav.research': 'Research',
            'nav.languages': 'Languages',
            'nav.certificates': 'Certificates',
            'nav.bookLessons': 'Book Lessons',

            // Hero
            'hero.badge': 'Welcome to my Portfolio',
            'hero.subtitle': 'Bridging Psychology, Behavioral Economics & Language Education',
            'hero.description': 'Psychological Sciences student at Università Cattolica in Milan and incoming Erasmus exchange student at Universitat Internacional de Catalunya in Barcelona. Active Co-Head & Researcher at Koi Asset Management, HR at Starting Finance Club Cattolica, summer HR Intern at PGIE, and professional English Tutor. Integrating psychological insights with human resources, behavioral economics, and language education.',
            'hero.btnBook': 'Book Private Lessons',
            'hero.btnResearch': 'View Research',
            'hero.btnCv': 'Download CV',

            // About
            'about.subtitle': 'Biography',
            'about.title': 'About Me & Education',
            'about.greeting': 'Connecting Cognitive Sciences with Financial Dynamics',
            'about.p1': 'I am currently pursuing a Bachelor\'s Degree in Psychological Sciences and Techniques at the Università Cattolica del Sacro Cuore. My academic focus centers on understanding cognitive processes, decision-making, and behavioral dynamics.',
            'about.p2': 'Believing in the cross-disciplinary application of psychology, I actively apply behavioral frameworks to the financial sector. As the Co-Head of the research division at Koi Asset Management and HR Officer at Starting Finance Club Cattolica, I analyze speculative behaviors, market anomalies, and agent-based economic systems.',
            'about.p3': 'Complementing my academic and leadership endeavors, I have built a career in online language education. With bilingual proficiency in English and Polish, I help students worldwide overcome language barriers and build professional communication skills.',
            'about.eduTitle': 'Academic Path',
            'about.eduErasmus.date': 'Feb 2027 - Jun 2027',
            'about.eduErasmus.degree': 'Incoming Erasmus Psychology Student',
            'about.eduErasmus.school': 'Universitat Internacional de Catalunya — Barcelona, Spain',
            'about.eduErasmus.desc': 'Incoming exchange program focused on extending psychological studies, cultural exchange, and international academic collaboration.',
            'about.edu1.date': 'Sept 2024 - Present',
            'about.edu1.degree': 'BSc in Psychological Sciences and Techniques',
            'about.edu1.school': 'Università Cattolica del Sacro Cuore — Milan, Italy',
            'about.edu1.desc': 'Specializing in cognitive psychology, behavioral sciences, and research methodologies. Applying psychology to investigate market dynamics and student engagement.',
            'about.edu2.date': 'Sept 2022 - Jun 2024',
            'about.edu2.degree': 'International Baccalaureate (IB) Diploma',
            'about.edu2.school': 'II Liceum Ogólnokształcące (High School No. 2) — Białystok, Poland',
            'about.edu2.desc': '<strong>Subjects:</strong> Psychology HL, English HL, Biology HL, Chemistry HL, Mathematics AA SL, Polish. Developed foundational analytical and scientific research skills.',

            // Experience
            'exp.subtitle': 'Professional & Leadership Path',
            'exp.title': 'Experience & Projects',
            'exp.tutloBadge': 'Tutlo Platform Experience',
            'exp.tutloTitle': '2,500+ Hours of Platform Tutoring',
            'exp.tutloIntro': 'I have extensive tutoring experience on <strong>Tutlo.com</strong>, where I delivered over 2,500 hours of 1-on-1 English lessons to an average of 250+ students per month. Tutlo operates on an on-demand basis matching tutors with students for fast-paced sessions using prepared slides and predefined curricula. This environment has built my teaching versatility across diverse levels, age groups, and backgrounds.',
            'exp.privateBadge': 'Private Tutoring Services',
            'exp.privateIntro': 'In contrast to platform structures, my <strong>private tutoring sessions</strong> are fully flexible and tailored to individual needs. Free from slides and rigid templates, I design customized lessons that focus on your specific goals—whether that is International Baccalaureate (IB) exam preparation for English A & B on Higher Level, Business English on all levels, grammar consolidation, or building conversational confidence.',
            'exp.stat1Label': 'Hours on Tutlo',
            'exp.stat2Label': 'Students per Month',
            'exp.stat3Label': 'Trial Conversion',
            'exp.bullet1': '<strong>Custom Learning Programs:</strong> Designing tailored homework, speaking themes, and curriculum paths for private students.',
            'exp.bullet2': '<strong>Confidence-First Method:</strong> Structuring supportive, immersive lessons that reduce speaking anxiety and accelerate conversational fluency.',
            'exp.bookBtn': 'Book a Private Session',
            'exp.inquiryTitle': 'Private Tutoring Inquiry',
            'exp.inquiryText': 'Get customized English lessons designed to match your learning speed and professional objectives.',
            'exp.feat1': 'IB English A & B HL Prep',
            'exp.feat2': 'Business English (All Levels)',
            'exp.feat3': 'Conversational English & Grammar',
            'exp.assoc1.role': 'HR of Asset Management & Events Divisions',
            'exp.assoc1.title': 'Starting Finance Club Cattolica',
            'exp.assoc1.date': 'Oct 2025 - Present | Milan, Italy',
            'exp.assoc1.desc': 'Active student-run finance organization promoting financial literacy and asset management analysis in Cattolica.',
            'exp.assoc1.b1': 'Managed end-to-end recruitment and onboarding for 100+ candidates.',
            'exp.assoc1.b2': 'Fostered cross-divisional synergy to maintain high operational standards and engagement.',
            'exp.assoc1.b3': 'Organized targeted team-building events for 70+ members to enhance organizational culture.',
            
            // PGIE HR Internship
            'exp.pgie.role': 'Full-Time HR Intern',
            'exp.pgie.title': 'PGIE Polska Grupa Innowacji Energetycznych (Polish Energy Innovation Group) sp. z o.o.',
            'exp.pgie.date': 'Jul 1, 2026 - Aug 30, 2026 | Białystok, Poland',
            'exp.pgie.desc': 'Full-time internship supporting corporate human resources, candidate sourcing, and personnel administration.',
            'exp.pgie.b1': 'Supported the company\'s day-to-day recruitment and administrative work.',
            'exp.pgie.b2': 'Reviewed applications, contacted candidates, and arranged interviews.',
            'exp.pgie.b3': 'Helped prepare onboarding documents and updated recruitment records.',
            'exp.pgie.b4': 'Assisted with routine personnel administration.',

            'exp.assoc2.role': 'Volunteer & Coordinator',
            'exp.assoc2.title': 'Volunteering & Community Initiatives',
            'exp.assoc2.date': 'Sept 2022 - Nov 2023 | Białystok, Poland',
            'exp.assoc2.desc': 'Organizing community support programs and providing targeted educational assistance.',
            'exp.assoc2.b1': 'Collaborated with and led 20+ student volunteers in local Food Bank networks.',
            'exp.assoc2.b2': 'Coordinated the assembly and distribution of 100+ critical care packages for Ukrainian refugees.',
            'exp.assoc2.b3': 'Provided 1-on-1 tutoring and academic coaching to 10+ children with learning disabilities.',

            // Research
            'research.subtitle': 'Academic Output',
            'research.title': 'Research & Case Studies',
            'research.desc': 'Co-Head & Researcher at <strong>Koi Asset Management</strong>. Exploring the intersection of cognitive psychology, marketing strategy, behavioral biases, and market dynamics.',
            'research.p1.title': 'Gillette and the Razor-and-Blades Strategy: A Psychological Perspective on Consumer Loyalty',
            'research.p1.author': 'Author: Ewa Minta (Koi Asset Management)',
            'research.p1.summary': 'Analyzes the psychological dynamics behind the captive product pricing strategy, focusing on consumer lock-in, perceived value, and cognitive biases that drive long-term customer loyalty and habit formation.',
            'research.downloadPdf': 'Download PDF',
            'research.p2.title': 'The Tulip Mania and the Psychology of Speculative Bubbles',
            'research.p2.author': 'Author: Ewa Minta (Koi Asset Management)',
            'research.p2.summary': 'Investigates the cognitive and social psychology elements behind history\'s most famous bubble, illustrating how herd behavior, FOMO, and asymmetric information override rational economic decision-making.',
            'research.featuredBadge': 'Featured Collaborative Paper',
            'research.p3.title': 'Understanding Trading Behavior Through Machine Learning: An Empirical Study of Psychological and Behavioral Biases',
            'research.p3.author': 'Authors: Ewa Minta, Luca Girlando (Koi Asset Management)',
            'research.p3.summary': 'An extensive empirical study utilizing machine learning models to detect, classify, and predict trading biases and psychological deviations in individual investors, showing the quantitative footprints of human error in markets.',
            'research.p4.title': 'The Trust Gap: Behavioral Foundations of Agentic Commerce',
            'research.p4.author': 'Author: Ewa Minta (Koi Asset Management)',
            'research.p4.summary': 'Investigates how cognitive trust is built, broken, and maintained in interactions between human consumers and autonomous digital agents, detailing critical psychological parameters for future commerce models.',

            // Languages
            'lang.subtitle': 'Multilingual Capabilities',
            'lang.title': 'Language Fluency',
            'lang.desc': 'Fluency in multiple languages is central to my educational style, academic research, and intercultural collaboration.',
            'lang.english': 'English',
            'lang.englishLevel': 'Native or Bilingual',
            'lang.englishUse': 'Academic studies, online tutoring (2500+ hours), co-authoring scientific research papers, international networking.',
            'lang.polish': 'Polish',
            'lang.polishLevel': 'Native or Bilingual',
            'lang.polishUse': 'Mother tongue. Professional interactions, literature reading, and translation.',
            'lang.italian': 'Italian',
            'lang.italianLevel': 'Professional Working',
            'lang.italianUse': 'Daily university studies in Milan, project management at Starting Finance Cattolica, client communication.',
            'lang.spanish': 'Spanish',
            'lang.spanishLevel': 'Professional Working',
            'lang.spanishUse': 'Good conversational fluency, reading professional literature, and handling customer interactions.',
            'lang.chinese': 'Chinese (Mandarin)',
            'lang.chineseLevel': 'Intermediate',
            'lang.chineseUse': 'Basic vocabulary and everyday conversational foundations, active personal learning.',
            'lang.german': 'German',
            'lang.germanLevel': 'Elementary',
            'lang.germanUse': 'Basic dialogue skills, currently expanding vocabulary and core grammar structures.',

            // Certificates
            'cert.subtitle': 'Credentials',
            'cert.title': 'Licenses & Certifications',
            'cert.desc': 'Professional certifications and credentials verifying specialized expertise.',
            'cert.lvmh.name': 'INSIDE LVMH Certificate',
            'cert.lvmh.date': 'November 19, 2025',
            'cert.lvmh.details': 'Successfully completed the INSIDE LVMH program, learning about the LVMH ecosystem, luxury industry fundamentals, and its key challenges, with a specialization in: <strong>Creation & Branding, Operations & Supply Chain</strong>.',
            'cert.idLabel': 'Credential ID:',
            'cert.downloadBtn': 'Download Certificate',

            // Contact
            'contact.subtitle': 'Get in Touch',
            'contact.title': 'Book Private English Lessons',
            'contact.desc': 'Looking to improve your English? Reach out to arrange tailored 1-on-1 private lessons focusing on grammar, conversation, or exam preparation.',
            'contact.infoTitle': 'Contact Information',
            'contact.infoDesc': 'Have questions about private tutoring, research collaborations, or event speaking? Feel free to reach out via email or LinkedIn.',
            'contact.labelEmail': 'Email',
            'contact.labelLocation': 'Location',
            'contact.locationText': 'Milan, Italy (On-site & Remote)',
            'contact.labelLinkedin': 'LinkedIn',
            'contact.viewProfile': 'View Profile',
            'contact.nameLabel': 'Your Name',
            'contact.namePlaceholder': 'John Doe',
            'contact.emailLabel': 'Your Email',
            'contact.emailPlaceholder': 'john@example.com',
            'contact.subjectLabel': 'Subject',
            'contact.subOption1': 'Private English Lessons Enquiry',
            'contact.subOption2': 'Research Collaboration',
            'contact.subOption3': 'General Inquiry',
            'contact.messageLabel': 'Your Message',
            'contact.messagePlaceholder': 'Let me know your goals, current English level, and availability...',
            'contact.submitBtn': 'Send Inquiry via Email',

            // Footer & Form Alerts
            'footer.rights': '© 2026 Ewa Minta. All rights reserved.',
            'form.alert': 'Your default email client will now open to send this message to Ewa Minta (mintaaewa@gmail.com). Thank you!'
        },
        pl: {
            // Nav
            'nav.home': 'Strona Główna',
            'nav.about': 'O mnie',
            'nav.experience': 'Doświadczenie',
            'nav.research': 'Badania',
            'nav.languages': 'Języki',
            'nav.certificates': 'Certyfikaty',
            'nav.bookLessons': 'Zarezerwuj lekcje',

            // Hero
            'hero.badge': 'Witaj w moim Portfolio',
            'hero.subtitle': 'Łączenie psychologii, ekonomii behawioralnej i edukacji językowej',
            'hero.description': 'Studentka psychologii na Università Cattolica w Mediolanie oraz przyszła uczestniczka wymiany Erasmus na Universitat Internacional de Catalunya w Barcelonie. Co-Head i badaczka w Koi Asset Management, HR w Starting Finance Club Cattolica, letnia praktykantka HR w PGIE oraz profesjonalny korepetytor języka angielskiego. Łączę wiedzę psychologiczną z zarządzaniem zasobami ludzkimi, ekonomią behawioralną i edukacją językową.',
            'hero.btnBook': 'Zarezerwuj lekcje prywatne',
            'hero.btnResearch': 'Zobacz badania',
            'hero.btnCv': 'Pobierz CV',

            // About
            'about.subtitle': 'Biografia',
            'about.title': 'O mnie i wykształcenie',
            'about.greeting': 'Łączenie nauk poznawczych z dynamiką finansową',
            'about.p1': 'Obecnie studiuję psychologię (BSc in Psychological Sciences and Techniques) na Università Cattolica del Sacro Cuore w Mediolanie. W mojej pracy akademickiej skupiam się na zrozumieniu procesów poznawczych, podejmowaniu decyzji oraz dynamice zachowań.',
            'about.p2': 'Wierząc w interdyscyplinarne zastosowanie psychologii, aktywnie przenoszę modele behawioralne na sektor finansowy. Jako Współkierownik działu badawczego w Koi Asset Management oraz HR Officer w Starting Finance Club Cattolica analizuję zachowania spekulacyjne, anomalie rynkowe oraz systemy ekonomiczne oparte na agentach.',
            'about.p3': 'Dopełnieniem mojej działalności akademickiej i przywódczej jest praca w edukacji językowej online. Dzięki dwujęzycznej biegłości w języku angielskim i polskim pomagam uczniom z całego świata przełamywać bariery językowe i budować profesjonalne umiejętności komunikacyjne.',
            'about.eduTitle': 'Ścieżka akademicka',
            'about.eduErasmus.date': 'Luty 2027 - Czerwiec 2027',
            'about.eduErasmus.degree': 'Przyszła studentka psychologii w ramach programu Erasmus',
            'about.eduErasmus.school': 'Universitat Internacional de Catalunya — Barcelona, Hiszpania',
            'about.eduErasmus.desc': 'Nadchodzący semestr studiów za granicą w ramach wymiany studenckiej Erasmus+, mający na celu poszerzenie wiedzy psychologicznej oraz międzynarodową współpracę akademicką.',
            'about.edu1.date': 'Wrzesień 2024 - Obecnie',
            'about.edu1.degree': 'Licencjat z Nauk i Technik Psychologicznych',
            'about.edu1.school': 'Università Cattolica del Sacro Cuore — Mediolan, Włochy',
            'about.edu1.desc': 'Specjalizacja w psychologii poznawczej, naukach behawioralnych i metodologii badań. Zastosowanie psychologii do badania dynamiki rynków i zaangażowania studentów.',
            'about.edu2.date': 'Wrzesień 2022 - Czerwiec 2024',
            'about.edu2.degree': 'Dyplom Matury Międzynarodowej (IB)',
            'about.edu2.school': 'II Liceum Ogólnokształcące — Białystok, Polska',
            'about.edu2.desc': '<strong>Przedmioty:</strong> Psychologia HL, Angielski HL, Biologia HL, Chemia HL, Matematyka AA SL, Polski. Rozwinięcie kluczowych umiejętności analitycznych i badawczych.',

            // Experience
            'exp.subtitle': 'Ścieżka zawodowa i liderka',
            'exp.title': 'Doświadczenie i projekty',
            'exp.tutloBadge': 'Doświadczenie na platformie Tutlo',
            'exp.tutloTitle': 'Ponad 2 500 godzin korepetycji na platformie',
            'exp.tutloIntro': 'Posiadam bogate doświadczenie w nauczaniu na platformie <strong>Tutlo.com</strong>, gdzie przeprowadziłam ponad 2 500 godzin indywidualnych lekcji języka angielskiego dla średnio 250+ uczniów miesięcznie. Praca na platformie w trybie na żądanie wykształciła we mnie elastyczność i umiejętność dostosowania metodyki do różnorodnych grup wiekowych i poziomów zaawansowania.',
            'exp.privateBadge': 'Prywatne lekcje języka angielskiego',
            'exp.privateIntro': 'W przeciwieństwie do sztywnych struktur platform, moje <strong>prywatne lekcje</strong> są w pełni elastyczne i spersonalizowane. Wolne od gotowych szablonów, tworzę indywidualne programy dostosowane do Twoich celów — przygotowania do egzaminów matury międzynarodowej IB (English A & B HL), Business English na wszystkich poziomach, gramatyki czy budowania pewności siebie w konwersacji.',
            'exp.stat1Label': 'Godzin na Tutlo',
            'exp.stat2Label': 'Uczniów miesięcznie',
            'exp.stat3Label': 'Konwersja lekcji próbnych',
            'exp.bullet1': '<strong>Spersonalizowane programy nauczania:</strong> Tworzenie indywidualnych zadań, tematów do konwersacji i ścieżek nauki dla prywatnych uczniów.',
            'exp.bullet2': '<strong>Metoda budowania pewności siebie:</strong> Tworzenie wspierających lekcji, które niwelują barierę mówienia i przyspieszają płynność językową.',
            'exp.bookBtn': 'Zarezerwuj lekcję prywatną',
            'exp.inquiryTitle': 'Zapytanie o lekcje prywatne',
            'exp.inquiryText': 'Otrzymaj spersonalizowane lekcje języka angielskiego dopasowane do Twojego tempa nauki i celów zawodowych.',
            'exp.feat1': 'Przygotowanie do matury IB (English A & B HL)',
            'exp.feat2': 'Business English (na wszystkich poziomach)',
            'exp.feat3': 'Konwersacje i gramatyka',
            'exp.assoc1.role': 'HR Działów Asset Management oraz Eventów',
            'exp.assoc1.title': 'Starting Finance Club Cattolica',
            'exp.assoc1.date': 'Październik 2025 - Obecnie | Mediolan, Włochy',
            'exp.assoc1.desc': 'Aktywna studencka organizacja finansowa promująca wiedzę finansową oraz analizę zarządzania aktywami na Università Cattolica.',
            'exp.assoc1.b1': 'Zarządzanie rekrutacją i procesem onboarding dla 100+ kandydatów.',
            'exp.assoc1.b2': 'Budowanie synergii między działami w celu utrzymania wysokich standardów operacyjnych.',
            'exp.assoc1.b3': 'Organizacja wydarzeń integracyjnych dla 70+ członków w celu wzmocnienia kultury organizacyjnej.',

            // PGIE HR Internship
            'exp.pgie.role': 'Praktykantka ds. HR (Full-Time)',
            'exp.pgie.title': 'PGIE Polska Grupa Innowacji Energetycznych sp. z o.o.',
            'exp.pgie.date': '1 lipca - 30 sierpnia 2026 | Białystok, Polska',
            'exp.pgie.desc': 'Praktyki w pełnym wymiarze godzin, wspierające działania działu zasobów ludzkich, pozyskiwanie kandydatów oraz administrację kadrową.',
            'exp.pgie.b1': 'Wspieranie codziennych procesów rekrutacyjnych oraz prac administracyjnych firmy.',
            'exp.pgie.b2': 'Weryfikacja nadsyłanych aplikacji, kontaktowanie się z kandydatami i umawianie rozmów kwalifikacyjnych.',
            'exp.pgie.b3': 'Pomoc w przygotowywaniu dokumentów onboardingowych oraz aktualizowanie baz danych rekrutacyjnych.',
            'exp.pgie.b4': 'Asystowanie przy bieżących i rutynowych zadaniach z zakresu administracji kadrowej.',

            'exp.assoc2.role': 'Wolontariusz i Koordynator',
            'exp.assoc2.title': 'Wolontariat i inicjatywy społeczne',
            'exp.assoc2.date': 'Wrzesień 2022 - Listopad 2023 | Białystok, Polska',
            'exp.assoc2.desc': 'Organizacja lokalnych programów pomocy oraz udzielanie wsparcia edukacyjnego.',
            'exp.assoc2.b1': 'Współpraca i kierowanie grupą 20+ wolontariuszy w ramach lokalnych Banków Żywności.',
            'exp.assoc2.b2': 'Koordynacja przygotowania i dystrybucji 100+ paczek pomocowych dla uchodźców z Ukrainy.',
            'exp.assoc2.b3': 'Indywidualne korepetycje i wsparcie edukacyjne dla 10+ dzieci z trudnościami w nauce.',

            // Research
            'research.subtitle': 'Dorobek naukowy',
            'research.title': 'Prace badawcze i studia przypadków',
            'research.desc': 'Co-Head & Researcher w <strong>Koi Asset Management</strong>. Badanie pogranicza psychologii poznawczej, strategii marketingowych, błędów behawioralnych oraz dynamiki rynków.',
            'research.p1.title': 'Gillette i strategia "brzytwy i ostrza": Psychologiczne ujęcie lojalności konsumenckiej',
            'research.p1.author': 'Autor: Ewa Minta (Koi Asset Management)',
            'research.p1.summary': 'Analiza dynamiki psychologicznej wyceny produktów wiązanych, ze szczególnym uwzględnieniem efektu uwięzienia konsumenta, postrzeganej wartości oraz błędów poznawczych budujących lojalność i nawyki.',
            'research.downloadPdf': 'Pobierz PDF',
            'research.p2.title': 'Tulipanomania a psychologia baniek spekulacyjnych',
            'research.p2.author': 'Autor: Ewa Minta (Koi Asset Management)',
            'research.p2.summary': 'Badanie czynników psychologii społecznej i poznawczej w najsłynniejszej bańce spekulacyjnej w historii, pokazujące jak owczy pęd, FOMO oraz asymetria informacji dominują nad racjonalnym podejmowaniem decyzji.',
            'research.featuredBadge': 'Wyróżniony artykuł naukowy',
            'research.p3.title': 'Zrozumienie zachowań inwestycyjnych poprzez uczenie maszynowe: Empiryczne badanie błędów psychologicznych i behawioralnych',
            'research.p3.author': 'Autorzy: Ewa Minta, Luca Girlando (Koi Asset Management)',
            'research.p3.summary': 'Obszerne badanie empiryczne wykorzystujące modele uczenia maszynowego do wykrywania i klasyfikowania błędów behawioralnych i psychologicznych u inwestorów indywidualnych.',
            'research.p4.title': 'Luka zaufania: Behawioralne podstawy handlu agentowego (Agentic Commerce)',
            'research.p4.author': 'Autor: Ewa Minta (Koi Asset Management)',
            'research.p4.summary': 'Analiza sposobu budowania i utrzymywania zaufania poznawczego w interakcjach między konsumentami a autonomicznymi agentami cyfrowymi.',

            // Languages
            'lang.subtitle': 'Umiejętności językowe',
            'lang.title': 'Znajomość języków',
            'lang.desc': 'Biegłość językowa stanowi fundament mojego stylu nauczania, pracy badawczej i współpracy międzynarodowej.',
            'lang.english': 'Język angielski',
            'lang.englishLevel': 'Ojczysty lub biegłość dwujęzyczna',
            'lang.englishUse': 'Studia akademickie, korepetycje online (2500+ godz.), współautorstwo prac naukowych, networking międzynarodowy.',
            'lang.polish': 'Język polski',
            'lang.polishLevel': 'Język ojczysty',
            'lang.polishUse': 'Język ojczysty. Profesjonalne kontakty, czytanie literatury branżowej i tłumaczenia.',
            'lang.italian': 'Język włoski',
            'lang.italianLevel': 'Zaawansowany / Roboczy',
            'lang.italianUse': 'Codzienne studia w Mediolanie, zarządzanie projektami w Starting Finance Cattolica, komunikacja z klientami.',
            'lang.spanish': 'Język hiszpański',
            'lang.spanishLevel': 'Średniozaawansowany / Roboczy',
            'lang.spanishUse': 'Dobra płynność konwersacyjna, czytanie literatury zawodowej i kontakt z klientem.',
            'lang.chinese': 'Język chiński (mandaryński)',
            'lang.chineseLevel': 'Średniozaawansowany',
            'lang.chineseUse': 'Podstawowe słownictwo i baza do codziennych konwersacji, aktywna nauka własna.',
            'lang.german': 'Język niemiecki',
            'lang.germanLevel': 'Podstawowy',
            'lang.germanUse': 'Podstawowe umiejętności dialogowe, rozwój słownictwa i struktur gramatycznych.',

            // Certificates
            'cert.subtitle': 'Kwalifikacje',
            'cert.title': 'Certyfikaty i Licencje',
            'cert.desc': 'Profesjonalne certyfikaty potwierdzające specjalistyczną wiedzę i kompetencje.',
            'cert.lvmh.name': 'Certyfikat INSIDE LVMH',
            'cert.lvmh.date': '19 listopada 2025',
            'cert.lvmh.details': 'Pomyślnie ukończony program INSIDE LVMH, obejmujący naukę o ekosystemie LVMH, podstawach branży dóbr luksusowych i jej kluczowych wyzwaniach, ze specjalizacją w obszarach: <strong>Creation & Branding (Kreacja i Budowanie Marki), Operations & Supply Chain (Operacje i Łańcuch Dostaw)</strong>.',
            'cert.idLabel': 'ID Certyfikatu:',
            'cert.downloadBtn': 'Pobierz Certyfikat',

            // Contact
            'contact.subtitle': 'Kontakt',
            'contact.title': 'Zarezerwuj prywatne lekcje angielskiego',
            'contact.desc': 'Chcesz poprawić swój angielski? Skontaktuj się ze mną, aby ustalić indywidualne lekcje 1-na-1 skupione na gramatyce, konwersacjach lub przygotowaniu do egzaminów.',
            'contact.infoTitle': 'Dane kontaktowe',
            'contact.infoDesc': 'Masz pytania dotyczące lekcji prywatnych, współpracy badawczej lub wystąpień? Napisz e-mail lub skontaktuj się przez LinkedIn.',
            'contact.labelEmail': 'Adres e-mail',
            'contact.labelLocation': 'Lokalizacja',
            'contact.locationText': 'Mediolan, Włochy (Stacjonarnie i Zdalnie)',
            'contact.labelLinkedin': 'LinkedIn',
            'contact.viewProfile': 'Zobacz profil',
            'contact.nameLabel': 'Twoje imię i nazwisko',
            'contact.namePlaceholder': 'Jan Kowalski',
            'contact.emailLabel': 'Twój e-mail',
            'contact.emailPlaceholder': 'jan@example.com',
            'contact.subjectLabel': 'Temat',
            'contact.subOption1': 'Zapytanie o prywatne lekcje angielskiego',
            'contact.subOption2': 'Współpraca badawcza',
            'contact.subOption3': 'Zapytanie ogólne',
            'contact.messageLabel': 'Twoja wiadomość',
            'contact.messagePlaceholder': 'Napisz o swoich celach, obecnym poziomie angielskiego i dyspozycyjności...',
            'contact.submitBtn': 'Wyślij zapytanie e-mail',

            // Footer & Form Alerts
            'footer.rights': '© 2026 Ewa Minta. Wszelkie prawa zastrzeżone.',
            'form.alert': 'Twoja domyślna aplikacja pocztowa otworzy się teraz, aby wysłać wiadomość do Ewy Minty (mintaaewa@gmail.com). Dziękujemy!'
        }
    };

    const langToggleBtn = document.getElementById('lang-toggle-btn');
    const langToggleText = document.getElementById('lang-toggle-text');
    let currentLang = localStorage.getItem('language') || 'en';

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('language', lang);

        // Update toggle button text to show what language the user will switch to
        if (langToggleText) {
            langToggleText.textContent = lang === 'en' ? 'PL' : 'EN';
        }
        
        document.documentElement.setAttribute('lang', lang);

        // Update elements with data-i18n
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        // Update input placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (translations[lang] && translations[lang][key]) {
                el.setAttribute('placeholder', translations[lang][key]);
            }
        });

        // Re-initialize Lucide icons inside translated elements
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }

    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
            const newLang = currentLang === 'en' ? 'pl' : 'en';
            setLanguage(newLang);
        });
    }

    // Initialize saved language
    setLanguage(currentLang);

    /* ==========================================================================
       4. Mobile Navigation Menu Toggle
       ========================================================================== */
    const menuHamburgerBtn = document.getElementById('menu-hamburger-btn');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (menuHamburgerBtn && navMenu) {
        menuHamburgerBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            navMenu.classList.toggle('open');
            const menuIcon = menuHamburgerBtn.querySelector('i');
            if (menuIcon && typeof lucide !== 'undefined') {
                if (navMenu.classList.contains('open')) {
                    menuIcon.setAttribute('data-lucide', 'x');
                } else {
                    menuIcon.setAttribute('data-lucide', 'menu');
                }
                lucide.createIcons({
                    attrs: {
                        'data-lucide': menuIcon.getAttribute('data-lucide')
                    },
                    nameAttr: 'data-lucide'
                });
            }
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('open');
                resetHamburgerIcon();
            });
        });

        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !menuHamburgerBtn.contains(e.target)) {
                navMenu.classList.remove('open');
                resetHamburgerIcon();
            }
        });
    }

    function resetHamburgerIcon() {
        const menuIcon = menuHamburgerBtn.querySelector('i');
        if (menuIcon && menuIcon.getAttribute('data-lucide') !== 'menu' && typeof lucide !== 'undefined') {
            menuIcon.setAttribute('data-lucide', 'menu');
            lucide.createIcons();
        }
    }

    /* ==========================================================================
       5. Header Shrink on Scroll
       ========================================================================== */
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    /* ==========================================================================
       6. Scroll Reveal Animations (Intersection Observer)
       ========================================================================== */
    const revealElements = document.querySelectorAll('.scroll-reveal');

    if ('IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        });

        revealElements.forEach(el => {
            revealObserver.observe(el);
        });
    } else {
        revealElements.forEach(el => {
            el.classList.add('active');
        });
    }

    /* ==========================================================================
       7. Active Navigation Link Tracker on Scroll
       ========================================================================== */
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', () => {
        let currentSectionId = '';
        const scrollPosition = window.scrollY + 120;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    });

    /* ==========================================================================
       8. Private English Lessons Booking / Contact Form Processing
       ========================================================================== */
    const bookingForm = document.getElementById('lesson-booking-form');
    
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('form-name').value.trim();
            const email = document.getElementById('form-email').value.trim();
            const subject = document.getElementById('form-subject').value;
            const message = document.getElementById('form-message').value.trim();
            
            const recipientEmail = 'mintaaewa@gmail.com';
            const emailSubject = encodeURIComponent(`[Portfolio Inquiry] ${subject} - from ${name}`);
            
            const emailBody = encodeURIComponent(
                `Dear Ewa,\n\n` +
                `You have received a new inquiry from your website portfolio:\n\n` +
                `--------------------------------------------------\n` +
                `Name: ${name}\n` +
                `Email: ${email}\n` +
                `Topic: ${subject}\n` +
                `--------------------------------------------------\n\n` +
                `Message:\n` +
                `${message}\n\n` +
                `--------------------------------------------------\n` +
                `Best regards,\n` +
                `${name}`
            );
            
            const mailtoUrl = `mailto:${recipientEmail}?subject=${emailSubject}&body=${emailBody}`;
            window.location.href = mailtoUrl;
            
            const alertMsg = (translations[currentLang] && translations[currentLang]['form.alert']) 
                ? translations[currentLang]['form.alert'] 
                : 'Your default email client will now open to send this message to Ewa Minta (mintaaewa@gmail.com). Thank you!';

            alert(alertMsg);
            bookingForm.reset();
        });
    }
});
