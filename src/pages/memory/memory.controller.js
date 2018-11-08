import { ComponentSchema } from '../../libs'
import template from './memory.template.html'

const name = 'memory'

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
        self.curView = 'all'

        
    }

    function init() {
        
    }

    // function findCurrentMemInfo() {
    //     return self.allServer.map(({serverName, fields}) => {
    //         if(fields)
    //     })
    // }
}

export default new ComponentSchema(name, template, controller)