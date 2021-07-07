const categories = require('./categories');
const query = require('./query');

const mockFetch = (url) => {
  if (url === 'https://api.mercadolibre.com/sites/MLB/categories') {
    return Promise.resolve({
      json: () => Promise.resolve(categories)
    })
  }

  if (url.includes('/search?category=') && url.includes('&q=')) {
    return Promise.resolve({
      json: () => Promise.resolve(query)
    })
  }

  if (url.includes('/search?q=')) {
    return Promise.resolve({
      json: () => Promise.resolve(query)
    })
  }

  if (url.includes('/search?category=')) {
    return Promise.resolve({
      json: () => Promise.resolve(query)
    })
  }
};

module.exports = mockFetch;
