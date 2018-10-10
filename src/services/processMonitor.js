import { ServiceSchema } from '../libs'

const name = 'processMonitor'

service.$inject = ['constant', '$http', 'utils']
function service(constant, $http, utils) {
    const wi_monitor_backend = constant.WI_MOINTOR_BACKEND

    const getAll = () => new Promise((resolve, reject) => {

        const url = wi_monitor_backend + '/monitor-process/all'

        $http({ url, method: 'GET' })
            .then(val => resolve(utils.groupByServer(val.data)))
            .catch(e => reject(e))

    })


    const getCountMinMax = () => new Promise((resolve, reject) => {
        const url = wi_monitor_backend + '/monitor-process/count/min-max'

        $http({ url, method: 'GET' })
            // .then(({ data: { min, max } }) => resolve({
            //     min: groupByServer(min),
            //     max: groupByServer(max)
            // }))
            .then(({ data }) => resolve(data))
            .catch(e => reject(e))
    })

    const getCpuMinMax = () => new Promise((resolve, reject) => {
        const url = wi_monitor_backend + '/monitor-process/cpu/min-max'

        $http({ url, method: 'GET' })
            // .then(({ data: { min, max } }) => resolve({
            //     min: groupByServer(min),
            //     max: groupByServer(max)
            // }))
            .then(({ data }) => resolve(data))
            .catch(e => reject(e))
    })

    return {
        getAll,
        getCountMinMax,
        getCpuMinMax
    }
}

export default new ServiceSchema(name, service)