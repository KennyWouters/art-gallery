// File: database/seeds/UserSeeder.js
'use strict'

const User = use('App/Models/User')
const Hash = use('Hash')

class UserSeeder {
  async run () {
    const admin1 = new User()
    admin1.username = 'Ken'
    admin1.email = 'K@gml.com'
    admin1.password = await Hash.make('mdppdm123321')
    console.log(`Hashed password for admin1: ${admin1.password}`)
    admin1.isAdmin = true
    await admin1.save()

    const admin2 = new User()
    admin2.username = 'Nat'
    admin2.email = 'N@gml.com'
    admin2.password = await Hash.make('mdppdm123321')
    console.log(`Hashed password for admin2: ${admin2.password}`)
    admin2.isAdmin = true
    await admin2.save()
  }
}

module.exports = UserSeeder
