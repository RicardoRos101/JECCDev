import { connectToDatabase } from '../../lib/db';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const { id } = req.query;
      const connection = await connectToDatabase();
      const [rows] = await connection.execute('SELECT * FROM voters WHERE 1');
      await connection.end();
      res.status(200).json(rows);
    } catch (error) {
      console.error('Error fetching voters from database:', error);
      res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
  } else if (req.method === 'POST') {
    try {
      const { idVoters, name, lastName, location, party, phone } = req.body;
      
      const connection = await connectToDatabase();
      const [result] = await connection.execute(
        'INSERT INTO voters (idVoters, name, lastName, location, party, phone) VALUES (?, ?, ?, ?, ?, ?)', 
        [idVoters, name, lastName, location, party, phone]
      );
      await connection.end();

      res.status(201).json({ message: 'Voter registered successfully', data: result });
    } catch (error) {
      console.error('Error inserting voter into database:', error);
      res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
  } else if (req.method === 'PUT') {
    try {
      const { idVoters, status } = req.body;

      const connection = await connectToDatabase();
      const [result] = await connection.execute(
        'UPDATE voters SET status = ? WHERE idVoters = ?', 
        [status, idVoters]
      );
      await connection.end();

      if (result.affectedRows > 0) {
        res.status(200).json({ message: 'Voter status updated successfully' });
      } else {
        res.status(404).json({ message: 'Voter not found' });
      }
    } catch (error) {
      console.error('Error updating voter status in database:', error);
      res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST', 'PUT']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
