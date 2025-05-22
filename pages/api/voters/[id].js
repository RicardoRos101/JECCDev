// pages/api/voters/[id].js
import { connectToDatabase } from '/lib/db';

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  if (method === 'GET') {
    try {
      const connection = await connectToDatabase();
      const [rows] = await connection.execute('SELECT * FROM voters WHERE idVoters = ?', [id]);
      await connection.end();

      if (rows.length > 0) {
        res.status(200).json(rows[0]);
      } else {
        res.status(404).json({ error: 'Voter not found' });
      }
    } catch (error) {
      console.error('Error fetching voter from database:', error);
      res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
}
