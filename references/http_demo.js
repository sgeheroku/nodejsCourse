const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res)=>{

    
    if(req.url === '/about'){
        fs.readFile(path.join(__dirname,'public','about.html'),'utf-8',(err, data)=>{
            if(err) throw err;
            res.writeHead(200, {'Content-Type':'text/html'});
            res.end(data);
        });
    }else if(req.url === '/api/users'){
        fs.readFile(path.join(__dirname,'public','users.json'),'utf-8',(err, data)=>{
            if(err) throw err;
            res.writeHead(200, {'Content-Type':'application/json'});
            res.end(data);
        });
    }else{
        res.writeHead(200, {'Content-Type':'text/html'});
        res.end('<h1>Welcome Home !</h1>');
    }

});

const PORT = process.env.port || 3000;
server.listen(PORT, ()=>{
    console.log(`listing on port ${PORT}`);
});