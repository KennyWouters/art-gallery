// File: app/Models/Art.js
'use strict'

const Model = use('Model')

class Art extends Model {
  static get table() {
    return 'artwork'
  }

  static get primaryKey() {
    return 'Art_id'
  }
}

module.exports = Art
