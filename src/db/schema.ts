import { pgTable, text, integer, timestamp, boolean, varchar, jsonb } from "drizzle-orm/pg-core";
import { nanoid } from "nanoid";

// --- Better Auth Core Tables ---

export const user = pgTable("user", {
  id: text("id").primaryKey().$defaultFn(() => nanoid()),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: boolean("emailVerified").notNull().default(false),
  image: text("image"),
  role: text("role").default("user"), // Default role
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt").notNull().defaultNow(),
  
  // Two Factor Authentication Fields
  twoFactorEnabled: boolean("twoFactorEnabled").default(false),
  twoFactorSecret: text("twoFactorSecret"),
  twoFactorBackupCodes: text("twoFactorBackupCodes"),
});

export const session = pgTable("session", {
  id: text("id").primaryKey().$defaultFn(() => nanoid()),
  expiresAt: timestamp("expiresAt").notNull(),
  token: text("token").notNull().unique(),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt").notNull().defaultNow(),
  ipAddress: text("ipAddress"),
  userAgent: text("userAgent"),
  userId: text("userId").notNull().references(() => user.id, { onDelete: "cascade" }),
});

export const account = pgTable("account", {
  id: text("id").primaryKey().$defaultFn(() => nanoid()),
  accountId: text("accountId").notNull(),
  providerId: text("providerId").notNull(),
  userId: text("userId").notNull().references(() => user.id, { onDelete: "cascade" }),
  accessToken: text("accessToken"),
  refreshToken: text("refreshToken"),
  idToken: text("idToken"),
  accessTokenExpiresAt: timestamp("accessTokenExpiresAt"),
  refreshTokenExpiresAt: timestamp("refreshTokenExpiresAt"),
  scope: text("scope"),
  password: text("password"),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt").notNull().defaultNow(),
});

export const verification = pgTable("verification", {
  id: text("id").primaryKey().$defaultFn(() => nanoid()),
  identifier: text("identifier").notNull(),
  value: text("value").notNull(),
  expiresAt: timestamp("expiresAt").notNull(),
  createdAt: timestamp("createdAt").defaultNow(),
  updatedAt: timestamp("updatedAt").defaultNow(),
});

// --- Better Auth Plugin Tables ---

export const passkey = pgTable("passkey", {
  id: text("id").primaryKey().$defaultFn(() => nanoid()),
  name: text("name"),
  publicKey: text("publicKey").notNull(),
  userId: text("userId").notNull().references(() => user.id, { onDelete: "cascade" }),
  credentialID: text("credentialID").notNull(),
  counter: integer("counter").notNull(),
  deviceType: text("deviceType").notNull(),
  backedUp: boolean("backedUp").notNull(),
  transports: text("transports"),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
});

// --- HSK Tutor Specific Tables ---

export const progress = pgTable("progress", {
  id: text("id").primaryKey().$defaultFn(() => nanoid()),
  userId: text("userId").notNull().references(() => user.id, { onDelete: "cascade" }),
  hskLevel: text("hskLevel").notNull(), // "HSK 1", "HSK 2", etc.
  percentage: integer("percentage").notNull().default(0),
  lastUpdated: timestamp("lastUpdated").defaultNow(),
});

export const vocabulary = pgTable("vocabulary", {
  id: text("id").primaryKey().$defaultFn(() => nanoid()),
  userId: text("userId").notNull().references(() => user.id, { onDelete: "cascade" }),
  word: text("word").notNull(),
  pinyin: text("pinyin").notNull(),
  meaning: text("meaning").notNull(),
  masteryLevel: integer("masteryLevel").notNull().default(0), // 0 to 5
  lastReviewed: timestamp("lastReview"),
});

export const learningSession = pgTable("learning_session", {
  id: text("id").primaryKey().$defaultFn(() => nanoid()),
  userId: text("userId").notNull().references(() => user.id, { onDelete: "cascade" }),
  type: text("type").notNull(), // "ai-chat", "quiz", "writing"
  duration: integer("duration"), // in seconds
  completedAt: timestamp("completedAt").defaultNow(),
});
