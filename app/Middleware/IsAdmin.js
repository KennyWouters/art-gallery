// File: app/Middleware/IsAdmin.js
'use strict'

class IsAdmin {
  async handle({ request, response, auth }, next) {
    const user = await auth.getUser();

    if (!user.isAdmin) {
      return response.redirect('login');
    }

    await next();
  }
}

module.exports = IsAdmin
