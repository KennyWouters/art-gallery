// File: app/Controllers/Http/CustomerController.js
'use strict'

const Customer = use('App/Models/Customer')

class CustomerController {
  async index({ response }) {
    const customers = await Customer.all()
    return response.json(customers)
  }

  async show({ params, response }) {
    const customer = await Customer.find(params.id)
    return response.json(customer)
  }

  async store({ request, response }) {
    const customerData = request.only(['First_Name', 'Last_Name', 'customer_email', 'password', 'Phone_Number', 'Address', 'Zip'])
    const customer = await Customer.create(customerData)
    return response.created(customer)
  }

  async update({ params, request, response }) {
    const customer = await Customer.find(params.id)
    await customer.merge(request.only(['First_Name', 'Last_Name', 'customer_email', 'password', 'Phone_Number', 'Address', 'Zip']))
    await customer.save()
    return response.json(customer)
  }

  async destroy({ params, response }) {
    const customer = await Customer.find(params.id)
    await customer.delete()
    return response.noContent()
  }
}

module.exports = CustomerController
