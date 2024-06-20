// File: app/Controllers/Http/AdminUserController.js
'use strict'

const User = use('App/Models/User')

class AdminUserController {
  async index({ view }) {
    const users = await User.all()
    return view.render('admin.users.index', { users: users.toJSON() })
  }

  async create({ view }) {
    return view.render('admin.users.create')
  }

  async store({ request, response, session }) {
    const userData = request.only(['username', 'email', 'password'])
    const user = await User.create(userData)
    session.flash({ successMessage: 'User created successfully' })
    return response.redirect('/admin/users')
  }

  async edit({ params, view }) {
    const user = await User.find(params.id)
    return view.render('admin.users.edit', { user: user.toJSON() })
  }

  async update({ params, request, response, session }) {
    const user = await User.find(params.id)
    const userData = request.only(['username', 'email', 'password'])
    user.merge(userData)
    await user.save()
    session.flash({ successMessage: 'User updated successfully' })
    return response.redirect('/admin/users')
  }

  async destroy({ params, response, session }) {
    const user = await User.find(params.id)
    await user.delete()
    session.flash({ successMessage: 'User deleted successfully' })
    return response.redirect('/admin/users')
  }
}

module.exports = AdminUserController
