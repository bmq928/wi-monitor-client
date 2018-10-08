import { Schema } from '../../libs'
import template from './app.template.html'

const name = 'app'

function controller() {
    const self = this
}

export default new Schema(name, template, controller)