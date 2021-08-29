// om namah shivaya

const { promisify } = require('util');
const redis = require('redis');

// replace 127.0.0.1 with your redis instance ip
const redisHost = '127.0.0.1';

const client = redis.createClient({
  host: redisHost,
});

const incrAsync = promisify(client.incr).bind(client);

async function main(req, res) {
  res.send(`counter: ${await incrAsync('counter')}`);
}

module.exports = {
  main,
};
