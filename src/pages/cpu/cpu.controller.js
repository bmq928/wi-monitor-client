import { ComponentSchema } from '../../libs'
import template from './cpu.template.html'

const name = 'cpu'

// controller.$inject = ['cpuMonitor', 'utils']
controller.$inject = ['events', 'cpu']
function controller(events, cpu) {
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
    cpu
      .cpuInfo(self.idAgent)
      .then(data => {
        self.data = data
      })
      .catch(err => {
        console.error('err from cpu')
        console.error(err)
      })
  }
}

export default new ComponentSchema(name, template, controller)
