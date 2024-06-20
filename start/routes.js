// File: start/routes.js
'use strict'

const Route = use('Route')

Route.group(() => {
  require('./routes/art')
  require('./routes/customer')
  require('./routes/exhibition')
  require('./routes/professional')
  require('./routes/user')
  require('./routes/admin')
  Route.post('/signup', 'SignupController.create')
  Route.get('/signup', ({view}) => view.render('signup'))
  Route.get('/', ({view}) => view.render('home'))
  Route.get('users', 'UserController.index').middleware(['auth'])
  Route.post('users/:id', 'UserController.destroy').middleware(['auth'])
  Route.get('login', 'AuthController.showLoginForm').as('login')
  Route.post('login', 'AuthController.login')
  Route.get('/logout', 'AuthController.logout')
  Route.get('/admin', 'AdminController.showDashboard').middleware(['auth'])
  Route.get('/verify', 'VerificationController.verify')
})



Route.group(() => {
  Route.get('/users', 'AdminUserController.index')
  Route.get('/users/create', 'AdminUserController.create')
  Route.post('/users', 'AdminUserController.store')
  Route.get('/users/:id/edit', 'AdminUserController.edit')
  Route.put('/users/:id', 'AdminUserController.update')
  Route.post('/users/:id', 'AdminUserController.destroy')
}).prefix('admin')
