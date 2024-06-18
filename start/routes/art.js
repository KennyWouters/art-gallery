// File: start/routes.js
'use strict'

const Route = use('Route')

Route.resource('arts', 'ArtController')
Route.get('arts/year/:year', 'ArtController.showByYear')
Route.get('/arts/category/:category', 'ArtController.showByCategory')
