import { client } from "./src/lib/database";

global.afterAll(async () => {
    await client?.close();
});
