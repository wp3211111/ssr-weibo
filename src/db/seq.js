const Sequelize = require('sequelize');
const { mysqlconf }  = require('../conf/db');
const { isProd , isTest } = require('../util/env');

const {  host , user , password , port ,database } = mysqlconf;

const conf = {
    host : host,
    dialect : 'mysql'
}
if(isTest){
    conf.loging = ()=>{};
}
if(isProd){
    // 线上环境使用连接池
    conf.poll = {
        max : 5, //连接池最大连接数
        min : 0, // 最小连接数
        idle : 10000 // 如果一个连接池10s没使用则释放
    }
}

const seq = new Sequelize(database,user,password,conf);

module.exports = seq;
