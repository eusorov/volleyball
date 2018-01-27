var Training = require('../model/Training');
// Besseres Handling von parallel Prozessen
var async = require("async");
var HttpStatus = require('http-status-codes');

function isAdmin(req) {
    if (req.isAuthenticated() && req.user.groups.some(function(group){
    	if (group.name==="admin") return true;
    })){
    	return true;
    }
    return false;
}

exports.getTrainings =function (req, res, next) {
	// alle Trainings finden (denn sonst kann man nicht ohne extra Request ermitteln, ob jemand bereits in der Liste ist)
		Training.find({ }, function (err, data) {
		    res.send(data);
		});
}

exports.getMyTrainings =function (req, res, next) {
	Training.find({'participants.email' : req.user.email},  { "participants": {$elemMatch : {'email':req.user.email}} }, function (err, data) {
	    	res.send(data);
	});
}

exports.getTraining = function(req, res, next) {
	Training.findById(req.params.id,  { "participants.email": 0,"participants.name": 0 }, function (err, data) {
	    res.send(data);
	});
}
exports.getTrainingParticipants=function(req, res, next) {
	Training.findById(req.params.id, function (err, data) {
		res.send(data.participants);
	});
}

exports.getTrainingParticipant=function(req, res, next) {
	Training.findOne({'_id':req.params.id, 'participants._id' : req.params.p_id}, { "participants.$": 1 } , { participants: 1 },  function (err, data) {
		res.send(data);
	});
}

exports.postTrainings=function(req, res, next) {
	 var data = req.body;
	 if (data.constructor === Array ){
		  Training.collection.insert(data, (function (err) {
				  if (err) {
					  console.log(err);
				       return next(err);
				  } else {
			            res.sendStatus(HttpStatus.CREATED);
				  }
			  }));
	 }else{
        res.sendStatus(HttpStatus.BAD_REQUEST);
	 }
}

exports.postTraining=function(req, res, next) {
	var data = req.body;
	if (data.constructor === Array ){
		res.sendStatus(HttpStatus.BAD_REQUEST);
	}else{
		Training.findById(req.params.id, function(err, doc){
			if (err) return res.sendStatus(HttpStatus.NOT_FOUND);
			
			Training.update({_id: req.params.id}, data, {upsert: true, setDefaultsOnInsert: true}, function(err, doc) {
			  if (err) {
			       return next(err);
			  } else {
				  res.location('/api/trainings/' + doc._id);
		          res.sendStatus(HttpStatus.OK);
			  }
			});
		})
	}
}

exports.postTrainingParticipants=function(req, res, next) {
	var data = req.body;

	if (data.constructor === Array ){
		Training.findById(req.params.id, function(err, training){
			if (err) return res.sendStatus(HttpStatus.NOT_FOUND);

			if (!training.participants && (training.capacity < data.length) || 
				 training.participants && (training.capacity < (training.participants.length+ data.length))){
				return res.sendStatus(HttpStatus.BAD_REQUEST);
			}
			
			// Es ist möglich die Subdocuments (participants) auf einmal einzufügen.
			// Aber dann ist keine vernünftige Validierung pro subdocument (participant) möglich.
			// z.B. pruefung, ob bereits Datensatz mit gleichen Namen exisitert.
			
			// Deswegen wird jeder Subdocument (participant) mit Hilfe von async hinzugefügt. 
			
			// async.each() 1 parameter is the array of items
			async.each(data, // 2nd param is the function that each item is passed to
			  function(participant, callback){
			  	delete participant._id;

				// Model.update(conditions, update, options, callback);
				// 1 Argument condicitions: id, mit Zusatz dass in DB participants.email != der Email in participant.email ist
				// 2 Argument update: push neuen Datensatz in Array
				// 3 Argument Options: optional
				// 4 Argument callback Function
				
				// unterschied zw. update = keine Rueckgabe und findeOneAndUpdate = RueckgabeObjekt
				// pruefe ob capacity noch es erlaubt einen neuen Teilnehmer hinzuzufuegen
				if(training.participants && training.capacity <=training.participants.length){
					console.log("too many participants");
					err = "too many participants, capacity is "+training.capacity;
					return callback(err);
				}
				Training.update({ _id: req.params.id , "participants.email" : {$ne : participant.email}}, {$push : {participants: participant }}, 
						 function (err, numberAffected) {
						   if (err) return callback(err);
						   callback();
				});
			  },
			  // 3rd param von async is the function to call when everything's done
			  function(err, results){
			    // All tasks are done now
				  if (err) return next(err);
				  res.sendStatus(HttpStatus.CREATED);
			  }
			);
		})
	}else{
		res.sendStatus(HttpStatus.BAD_REQUEST);
	}
}

exports.postTrainingParticipant=function(req, res, next) {
	var data = req.body;
	if (data.constructor === Array ){
		res.sendStatus(HttpStatus.BAD_REQUEST);
	}else{
		Training.findById(req.params.id, function(err, training){
			if (err) return res.sendStatus(HttpStatus.NOT_FOUND);
			// $  positional operator to identify the array element matched in the selector
			Training.update({ _id: req.params.id , "participants._id" : req.params.p_id}, {$set : {"participants.$.name": data.name }}, 
					 function (err, numberAffected) {
					 if (err) return next(err);
					 if (numberAffected.n===1) res.sendStatus(HttpStatus.OK);
					 else res.sendStatus(HttpStatus.NOT_FOUND);
			});
		})
	}
}
exports.deleteTraining=function(req, res, next) {
		Training.findById(req.params.id, function(err, doc){
			if (err) return res.sendStatus(HttpStatus.NOT_FOUND);
			
			Training.remove({_id: req.params.id}, function(err, doc) {
				if (err) {
					return next(err);
				} else {
					res.sendStatus(HttpStatus.OK);
				}
			});
		})
}
exports.deleteTrainingParticipant=function(req, res, next) {
	Training.findById(req.params.id, function(err, doc){
		if (err) return res.sendStatus(HttpStatus.NOT_FOUND);
		
		// unset lieaves null
		// pull removes object completely
		Training.update({ _id: req.params.id , "participants._id" : req.params.p_id}, {$pull : {participants: {_id: req.params.p_id} }}, function (err, numberAffected) { 
			if (err) return next(err);
				res.sendStatus(HttpStatus.OK);
		});
	})
}