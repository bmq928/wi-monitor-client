import { ComponentSchema } from '../../libs'
import template from './harddisk.template.html'

const name = 'harddisk'

controller.$inject = ['events', 'harddisk']
function controller(events, harddisk) {
  const self = this

  self.$onInit = function() {
    preProcess()
    init()

    events.onChangeAgent(id => {
      self.idAgent = id
      init()
    })
  }

  self.chooseView = function(view) {
    self.curView = view
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
    harddisk
      .harddiskInfo(self.idAgent)
      .then(data => {
        self.data = data
      })
      .catch(err => {
        console.error('err from harrdisk')
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
