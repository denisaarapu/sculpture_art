import { 
  users, type User, type InsertUser,
  subscribers, type Subscriber, type InsertSubscriber,
  sculptures, type Sculpture, type InsertSculpture 
} from "@shared/schema.ts";

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Subscriber methods
  getSubscribers(): Promise<Subscriber[]>;
  getSubscriberByEmail(email: string): Promise<Subscriber | undefined>;
  createSubscriber(subscriber: InsertSubscriber): Promise<Subscriber>;
  
  // Sculpture methods
  getSculptures(): Promise<Sculpture[]>;
  getSculpturesByFolder(folder: string): Promise<Sculpture[]>;
  getSculpture(id: number): Promise<Sculpture | undefined>;
}

import { db } from "./db.js";
import { eq } from "drizzle-orm";

export class DatabaseStorage implements IStorage {
  // User methods
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }
  
  // Subscriber methods
  async getSubscribers(): Promise<Subscriber[]> {
    return await db.select().from(subscribers);
  }
  
  async getSubscriberByEmail(email: string): Promise<Subscriber | undefined> {
    const [subscriber] = await db
      .select()
      .from(subscribers)
      .where(eq(subscribers.email, email));
    return subscriber || undefined;
  }
  
  async createSubscriber(insertSubscriber: InsertSubscriber): Promise<Subscriber> {
    const subscribedAt = new Date().toISOString();
    const [subscriber] = await db
      .insert(subscribers)
      .values({ ...insertSubscriber, subscribedAt })
      .returning();
    return subscriber;
  }
  
  // Sculpture methods
  async getSculptures(): Promise<Sculpture[]> {
    return await db.select().from(sculptures);
  }
  
  async getSculpturesByFolder(folder: string): Promise<Sculpture[]> {
    return await db
      .select()
      .from(sculptures)
      .where(eq(sculptures.folder, folder));
  }
  
  async getSculpture(id: number): Promise<Sculpture | undefined> {
    const [sculpture] = await db
      .select()
      .from(sculptures)
      .where(eq(sculptures.id, id));
    return sculpture || undefined;
  }
}

// Initialize the database with sample data
const initializeSculptures = async () => {
  const sculptureCount = await db.select().from(sculptures);
  
  // Only initialize if there are no sculptures
  if (sculptureCount.length === 0) {
    const sculptureData = [
      {
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
    
    await db.insert(sculptures).values(sculptureData);
  }
};

// Initialize data and export storage
initializeSculptures()
  .catch(err => {
    console.error("Error initializing database:", err);
  });

export const storage = new DatabaseStorage();
