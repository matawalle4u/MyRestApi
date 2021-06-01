
const { resolve } = require('path')
const { v4:uuidv4 } = require('uuid')
const items = require('../data/items.json')
const {writeDataToFile} = require('../utils')

function findAll(){

    return new Promise((resolve, reject)=>{
        resolve(items)
    })
}

function findById(id){

    return new Promise((resolve, reject)=>{

        const item = items.find( (it)=>it.id === id)
        resolve(item)
    })
}

function create(filename, item){

    return new Promise((resolve, reject) =>{
        const newItem = {id: uuidv4(), ...item}
        items.push(newItem)
        writeDataToFile(filename, item)
        resolve(newItem)
    })
}

module.exports = {
    findAll,
    findById,
    create
}