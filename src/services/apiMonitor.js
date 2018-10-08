import { ServiceSchema } from '../libs'

const name = 'apiMonitor'

service.$inject = ['constant', '$http']
function service(constant, $http) {
    const wi_monitor_backend = constant.WI_MOINTOR_BACKEND

    const getAll = () => new Promise((resolve, reject) => {

        const url = wi_monitor_backend + '/monitor-api/all'

        $http({ url, method: 'GET' })
            .then(val => resolve(val.data))
            .catch(e => reject(e))
        
    })


    const getMean = () => new Promise((resolve, reject) => {
        const url = wi_monitor_backend + '/monitor-api/mean/all'

        $http({ url, method: 'GET' })
            .then(val => resolve(val.data))
            .catch(e => reject(e))
    })

    return {
        getAll,
        getMean
    }
}

export default new ServiceSchema(name, service)