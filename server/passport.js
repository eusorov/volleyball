// load all the things we need
var LocalStrategy    = require('passport-local').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var TwitterStrategy  = require('passport-twitter').Strategy;
var GoogleStrategy   = require('passport-google-oauth').OAuth2Strategy;
var GitHubStrategy   = require('passport-github2').Strategy;

// load up the user model
var User       = require('./model/user');

// load the auth variables
var configAuth = require('../config/secrets');

module.exports = function(passport) {

    // =========================================================================
    // passport session setup ==================================================
    // =========================================================================
    // required for persistent login sessions
    // passport needs ability to serialize and unserialize users out of session

    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });

    // =========================================================================
    // LOCAL LOGIN =============================================================
    // =========================================================================
    passport.use('local-login', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass in the req from our route (lets us check if a user is logged in or not)
    },
    function(req, email, password, done) {
        if (email)
            email = email.toLowerCase(); // Use lower-case e-mails to avoid case-sensitive e-mail matching

        // asynchronous
        process.nextTick(function() {
            User.findOne({'provider':'local', 'email' :  email }, function(err, user) {
                // if there are any errors, return the error
                if (err)
                    return done(err);

                // if no user is found, return the message
                if (!user)
                    return done(null, false);

                if (!user.validPassword(password)){
                    return done(null, false);
                 }
                // all is well, return user
                else{
                  user.password = '';
                  return done(null, user);
                }
            });
        });

    }));

    // =========================================================================
    // FACEBOOK ================================================================
    // =========================================================================
    passport.use(new FacebookStrategy({

        clientID        : configAuth.facebook.clientID,
        clientSecret    : configAuth.facebook.clientSecret,
        callbackURL     : configAuth.facebook.callbackURL,
        profileFields   : ['id', 'name', 'email', 'picture' ],
        passReqToCallback : true // allows us to pass in the req from our route (lets us check if a user is logged in or not)

    },
    function(req, token, refreshToken, profile, done) {
          process.nextTick(function() {
          /**
           * Build attributes object containing
           * authentication data that will be stored in database
           */

          var attributes = {
            access_token  : token,
            refresh_token : refreshToken
          };
          /**
           * Find or create user with the unique information provided as well
           * as attributes object so it can update or create user with
           * the authentication information we got
           */

          return findOrCreateUser('facebook', profile.id, profile, attributes).then(function(user) {
            return done(null, user);
          }).catch(function(error) {
            console.log("Error in passport.js configuration file");
            console.log(error);
            return done(null);
          }); // end findOrCreateUser()

        }); // end process.newTick()
    }));

    // =========================================================================
    // TWITTER =================================================================
    // =========================================================================
    passport.use(new TwitterStrategy({

        consumerKey     : configAuth.twitter.consumerKey,
        consumerSecret  : configAuth.twitter.consumerSecret,
        callbackURL     : configAuth.twitter.callbackURL,
        passReqToCallback : true // allows us to pass in the req from our route (lets us check if a user is logged in or not)

    },
    function(req, token, tokenSecret, profile, done) {

        // asynchronous
        process.nextTick(function() {

            // check if the user is already logged in
            if (!req.user) {

                User.findOne({ 'twitter.id' : profile.id }, function(err, user) {
                    if (err)
                        return done(err);

                    if (user) {
                        // if there is a user id already but no token (user was linked at one point and then removed)
                        if (!user.twitter.token) {
                            user.twitter.token       = token;
                            user.twitter.username    = profile.username;
                            user.twitter.displayName = profile.displayName;

                            user.save(function(err) {
                                if (err)
                                    return done(err);

                                return done(null, user);
                            });
                        }

                        return done(null, user); // user found, return that user
                    } else {
                        // if there is no user, create them
                        var newUser                 = new User();

                        newUser.twitter.id          = profile.id;
                        newUser.twitter.token       = token;
                        newUser.twitter.username    = profile.username;
                        newUser.twitter.displayName = profile.displayName;

                        newUser.save(function(err) {
                            if (err)
                                return done(err);

                            return done(null, newUser);
                        });
                    }
                });

            } else {
                // user already exists and is logged in, we have to link accounts
                var user                 = req.user; // pull the user out of the session

                user.twitter.id          = profile.id;
                user.twitter.token       = token;
                user.twitter.username    = profile.username;
                user.twitter.displayName = profile.displayName;

                user.save(function(err) {
                    if (err)
                        return done(err);

                    return done(null, user);
                });
            }

        });

    }));

    // =========================================================================
    // GOOGLE ==================================================================
    // =========================================================================
    passport.use(
      new GoogleStrategy({
            clientID        : configAuth.google.clientID,
            clientSecret    : configAuth.google.clientSecret,
            callbackURL     : configAuth.google.callbackURL,
        passReqToCallback: true
      },
      function(request, accessToken, refreshToken, profile, done) {
        process.nextTick(function() {
          /**
           * Build attributes object containing
           * authentication data that will be stored in database
           */

          var attributes = {
            access_token  : accessToken,
            refresh_token : refreshToken
          };
          /**
           * Find or create user with the unique information provided as well
           * as attributes object so it can update or create user with
           * the authentication information we got
           */

          return findOrCreateUser('google', profile.id, profile, attributes).then(function(user) {
            return done(null, user);
          }).catch(function(error) {
            console.log("Error in passport.js configuration file");
            console.log(error);
            return done(null);
          }); // end findOrCreateUser()

        }); // end process.newTick()

      }) // end function(request...) & new google strategy

    ); // end passport.use()

   // =========================================================================
    // GITHUB ==================================================================
    // =========================================================================
    passport.use(new GitHubStrategy({

        clientID        : configAuth.github.clientID,
        clientSecret    : configAuth.github.clientSecret,
        callbackURL     : configAuth.github.callbackURL,
        passReqToCallback : true // allows us to pass in the req from our route (lets us check if a user is logged in or not)

    },
    function(req, token, refreshToken, profile, done) {
         // asynchronous
           process.nextTick(function() {
          /**
           * Build attributes object containing
           * authentication data that will be stored in database
           */

          var attributes = {
            access_token  : token,
            refresh_token : refreshToken
          };
          /**
           * Find or create user with the unique information provided as well
           * as attributes object so it can update or create user with
           * the authentication information we got
           */

          return findOrCreateUser('github', profile.id, profile, attributes).then(function(user) {
            return done(null, user);
          }).catch(function(error) {
            console.log("Error in passport.js configuration file");
            console.log(error);
            return done(null);
          }); // end findOrCreateUser()

        }); // end process.newTick()
    }));
};

/**
 * Used to findOrCreateUser for any provider.
 * Utilizes the buildUpdatedAttributes function so we can
 * either create or update a user with updated attributes
 *
 * @param {String} provider (Google, Twitter, Facebook, LinkedIn, etc)
 * @param {String} social_id unique identification of the user with the OAuth provider
 * @param {Object} profile some user information object returned by the OAuth provider
 * @param {Object} attributes partially complete object of user attributes only containing
 *   authentication information (access token, etc).
 *
 * @return {User} created or updated user
 */
function findOrCreateUser(provider, social_id, profile, attributes) {
  return User.findOne({where: {provider: provider, social_id: social_id}}).then(function(user) {
    if (user) {
      /**
       * User exists, build updated attributes object and
       * update the user in the database
       */

      attributes = buildUpdatedAttributes(provider, social_id, profile, user, attributes);
      return user.update(attributes).then(function(updatedUser) {
        return updatedUser;
      }).catch(function(error) {
        throw error;
      });

    } else {
      /**
       * User does not exist, build complete attributes
       * object and create user in the database
       */
      attributes = buildCompleteAttributes(provider, social_id, profile, user, attributes);
      return User.create(attributes).then(function(newUser) {
        return newUser;
      }).catch(function(error) {
        throw error;
      });
    }
    // User exists
  }).catch(function(error) {
    throw error;
  });
}

/**
 * Below are utility functions to build user attribute objects based
 * on whether they are being logged in and UPDATED, or logged in and
 * CREATED. Basically the difference is that when we log in an already
 * existing user we only update authentication information (access token, etc)
 * and the profile picture. This is subject to change.
 */

/**
 * UPDATE user attributes
 * Build updated list of attributes that a logged in user will need
 * to be UPDATED with (profile_picture, last active, OAuth authentication information).
 * Works for any provider* though a more maintainable implementation
 * would be ideal. Issue is that each provider packages the same
 * information slightly differently so we must deal with that somewhere
 *
 * @param {String} provider (Google, Twitter, Facebook, LinkedIn, etc)
 * @param {String} social_id unique identification of the user with the OAuth provider
 * @param {Object} profile some user information object returned by the OAuth provider
 * @param {Object} attributes partially complete object of user attributes we will finish
 *   filling out here
 *
 * @return {Object} updatedUserAttributes object containing all the attributes needed to update
 *   a user in the database with
 */
function buildUpdatedAttributes(provider, social_id, profile, user, attributes) {
  var updatedUserAttributes = {};
  if(provider == 'google') {
    updatedUserAttributes = {
      profile_picture: profile.photos[0].value.split("?")[0],
      last_active: Math.trunc(Date.now()/1000),
      access_token: attributes.access_token,
      access_token_exp: user.access_token_exp,
      refresh_token: attributes.refresh_token || user.refreshToken
    };
  } else if(provider == 'twitter') {
    updatedUserAttributes = {
      profile_picture: profile.photos[0].value,
      last_active: Math.trunc(Date.now()/1000),
      access_token: attributes.access_token,
      access_token_secret: attributes.access_token_secret
    };
  }

  return updatedUserAttributes;
}

/**
 * CREATE all user attributes
 * Build list of attributes that a newly created user will need
 * to to have associated with them in the database. See /models/user.js
 *
 * @param {String} provider (Google, Twitter, Facebook, LinkedIn, etc)
 * @param {String} social_id unique identification of the user with the OAuth provider
 * @param {Object} profile some user information object returned by the OAuth provider
 * @param {Object} attributes partially complete object of user attributes we will
 *   completely fill in here
 *
 * @return {Object} completeUserAttributes object containing all the attributes needed to add
 *   a user to the database
 */
function buildCompleteAttributes(provider, social_id, profile, user, attributes) {
  var completeUserAttributes;
  if(provider == 'google') {
    completeUserAttributes = {
      social_id: social_id,
      name: profile.displayName,
      username: profile.emails[0].value,
      email: profile.emails[0].value,
      profile_picture: profile.photos[0].value.split("?")[0],
      provider: provider,
      last_active: Math.trunc(Date.now()/1000),
      access_token: attributes.access_token,
      refresh_token: attributes.refresh_token
    };
  } else if(provider == 'twitter') {
    completeUserAttributes = {
      social_id: social_id,
      name: profile.displayName,
      username: profile.username,
      email: null,
      profile_picture: profile.photos[0].value,
      provider: provider,
      last_active: Math.trunc(Date.now()/1000),
      access_token: attributes.access_token,
      access_token_secret: attributes.access_token_secret
    };
   } else if(provider == 'github') {
    completeUserAttributes = {
      social_id: social_id,
      name: profile.displayName,
      username: profile.username,
      email: profile._json.email,
      profile_picture: profile._json.avatar_url,
      provider: provider,
      last_active: Math.trunc(Date.now()/1000),
      access_token: attributes.access_token,
      access_token_secret: attributes.access_token_secret
      };
    }else if(provider == 'facebook') {
        completeUserAttributes = {
          social_id: social_id,
          name: profile.name.givenName+" "+ profile.name.familyName,
          username: profile._json.email,
          email: profile._json.email,
          profile_picture: profile._json.picture.data.url,
          provider: provider,
          last_active: Math.trunc(Date.now()/1000),
          access_token: attributes.access_token,
          access_token_secret: attributes.access_token_secret
        };
    }

  return completeUserAttributes;
}
