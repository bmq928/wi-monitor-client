const ENV = process.env.NODE_ENV

if (ENV === 'development') module.exports = require('./webpack.config.dev')
else module.exports = require('./wepback.config.prod')