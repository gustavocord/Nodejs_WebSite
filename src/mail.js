console.log("nodeMailerSample()");
    var nodemailer = require('nodemailer');

    console.log("Creating transport...");
    var transporter = nodemailer.createTransport({
      service: 'gmail', //al usar un servicio bien conocido, no es necesario proveer un nombre de servidor.
      auth: {
        user: 'my.account.goes.here@gmail.com',
        pass: 'strongpassword'
      },
      proxy: 'http://proxy-chain.intel.com:911'
    });

    var mailOptions = {
      from: 'mimail@gmail.com',
      to: 'targetaccount1@othercompany.com,targetaccount2@onemorecompany.com',
      subject: 'Sending Email using Node.js',
      text: 'That was easy!'
    };

    console.log("sending email", mailOptions);
    transporter.sendMail(mailOptions, function (error, info) {
      console.log("senMail returned!");
      if (error) {
        console.log("ERROR!!!!!!", error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

    console.log("End of Script");
