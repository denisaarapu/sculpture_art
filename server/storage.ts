import { 
  users, type User, type InsertUser,
  subscribers, type Subscriber, type InsertSubscriber,
  sculptures, type Sculpture, type InsertSculpture 
} from "@shared/schema";

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

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private subscribers: Map<number, Subscriber>;
  private sculptures: Map<number, Sculpture>;
  private currentUserId: number;
  private currentSubscriberId: number;
  private currentSculptureId: number;

  constructor() {
    this.users = new Map();
    this.subscribers = new Map();
    this.sculptures = new Map();
    this.currentUserId = 1;
    this.currentSubscriberId = 1;
    this.currentSculptureId = 1;
    
    // Initialize with some sculpture data
    this.initializeSculptures();
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Subscriber methods
  async getSubscribers(): Promise<Subscriber[]> {
    return Array.from(this.subscribers.values());
  }
  
  async getSubscriberByEmail(email: string): Promise<Subscriber | undefined> {
    return Array.from(this.subscribers.values()).find(
      (subscriber) => subscriber.email === email
    );
  }
  
  async createSubscriber(insertSubscriber: InsertSubscriber): Promise<Subscriber> {
    const id = this.currentSubscriberId++;
    const subscriber: Subscriber = { 
      ...insertSubscriber, 
      id, 
      subscribedAt: new Date().toISOString() 
    };
    this.subscribers.set(id, subscriber);
    return subscriber;
  }
  
  // Sculpture methods
  async getSculptures(): Promise<Sculpture[]> {
    return Array.from(this.sculptures.values());
  }
  
  async getSculpturesByFolder(folder: string): Promise<Sculpture[]> {
    return Array.from(this.sculptures.values()).filter(
      (sculpture) => sculpture.folder === folder
    );
  }
  
  async getSculpture(id: number): Promise<Sculpture | undefined> {
    return this.sculptures.get(id);
  }
  
  // Initialize with sculpture data
  private initializeSculptures() {
    const sculptureData: InsertSculpture[] = [
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
    
    sculptureData.forEach(sculpture => {
      const id = this.currentSculptureId++;
      this.sculptures.set(id, { ...sculpture, id });
    });
  }
}

export const storage = new MemStorage();
