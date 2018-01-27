module.exports = {
  db: process.env.MONGODB_URI || 'mongodb://localhost/myappdatabase',

  cryptos: {
    algorithm: 'aes256',
    key: process.env.CRYPTO_KEY || 'computer'
  },

  sessionSecret: process.env.SESSION_SECRET || 'computer',

  twitter: {
    consumerKey: process.env.TWITTER_KEY || 'Your Twitter consumer key',
    consumerSecret: process.env.TWITTER_SECRET  || 'Your Twitter consumer secret',
    callbackURL: process.env.TWITTER_CALLBACK || 'http://127.0.0.1:3000/auth/twitter/callback',
    passReqToCallback: true
  },

  facebook : {
        clientID        : '254639964877043', // your App ID
        clientSecret    : '16707fd504e63e25fc2e2469f9fcda33', // your App Secret
        callbackURL     : 'http://127.0.0.1:3000/auth/facebook/callback'
    },

  google : {
        clientID         : '350472840950-h05tsr332j77jc7qbdjgl7fi2v5qsbl9.apps.googleusercontent.com',
        clientSecret     : 'ZXD6lEuBPnyFkXvS09PqQnKK',
        callbackURL      : 'http://127.0.0.1:3000/auth/google/callback'
    },

  github: {
    clientID: 'f541b1860971793d0e6e',
    clientSecret: 'f5c5122b20cf9f8a47e322560159ac2c25492c0a',
    callbackURL: "http://127.0.0.1:3000/auth/github/callback"
  },
  linkedin: {
    clientID: 'get_your_own',
    clientSecret: 'get_your_own',
    callbackURL: "http://127.0.0.1:3000/auth/linkedin/callback"
  }
};
