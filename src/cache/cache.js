const NodeCache = require('node-cache');
const cache = new NodeCache({ stdTTL: 600 }); // Data will be cached for 600 seconds (10 minutes)

const setCache = (key, value) => {
  cache.set(key, value);
};

const getCache = (key) => {
  return cache.get(key);
};

module.exports = { setCache, getCache };
