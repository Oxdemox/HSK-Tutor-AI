import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "../db";
import * as schema from "../db/schema";
import { admin, magicLink, emailOTP, twoFactor } from "better-auth/plugins";
import { passkey } from "@better-auth/passkey";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: {
      user: schema.user,
      session: schema.session,
      account: schema.account,
      verification: schema.verification,
    },
  }),
  emailAndPassword: {
    enabled: true,
  },
  plugins: [
    admin(),
    magicLink({
        sendMagicLink: async (data, request) => {
            console.log("Send magic link to", data.email, "URL:", data.url);
        }
    }),
    emailOTP({
        sendVerificationOTP: async (data, request) => {
            console.log("Send OTP to", data.email, "Code:", data.otp);
        }
    }),
    twoFactor(),
    passkey(),
  ],
  // Session Configuration
  session: {
    expiresIn: 60 * 60 * 24 * 7, // 7 days
    updateAge: 60 * 60 * 24, // 1 day
  },
});
