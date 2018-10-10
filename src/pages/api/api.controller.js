import { ComponentSchema } from '../../libs'
import template from './api.template.html'
// import './api.style.scss'

const name = 'api'

controller.$inject = ['apiMonitor']
function controller(apiMonitor) {
    const self = this

    self.$onInit = function () {
        preProcess()
        init()
    }

    self.chooseView = function (view) {
        self.curView = view
    }

    function preProcess() {

        self.curView = 'all'

        //data
        self.listRequest = []
        self.meanRequest = []

        //breadcrumb
        self.breadcrumb = [
            {path: 'all', func: () => self.chooseView('all')},
            {path: 'mean', func: () => self.chooseView('mean')}
        ]
    }

    function init() {
        apiMonitor
            .getAll()
            .then(val => self.listRequest = val)
            // .then(() => console.log(self.listRequest))

        apiMonitor
            .getMean()
            .then(val => self.meanRequest = val)
            // .then(() => console.log(self.meanRequest))
    }
}

export default new ComponentSchema(name, template, controller)