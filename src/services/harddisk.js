import { ServiceSchema } from '../libs'

const name = 'harddisk'

service.$inject = ['utils', '$q', 'constant']
function service(utils, $q, constant) {
  const harddiskInfo = idAgent => {
    const path = '/agent/harddisk/info'
    const url = constant.backendUrl + path

    return $q((resolve, reject) => {
      utils
        .fetchPOST(url, {idAgent})
        .then(data => resolve(data))
        .catch(err => reject(err))
    })
  }

  return {
    harddiskInfo
  }
}

export default new ServiceSchema(name, service)
