import { ComponentSchema } from '../../libs'
import template from './tabs.template.html'

import './tabs.style.scss'

const name = 'tabs'

controller.$inject = ['utils']
function controller(utils) {
  const self = this

  self.$onChanges = function({ listAgent, curAgentId }) {
    if (listAgent) self.listAgent = listAgent.currentValue
    if (curAgentId) self.curAgentId = curAgentId.currentValue

    console.log({'self.listAgent': self.listAgent})
  }

  self.modalClose = function() {}
}

export default new ComponentSchema(name, template, controller, {
  listAgent: '<',
  agentOnClick: '<',
  curAgentId: '<'
})
