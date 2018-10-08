import { ComponentSchema } from '../../libs'
import template from './sidebar.template.html'

const name = 'sidebar'


function controller() {
    const self = this
}

export default new ComponentSchema(name, template, controller)