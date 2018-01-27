var nodemailer = require('nodemailer');
var HttpStatus = require('http-status-codes');
var request = require('request');
var verifyRecaptcha = require('./recaptchaservice');

module.exports = function(req, res) {

    var smtpConfig = {
     service: 'Gmail',
    //host: 'smtp.gmail.com',
    //port: 465,
    secure: true, // use SSL 
    auth: {
        user: 'eusorov@gmail.com',
        pass: 'leopoldVelosipedGG1725075EO'
    },
    proxy: 'http://eusorov:kbv101725075EO@proxy2.kbv.int:8080'
};

console.log("try to send mail");
// create reusable transporter object using the default SMTP transport 
//var transporter = nodemailer.createTransport(smtpConfig);

// setup e-mail data with unicode symbols 
var mailOptions = {
    from: '"Fred Foo " <eusorov@blurdybloop.com>', // sender address 
    to: 'eusorov@gmail.com', // list of receivers 
    subject: 'Hello', // Subject line 
    text: 'Hello world', // plaintext body 
    html: '<b>Hello world 🐴</b>' // html body 
};


// send mail with defined transport object 
/*transporter.sendMail(mailOptions, function(error, info){
	console.log("sending mail...");
	if(error){
		return console.log(error);
	}
	console.log('Message sent: ' + info.response);
  res.sendStatus(HttpStatus.OK);
});
*/
    console.log(req.body);
    verifyRecaptcha(req.body[0].captcha, function(success) {
    if (success) {
         res.sendStatus(HttpStatus.OK);
        } else {
         res.sendStatus(HttpStatus.BAD_REQUEST);
                        // TODO: take them back to the previous page
                        // and for the love of everyone, restore their inputs
        }
    });
};



