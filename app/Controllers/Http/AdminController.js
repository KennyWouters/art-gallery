// File: app/Controllers/Http/AdminController.js
'use strict'

class AdminController {
  async showDashboard({ auth, response, view }) {
    const user = await auth.getUser();

    if (!user.isAdmin) {
      return response.send('You do not have the rights to open the dashboard.');
    }

    // Your dashboard logic here
    return view.render('admin.dashboard');
  }
}

module.exports = AdminController
