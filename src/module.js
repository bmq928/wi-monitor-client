import angular from 'angular'

import routing from './routing'
import services from './services'
import components from './components'
import pages from './pages'

const moduleName = 'wi-monitor'
const dependencies = ['ui.router']
const renderComponent = '<app></app>'
const app = angular.module(moduleName, dependencies)

//config
//routing
app.config(routing)

// assign all services
services.forEach(s => {
    app.service(s.name, s.service)
})

// assing all components
components.forEach(c => {
    app.component(c.name, c.options)
})

// assgin all pages
pages.forEach(p => {
    app.component(p.name, p.options)
})

// what to render
export default renderComponent