'use strict'

const Model = use('Model')

class Order extends Model {
  static get table() {
    return 'printfulorders'
  }

  static get primaryKey() {
    return 'id'
  }

  static get category() {
    return 'recipient_name'
  }

  // Define the relationship with the Accounts model
  accounts() {
    return this.belongsTo('App/Models/Accounts', 'user_id', 'id')
  }
}

module.exports = Order

