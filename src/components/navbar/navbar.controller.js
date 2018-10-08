import { ComponentSchema } from '../../libs'
import template from './navbar.template.html'

const name = 'navbar'

function controller() {
    const self = this
}

export default new ComponentSchema(name, template, controller)