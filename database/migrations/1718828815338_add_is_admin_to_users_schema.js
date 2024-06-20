'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddIsAdminToUsersSchema extends Schema {
  up () {
    this.table('users', (table) => {
      // alter table
      table.boolean('isAdmin').defaultTo(false)
    })
  }

  down () {
    this.table('users', (table) => {
      // reverse alternations
      table.dropColumn('isAdmin')
    })
  }
}

module.exports = AddIsAdminToUsersSchema
