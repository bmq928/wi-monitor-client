import { ServiceSchema } from '../libs'

const name = 'memory'

service.$inject = ['utils', '$q', 'constant']
function service(utils, $q, constant) {
  const memInfo = idAgent => {
    const path = '/agent/memory/info'
    const url = constant.backendUrl + path

    return $q((resolve, reject) => {
      utils
        .fetchPOST(url, {idAgent})
        .then(data => resolve(data))
        .catch(err => reject(err))
    })
  }

  return {
    memInfo
  }
}

export default new ServiceSchema(name, service)
