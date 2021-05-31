const Item = require('../models/itemsModel')

async function getItems(req, res){

    try{
        const items = await Item.findAll()

        res.writeHead(200, {'Content-type':'application/json'})
        res.end(JSON.stringify(items))

    }catch(err){
        console.log(err);
    }

}

module.exports = {
    getItems
}