const seq = require('sequelize');

seq.authanticate().then(()=>{
    console.log('auth ok')
}).catch(() =>{
    console.log('auth err')
})

seq.sync({ force : true}).then(()=>{
    console.log('sync ok')
    process.exit();
}).catch(()=>{
    console.log('sync err')
})