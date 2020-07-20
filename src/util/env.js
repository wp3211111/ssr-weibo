const env = process.env.NODE_ENV;

module.exports = {
    isDev : env === 'DEV',
    notDev : env !== 'DEV',
    isProd : env === 'production',
    notProd : env !== 'production',
    isTest : env === 'test',
    notTest : env !== 'test'
}