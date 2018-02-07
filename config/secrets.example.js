var host = process.env.HOST || 'http://127.0.0.1'
var port = process.env.PORT || '3000' 
module.exports = {
  db: process.env.MONGODB_URI || 'mongodb://localhost/myappdatabase',

  PORT : port,
  HOST : host,

  cryptos: {
    algorithm: 'aes256',
    key: process.env.CRYPTO_KEY || ''
  },

  mail : {
    gguser: '',
    ggkey: ''
  },

  proxy : process.env.PROXY || '',

  recaptcha: {
    secretKey : ''
  },


  sessionSecret: process.env.SESSION_SECRET || '',

  twitter: {
    consumerKey: process.env.TWITTER_KEY || 'Your Twitter consumer key',
    consumerSecret: process.env.TWITTER_SECRET  || 'Your Twitter consumer secret',
    callbackURL: process.env.TWITTER_CALLBACK || '/auth/twitter/callback',
    passReqToCallback: true
  },

  facebook : {
        clientID        : '', // your App ID
        clientSecret    : '', // your App Secret
        callbackURL     : '/auth/facebook/callback'
    },

  google : {
        clientID         : '',
        clientSecret     : '',
        callbackURL      : '/auth/google/callback'
    },

  github: {
    clientID: '',
    clientSecret: '',
    callbackURL: host+"/auth/github/callback"
  },
  linkedin: {
    clientID: 'get_your_own',
    clientSecret: 'get_your_own',
    callbackURL: host+"/auth/linkedin/callback"
  }
};
