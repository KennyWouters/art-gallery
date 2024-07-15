// File: start/routes.js
'use strict'

const Route = use('Route')

Route.resource('orders', 'OrderController')
Route.get('/orders/name/:name', 'OrderController.showByName')
Route.get('order/accounts/:account_id', 'OrderController.showByAccountId')



