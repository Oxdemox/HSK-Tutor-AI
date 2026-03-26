import { 
  pgTable, 
  text, 
  timestamp, 
  boolean, 
  integer, 
  jsonb, 
  uuid, 
  varchar 
} from "drizzle-orm/pg-core";

// --- Better Auth Required Tables ---

export const user = pgTable("user", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: boolean("emailVerified").notNull(),
  image: text("image"),
  createdAt: timestamp("createdAt").notNull(),
  updatedAt: timestamp("updatedAt").notNull(),
  role: text("role").default("user"), // 'admin' | 'user'
});

export const session = pgTable("session", {
  id: text("id").primaryKey(),
  expiresAt: timestamp("expiresAt").notNull(),
  token: text("token").notNull().unique(),
  createdAt: timestamp("createdAt").notNull(),
  updatedAt: timestamp("updatedAt").notNull(),
  ipAddress: text("ipAddress"),
  userAgent: text("userAgent"),
  userId: text("userId")
    .notNull()
    .references(() => user.id),
});

export const account = pgTable("account", {
  id: text("id").primaryKey(),
  accountId: text("accountId").notNull(),
  providerId: text("providerId").notNull(),
  userId: text("userId")
    .notNull()
    .references(() => user.id),
  accessToken: text("accessToken"),
  refreshToken: text("refreshToken"),
  idToken: text("idToken"),
  accessTokenExpiresAt: timestamp("accessTokenExpiresAt"),
  refreshTokenExpiresAt: timestamp("refreshTokenExpiresAt"),
  scope: text("scope"),
  password: text("password"),
  createdAt: timestamp("createdAt").notNull(),
  updatedAt: timestamp("updatedAt").notNull(),
});

export const verification = pgTable("verification", {
  id: text("id").primaryKey(),
  identifier: text("identifier").notNull(),
  value: text("value").notNull(),
  expiresAt: timestamp("expiresAt").notNull(),
  createdAt: timestamp("createdAt"),
  updatedAt: timestamp("updatedAt"),
});

// --- HSK Tutor Specific Tables ---

export const userProgress = pgTable("user_progress", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: text("userId")
    .notNull()
    .references(() => user.id)
    .unique(),
  currentLevel: varchar("current_level", { length: 10 }).default("HSK 1"),
  starredWords: jsonb("starred_words").default([]),
  preferences: jsonb("preferences").default({
    speakingRate: 1.0,
    voiceId: 'zh-CN-Standard-A',
    autoPlay: true,
    dailyGoalMinutes: 15,
    notificationsEnabled: true,
    preferredPracticeTime: null,
    smartHskEnabled: false,
  }),
  totalSessions: integer("total_sessions").default(0),
  totalWordsLearned: integer("total_words_learned").default(0),
  totalPracticeMinutes: integer("total_practice_minutes").default(0),
  currentStreak: integer("current_streak").default(0),
  longestStreak: integer("longest_streak").default(0),
  lastActiveAt: timestamp("last_active_at"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const vocabularyProgress = pgTable("vocabulary_progress", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: text("userId")
    .notNull()
    .references(() => user.id),
  wordId: text("word_id").notNull(),
  status: varchar("status", { length: 20 }).default("new"), // 'new' | 'learning' | 'reviewing' | 'mastered'
  correctCount: integer("correct_count").default(0),
  incorrectCount: integer("incorrect_count").default(0),
  lastReviewedAt: timestamp("last_reviewed_at"),
  nextReviewAt: timestamp("next_review_at"),
  easeFactor: text("ease_factor").default("2.5"),
  interval: integer("interval").default(0),
});

export const learningSession = pgTable("learning_session", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: text("userId")
    .notNull()
    .references(() => user.id),
  hskLevel: varchar("hsk_level", { length: 10 }).notNull(),
  startedAt: timestamp("started_at").defaultNow(),
  endedAt: timestamp("ended_at"),
  accuracy: integer("accuracy").default(0),
  fluencyScore: integer("fluency_score"),
  scenario: text("scenario"),
});

export const sessionMessage = pgTable("session_message", {
  id: uuid("id").defaultRandom().primaryKey(),
  sessionId: uuid("session_id")
    .notNull()
    .references(() => learningSession.id),
  role: varchar("role", { length: 20 }).notNull(), // 'user' | 'assistant'
  content: text("content").notNull(),
  timestamp: timestamp("timestamp").defaultNow(),
  wordsLearned: jsonb("words_learned").default([]),
  correctionsMade: jsonb("corrections_made").default([]),
});
