import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export const quotes = pgTable("quotes", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  company: text("company"),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  facilityType: text("facility_type").notNull(),
  serviceInterest: text("service_interest").notNull(),
  message: text("message"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertQuoteSchema = createInsertSchema(quotes).omit({
  id: true,
  createdAt: true,
});

export type InsertQuote = z.infer<typeof insertQuoteSchema>;
export type Quote = typeof quotes.$inferSelect;

export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  features: string[];
  targetAudiences: string[];
}

export interface RegionalHub {
  name: string;
  focus: string;
  towns: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  company: string;
  location: string;
}

export interface SiteInfo {
  name: string;
  logoText: {
    primary: string;
    accent: string;
  };
  contact: {
    phone: string;
    phoneUrl: string;
    email: string;
    address: {
      line1: string;
      line2: string;
      mapsLink: string;
    };
  };
  meta: {
    lang: string;
    author: string;
    defaultDescription: string;
    defaultTitle: string;
  };
}

export interface Navigation {
  main: { name: string; href: string }[];
  cta: { name: string; href: string };
}
