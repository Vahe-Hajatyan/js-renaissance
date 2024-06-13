const http = require('http');
const url = require('url');
const {handleCreate, handleRead, handleUpdate, handleDelete} = require('./methods.js')
const server = http.createServer((req, res) => {
   const parsedUrl = url.parse(req.url, true);
   const method =req.method
   const resource  = parsedUrl.pathname
   if(resource === '/items'&&method === 'GET'){
    handleRead(req, res)
   }else if(resource === '/items' && method === 'POST'){
    handleCreate(req, res)
   }else if(resource.startsWith('/items') && method === 'PUT'){
    handleUpdate(req, res,parsedUrl)
   }else if(resource.startsWith('/items') && method === 'DELETE'){
    handleDelete(req, res,parsedUrl)
   }else{
    res.statusCode = 404
    res.end('Not Found')
   }
})

const PORT = 3001;

server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Server running on port ${PORT}`);
})