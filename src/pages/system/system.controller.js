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

  self.showSummary = function() {
    self.curView = self.listView.summary
  }

  self.showOs = function() {
    self.curView = self.listView.os
  }

  self.showVersion = function() {
    self.curView = self.listView.version
  }

  self.keys = function(obj) {
    if(!obj) return []

    return Object.keys(obj)
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
      os: 'os',
      version: 'version'
    }
    self.curView = self.listView.summary

    //breadcrumb
    self.breadcrumb = [
      {
        path: self.listView.summary,
        func: self.showSummary
      },
      {
        path: self.listView.os,
        func: self.showOs
      },
      {
        path: self.listView.version,
        func: self.showVersion
      }
    ]
  }

  function init() {
    agent
      .agentInfo(self.idAgent)
      .then(data => {
        self.data = data
        // console.log({ 'self.data': self.data })
      })
      .catch(err => {
        // console.error('error from system')
        // console.error(err)
      })
  }

  // function findCurrentMemInfo() {
  //     return self.allServer.map(({serverName, fields}) => {
  //         if(fields)
  //     })
  // }
}

export default new ComponentSchema(name, template, controller)
