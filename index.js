const http = require('http');
const server = http.createServer((req, res) => {
console.log(req.url)
console.log(req.url ,req.method,req.headers)
if(req.url === '/fre'){
     res.write("hellow from fre")
}
else if(req.url === '/tina'){
     res.write("hellow from tina ")
    }
    else if(req.url ==='/bkye'){
        res.write("thank you i did this last week i dont know why i forgot ")
       
    }

res.end();

});
server.listen(3000);