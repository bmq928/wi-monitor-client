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

  self.showSummary = function () {
    self.curView = self.listView.summary
  }

  self.showMemory = function () {
    self.curView = self.listView.memories
  }

  // self.showStatic = function() {
  //   self.curView = self.listView.static
  // }

  self.showChart = function () {
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

    //current view
    self.listView = {
      summary: 'summary',
      memories: 'memories',
      // static: 'static',
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
        path: self.listView.memories,
        func: self.showMemory
      },
      // {
      //   path: self.listView.static,
      //   func: self.showStatic
      // },
      {
        path: self.listView.chart,
        func: self.showStatic
      }
    ]
  }

  function init() {
    memory
      .memInfo(self.idAgent)
      .then(data => {
        self.data = data
        console.log({'self.data': self.data})
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
