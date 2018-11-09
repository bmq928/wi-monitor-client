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
        //if data is an array
        if (data && data.length) {
          self.data = data
            .filter(d => (d.idAgent = self.idAgent)) //filter
            .reduce((acc, cur) => cur) // change array to value
        } else {
            self.data = data
        }

        console.log({ 'cpu.self.data': self.data })
      })
      .catch(err => {
        console.error('err from cpu')
        console.log({ err })
      })
  }
}

export default new ComponentSchema(name, template, controller)
