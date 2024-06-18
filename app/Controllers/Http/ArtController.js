// File: app/Controllers/Http/ArtController.js
'use strict'

const Art = use('App/Models/Art')

class ArtController {

  // Retrieve all info
  async index({ response }) {
    const arts = await Art.all()
    return response.json(arts)
  }

  // Retrieve info by id
  async show({ params, response }) {
    const art = await Art.find(params.id)
    return response.json(art)
  }

  // Retrieve info by Year
  async showByYear({ params, response }) {
    const arts = await Art.query().where('year', params.year).fetch()
    return response.json(arts)
  }

  async store({ request, response }) {
    const artData = request.only(['name', 'description', 'price'])
    const art = await Art.create(artData)
    return response.created(art)
  }

  async update({ params, request, response }) {
    const art = await Art.find(params.id)
    await art.merge(request.only(['name', 'description', 'price']))
    await art.save()
    return response.json(art)
  }

  async destroy({ params, response }) {
    const art = await Art.find(params.id)
    await art.delete()
    return response.noContent()
  }
}

module.exports = ArtController
