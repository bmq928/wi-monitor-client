import { Schema } from '../../libs'
import template from './memory.template.html'

const name = 'memory'

function controller() {
    const self = this
}

export default new Schema(name, template, controller)