var User       = require('./model/user');
var HttpStatus = require('http-status-codes');

var verifyRecaptcha = require('./recaptchaservice');

module.exports = function(app, passport) {

    // LOGOUT ==============================
    app.get('/api/logout', function(req, res) {
        req.logout();
        res.json({"loggedOut": req.isAuthenticated()});
    });

    app.get('/api/authenticated', function(req, res) {
        var isAuthenticated = req.isAuthenticated();
        res.json({"authenticated": isAuthenticated});
    });

    // /users/me
    app.get('/api/users/me', isLoggedIn, function(req, res, next) {
        req.user.password = '';
        res.send(req.user);
    });


// =============================================================================
// AUTHENTICATE (FIRST LOGIN) ==================================================
// =============================================================================

    // locally --------------------------------
    // LOGIN ===============================
        app.post('/api/login', function(request, response, next) {
          passport.authenticate('local-login', function(error, user, info) {
            if (error) {
               response.status(500);
               response.json(JSON.stringify(error));
            }
            if (!user) {
              response.status(401);
              response.json({reason: "Invalid credentials"});
            } else {
            /**
             * "Login" user officially, and return proper response
             * if there is an error logging the user in (500)
             */
            request.login(user, function(err) {
              if (err) {
                 response.status(500);
                 response.json(JSON.stringify(err));
               }
              return response.send(user);
            });
          }
        })(request, response, next);
      });


        app.post('/api/signup', function(req, res, next) {
          // check captcha
          verifyRecaptcha(req.body.captcha, function(success) {
          if (!success) {
               res.sendStatus(HttpStatus.BAD_REQUEST);
              }else{
             User.findOne({'provider':'local', 'email' :  req.body.email }, function(err, user) {
                  // if there are any errors, return the error
                  if (err)
                      return next(err);

                  // check to see if theres already a user with that email
                  if (user) {
                     return res.status(422).send({error : 'user with this email already exists'}); //user already exists
                  } else {
                      // create the user
                      var newUser            = new User();
                      newUser.email    = req.body.email;
                      newUser.name    = req.body.name;
                      newUser.provider = 'local';
                      newUser.password = newUser.generateHash(req.body.password);
                      newUser.save(function(err) {
                        if (err)
                              return next(err);

                        if (!req.user) {
                          // if the user is logged in but has no local account...
                          req.logout();
                        }


                        req.login(newUser, function(err) {
                          if (err) { return next(err); }
                          
                          newUser.password = '';
                          return res.status(HttpStatus.CREATED).send(newUser);
                        });
                      });
                  }
              });
              }
          });
        });
    // facebook -------------------------------
        // send to facebook to do the authentication
        app.get('/auth/facebook', passport.authenticate('facebook', { scope : 'email' }));
        // handle the callback after facebook has authenticated the user
        app.get('/auth/facebook/callback',
            passport.authenticate('facebook', {
                successRedirect : '/success',
                failureRedirect : '/login'
            }));

    // twitter --------------------------------
        // send to twitter to do the authentication
        app.get('/auth/twitter', passport.authenticate('twitter', { scope : 'email' }));

        // handle the callback after twitter has authenticated the user
        app.get('/auth/twitter/callback',
            passport.authenticate('twitter', {
                successRedirect : '/success',
                failureRedirect : '/login'
            }));


    // google ---------------------------------
        // send to google to do the authentication
        app.get('/auth/google', passport.authenticate('google', { scope : ['profile', 'email'] }));

        // the callback after google has authenticated the user
        app.get('/auth/google/callback',
            passport.authenticate('google', {
                successRedirect : '/success',
                failureRedirect : '/login'
            }));
       
    // github ---------------------------------
        app.get('/auth/github', passport.authenticate('github', { scope: [ 'user:email' ] }));
        app.get('/auth/github/callback',
            passport.authenticate('github', {
                successRedirect : '/success',
                failureRedirect: '/login'
            }));

// =============================================================================
// AUTHORIZE (ALREADY LOGGED IN / CONNECTING OTHER SOCIAL ACCOUNT) =============
// =============================================================================

    // locally --------------------------------
        app.get('/connect/local', function(req, res) {
            res.render('connect-local.ejs', { message: req.flash('loginMessage') });
        });
        app.post('/connect/local', passport.authenticate('local-signup', {
            successRedirect : '/profile', // redirect to the secure profile section
            failureRedirect : '/connect/local', // redirect back to the signup page if there is an error
            failureFlash : true // allow flash messages
        }));

    // facebook -------------------------------

        // send to facebook to do the authentication
        app.get('/connect/facebook', passport.authorize('facebook', { scope : 'email' }));

        // handle the callback after facebook has authorized the user
        app.get('/connect/facebook/callback',
            passport.authorize('facebook', {
                successRedirect : '/profile',
                failureRedirect : '/'
            }));

    // twitter --------------------------------

        // send to twitter to do the authentication
        app.get('/connect/twitter', passport.authorize('twitter', { scope : 'email' }));

        // handle the callback after twitter has authorized the user
        app.get('/connect/twitter/callback',
            passport.authorize('twitter', {
                successRedirect : '/profile',
                failureRedirect : '/'
            }));


    // google ---------------------------------

        // send to google to do the authentication
        app.get('/connect/google', passport.authorize('google', { scope : ['profile', 'email'] }));

        // the callback after google has authorized the user
        app.get('/connect/google/callback',
            passport.authorize('google', {
                successRedirect : '/profile',
                failureRedirect : '/'
            }));
};

// route middleware to ensure user is logged in
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();

     res.status(401).send();
}
