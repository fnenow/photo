import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pg from 'pg';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });

app.get('/api/albums', async (req, res) => {
  const { rows } = await pool.query('SELECT * FROM albums ORDER BY id DESC');
  res.json(rows);
});

app.listen(3001, () => console.log('Backend running on :3001'));
