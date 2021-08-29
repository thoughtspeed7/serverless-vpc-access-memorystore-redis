// om namah shivaya

// require scripts
const { promisify } = require('util');
const redis = require('redis');
const express = require('express');

startService();

async function startService() {
  // replace 127.0.0.1 with your redis instance ip
  const redisHost = '127.0.0.1';

  const client = redis.createClient({
    host: redisHost,
  });

  const incrAsync = promisify(client.incr).bind(client);

  const app = express();
  const port = process.env.PORT || 4000;

  app.get('/', async (req, res) => {
    res.send(`counter: ${await incrAsync('counter')}`);
  });

  app.listen(port, () => {
    console.log(`app-engine listening on port ${port}`);
  });
}
