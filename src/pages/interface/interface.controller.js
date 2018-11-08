import { ComponentSchema } from '../../libs'
import template from './interface.template.html'

const name = 'interface'

// controller.$inject = ['memMonitor', 'utils']
function controller() {
    const self = this

    self.$onInit = function () {
        preProcess()
        init()
    }

    self.chooseView = function(view) {
        self.curView = view
    }

    function preProcess() {
        // self.curView = 'all'

        // //data
        // self.allServer = []
        // self.minMemServer = [] //min interface in each server at specific time
        // self.maxMemServer = [] //max interface in each server at specific time
        // self.currentMemInfo = [] //the latest interface in each server at specific time
    }

    function init() {
        
    }
}

export default new ComponentSchema(name, template, controller)