import { createPool } from 'mysql2/promise';

const pool = createPool({
  host: 'competec.com.pe',
  user: 'competec_website',
  password: 'PagaYa2023*',
  database: 'competec_website',
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests are allowed' });
  }

  const { name, position, company, email, phone, service, message } = req.body;

  try {
    const [result] = await pool.execute(
      'INSERT INTO contacts (name, position, company, email, phone, service, message) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [name, position, company, email, phone, service, message]
    );

    res.status(200).json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Database insertion error:', error);
    res.status(500).json({ message: 'Error submitting form' });
  }
}
