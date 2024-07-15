'use strict'

const Model = use('Model')

class Accounts extends Model {
  static get table() {
    return 'accounts'
  }

  static get primaryKey() {
    return 'id'
  }
}

module.exports = Accounts
