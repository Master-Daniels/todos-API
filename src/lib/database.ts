import { MongoClient } from 'mongodb';

// const connectionString: string = process.env.MONGO_URI || '';

let cachedClient: MongoClient | null = null;

if (!cachedClient) {
  cachedClient = new MongoClient('mongodb://127.0.0.1:27017');
}
const db = cachedClient.db('todosDB');

export { cachedClient as client, db };
