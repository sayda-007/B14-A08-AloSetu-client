import { betterAuth } from "better-auth";
import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { MongoClient } from "mongodb";
import { jwt } from "better-auth/plugins";

const requiredEnv = ["BETTER_AUTH_SECRET", "BETTER_AUTH_URL", "MONGODB_URI"];

for (const key of requiredEnv) {
  if (!process.env[key]) {
    throw new Error(
      `Missing required environment variable: ${key}. Add it to your .env.local file before starting the app.`
    );
  }
}

const mongoUri = process.env.MONGODB_URI;
const mongoDbName = process.env.MONGODB_DB_NAME || "alosetu";
const authSecret = process.env.BETTER_AUTH_SECRET;
const authBaseUrl = process.env.BETTER_AUTH_URL;

const globalMongoClient =
  globalThis.__betterAuthMongoClient ?? new MongoClient(mongoUri);

if (!globalThis.__betterAuthMongoClient) {
  globalThis.__betterAuthMongoClient = globalMongoClient;
}

const client = globalMongoClient;
const db = client.db(mongoDbName);

export const auth = betterAuth({
  secret: authSecret,
  baseURL: authBaseUrl,
  trustedOrigins: [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "https://alosetu.vercel.app",
  ],
  database: mongodbAdapter(db, { client }),
  emailAndPassword: {
    enabled: true,
    minPasswordLength: 6,
  },
  plugins: [jwt()],
});
