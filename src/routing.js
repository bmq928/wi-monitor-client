
function config($stateProvider, $urlRouterProvider) {

    const views = {
        api: 'api',
        memory: 'memory',
        cpu: 'cpu',
        process: 'process',
        login: 'login'
    }

    function createUrl(view) {
        return `/${view}`
    }

    function createComponent(view) {
        return `<${view}></${view}>`
    }

    $stateProvider
        .state(views.api, {
            url: createUrl(views.api),
            template: createComponent(views.api)
        })
        .state(views.memory, {
            url: createUrl(views.memory),
            template: createComponent(views.memory)
        })
        .state(views.cpu, {
            url: createUrl(views.cpu),
            template: createComponent(views.cpu)
        })
        .state(views.process, {
            url: createUrl(views.process),
            template: createComponent(views.process)            
        })
        .state(views.login, {
            //just a fake url for login
            //because now i use browser hoc
            url: createUrl(views.login),
            template: '<div></div>'
        })
        // .state(login, {
        //     url: createUrl(login),
        //     template: createComponent(login),
        //     controller: function($state) {
        //         if(isLogin()) {
        //             goToDashboard($state)
        //         }
        //     }
        // })

    $urlRouterProvider.otherwise(createUrl(views.api))



    function goToLogin($state) {
        $state.go(views.login)
    }

    function goToDashboard($state) {
        $state.go(views.api)
    }

    function isLogin(){
        const token = localStorage.getItem('jwt-token')

        if(token) return true
        return false
    }
}


export default config