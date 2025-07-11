import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// English translations
const enTranslations = {
  // Navigation
  home: "Home",
  gallery: "Gallery",
  about: "Categories",
  newsletter: "Newsletter",
  
  // Hero section
  heroTitle: "Discover Timeless Sculptural Art",
  heroSubtitle: "Exploring the beauty and craftsmanship of marble and stone sculptures from renowned artists.",
  viewGallery: "Explore More",
  learnMore: "Learn More",
  
  // Slideshow section
  featuredSculptures: "Featured Sculptures",
  material: "Material",
  
  // Gallery section
  galleryTitle: "Sculpture Collection",
  categories: "Categories",
  marbleFolder: "Marble Sculptures",
  bronzeFolder: "Bronze Works",
  contemporaryFolder: "Contemporary",
  classicalFolder: "Classical",
  viewDetails: "View Details",
  loadMore: "Load More",
  
  // About section
  aboutTitle: "Sculpture Categories",
  ourMissionTitle: "Mission",
  ourMissionP1: "Dedicated to preserving and showcasing the rich heritage of sculptural art from around the world. From classical marble masterpieces to contemporary interpretations, the power of three-dimensional art inspires and transforms.",
  ourMissionP2: "Founded in 1998, this collection includes works from renowned sculptors across different periods and styles, offering visitors a comprehensive journey through the evolution of this timeless art form.",
  
  sculptureHistoryTitle: "The History of Sculpture",
  sculptureHistoryP1: "Sculpture is one of humanity's oldest art forms, dating back to prehistoric times. Early examples were created from stone, clay, and other natural materials, often serving religious or ceremonial purposes.",
  sculptureHistoryP2: "The classical period brought remarkable achievements in marble sculpting from ancient Greece and Rome, establishing techniques and aesthetic principles that would influence artists for centuries to come.",
  sculptureHistoryP3: "Renaissance masters like Michelangelo and Donatello revived classical traditions while introducing innovations in form and expression. From Baroque's dynamic movement to modernism's abstraction and contemporary experimental approaches, sculpture continues to evolve while maintaining its powerful ability to communicate ideas through three-dimensional form.",
  
  categoriesSectionTitle: "Sculpture Categories",
  categoriesDescription: "Explore a diverse collection of sculptures organized by style, period, and medium.",
  
  materialTitle: "Materials",
  materialDescription: "Our collection features works in marble, bronze, stone, wood, and contemporary materials, each showcasing different techniques and artistic approaches.",
  
  originsTitle: "Origins",
  originsDescription: "We represent sculptural traditions from Europe, Asia, Africa, and the Americas, celebrating the global diversity of three-dimensional artistic expression.",
  
  periodsTitle: "Periods",
  periodsDescription: "From ancient classical works to Renaissance masterpieces and contemporary innovations, our collection spans multiple historical periods and styles.",
  
  categoryClassical: "Classical",
  categoryRenaissance: "Renaissance",
  categoryModern: "Modern",
  categoryContemporary: "Contemporary",
  categoryAbstract: "Abstract",
  categoryFigurative: "Figurative",
  
  venusDescription: "Venus of Arles - Classical Greek sculpture, 1st century BCE. A marble masterpiece showcasing the idealized human form typical of Hellenistic art.",
  
  davidDescription: "Michelangelo's David - Renaissance masterpiece, early 1500s. This monumental marble sculpture represents the biblical hero with extraordinary anatomical precision and emotional depth.",
  
  fluteDescription: "Flute Player - Modern abstract sculpture, mid 20th century. This elegant ceramic piece represents the minimalist approach of modern sculpture, focusing on flowing lines and emotional expression.",
  
  horseDescription: "Abstract Horse - Contemporary metal sculpture, early 21st century. This dynamic bronze structure captures movement and energy through its deconstructed form, exemplifying contemporary sculptural techniques.",
  
  faceDescription: "Surreal Face - Abstract conceptual sculpture, late 20th century. This plaster piece explores human identity and emotion through fragmentation and symbolic representation of the face overlaid with a hand.",
  
  wallFigureDescription: "Breaking Through - Figurative bronze sculpture, contemporary period. This dynamic piece depicts a human figure emerging from a wall, representing freedom, transformation, and the struggle to overcome barriers.",
  
  exploreCollection: "Stay Tuned",
  
  // Newsletter section
  stayUpdatedTitle: "Stay Updated",
  stayUpdatedDescription: "Subscribe to our newsletter to receive updates about new acquisitions, exhibitions, and special events.",
  subscribe: "Subscribe",
  privacyNote: "By subscribing, you agree to our privacy policy. We respect your privacy and will never share your information.",
  subscriptionSuccess: "Thank you for subscribing! You'll receive our updates shortly.",
  backToHome: "Back to Home",
  
  // Footer
  footerTagline: "Celebrating sculptural artistry and preserving cultural heritage through our curated collection.",
  quickLinks: "Quick Links",
  contactUs: "Contact Us",
  address: "123 Art Gallery Street, Sculpture City, 10001",
  followUs: "Follow Us",
  language: "Language",
  allRightsReserved: "All rights reserved."
};

// German translations
const deTranslations = {
  // Navigation
  home: "Startseite",
  gallery: "Galerie",
  about: "Kategorien",
  newsletter: "Newsletter",
  
  // Hero section
  heroTitle: "Entdecken Sie zeitlose Bildhauerkunst",
  heroSubtitle: "Erkunden Sie die Schönheit und Handwerkskunst von Marmor- und Steinskulpturen berühmter Künstler.",
  viewGallery: "Mehr entdecken",
  learnMore: "Mehr erfahren",
  
  // Slideshow section
  featuredSculptures: "Vorgestellte Skulpturen",
  material: "Material",
  
  // Gallery section
  galleryTitle: "Skulpturensammlung",
  categories: "Kategorien",
  marbleFolder: "Marmorskulpturen",
  bronzeFolder: "Bronzearbeiten",
  contemporaryFolder: "Zeitgenössisch",
  classicalFolder: "Klassisch",
  viewDetails: "Details ansehen",
  loadMore: "Mehr laden",
  
  // About section
  aboutTitle: "Skulpturenkategorien",
  ourMissionTitle: "Mission",
  ourMissionP1: "Widmet sich der Bewahrung und Präsentation des reichen Erbes der Bildhauerkunst aus aller Welt. Von klassischen Marmormeisterwerken bis hin zu zeitgenössischen Interpretationen zeigt sich die Kraft der dreidimensionalen Kunst, zu inspirieren und zu transformieren.",
  ourMissionP2: "Gegründet im Jahr 1998 umfasst diese Sammlung Werke renommierter Bildhauer verschiedener Epochen und Stile und bietet Besuchern eine umfassende Reise durch die Evolution dieser zeitlosen Kunstform.",
  
  sculptureHistoryTitle: "Die Geschichte der Bildhauerei",
  sculptureHistoryP1: "Die Bildhauerei ist eine der ältesten Kunstformen der Menschheit und reicht bis in prähistorische Zeiten zurück. Frühe Beispiele wurden aus Stein, Ton und anderen natürlichen Materialien geschaffen und dienten oft religiösen oder zeremoniellen Zwecken.",
  sculptureHistoryP2: "Die klassische Periode brachte bemerkenswerte Erfolge in der Marmorbildhauerei aus dem antiken Griechenland und Rom mit sich und etablierte Techniken und ästhetische Prinzipien, die Künstler über Jahrhunderte hinweg beeinflussen sollten.",
  sculptureHistoryP3: "Renaissance-Meister wie Michelangelo und Donatello belebten klassische Traditionen wieder und führten gleichzeitig Innovationen in Form und Ausdruck ein. Von der dynamischen Bewegung des Barock bis zur Abstraktion der Moderne und zeitgenössischen experimentellen Ansätzen entwickelt sich die Bildhauerei ständig weiter und behält gleichzeitig ihre starke Fähigkeit, Ideen durch dreidimensionale Form zu kommunizieren.",
  
  categoriesSectionTitle: "Skulpturenkategorien",
  categoriesDescription: "Entdecken Sie eine vielfältige Sammlung von Skulpturen, organisiert nach Stil, Epoche und Medium.",
  
  materialTitle: "Materialien",
  materialDescription: "Unsere Sammlung umfasst Werke aus Marmor, Bronze, Stein, Holz und zeitgenössischen Materialien, die jeweils unterschiedliche Techniken und künstlerische Ansätze zeigen.",
  
  originsTitle: "Ursprünge",
  originsDescription: "Wir repräsentieren Bildhauertraditionen aus Europa, Asien, Afrika und Amerika und feiern die globale Vielfalt des dreidimensionalen künstlerischen Ausdrucks.",
  
  periodsTitle: "Epochen",
  periodsDescription: "Von antiken klassischen Werken über Renaissance-Meisterwerke bis hin zu zeitgenössischen Innovationen umfasst unsere Sammlung mehrere historische Epochen und Stile.",
  
  categoryClassical: "Klassisch",
  categoryRenaissance: "Renaissance",
  categoryModern: "Modern",
  categoryContemporary: "Zeitgenössisch",
  categoryAbstract: "Abstrakt",
  categoryFigurative: "Figurativ",
  
  venusDescription: "Venus von Arles - Klassische griechische Skulptur, 1. Jahrhundert v. Chr. Ein Marmormeisterwerk, das die idealisierte menschliche Form zeigt, typisch für die hellenistische Kunst.",
  
  davidDescription: "Michelangelos David - Renaissance-Meisterwerk, frühes 16. Jahrhundert. Diese monumentale Marmorskulptur stellt den biblischen Helden mit außergewöhnlicher anatomischer Präzision und emotionaler Tiefe dar.",
  
  fluteDescription: "Flötenspieler - Moderne abstrakte Skulptur, Mitte des 20. Jahrhunderts. Dieses elegante Keramikstück repräsentiert den minimalistischen Ansatz der modernen Bildhauerei, der sich auf fließende Linien und emotionalen Ausdruck konzentriert.",
  
  horseDescription: "Abstraktes Pferd - Zeitgenössische Metallskulptur, frühes 21. Jahrhundert. Diese dynamische Bronzestruktur fängt Bewegung und Energie durch ihre dekonstruierte Form ein und veranschaulicht zeitgenössische bildhauerische Techniken.",
  
  faceDescription: "Surreales Gesicht - Abstrakte konzeptuelle Skulptur, spätes 20. Jahrhundert. Dieses Gipsstück erforscht menschliche Identität und Emotion durch Fragmentierung und symbolische Darstellung des Gesichts, überlagert mit einer Hand.",
  
  wallFigureDescription: "Durchbruch - Figurative Bronzeskulptur, zeitgenössische Periode. Dieses dynamische Stück zeigt eine menschliche Figur, die aus einer Wand hervortritt und Freiheit, Transformation und den Kampf zur Überwindung von Barrieren darstellt.",
  
  exploreCollection: "Bleiben Sie dran",
  
  // Newsletter section
  stayUpdatedTitle: "Bleiben Sie informiert",
  stayUpdatedDescription: "Abonnieren Sie unseren Newsletter, um Updates über neue Erwerbungen, Ausstellungen und besondere Veranstaltungen zu erhalten.",
  subscribe: "Abonnieren",
  privacyNote: "Mit dem Abonnieren stimmen Sie unserer Datenschutzrichtlinie zu. Wir respektieren Ihre Privatsphäre und werden Ihre Daten niemals weitergeben.",
  subscriptionSuccess: "Vielen Dank für Ihr Abonnement! Sie erhalten in Kürze unsere Updates.",
  backToHome: "Zurück zur Startseite",
  
  // Footer
  footerTagline: "Wir feiern die bildhauerische Kunst und bewahren das kulturelle Erbe durch unsere kuratierte Sammlung.",
  quickLinks: "Schnelllinks",
  contactUs: "Kontaktieren Sie uns",
  address: "123 Kunstgaleriestraße, Skulpturenstadt, 10001",
  followUs: "Folgen Sie uns",
  language: "Sprache",
  allRightsReserved: "Alle Rechte vorbehalten."
};

// Initialize i18next
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations
      },
      de: {
        translation: deTranslations
      }
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
