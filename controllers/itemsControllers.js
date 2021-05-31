const Item = require('../models/itemsModel')

//Find all items without filtering by id
async function getItems(req, res){

    try{
        const items = await Item.findAll()

        res.writeHead(200, {'Content-type':'application/json'})
        res.end(JSON.stringify(items))

    }catch(err){
        console.log(err);
    }

}


async function getItem(req, res, id){


    try{
        const item = await Item.findById(id)

        if(!item){

            res.writeHead(404, {'Content-type':'application/json'})
            res.end(JSON.stringify({message:'Item not found'}))

        }else{
            res.writeHead(200, {'Content-type':'application/json'})
            res.end(JSON.stringify(item))
        }

        

    }catch(err){
        console.log(err);
    }


}


module.exports = {
    getItems,
    getItem
}