// File: app/Controllers/Http/SignupController.js
'use strict'

const User = use('App/Models/User')

class SignupController {
  async create({ request, response }) {
    const userData = request.only(['username', 'email', 'password'])

    const user = await User.create(userData)

    return response.created(user)
  }
}

module.exports = SignupController
