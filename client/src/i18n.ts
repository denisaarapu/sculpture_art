import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// English translations
const enTranslations = {
  // Navigation
  home: "Home",
  gallery: "Gallery",
  about: "About",
  newsletter: "Newsletter",
  
  // Hero section
  heroTitle: "Discover Timeless Sculptural Art",
  heroSubtitle: "Exploring the beauty and craftsmanship of marble and stone sculptures from renowned artists.",
  viewGallery: "View Gallery",
  learnMore: "Learn More",
  
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
  aboutTitle: "About Our Sculpture Collection",
  ourMissionTitle: "Our Mission",
  ourMissionP1: "Our gallery is dedicated to preserving and showcasing the rich heritage of sculptural art from around the world. From classical marble masterpieces to contemporary interpretations, we believe in the power of three-dimensional art to inspire and transform.",
  ourMissionP2: "Founded in 1998, our collection has grown to include works from renowned sculptors across different periods and styles, offering visitors a comprehensive journey through the evolution of this timeless art form.",
  
  sculptureHistoryTitle: "The History of Sculpture",
  sculptureHistoryP1: "Sculpture is one of humanity's oldest art forms, dating back to prehistoric times. Early examples were created from stone, clay, and other natural materials, often serving religious or ceremonial purposes.",
  sculptureHistoryP2: "The classical period brought remarkable achievements in marble sculpting from ancient Greece and Rome, establishing techniques and aesthetic principles that would influence artists for centuries to come.",
  sculptureHistoryP3: "Renaissance masters like Michelangelo and Donatello revived classical traditions while introducing innovations in form and expression. From Baroque's dynamic movement to modernism's abstraction and contemporary experimental approaches, sculpture continues to evolve while maintaining its powerful ability to communicate ideas through three-dimensional form.",
  
  materialTitle: "Materials",
  materialDescription: "Our collection features works in marble, bronze, stone, wood, and contemporary materials, each showcasing different techniques and artistic approaches.",
  
  originsTitle: "Origins",
  originsDescription: "We represent sculptural traditions from Europe, Asia, Africa, and the Americas, celebrating the global diversity of three-dimensional artistic expression.",
  
  periodsTitle: "Periods",
  periodsDescription: "From ancient classical works to Renaissance masterpieces and contemporary innovations, our collection spans multiple historical periods and styles.",
  
  exploreCollection: "Explore Our Collection",
  
  // Newsletter section
  stayUpdatedTitle: "Stay Updated",
  stayUpdatedDescription: "Subscribe to our newsletter to receive updates about new acquisitions, exhibitions, and special events.",
  subscribe: "Subscribe",
  privacyNote: "By subscribing, you agree to our privacy policy. We respect your privacy and will never share your information.",
  subscriptionSuccess: "Thank you for subscribing! You'll receive our updates shortly.",
  
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
  about: "Über uns",
  newsletter: "Newsletter",
  
  // Hero section
  heroTitle: "Entdecken Sie zeitlose Bildhauerkunst",
  heroSubtitle: "Erkunden Sie die Schönheit und Handwerkskunst von Marmor- und Steinskulpturen berühmter Künstler.",
  viewGallery: "Galerie ansehen",
  learnMore: "Mehr erfahren",
  
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
  aboutTitle: "Über unsere Skulpturensammlung",
  ourMissionTitle: "Unsere Mission",
  ourMissionP1: "Unsere Galerie widmet sich der Bewahrung und Präsentation des reichen Erbes der Bildhauerkunst aus aller Welt. Von klassischen Marmormeisterwerken bis hin zu zeitgenössischen Interpretationen glauben wir an die Kraft der dreidimensionalen Kunst, zu inspirieren und zu transformieren.",
  ourMissionP2: "Gegründet im Jahr 1998 ist unsere Sammlung auf Werke renommierter Bildhauer verschiedener Epochen und Stile angewachsen und bietet Besuchern eine umfassende Reise durch die Evolution dieser zeitlosen Kunstform.",
  
  sculptureHistoryTitle: "Die Geschichte der Bildhauerei",
  sculptureHistoryP1: "Die Bildhauerei ist eine der ältesten Kunstformen der Menschheit und reicht bis in prähistorische Zeiten zurück. Frühe Beispiele wurden aus Stein, Ton und anderen natürlichen Materialien geschaffen und dienten oft religiösen oder zeremoniellen Zwecken.",
  sculptureHistoryP2: "Die klassische Periode brachte bemerkenswerte Erfolge in der Marmorbildhauerei aus dem antiken Griechenland und Rom mit sich und etablierte Techniken und ästhetische Prinzipien, die Künstler über Jahrhunderte hinweg beeinflussen sollten.",
  sculptureHistoryP3: "Renaissance-Meister wie Michelangelo und Donatello belebten klassische Traditionen wieder und führten gleichzeitig Innovationen in Form und Ausdruck ein. Von der dynamischen Bewegung des Barock bis zur Abstraktion der Moderne und zeitgenössischen experimentellen Ansätzen entwickelt sich die Bildhauerei ständig weiter und behält gleichzeitig ihre starke Fähigkeit, Ideen durch dreidimensionale Form zu kommunizieren.",
  
  materialTitle: "Materialien",
  materialDescription: "Unsere Sammlung umfasst Werke aus Marmor, Bronze, Stein, Holz und zeitgenössischen Materialien, die jeweils unterschiedliche Techniken und künstlerische Ansätze zeigen.",
  
  originsTitle: "Ursprünge",
  originsDescription: "Wir repräsentieren Bildhauertraditionen aus Europa, Asien, Afrika und Amerika und feiern die globale Vielfalt des dreidimensionalen künstlerischen Ausdrucks.",
  
  periodsTitle: "Epochen",
  periodsDescription: "Von antiken klassischen Werken über Renaissance-Meisterwerke bis hin zu zeitgenössischen Innovationen umfasst unsere Sammlung mehrere historische Epochen und Stile.",
  
  exploreCollection: "Entdecken Sie unsere Sammlung",
  
  // Newsletter section
  stayUpdatedTitle: "Bleiben Sie informiert",
  stayUpdatedDescription: "Abonnieren Sie unseren Newsletter, um Updates über neue Erwerbungen, Ausstellungen und besondere Veranstaltungen zu erhalten.",
  subscribe: "Abonnieren",
  privacyNote: "Mit dem Abonnieren stimmen Sie unserer Datenschutzrichtlinie zu. Wir respektieren Ihre Privatsphäre und werden Ihre Daten niemals weitergeben.",
  subscriptionSuccess: "Vielen Dank für Ihr Abonnement! Sie erhalten in Kürze unsere Updates.",
  
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
