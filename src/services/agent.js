import { ServiceSchema } from '../libs'

const name = 'agent'

service.$inject = ['utils', 'constant', '$q']
function service(utils, constant, $q) {
  const allAgents = () => {
    const path = '/agent/list'
    const url = constant.backendUrl + path

    return $q((resolve, reject) => {
      utils
        .fetchPOST(url, {})
        .then(data => resolve(data))
        .catch(err => reject(err))
    })
  }

  const newAgent = data => {
    const path = '/agent/list'
    const url = constant.backendUrl + path

    return $q((resolve, reject) => {
      utils
        .fetchPOST(url, data)
        .then(data => resolve(data))
        .catch(err => reject(err))
    })
  }

  const agentInfo = idAgent => {
    const path = '/agent/info'
    const url = constant.backendUrl + path

    return $q((resolve, reject) => {
      utils
        .fetchPOST(url, {idAgent})
        .then(data => resolve(data))
        .catch(err => reject(err))
    })
  }

  return {
    allAgents,
    newAgent,
    agentInfo
  }
}

export default new ServiceSchema(name, service)
