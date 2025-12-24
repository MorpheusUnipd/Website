// Internationalization (i18n) system for Morpheus Team website
const translations = {
    it: {
        nav: {
            home: "Home",
            about: "Chi siamo",
            objectives: "Obiettivi",
            departments: "Dipartimenti",
            rover: "Rover",
            sponsors: "Sponsor",
            contact: "Contattaci"
        },
        hero: {
            title: "Morpheus Team",
            subtitle: "University of Padua Mars Rover Team<br>Costruiamo il futuro della robotica per l'esplorazione spaziale",
            scroll: "Scorri"
        },
        about: {
            title: "Chi Siamo",
            text: "MORPHEUS è un progetto rover guidato dagli studenti dedicato alla progettazione, ingegnerizzazione e costruzione di un esploratore robotico di nuova generazione per l'European Rover Challenge (ERC) a Cracovia, Polonia. La competizione ricrea un paesaggio marziano realistico dove squadre universitarie di tutta Europa testano il loro rover in scenari di missione ispirati a vere spedizioni su Marte. Il nostro progetto fonde ingegneria meccanica, elettronica, sistemi embedded, robotica, autonomia e informatica in una singola missione integrata. Lavorare con MORPHEUS offre agli studenti l'opportunità di partecipare a una sfida robotica a tema spaziale, contribuire a un sistema di ingegneria reale, guadagnare una Tesi basata su progetto e ricevere una certificazione ufficiale Open Badge dall'Università che riconosce il loro lavoro e le loro competenze."
        },
        stats: {
            title: "Quanti Siamo",
            students: "Studenti",
            departments: "Dipartimenti universitari coinvolti",
            nationalities: "Nazionalità"
        },
        objectives: {
            title: "European Rover Challenge",
            text: "L'European Rover Challenge (ERC) è una delle più grandi e prestigiose competizioni di robotica al mondo, focalizzata sulle tecnologie di esplorazione spaziale. Tenuta annualmente in Polonia, l'ERC riunisce squadre provenienti da università, istituti di ricerca e aziende private per progettare, costruire e operare rover robotici capaci di eseguire compiti in ambienti extraterrestri simulati."
        },
        departments: {
            title: "I Nostri Dipartimenti",
            mechanical: {
                title: "Meccanica",
                text: "Il Team Meccanico è responsabile della progettazione dell'intera architettura meccanica del rover, dal telaio e dalle sospensioni ai sottosistemi termici e strutturali. Trasformiamo i requisiti della missione in progetti robusti e ottimizzati utilizzando simulazioni avanzate, studi cinematici e flussi di lavoro automatizzati SolidWorks. Il nostro lavoro integra:",
                list: [
                    "Progettazione di studi parametrici e ottimizzazione meccanica (per componenti chiave come linkers, bracci ed elementi delle sospensioni)",
                    "Analisi del movimento per la mobilità e la dinamica dei meccanismi",
                    "Simulazione strutturale e termica avanzata (FEM)",
                    "Simulazione del flusso e modellazione del trasferimento termico (CFD)",
                    "Flussi di lavoro di progettazione automatizzati e strumenti API SolidWorks",
                    "Visualizzazione, rendering e documentazione di alta qualità (supportati da SolidWorks PDM per un controllo di versione pulito e la collaborazione a livello di team)"
                ]
            },
            electronics: {
                title: "Elettronica",
                text: "Il Team Elettronica è responsabile della progettazione dell'intera spina dorsale di alimentazione e comunicazione del rover. Sviluppiamo mission-critical hardware che assicura che ogni sottosistema – dalla mobilità al braccio robotico e ai payload scientifici – operi con la massima precisione e affidabilità. Il nostro lavoro integra e gestisce:",
                list: [
                    "Architettura di Alimentazione Distribuita con isolamento intelligente dei guasti.",
                    "Rete di Comunicazione CAN/CANopen ad alta affidabilità.",
                    "Stack di controllo embedded modulare (basato su STM32 e Jetson) con fusione di sensori.",
                    "Sistema Adattivo di Gestione dell'Alimentazione con regolazione dinamica del bus (in grado di regolare la tensione in tempo reale, prevedere il carico termico e ottimizzare l'energia in modalità missione)."
                ]
            },
            computer: {
                title: "Informatica",
                text: "Il Team Informatico è responsabile dell'intero livello di intelligenza software del rover, dal controllo di basso livello all'autonomia di alto livello. Progettiamo, implementiamo e integriamo il framework computazionale che consente al rover di percepire l'ambiente circostante, prendere decisioni informate ed eseguire missioni complesse con precisione e resilienza. Il nostro lavoro comprende:",
                list: [
                    "Framework di navigazione autonoma con SLAM e Sensor Fusion Development",
                    "Moduli di percezione e decisione basati su reti neurali (per la classificazione del terreno, il rilevamento dei pericoli e la logica di navigazione adattiva)",
                    "Architettura di controllo in tempo reale per mobilità e manipolazione (per motori e braccio robotico)",
                    "Infrastruttura software distribuita ROS 2"
                ]
            },
            organigram: {
                title: "Organigramma",
                caption: "Organigramma del team"
            }
        },
        rover: {
            title: "Collezione Rover",
            description: "Di seguito troverai l'intera collezione di rover marziani costruiti dal team Morpheus negli ultimi anni",
            morpheus1: {
                title: "Morpheus 1",
                text: "Il primo prototipo del team è stato costruito nel 2018, utilizzando protocolli Arduino per gestire i vari sistemi integrati. Le dimensioni sono 820 x 1320 x 1000 mm e il peso stimato è di 46 kg."
            },
            morpheus2: {
                title: "Morpheus 2",
                text: "Il secondo prototipo del team, che deve ancora essere costruito, è simile al precedente, con l'aggiunta di UAV. La sua impronta stimata è 1300 x 1100 x 600 mm."
            }
        },
        sponsors: {
            title: "Sponsor"
        },
        contact: {
            title: "Contattaci",
            text: "Sentiti libero di contattarci: saremo felici di fornirti informazioni. Usa il modulo qui sotto o seguici sui nostri canali social.",
            name: "Nome completo:",
            namePlaceholder: "Nome completo",
            message: "Messaggio",
            messagePlaceholder: "Messaggio",
            send: "Invia Messaggio"
        }
    },
    en: {
        nav: {
            home: "Home",
            about: "About Us",
            objectives: "Objectives",
            departments: "Departments",
            rover: "Rover",
            sponsors: "Sponsors",
            contact: "Contact Us"
        },
        hero: {
            title: "Morpheus Team",
            subtitle: "University of Padua Mars Rover Team<br>Building the future of space exploration robotics",
            scroll: "Scroll"
        },
        about: {
            title: "About Us",
            text: "MORPHEUS is a student-led rover project dedicated to designing, engineering, and building a next-generation robotic explorer for the European Rover Challenge (ERC) in Kraków, Poland. The competition recreates a realistic Martian landscape where university teams from around Europe test their rover in mission scenarios inspired by real Mars expeditions. Our project blends mechanical engineering, electronics, embedded systems, robotics, autonomy, and computer science into a single integrated mission. Working with MORPHEUS offers students the opportunity to participate in a space-themed robotics challenge, contribute to a real engineering system, earn a project-based Thesis, and receive an official Open Badge certification from the University recognizing their work and skills."
        },
        stats: {
            title: "Our Numbers",
            students: "Students",
            departments: "University departments involved",
            nationalities: "Nationalities"
        },
        objectives: {
            title: "European Rover Challenge",
            text: "The European Rover Challenge (ERC) is one of the largest and most prestigious robotics competitions in the world, focused on space exploration technologies. Held annually in Poland, the ERC brings together teams from universities, research institutes, and private companies to design, build, and operate robotic rovers capable of performing tasks in simulated extraterrestrial environments."
        },
        departments: {
            title: "Our Departments",
            mechanical: {
                title: "Mechanical",
                text: "The Mechanical Team is responsible for designing the entire mechanical architecture of the rover, from the chassis and suspensions to thermal and structural subsystems. We transform mission requirements into robust and optimized designs using advanced simulations, kinematic studies, and automated SolidWorks workflows. Our work integrates:",
                list: [
                    "Parametric design studies and mechanical optimization (for key components like linkers, arms, and suspension elements)",
                    "Motion analysis for mobility and mechanism dynamics",
                    "Advanced structural and thermal simulation (FEM)",
                    "Flow simulation and heat transfer modeling (CFD)",
                    "Automated design workflows and SolidWorks API tools",
                    "High-quality visualization, rendering, and documentation (supported by SolidWorks PDM for clean version control and team collaboration)"
                ]
            },
            electronics: {
                title: "Electronics",
                text: "The Electronics Team is responsible for designing the entire power and communication backbone of the rover. We develop mission-critical hardware that ensures every subsystem – from mobility to the robotic arm and scientific payloads – operates with maximum precision and reliability. Our work integrates and manages:",
                list: [
                    "Distributed Power Architecture with intelligent fault isolation.",
                    "High-reliability CAN/CANopen Communication Network.",
                    "Modular embedded control stack (based on STM32 and Jetson) with sensor fusion.",
                    "Adaptive Power Management System with dynamic bus regulation (capable of adjusting voltage in real-time, predicting thermal load, and optimizing energy in mission mode)."
                ]
            },
            computer: {
                title: "Computer Science",
                text: "The Computer Science Team is responsible for the entire software intelligence layer of the rover, from low-level control to high-level autonomy. We design, implement, and integrate the computational framework that enables the rover to perceive its surroundings, make informed decisions, and execute complex missions with precision and resilience. Our work includes:",
                list: [
                    "Autonomous navigation framework with SLAM and Sensor Fusion Development",
                    "Neural network-based perception and decision modules (for terrain classification, hazard detection, and adaptive navigation logic)",
                    "Real-time control architecture for mobility and manipulation (for motors and robotic arm)",
                    "Distributed ROS 2 software infrastructure"
                ]
            },
            organigram: {
                title: "Organigram",
                caption: "Team Organizational Chart"
            }
        },
        rover: {
            title: "Rover Collection",
            description: "Below you will find the entire collection of Mars rovers built by the Morpheus team in recent years",
            morpheus1: {
                title: "Morpheus 1",
                text: "The team's first prototype was built in 2018, using Arduino protocols to manage the various integrated systems. Dimensions are 820 x 1320 x 1000 mm and the estimated weight is 46 kg."
            },
            morpheus2: {
                title: "Morpheus 2",
                text: "The team's second prototype, which has yet to be built, is similar to the previous one, with the addition of UAVs. Its estimated footprint is 1300 x 1100 x 600 mm."
            }
        },
        sponsors: {
            title: "Sponsors"
        },
        contact: {
            title: "Get in touch",
            text: "Feel free to contact us: we will be glad to provide you with information. Use the form below or follow us on our social media channels.",
            name: "Full name:",
            namePlaceholder: "Full name",
            message: "Message",
            messagePlaceholder: "Message",
            send: "Send Message"
        }
    }
};

// i18n system
const i18n = {
    currentLang: 'it',

    // Initialize the system
    init() {
        // Load saved language preference
        const savedLang = localStorage.getItem('morpheus-lang');
        if (savedLang && translations[savedLang]) {
            this.currentLang = savedLang;
        }

        // Apply initial translations
        this.applyTranslations();

        // Set up language button (use innerHTML with images so flags display)
        const langBtn = document.getElementById('langBtn') || document.querySelector('button[onclick="changeLanguage()"]');
        if (langBtn) {
            langBtn.innerHTML = this.currentLang === 'it' ?
                '<img class="flag" src="https://flagcdn.com/24x18/gb.png" alt="EN flag"> EN' :
                '<img class="flag" src="https://flagcdn.com/24x18/it.png" alt="IT flag"> IT';
        }
    },

    // Change language
    changeLanguage() {
        this.currentLang = this.currentLang === 'it' ? 'en' : 'it';
        localStorage.setItem('morpheus-lang', this.currentLang);

        // Update button text
        const langBtn = document.querySelector('button[onclick="changeLanguage()"]');
        if (langBtn) {
            langBtn.innerHTML = this.currentLang === 'it' ?
                '<img class="flag" src="https://flagcdn.com/24x18/gb.png" alt="EN flag"> EN' :
                '<img class="flag" src="https://flagcdn.com/24x18/it.png" alt="IT flag"> IT';
        }

        // Update HTML lang attribute
        document.documentElement.lang = this.currentLang;

        // Apply translations
        this.applyTranslations();
    },

    // Get translation for a key
    getTranslation(key) {
        const keys = key.split('.');
        let value = translations[this.currentLang];

        for (const k of keys) {
            if (value && typeof value === 'object' && k in value) {
                value = value[k];
            } else {
                return key; // Return key if translation not found
            }
        }

        return value;
    },

    // Apply all translations to the page
    applyTranslations() {
        // Update elements with data-i18n
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.getTranslation(key);

            if (element.hasAttribute('data-i18n-html')) {
                element.innerHTML = translation;
            } else {
                element.textContent = translation;
            }
        });

        // Update placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            const translation = this.getTranslation(key);
            element.placeholder = translation;
        });
    }
};

// Make changeLanguage function globally available
function changeLanguage() {
    i18n.changeLanguage();
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    i18n.init();
});