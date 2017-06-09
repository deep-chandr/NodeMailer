var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('form');
});

router.post('/send', function(req, res, next) {
  var transporter=nodemailer.createTransport({
  	service:'Gmail',
  	auth: {
  		user:'',
  		pass: 
  	}
  });
  var mailOptions={
  	from:'',
  	to: '',
  	subject:'My first mail at NodeMailer',
  	text:'form submission with details....Name:'+req.body.name+'Email'+req.body.email,
  	html:'<p>You got a mail from NodeMailer...</p> <ul><li>Name:'+req.body.name+'</li><li>Email:'+req.body.email+'</li></ul>'
  }
  transporter.sendMail(mailOptions,function(error,info){
  	if(error){
  		console.log("Sorry there was a error!");
  		console.log(error);
  		res.redirect('/');
  	}else{
  		console.log('Message Sent:'+info.response);
  		res.redirect('/');
  	}
  });
});

module.exports = router;
