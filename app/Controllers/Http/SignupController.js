// File: app/Controllers/Http/SignupController.js
'use strict'

// const Env = use('Env')
// const smtpUsername = ENV.get('SMTP_USERNAME')
const User = use('App/Models/User')
const Token = use('App/Models/Token')
const Mail = use('Mail')
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
    await Mail.send('emails.verify', { username: user.username, token: token }, (message) => {
      message
        .to(user.email)
        .from('kenny.wouters2@gmail.com')
        .subject('Please confirm your email address')
    })

    return response.created(user)
  }
}

module.exports = SignupController
