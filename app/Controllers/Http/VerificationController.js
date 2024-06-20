// File: app/Controllers/Http/VerificationController.js
'use strict'

const User = use('App/Models/User')

class VerificationController {
  async verify({ request, response }) {
    const token = request.input('token')

    const user = await User.findBy('verification_token', token)
    if (!user) {
      return response.status(404).send('Invalid verification token')
    }

    user.verification_token = null
    user.is_verified = true
    await user.save()

    return response.send('Email verified successfully')
  }
}

module.exports = VerificationController
