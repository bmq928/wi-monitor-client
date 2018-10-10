import { ComponentSchema } from '../../libs'
import template from './sidebar.template.html'

const name = 'sidebar'


function controller() {
    const self = this

    self.$onChanges = function({curView}) {
        self.curView = curView.currentValue
    }
}

export default new ComponentSchema(name, template, controller, {
    handleViewClick: '<',
    curView: '<'
})