import { ComponentSchema } from '../../libs'
import template from './cpu.template.html'

const name = 'cpu'

controller.$inject = ['cpuMonitor', 'utils']
function controller(cpuMonitor, utils) {
    const self = this

    self.$onInit = function () {
        preProcess()
        init()
    }

    // self.currentCpusInfo = function () {

    //     return self.allServer.map(({ serverName, fields }) => {
    //         const nearestVal = fields.length ? fields[fields.length - 1] : null
    //         return {
    //             serverName,
    //             ...nearestVal
    //         }
    //     })

    // }

    self.chooseView = function (view) {
        self.curView = view
    }

    function preProcess() {

        self.curView = 'all'

        //data
        self.allServer = []
        self.minCpuServer = [] //min cpu in each server at specific time
        self.maxCpuServer = []  //min cpu in each server at specific time
        self.currentCpusInfo = [] //the latest cpu in each server at specific time
        // self.currentMinMaxCpusInfo = []

        //breadcrumb
        self.breadcrumb = [
            { path: 'all', func: () => self.chooseView('all') },
            { path: 'min', func: () => self.chooseView('min') },
            { path: 'max', func: () => self.chooseView('max') }
        ]
    }

    function init() {
        cpuMonitor
            .getAll()
            .then(val => self.allServer = val)
            .then(() => self.currentCpusInfo = utils.findCurrentInfo(self.allServer))
            // .then(() => console.log({'self.currentCpusInfo': self.currentCpusInfo}))



        cpuMonitor
            .getMinMax()
            .then(val => {
                self.minCpuServer = val.min
                self.maxCpuServer = val.max
            })
            // .then(() => console.log(self.minCpuServer))
    }

    // function findCurrentCpusInfo() {
    //     return self.allServer.map(({ serverName, fields }) => {

    //         if (!fields.length) return null

    //         const latestVal = fields[fields.length - 1]

    //         return {
    //             serverName,
    //             ...latestVal
    //         }
    //     })
    // }

    // function findCurrentMinMaxCpusInfo() {
    //     const { min, max } = self.minMaxCpuServer
    //     const results = []

    //     for (const mi in min) {
    //         const correspondingMax = max.filter(ma => ma.serverName === mi.serverName)[0]
    //         results.push({
    //             serverName: mi.serverName,

    //         })
    //     }
    //     return results
    // }
}

export default new ComponentSchema(name, template, controller)