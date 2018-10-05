import 'bootstrap/dist/css/bootstrap.min.css'

import 'jquery'
import 'popper.js'
import 'bootstrap/dist/js/bootstrap.min.js'

import app from './app'


render(app, document.getElementById('root-app'))

function render (component, element) {
    element.innerHTML = component
}