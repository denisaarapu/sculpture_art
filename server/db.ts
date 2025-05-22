import { Pool, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import ws from "ws";
import * as schema from "../shared/schema.ts";
import * as dotenv from 'dotenv';
import * as fs from 'fs';

// Încărcăm variabilele de mediu din .env dacă fișierul există
if (fs.existsSync('./.env')) {
  dotenv.config({ path: './.env' });
}

neonConfig.webSocketConstructor = ws;

// Verificăm variabila de mediu pentru conexiunea la bază de date
if (!process.env.DATABASE_URL) {
  throw new Error(
    "DATABASE_URL nu este setat. Configurați această variabilă de mediu pentru conexiunea la baza de date.",
  );
}

console.log("Conectare la baza de date...");

export const pool = new Pool({ connectionString: process.env.DATABASE_URL });
export const db = drizzle({ client: pool, schema });