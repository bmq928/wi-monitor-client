import { ComponentSchema } from '../../libs'
import template from './app.template.html'

const name = 'app'

controller.$inject = ['agent', 'events']
function controller(agent, events) {
  const self = this

  self.$onInit = function() {
    preProcess()
    init()

    events.onRequestAgent(() => {
      events.sendAgent(self.curAgentId)
    })
  }

  self.changeView = function(view) {
    self.curView = view
  }

  self.agentTabOnClick = function(id) {
    setCurAgentId(id)
  }

  function preProcess() {
    self.curView = 'interface'

    //agents
    self.agents = []
    self.curAgentId = -1
    // setCurAgentId(null)
  }

  function init() {

    //get all agent
    agent
      .allAgents()
      .then(data => self.agents = data)
      .then(() => {
        if(self.agents && self.agents.length) {
          // self.curAgentId = self.agents[0].idAgent
          setCurAgentId(self.agents[0].idAgent)
        }
      })
  }

  function setCurAgentId(id) {
    self.curAgentId = id
    events.changeAgent(id)
  }
}

export default new ComponentSchema(name, template, controller)
