// lib/db.js
import mysql from 'mysql2/promise';

export async function connectToDatabase() {
  const connection = await mysql.createConnection({
    host: 'jecc-server.mysql.database.azure.com',
    user: 'iatoulurtj',
    password: 'wL$tzKnPNEpyz4iE',
    database: 'jecc-database',
    port: 3306, // Asegúrate de usar el puerto correcto (por lo general, 3306)
  });

  return connection;
}


export async function testConnection() {
  // Configura los detalles de tu conexión
  const connection = await mysql.createConnection({
    host: 'jecc-server.mysql.database.azure.com',
    user: 'iatoulurtj',
    password: 'wL$tzKnPNEpyz4iE',
    database: 'jecc-database',
    port: 3306, // Asegúrate de usar el puerto correcto (por lo general, 3306)
    ssl: {
      rejectUnauthorized: false
    }
  });

  try {
    // Proba la conexión
    await connection.connect();
    console.log('La conexión con la base de datos fue exitosa');
  } catch (error) {
    console.error('Error al conectar con la base de datos:', error);
  } finally {
    await connection.end();
  }
}
