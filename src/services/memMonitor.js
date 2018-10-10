import { ServiceSchema } from '../libs'

const name = 'memMonitor'

service.$inject = ['constant', '$http', 'utils']
function service(constant, $http, utils) {
    const wi_monitor_backend = constant.WI_MOINTOR_BACKEND

    const getAll = () => new Promise((resolve, reject) => {

        const url = wi_monitor_backend + '/monitor-memory/all'

        $http({ url, method: 'GET' })
            .then(val => resolve(utils.groupByServer(val.data)))
            .catch(e => reject(e))
            
    })


    const getMinMax = () => new Promise((resolve, reject) => {
        const url = wi_monitor_backend + '/monitor-memory/min-max-used'

        $http({ url, method: 'GET' })
            // .then(({ data: { min, max } }) => resolve({
            //     min: groupByServer(min),
            //     max: groupByServer(max)
            // }))
            .then(({data}) => resolve(data))
            .catch(e => reject(e))
    })

    return {
        getAll,
        getMinMax
    }
}

export default new ServiceSchema(name, service)