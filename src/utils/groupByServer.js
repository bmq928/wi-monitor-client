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

export default groupByServer