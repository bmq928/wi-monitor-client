import { ComponentSchema } from '../../libs'
import template from './breadcrumb.template.html'

import './breadcrumb.style.scss'

const name = 'breadcrumb'

controller.$inject = ['utils']
function controller(utils) {
    const self = this

    self.capitalize = function(str) {
        return utils.capitalize(str)
    }
}

export default new ComponentSchema(name, template, controller,{
    pathAndFunc: '<'
})