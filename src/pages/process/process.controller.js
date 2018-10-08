import { Schema } from '../../libs'
import template from './process.template.html'

const name = 'process'

function controller() {
    const self = this
}

export default new Schema(name, template, controller)