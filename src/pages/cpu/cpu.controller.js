import { Schema } from '../../libs'
import template from './cpu.template.html'

const name = 'cpu'

function controller() {
    const self = this
}

export default new Schema(name, template, controller)