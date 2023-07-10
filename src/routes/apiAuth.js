function apiAuth(req, res, next) {
    const config =require('../../config.dev.json')
    const password = config.API_KEY;
    const apiKey = req.headers['api-key'];
  
    if (apiKey && apiKey === password) {
      next();
    } else {
      // If the API key is invalid, return an error response
      res.status(401).json({ error: 'Unauthorized' });
    }
  }

  module.exports = apiAuth;