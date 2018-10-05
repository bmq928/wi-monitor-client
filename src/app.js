import angular from 'angular'

import components from './components'
import { assignAllComponent } from './utils'

const moduleName = 'wi-monitor'
const dependencies = []
const renderComponent = '<app></app>'
const app = angular.module(moduleName, dependencies)

assignAllComponent(components, app)


// what to render
export default renderComponent