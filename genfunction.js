const nodemailer = require('nodemailer');

const FCM = require('fcm-push');

const serverKey = 'AAAAizgpiFw:APA91bHERatDh8Tm9WnoMvlxTofz0YXzWRCSOEG8nETyYt2sMeq1mrtQF6nzW3_lf1cMvyYqwj_nLEpxe_2Co7VVWNRPQN8K5iBz_D-F6TUM3rPOgV287xrB10xfrUx2PRTLtL1B2xdE'; //Dummy Server key
const fcm = new FCM(serverKey);

module.exports = {

  /**
   * This function is used to send mail
   */  
  SendMail:(mailbody, mailsubject, mailto)=> {
    const mail = 'test@mgmail.com'; 
    const pass = 'test';
    const transporter = nodemailer.createTransport(`smtps://${mail}:${pass}@smtp.gmail.com`);
    const mailoptions = {
      from: 'test@mgmail.com',
      to: mailto,
      subject: mailsubject,
      html: mailbody,
    };
    transporter.sendMail(mailoptions, (error) => {
       console.log('Response-------------->');
      if (error) {
         console.log(error);
      }

    });
  },

   /**
   * This function is used to send push notification
   */ 
  pushNotification: (fcmId, title, msg) => {
  
    const message = {
      to: fcmId,
     
      notification: {
        title,
        body: msg,
      },
    };

    //callback style
    fcm.send(message, function(err, response) {
      if (err) {
        console.log('Something has gone wrong!');
      } else {
        console.log('Successfully sent with response: ', response);
      }
    });

  },
};
