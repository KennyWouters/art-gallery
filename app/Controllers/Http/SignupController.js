// File: app/Controllers/Http/SignupController.js
'use strict'

const User = use('App/Models/User')
const Mail = use('Mail')
const crypto = require('crypto')

class SignupController {
  async create({ request, response }) {
    const userData = request.only(['username', 'email', 'password'])

    // Generate a verification token
    const token = crypto.randomBytes(20).toString('hex')

    // Add the verification token to the user data
    userData.verification_token = token

    const user = await User.create(userData)

    // Send a verification email
    await Mail.send('emails.verify',  {token: token, username: user.username}, (message) => {
      message
        .to(user.email)
        .from('<from-email>')
        .subject('Please confirm your email address')
    })
    return response.created(user)
  }
}

module.exports = SignupController
