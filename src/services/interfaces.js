import { ServiceSchema } from '../libs'

const name = 'interfaces'

service.$inject = ['utils', '$q', 'constant']
function service(utils, $q, constant) {
  const interfaceInfo = idAgent => {
    const path = '/agent/interface/info'
    const url = constant.backendUrl + path

    return $q((resolve, reject) => {
      utils
        .fetchPOST(url, {idAgent})
        .then(data => resolve(data))
        .catch(err => reject(err))
    })
  }

  return {
    interfaceInfo
  }
}

export default new ServiceSchema(name, service)
