// File: app/Controllers/Http/PageController.js
'use strict'

class PageController {
  showSignup({ view }) {
    return view.render('signup')
  }
}



module.exports = PageController
