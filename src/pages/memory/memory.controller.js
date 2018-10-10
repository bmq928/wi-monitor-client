import { ComponentSchema } from '../../libs'
import template from './memory.template.html'

const name = 'memory'

controller.$inject = ['memMonitor', 'utils']
function controller(memMonitor, utils) {
    const self = this

    self.$onInit = function () {
        preProcess()
        init()
    }

    self.chooseView = function(view) {
        self.curView = view
    }

    function preProcess() {
        self.curView = 'all'

        //data
        self.allServer = []
        self.minMemServer = [] //min memory in each server at specific time
        self.maxMemServer = [] //max memory in each server at specific time
        self.currentMemInfo = [] //the latest memory in each server at specific time

        //breadcrumb
        self.breadcrumb = [
            { path: 'all', func: () => self.chooseView('all') },
            { path: 'min', func: () => self.chooseView('min') },
            { path: 'max', func: () => self.chooseView('max') }
        ]
    }

    function init() {
        memMonitor
            .getAll()
            .then(val => self.allServer = val)
            .then(() => self.currentMemInfo = utils.findCurrentInfo(self.allServer))
            .then(() => console.log({
                'mem-all': self.allServer,
                'cur': self.currentMemInfo
            }))

        memMonitor
            .getMinMax()
            .then(val => {
                self.minMemServer = val.min
                self.maxMemServer = val.max
            })
            .then(() => console.log({
                minMemServer: self.minMemServer,
                maxMemServer: self.maxMemServer
            }))
    }

    // function findCurrentMemInfo() {
    //     return self.allServer.map(({serverName, fields}) => {
    //         if(fields)
    //     })
    // }
}

export default new ComponentSchema(name, template, controller)