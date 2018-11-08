import { ServiceSchema } from '../libs'

const name = 'utils'

service.$inject = ['$http']
function service($http) {
  const groupByServer = data => {
    const dict = {}

    for (const d of data) {
      const { serverName, ...rest } = d

      if (serverName in dict) dict[serverName].push({ ...rest })
      else dict[serverName] = [{ ...rest }]
    }

    const result = Object.entries(dict).map(([serverName, fields]) => ({
      serverName,
      fields
    }))

    return result
  }

  // transform data
  // data just return latest in a specific server
  const findCurrentInfo = allData => {
    return allData.map(({ serverName, fields }) => {
      if (!fields.length) return null

      // const latestVal = fields[fields.length - 1]

      const latestTime = fields[fields.length - 1].time
      const latestVal = fields.filter(f => f.time === latestTime)

      console.log({ latestTime, latestVal })

      //for cpu, memory
      if (latestVal.length === 1)
        return {
          serverName,
          ...latestVal[0]
        }

      //for process
      return {
        serverName,
        fields: latestVal
      }
    })
  }

  const capitalize = str => {
    if (str) return str.replace(/\b\w/g, l => l.toUpperCase())

    return ''
  }

  function fetchPOST(url, data, success, fail) {
    // const token = 'f82e62d7c3ea69cc12b5cdb8d621dab6';
    // const token = localStorage.getItem('jwt-token')
    console.log('some')
    return $http({
      url,
      // headers: { 'Authorization': 'Bearer ' + token },
      method: 'POST',
      data: Object.assign({}, data)
    })
      .then(resp => {
        console.log('fetch')
        console.log(resp)
      })
  }

  fetchPOST('http://monitor.api.i2g.cloud/agent/list', {})

  return {
    groupByServer,
    findCurrentInfo,
    capitalize,
    fetchPOST
  }
}

export default new ServiceSchema(name, service)
