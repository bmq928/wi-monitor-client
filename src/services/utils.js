import { ServiceSchema } from '../libs'

const name = 'utils'

service.$inject = ['$http', '$q']
function service($http, $q) {
  const capitalize = str => {
    if (str) return str.replace(/\b\w/g, l => l.toUpperCase())

    return ''
  }

  function fetchPOST(url, data) {
    // const token = 'f82e62d7c3ea69cc12b5cdb8d621dab6';
    // const token = localStorage.getItem('jwt-token')

    return $q((resolve, reject) => {
      return $http({
        url,
        // headers: { 'Authorization': 'Bearer ' + token },
        method: 'POST',
        data: Object.assign({}, data)
      })
        .then(({ data }) => {
          if (data.code === 200) {
            resolve(data.content)
          } else {
            reject(data.content)
          }
        })
        .catch(err => reject(err))
    })
  }

  // fetchPOST('http://monitor.api.i2g.cloud/agent/new').catch(err => console.log(err))

  return {
    capitalize,
    fetchPOST
  }
}

export default new ServiceSchema(name, service)
