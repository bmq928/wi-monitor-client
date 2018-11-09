import { ComponentSchema } from '../../libs'
import template from './tabs.template.html'

import './tabs.style.scss'

const name = 'tabs'

controller.$inject = ['utils']
function controller(utils) {
  const self = this

  self.$onChanges = function({ listAgent }) {
    
    if (listAgent) self.listAgent = listAgent.currentValue
    console.log({'tabs.listAgents':self.listAgent})
  }

  self.capitalize = function(str) {
    return utils.capitalize(str)
  }
}

export default new ComponentSchema(name, template, controller, {
  listAgent: '<',
  agentOnClick: '<'
})
