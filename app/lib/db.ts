import pg from "pg";
const { Pool } = pg;
import dotenv from "dotenv";

dotenv.config();

const pool = new Pool({
  connectionString: process.env.NEXT_PUBLIC_DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // Supabase 연결 시 인증서 에러 방지
  },
});

export default pool;
