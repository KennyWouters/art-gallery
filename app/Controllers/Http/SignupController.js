// File: app/Controllers/Http/SignupController.js
'use strict'

const User = use('App/Models/User')
const Token = use('App/Models/Token')
const nodemailer = require('nodemailer')
const crypto = require('crypto')

class SignupController {
  async create({ request, response }) {
    const userData = request.only(['username', 'email', 'password'])

    // Generate a verification token
    const token = crypto.randomBytes(20).toString('hex')

    const user = await User.create(userData)

    // Create a new token associated with the user
    await Token.create({
      user_id: user.id,
      token: token,
      type: 'email_verification'
    })

    // Send a verification email
    let transporter = nodemailer.createTransport({
      host: 'smtp-relay.gmail.com', // replace with your SMTP host
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'kenny.wouters2@gmail.com', // replace with your SMTP username
        pass: ''  // replace with your SMTP password
      }
    });

    let mailOptions = {
      from: '"Sender Name" <sender@example.com>', // sender address
      to: user.email, // list of receivers
      subject: 'Please confirm your email address', // Subject line
      text: 'Please confirm your email address', // plain text body
      html: `<b>Please confirm your email address by clicking on the following link: <a href="http://13.48.10.251//verify?token=${token}">Verify Email Address</a></b>` // html body
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

    return response.created(user)
  }
}

module.exports = SignupController
