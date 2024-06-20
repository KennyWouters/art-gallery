// File: app/Middleware/Admin.js
'use strict'

class Admin {
  async handle({ request, response, auth, session }, next) {
    const isLoggedIn = await auth.check();

    if (!isLoggedIn || !auth.user.isAdmin) {
      await session.commit();
      return response.route('login');
    }

    await next();
  }
}

module.exports = Admin
