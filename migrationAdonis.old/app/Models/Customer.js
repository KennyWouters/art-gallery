// File: app/Models/Customer.js
'use strict'

const Model = use('Model')

class Customer extends Model {
  static get table() {
    return 'customer_info'
  }
}

module.exports = Customer
