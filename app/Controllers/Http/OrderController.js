'use strict'

const Order = use('App/Models/Order')

class OrderController {

  // Retrieve all info
  async index({ response }) {
    const orders = await Order.query().with('user').fetch()
    return response.json(orders)
  }

  // Retrieve info by account_id
  async showByAccountId({ params, response }) {
    if (!params.account_id) {
      return response.status(400).send({ message: 'Account ID is required' });
    }

    const order = await Order.query()
      .where('user_id', params.account_id) // Use account_id to filter
      .with('accounts') // Correct relationship name based on your Order model
      .fetch(); // Changed from firstOrFail to fetch to get all matching records

    return response.json(order);
  }

  // Retrieve info by Name
  async showByName({ params, response }) {
    const orders = await Order.query()
      .where('recipient_name', params.name)
      .with('user') // Include user information
      .fetch()

    return response.json(orders)
  }
}

module.exports = OrderController
