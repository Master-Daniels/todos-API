import { MongoClient } from 'mongodb';

const connectionString: string = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/todos';

let cachedClient = null;

if (!cachedClient) {
  const client = new MongoClient(connectionString);
  cachedClient = client;
}
const db = cachedClient.db();

export { cachedClient, db };
