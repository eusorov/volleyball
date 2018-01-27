var express = require('express');
var router = express.Router();

var HttpStatus = require('http-status-codes');
var trainingsController = require('./controllers/trainingsController');


// 1. app-authentifizierung (app-login , return jwt-token)
// 2. hier alle trainings-calls mit jwt-token sichern
router.use('/me', isLoggedIn);
router.route('/me').get(trainingsController.getMyTrainings);


router.route('/').get(trainingsController.getTrainings)
.post(isLoggedIn, isAdmin, trainingsController.postTrainings)
.put(isLoggedIn, function (req, res){res.sendStatus(HttpStatus.NOT_IMPLEMENTED);})
.delete(isLoggedIn, function (req, res){res.sendStatus(HttpStatus.NOT_IMPLEMENTED);});

//router.use('/:id', isLoggedIn, isAdmin); //secure all with is logged and is admin
router.route('/:id').get(trainingsController.getTraining)
.post(trainingsController.postTraining)
.put(trainingsController.postTraining)
.delete( trainingsController.deleteTraining);

router.route('/:id/participants').get(trainingsController.getTrainingParticipants)
.post(trainingsController.postTrainingParticipants)
.put(function (req, res){res.sendStatus(HttpStatus.NOT_IMPLEMENTED);})
.delete(function (req, res){res.sendStatus(HttpStatus.NOT_IMPLEMENTED);});

router.route('/:id/participants/:p_id').get(trainingsController.getTrainingParticipant)
.post(trainingsController.postTrainingParticipant)
.put(trainingsController.postTrainingParticipant)
.delete(trainingsController.deleteTrainingParticipant);


module.exports = router;

// route middleware to ensure user is logged in
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();

     res.status(401).send();
}
// route middleware to ensure user is admin
function isAdmin(req, res, next) {
    if (req.isAuthenticated() && req.user.groups.some(function(group){
    	if (group.name==="admin") return true;
    })){
        return next();
    }
     res.status(401).send();
}
