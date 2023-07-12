import app from './app';

const port: number = Number(process.env.PORT) || 5000;

app.listen(port, '127.0.0.1', () => {
  /* eslint-disable no-console */
  console.log(`[server]:  Server listening on [http://localhost:${port}]`);
  /* eslint-enable no-console */
});
