import { Schema } from '../../libs'
import template from './template.html'

const name = 'app'


function controller() {
    const self = this
}

export default new Schema(name, template, controller)