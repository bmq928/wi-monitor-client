import { Schema } from '../../libs'
import template from './api.template.html'

const name = 'api'

function controller() {
    const self = this
}

export default new Schema(name, template, controller)