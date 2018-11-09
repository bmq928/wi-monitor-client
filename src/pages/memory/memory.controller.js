import { ComponentSchema } from '../../libs'
import template from './memory.template.html'

const name = 'memory'

controller.$inject = ['events', 'memory']
function controller(events, memory) {
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
    memory
      .memInfo(self.idAgent)
      .then(data => {
        self.data = data
      })
      .catch(err => {
        console.error('error from memory')
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
