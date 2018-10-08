import '@uirouter/angularjs'

//import app
import app from './app'


render(app, document.getElementById('root-app'))

function render (component, element) {
    element.innerHTML = component
}