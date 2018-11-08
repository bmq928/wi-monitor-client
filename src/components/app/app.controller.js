import { ComponentSchema } from '../../libs'
import template from './app.template.html'

const name = 'app'

controller.$inject = ['agent']
function controller(agent) {
  const self = this

  self.$onInit = function() {
    preProcess()
    init()
  }

  self.changeView = function(view) {
    self.curView = view
  }

  self.agentTabOnClick = function(id) {
    
  }

  function preProcess() {
    self.curView = 'interface'

    //agents
    self.agents = []
    self.curAgentId = null
  }

  function init() {

    //get all agent
    agent
      .allAgents()
      .then(data => self.agents = data)
      .then(() => {
        if(self.agents && self.agents.length) {
          self.curAgentId = self.agents[0].idAgent
        }
      })
  }
}

export default new ComponentSchema(name, template, controller)
