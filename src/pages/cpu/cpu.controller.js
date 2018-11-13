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

  self.showSummary = function() {
    self.curView = self.listView.summary
  }

  self.showStatic = function() {
    self.curView = self.listView.static
  }

  self.showChart = function() {
    self.curView = self.listView.chart
  }

  self.showCpu = function() {
    self.curView = self.listView.cpu
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
      static: 'static',
      cpu: 'cpu',
      chart: 'chart'
    }
    self.curView = self.listView.summary

    //breadcrumb
    self.breadcrumb = [
      {
        path: self.listView.summary,
        func: self.showSummary
      },
      {
        path: self.listView.static,
        func: self.showStatic
      },
      {
        path: self.listView.cpu,
        func: self.showCpu
      },
      {
        path: self.listView.chart,
        func: self.showChart
      }
    ]
  }

  function init() {
    console.log({ 'self.idAgent': self.idAgent })
    cpu
      .cpuInfo(self.idAgent)
      .then(data => {
        self.data = data
        console.log({ 'self.data': self.data })
      })
      .catch(err => {
        console.error('err from cpu')
        console.error(err)
      })
  }
}

export default new ComponentSchema(name, template, controller)
