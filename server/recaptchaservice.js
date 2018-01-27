var request = require('request');

verifyRecaptcha = function(captcha, callback) {

 var secretKey = "6LdscQoUAAAAAKRwKc7GNp1z6S7oiA6Id9X-Jllq";
 //var secretKey = "6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe";
  // req.connection.remoteAddress will provide IP address of connected user.
  var verificationUrl = "https://www.google.com/recaptcha/api/siteverify";

  if (!captcha){
   callback (true); // bei Tests captcha nicht pruefen!
  } else{

    

  // Hitting POST request to the URL, Google will respond with success or error scenario.
  request.post({proxy: 'http://eusorov:kbv101725075EO@proxy2.kbv.int:8080',
    strictSSL: false,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    url: verificationUrl,
    form:  {secret: secretKey, response: captcha}
    },
    function(error,response,body) {
    if(error) {
        console.log(error);
        callback(false);
    }else{
        body = JSON.parse(body);
        // Success will be true or false depending upon captcha validation.
        console.log(body);
        console.log(body.success);
        if(body.success) {
            callback(true);
        }else{
            callback(false);
        }
    }
  });

  }

}

module.exports = verifyRecaptcha;