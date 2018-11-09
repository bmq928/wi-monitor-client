import { ServiceSchema } from '../libs'

const name = 'cpu'

service.$inject = ['utils', '$q', 'constant']
function service(utils, $q, constant) {
  const cpuInfo = id => {
    const path = '/agent/list'
    const url = constant.backendUrl + path

    return $q((resolve, reject) => {
      utils
        .fetchPOST(url, {})
        .then(data => resolve(data))
        .catch(err => reject(err))
    })
  }

  return {
    cpuInfo
  }
}

export default new ServiceSchema(name, service)
