// File: start/routes.js
'use strict'

const Route = use('Route')

Route.resource('arts', 'ArtController').middleware(['auth'])
Route.resource('categories', 'ArtController')
Route.get('arts/year/:year', 'ArtController.showByYear')
Route.get('/arts/category/:category', 'ArtController.showByCategory')
Route.get('/arts/type/:type', 'ArtController.showByType')
