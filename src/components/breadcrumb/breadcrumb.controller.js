import { ComponentSchema } from '../../libs'
import template from './breadcrumb.template.html'

import './breadcrumb.style.scss'

const name = 'breadcrumb'

function controller() {
    const self = this

    self.capitalize = function(str) {
        return str.replace(/\b\w/g, l => l.toUpperCase())
    }
}

export default new ComponentSchema(name, template, controller,{
    pathAndFunc: '<'
})