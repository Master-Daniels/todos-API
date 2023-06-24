import { client } from './lib/database';

global.afterAll(async () => {
  await client?.close();
});
