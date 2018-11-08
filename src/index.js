import '@uirouter/angularjs'

//import app
import app from './module'


render(app, document.getElementById('root-app'))

function render (component, element) {
    element.innerHTML = component
}