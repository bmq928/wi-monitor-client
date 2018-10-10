import { ServiceSchema } from '../libs'

const name = 'utils'

function service() {
    const groupByServer = (data) => {

        const dict = {}

        for (const d of data) {
            const { serverName, ...rest } = d

            if (serverName in dict) dict[serverName].push({ ...rest })
            else dict[serverName] = [{ ...rest }]
        }

        const result = Object
            .entries(dict)
            .map(([serverName, fields]) => ({ serverName, fields }))

        return result
    }

    // transform data
    // data just return latest in a specific server
    const findCurrentInfo = (allData) => {
        return allData.map(({ serverName, fields }) => {

            if (!fields.length) return null

            // const latestVal = fields[fields.length - 1]

            const latestTime = fields[fields.length - 1].time
            const latestVal = fields.filter(f => f.time === latestTime)

            console.log({latestTime, latestVal})


            //for cpu, memory
            if (latestVal.length === 1) return {
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

    const capitalize = (str) => {
        if (str) return str.replace(/\b\w/g, l => l.toUpperCase())

        return ''
    }

    return {
        groupByServer,
        findCurrentInfo,
        capitalize
    }
}

export default new ServiceSchema(name, service)