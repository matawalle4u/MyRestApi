const { resolve } = require('path')
const items = require('../data/items.json')

function findAll(){

    return new Promise((resolve, reject)=>{
        resolve(items)
    })
}

function findById(id){
    return new Promise(resolve, reject=>{
        const item = items.find((it)=>it.id===id)
        resolve(item)
    })
}

module.exports = {
    findAll,
    findById
}