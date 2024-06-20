// File: app/Controllers/Http/AuthController.js
'use strict'

class AuthController {
  async login({ request, auth, response, session, view }) {
    const { email, password } = request.all();

    try {
      await auth.attempt(email, password);
      const successMessage = 'Login successful!';
      session.flash({ successMessage });
      return view.render('home', { successMessage });
    } catch (error) {
      const errorMessage = 'Invalid credentials. Please try again.';
      session.flash({ errorMessage });
      return view.render('login', { errorMessage });
    }
  }

  async logout({ auth, response }) {
    await auth.logout();
    return response.redirect('/');
  }

  async showLoginForm({ view }) {
    return view.render('login');
  }
}

module.exports = AuthController
