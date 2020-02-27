
var fs = require("fs");
var url = require('url')
var https = require('https')
https.createServer(function(req, res) {
    const method = req.method;
    if (req.url === "/fre") {
      fs.createReadStream(__dirname + "/index.html").pipe(res);
      return res.end()
    } 
    if (req.url === '/messsage' && method === 'POST') {
        
            const body = [];
            req.on('data', (chunk) => {
            body.push(chunk);
            });
            req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            });
            return res.end('Done');
    } 
    
  })
  .listen(3000);
