import { ComponentSchema } from '../../libs'
import template from './navbar.template.html'

const name = 'navbar'

controller.$inject = ['utils']
function controller(utils) {
    const self = this

    self.$onChanges = function({curView}) {
        self.curView = curView.currentValue
    }

    self.getView = function() {
        return utils.capitalize(self.curView)
    }
}

export default new ComponentSchema(name, template, controller, {
    curView: '<'
})