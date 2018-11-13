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

  self.showSummary = function() {
    self.curView = self.listView.summary
  }

  self.showConnections = function() {
    self.curView = self.listView.connections
  }

  function preProcess() {
    //agent
    self.idAgent = -1
    events.getAgent(id => {
      self.idAgent = id
    })

    //data
    self.data = {}

    //current view
    self.listView = {
      summary: 'summary',
      connections: 'connections'
    }
    self.curView = self.listView.summary

    //breadcrumb
    self.breadcrumb = [
      {
        path: self.listView.summary,
        func: self.showSummary
      },
      {
        path: self.listView.connections,
        func: self.showConnections
      }
    ]

    
  }

  function init() {
    interfaces
      .interfaceInfo(self.idAgent)
      .then(data => {
        self.data = data
      })
      .catch(err => {
        console.error('err from interfaces')
        console.error(err)
      })
  }
}

export default new ComponentSchema(name, template, controller)
