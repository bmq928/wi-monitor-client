import { ComponentSchema } from '../../libs'
import template from './interface.template.html'

const name = 'interface'

controller.$inject = ['events', 'interfaces']
function controller(events, interfaces) {
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
    interfaces.interfaceInfo(self.idAgent).then(data => {
        self.data = data
    })
    .catch(err => {
        console.error('err from interfaces')
        console.error(err)
    })
  }
}

export default new ComponentSchema(name, template, controller)
