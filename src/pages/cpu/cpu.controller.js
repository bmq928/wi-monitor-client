import { ComponentSchema } from '../../libs'
import template from './cpu.template.html'

const name = 'cpu'

// controller.$inject = ['cpuMonitor', 'utils']
controller.$inject = ['rootData']
function controller(rootData) {
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

    }

    function init() {
        
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