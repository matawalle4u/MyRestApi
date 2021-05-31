
const PORT = 5000
const http = require('http')
const {getItems, getItem} = require('./controllers/itemsControllers')

const server = http.createServer((req, res)=>{

    if(req.url==='/api/items'){
        //Use Regex to match instead of fixed string
        getItems(req, res)
        

    }else if(req.url.match('/\api/\([aA-zZ]+)\/([0-9])') && req.method==='GET'){
        const id = req.url.split('/')[3]
        getItem(req, res, id)

    }else if(req.url==='/api/items' && req.method==='POST'){

    }else{
        res.writeHead(404, {'Content-type':'application/json'})
        res.end(JSON.stringify({message:'Route not found'}))
    }

})



// Server starts listening for request
server.listen(PORT, ()=>{
    console.log(`Server started on post ${PORT}`)
})