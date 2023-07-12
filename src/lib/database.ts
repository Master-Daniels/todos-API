import { MongoClient } from 'mongodb';

const connectionString: string | undefined = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017';

let cachedClient: MongoClient | null = null;

if (!cachedClient) {
  cachedClient = new MongoClient(connectionString as string);
}
const db = cachedClient.db('todosDB');

export { cachedClient as client, db };
