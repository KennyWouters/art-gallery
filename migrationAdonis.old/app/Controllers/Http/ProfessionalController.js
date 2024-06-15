// File: app/Controllers/Http/ProfessionalController.js
'use strict'

const Professional = use('App/Models/Professional')

class ProfessionalController {
  async index({ response }) {
    const professionals = await Professional.all()
    return response.json(professionals)
  }

  async show({ params, response }) {
    const professional = await Professional.find(params.id)
    return response.json(professional)
  }

  async store({ request, response }) {
    const professionalData = request.only(['name', 'specialty', 'experience'])
    const professional = await Professional.create(professionalData)
    return response.created(professional)
  }

  async update({ params, request, response }) {
    const professional = await Professional.find(params.id)
    await professional.merge(request.only(['name', 'specialty', 'experience']))
    await professional.save()
    return response.json(professional)
  }

  async destroy({ params, response }) {
    const professional = await Professional.find(params.id)
    await professional.delete()
    return response.noContent()
  }
}

module.exports = ProfessionalController
