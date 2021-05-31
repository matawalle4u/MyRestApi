const { resolve } = require('path')
const items = require('../data/items.json')

function findAll(){

    return new Promise((resolve, reject)=>{
        resolve(items)
    })
}

module.exports = {
    findAll
}