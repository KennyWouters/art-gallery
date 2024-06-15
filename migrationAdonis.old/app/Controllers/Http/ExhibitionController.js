// File: app/Controllers/Http/ExhibitionController.js
'use strict'

const Exhibition = use('App/Models/Exhibition')

class ExhibitionController {
  async index({ response }) {
    const exhibitions = await Exhibition.all()
    return response.json(exhibitions)
  }

  async show({ params, response }) {
    const exhibition = await Exhibition.find(params.id)
    return response.json(exhibition)
  }

  async store({ request, response }) {
    const exhibitionData = request.only(['title', 'description', 'date'])
    const exhibition = await Exhibition.create(exhibitionData)
    return response.created(exhibition)
  }

  async update({ params, request, response }) {
    const exhibition = await Exhibition.find(params.id)
    await exhibition.merge(request.only(['title', 'description', 'date']))
    await exhibition.save()
    return response.json(exhibition)
  }

  async destroy({ params, response }) {
    const exhibition = await Exhibition.find(params.id)
    await exhibition.delete()
    return response.noContent()
  }
}

module.exports = ExhibitionController
