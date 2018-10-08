import { Schema } from '../../libs'
import template from './navbar.template.html'

const name = 'navbar'

function controller() {
    const self = this
}

export default new Schema(name, template, controller)