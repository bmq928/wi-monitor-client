import { ComponentSchema } from '../../libs'
import template from './process.template.html'

const name = 'process'

controller.$inject = ['processMonitor']
function controller(processMonitor) {
    const self = this

    self.$onInit = function() {
        preProcess()
        init()
    }

    self.chooseServer = function(server) {
        self.curServer = server
    }

    self.round = function(num) {
        return parseFloat(num).toFixed(2)
    }
    
    function preProcess() {
        // self.curView = 'all'

        //data
        self.allServer = []
        self.curServer = {}
        // self.minCpuServer = [] //min cpu in each server at specific time
        // self.maxCpuServer = []  //min cpu in each server at specific time
        //self.currentProcessInfo = [] //the latest process in each server at specific time
        // self.currentMinMaxCpusInfo = []

        //breadcrumb
        // self.breadcrumb = [
        //     { path: 'all', func: () => self.chooseView('all') },
        //     { path: 'min', func: () => self.chooseView('min') },
        //     { path: 'max', func: () => self.chooseView('max') }
        // ]
    }

    function init() {
        processMonitor
            .getAll()
            .then(val => self.allServer = val)  
            .then(() => console.log({
                'all-server': self.allServer,
                'currentProcessInfo': self.currentProcessInfo
            }))


        // processMonitor
        //     .getCountMinMax()
        //     .then(val => console.log({
        //         'countMinMax': val
        //     }))

        // processMonitor
        //     .getCpuMinMax()
        //     .then(val => console.log({
        //         cpuMinMax: val
        //     }))
    }
}

export default new ComponentSchema(name, template, controller)