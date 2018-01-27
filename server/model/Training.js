// grab the things we need
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// timeFromHour= 
// timeMinute= 
// create a schema
var trainingSchema = new Schema({
	weekday : {
		type : String,
		required : false,
	},
	timeFrom : {
		type : Date,
		required : false,
	},
	timeTill : {
		type : Date,
		required : false,
	},
	timeFromHour : {
		type : Number,
		required : false,
	},
	timeFromMinute : {
		type : Number,
		required : false,
	},
	timeTillHour : {
		type : Number,
		required : false,
	},
	timeTillMinute : {
		type : Number,
		required : false,
	},
	level : {
		type : String,
		required : false,
	},
	trainername : {
		type : String,
		required : false,
	},
	capacity : {
		type : Number,
		required : false,
	},
	participants : [{name :  {type : String, required : true},
					 email : {type : String, required : true}}]
});

// there should be at least empty participants
trainingSchema.pre('save', function(next) {
  if (!this.participants) {
  	this.participants = new Array();
  }
  next();
});

// the schema is useless so far
// we need to create a model using it
var Training = mongoose.model('Training', trainingSchema);

// make this available to our users in our Node applications
module.exports = Training;
