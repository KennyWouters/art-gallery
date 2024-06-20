// File: app/Controllers/Http/AdminController.js
'use strict'

const User = use('App/Models/User')

class AdminController {
  async showDashboard({ auth, response, view }) {
    if (!auth.user) {
      return response.redirect('login');
    }

    const user = await auth.getUser();

    if (!user.isAdmin) {
      return response.send('You do not have the rights to open the dashboard.');
    }

    // Fetch all users
    const users = await User.all()

    // Your dashboard logic here
    return view.render('admin.dashboard', { users: users.toJSON() });
  }
}

module.exports = AdminController
