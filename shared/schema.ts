import { pgTable, text, serial, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const subscribers = pgTable("subscribers", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  preferredLanguage: text("preferred_language").notNull().default("en"),
  subscribedAt: text("subscribed_at").notNull(), // ISO date string
});

export const insertSubscriberSchema = createInsertSchema(subscribers).pick({
  email: true,
  preferredLanguage: true,
});

export const sculptures = pgTable("sculptures", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  titleDe: text("title_de").notNull(),
  description: text("description").notNull(),
  descriptionDe: text("description_de").notNull(),
  imageUrl: text("image_url").notNull(),
  folder: text("folder").notNull(),
  artist: text("artist"),
  period: text("period"),
  material: text("material"),
});

export const insertSculptureSchema = createInsertSchema(sculptures);

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertSubscriber = z.infer<typeof insertSubscriberSchema>;
export type Subscriber = typeof subscribers.$inferSelect;

export type InsertSculpture = z.infer<typeof insertSculptureSchema>;
export type Sculpture = typeof sculptures.$inferSelect;
