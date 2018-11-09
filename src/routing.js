
function config($stateProvider, $urlRouterProvider) {

    const views = {
        api: 'api',
        memory: 'memory',
        cpu: 'cpu',
        process: 'process',
        login: 'login',
        interface: 'interface',
        harddisk: 'harddisk',
        system: 'system'
    }

    function createUrl(view) {
        return `/${view}`
    }

    function createComponent(view) {
        return `<${view}></${view}>`
    }

    $stateProvider
        .state(views.memory, {
            url: createUrl(views.memory),
            template: createComponent(views.memory)
        })
        .state(views.cpu, {
            url: createUrl(views.cpu),
            template: createComponent(views.cpu)
        })
        .state(views.harddisk, {
            url: createUrl(views.harddisk),
            template: createComponent(views.harddisk)
        })
        .state(views.interface, {
            url: createUrl(views.interface),
            template: createComponent(views.interface)
        })
        .state(views.system, {
            url: createUrl(views.system),
            template: createComponent(views.system)
        })
        .state(views.login, {
            //just a fake url for login
            //because now i use browser hoc
            url: createUrl(views.login),
            template: '<div></div>'
        })
        // .state(views.api, {
        //     url: createUrl(views.api),
        //     template: createComponent(views.api)
        // })
        // .state(views.process, {
        //     url: createUrl(views.process),
        //     template: createComponent(views.process)            
        // })
        
        // .state(login, {
        //     url: createUrl(login),
        //     template: createComponent(login),
        //     controller: function($state) {
        //         if(isLogin()) {
        //             goToDashboard($state)
        //         }
        //     }
        // })

    $urlRouterProvider.otherwise(createUrl(views.interface))



    function goToLogin($state) {
        $state.go(views.login)
    }

    function goToDashboard($state) {
        $state.go(views.cpu)
    }

    function isLogin(){
        const token = localStorage.getItem('jwt-token')

        if(token) return true
        return false
    }
}


export default config