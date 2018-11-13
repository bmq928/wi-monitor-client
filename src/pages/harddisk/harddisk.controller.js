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

  self.showSummary = function() {
    self.curView = self.listView.summary
  }

  self.showBlock = function () {
    self.curView = self.listView.block
  }

  self.showFs = function() {
    self.curView = self.listView.fs
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
      block: 'block',
      fs: 'fs'
    }
    self.curView = self.listView.summary

    //breadcrumb
    self.breadcrumb = [
      {
        path: self.listView.summary,
        func: self.showSummary
      },
      {
        path: self.listView.block,
        func: self.showBlock
      },
      {
        path: self.listView.fs,
        func : self.showFs
      }
    ]
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
