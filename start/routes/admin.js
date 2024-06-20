'use strict'

const Route = use('Route')

// File: start/routes.js
Route.get('/admin/dashboard', 'AdminController.showDashboard').middleware(['auth', 'admin']);
