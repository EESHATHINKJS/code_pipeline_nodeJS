"use strict";
const nodemailer = require("nodemailer");

module.exports.sendEmail = async(recipientEmail) =>{

    let transporter = nodemailer.createTransport({
        host: "smtp-relay.sendinblue.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: 'eesha@thinkjs.co', // generated ethereal user
          pass: "EXq9A8SMjFnaz7gR", // generated ethereal password
        },
      });


      var message = {
        from: "LoveYou.com👥 <eesha@thinkjs.co>",
        to: recipientEmail,
        subject: "Purposal Email",
        text: "Dear User, This is testing email from MD Eesha..Ignore it",
        html: "<p><h1>Hello, Dear \n I Love You..❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️ from ........</h1></p>"
      };

      transporter.sendMail(message, function(err, data) {
        if (err) {
          console.log("Error " + err);
        } else {
          console.log("Email sent successfully");
        }
      });
    
}