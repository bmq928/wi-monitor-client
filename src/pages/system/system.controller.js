import { ComponentSchema } from '../../libs'
import template from './system.template.html'

const name = 'system'

controller.$inject = ['events', 'agent']
function controller(events, agent) {
  const self = this

  self.$onInit = function() {
    preProcess()
    init()

    events.onChangeAgent(id => {
      self.idAgent = id
      init()
    })
  }

  function preProcess() {
    //agent
    self.idAgent = -1
    events.getAgent(id => {
      self.idAgent = id
    })

    //data
    self.data = {}
  }

  function init() {
    agent
      .agentInfo(self.idAgent)
      .then(data => self.data = data)
      .catch(err => {
        console.error('error from system')
        console.error(err)
      })
  }

  // function findCurrentMemInfo() {
  //     return self.allServer.map(({serverName, fields}) => {
  //         if(fields)
  //     })
  // }
}

export default new ComponentSchema(name, template, controller)
