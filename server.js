const PORT = 5000
const http = require('http')
const {getItems} = require('./controllers/itemsControllers')

const server = http.createServer((req, res)=>{

    if(req.url==='/api/items'){
        getItems(req, res)
        

    }else{
        res.writeHead(404, {'Content-type':'application/json'})
        res.end(JSON.stringify({message:'Route not found'}))
    }

})



// Server starts listening for request
server.listen(PORT, ()=>{
    console.log(`Server started on post ${PORT}`)
})