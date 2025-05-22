import { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage.ts";
import { insertSubscriberSchema } from "@shared/schema.ts";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  app.get("/api/sculptures", async (req: Request, res: Response) => {
    try {
      let sculptures;
      
      if (req.query.folder) {
        sculptures = await storage.getSculpturesByFolder(req.query.folder as string);
      } else {
        sculptures = await storage.getSculptures();
      }
      
      res.json(sculptures);
    } catch (err) {
      console.error("Error fetching sculptures:", err);
      res.status(500).json({ message: "Failed to fetch sculptures" });
    }
  });

  app.get("/api/sculptures/:id", async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      const sculpture = await storage.getSculpture(id);
      
      if (!sculpture) {
        return res.status(404).json({ message: "Sculpture not found" });
      }
      
      res.json(sculpture);
    } catch (err) {
      console.error("Error fetching sculpture:", err);
      res.status(500).json({ message: "Failed to fetch sculpture" });
    }
  });

  app.post("/api/newsletter/subscribe", async (req: Request, res: Response) => {
    try {
      const subscriberData = insertSubscriberSchema.safeParse(req.body);
      
      if (!subscriberData.success) {
        const errorMessage = fromZodError(subscriberData.error).message;
        return res.status(400).json({ message: errorMessage });
      }
      
      // Check if email already exists
      const existingSubscriber = await storage.getSubscriberByEmail(subscriberData.data.email);
      if (existingSubscriber) {
        return res.status(409).json({ message: "Email already subscribed" });
      }
      
      const newSubscriber = await storage.createSubscriber(subscriberData.data);
      res.status(201).json(newSubscriber);
    } catch (err) {
      console.error("Error creating subscriber:", err);
      res.status(500).json({ message: "Failed to subscribe to newsletter" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
