const fs = require("fs");
let url = require("url");

var options = {
  key: fs.readFileSync("./privateKey.key"),
  cert: fs.readFileSync("./certificate.crt")
};
const server = require("https").createServer(options);

server.on("request", (req, res) => {
  let method = req.method;
  let url = req.url;
 
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write(`<body><form action="/" method="POST">Enter Message: <input name="message"><button type="submit">Send</button></for
m></body>`);
    res.write("</html>");
   
  

  if (method === "POST") {
    const writable = fs.crea("./txxt.txt");
    req.on("data", chunk => {
        console.log(chunk)
      writable.write(chunk);
    });
    
    
    return res.end();
  }
});
server.listen(3000);
