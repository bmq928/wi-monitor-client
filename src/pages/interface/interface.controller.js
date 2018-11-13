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

  self.showChart = function() {
    self.curView = self.listView.chart
  }

  function preProcess() {
    //agent
    self.idAgent = -1
    events.getAgent(id => {
      self.idAgent = id
    })

    //data
    self.data = {}

    //breadcrumb
    self.breadcrumb = [
      {
        path: 'summary',
        func: self.showSummary
      },
      {
        path: 'connections',
        func: self.showConnections
      },
      {
        path: 'chart',
        func: self.showChart
      }
    ]

    //current view
    self.listView = {
      summary: 'summary',
      connections: 'connections',
      chart: 'chart'
    }
    self.curView = self.listView.summary
  }

  function init() {
    interfaces
      .interfaceInfo(self.idAgent)
      .then(data => {
        self.data = data
        console.log({ 'self.data': self.data })
      })
      .catch(err => {
        console.error('err from interfaces')
        console.error(err)
      })
  }
}

export default new ComponentSchema(name, template, controller)
