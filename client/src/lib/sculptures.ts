import { Sculpture } from "@shared/schema";

// This is a backup in case the API call fails
export const sampleSculptures: Sculpture[] = [
  {
    id: 1,
    title: "Venus of Milo",
    titleDe: "Venus von Milo",
    description: "Classical Greek sculpture, marble, circa 150 BCE",
    descriptionDe: "Klassische griechische Skulptur, Marmor, ca. 150 v. Chr.",
    imageUrl: "https://images.pexels.com/photos/134402/pexels-photo-134402.jpeg",
    folder: "marble",
    artist: "Unknown",
    period: "Classical Greek",
    material: "Marble"
  },
  {
    id: 2,
    title: "Apollo Belvedere",
    titleDe: "Apollo Belvedere",
    description: "Roman copy of bronze original, marble, c. 120-140 CE",
    descriptionDe: "Römische Kopie des Bronze-Originals, Marmor, ca. 120-140 n. Chr.",
    imageUrl: "https://images.pexels.com/photos/356844/pexels-photo-356844.jpeg",
    folder: "marble",
    artist: "Leochares (attributed)",
    period: "Classical Roman",
    material: "Marble"
  },
  {
    id: 3,
    title: "The Thinker",
    titleDe: "Der Denker",
    description: "Auguste Rodin, bronze, 1880",
    descriptionDe: "Auguste Rodin, Bronze, 1880",
    imageUrl: "https://images.pexels.com/photos/3685175/pexels-photo-3685175.jpeg",
    folder: "bronze",
    artist: "Auguste Rodin",
    period: "Modern",
    material: "Bronze"
  },
  {
    id: 4,
    title: "David",
    titleDe: "David",
    description: "Michelangelo, marble, 1501-1504",
    descriptionDe: "Michelangelo, Marmor, 1501-1504",
    imageUrl: "https://images.pexels.com/photos/936045/pexels-photo-936045.jpeg",
    folder: "classical",
    artist: "Michelangelo",
    period: "Renaissance",
    material: "Marble"
  },
  {
    id: 5,
    title: "Bird in Space",
    titleDe: "Vogel im Raum",
    description: "Constantin Brâncuși, bronze, 1923",
    descriptionDe: "Constantin Brâncuși, Bronze, 1923",
    imageUrl: "https://images.pexels.com/photos/11188896/pexels-photo-11188896.jpeg",
    folder: "contemporary",
    artist: "Constantin Brâncuși",
    period: "Modern",
    material: "Bronze"
  },
  {
    id: 6,
    title: "Pieta",
    titleDe: "Pietà",
    description: "Michelangelo, marble, 1498-1499",
    descriptionDe: "Michelangelo, Marmor, 1498-1499",
    imageUrl: "https://images.pexels.com/photos/4254897/pexels-photo-4254897.jpeg",
    folder: "classical",
    artist: "Michelangelo",
    period: "Renaissance",
    material: "Marble"
  }
];
