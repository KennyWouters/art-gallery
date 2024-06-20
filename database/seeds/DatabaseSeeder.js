// File: database/seeds/DatabaseSeeder.js
'use strict'

/*
|--------------------------------------------------------------------------
| DatabaseSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const UserSeeder = require('./UserSeeder')

class DatabaseSeeder {
  async run () {
    // Run the UserSeeder
    await UserSeeder.run()
  }
}

module.exports = DatabaseSeeder
