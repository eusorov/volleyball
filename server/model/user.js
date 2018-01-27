// load the things we need
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

// define the schema for our user model
var userSchema = mongoose.Schema({
    social_id       : String,
    name            : String,
    username        : String,
    email           : String,
    password        : String,
    profile_picture : String,
    provider        : String,
    last_active     : String,
    access_token    : String,
    access_token_secret : String,
    refresh_token   : String,
    groups : [{name :  {type : String, required : true}}]

});

// add admin-Group to specific adress
userSchema.pre('save', function(next) {
  if (this.groups.length==0) {
    this.groups.push({name : 'user'});
  }

  if (this.email === "eusorov@googlemail.com" || this.email === "eusorov@gmail.com"){
    if (!this.groups.some(function (group){
        if (group === "admin") return true;
    })){
       this.groups.push({name : 'admin'});
    }
  }
  next();
});

// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);
