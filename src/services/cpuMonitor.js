import { ServiceSchema } from '../libs'
import { groupByServer } from '../utils'

const name = 'cpuMonitor'

service.$inject = ['constant', '$http']
function service(constant, $http) {
    const wi_monitor_backend = constant.WI_MOINTOR_BACKEND

    const getAll = () => new Promise((resolve, reject) => {

        const url = wi_monitor_backend + '/monitor-cpu/all'

        $http({ url, method: 'GET' })
            .then(val => resolve(groupByServer(val.data)))
            .catch(e => reject(e))

    })


    const getMinMax = () => new Promise((resolve, reject) => {
        const url = wi_monitor_backend + '/monitor-cpu/min-max'

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