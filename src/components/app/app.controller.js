import { ComponentSchema } from '../../libs'
import template from './app.template.html'

const name = 'app'

function controller() {
    const self = this

    self.$onInit = function() {
        preProcess()
    }

    self.changeView = function(view) {
        self.curView = view
    }

    function preProcess() {
        self.curView = 'api'
    }
}

export default new ComponentSchema(name, template, controller)