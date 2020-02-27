const url = require("url");
const http= require('http')
const server = http.createServer((req, res) => {
  // console.log(req.url, req.method, req.headers);
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write(
      `<body><form action="/messsage" method="POST"> Enter Message: <input name="message"><button type="submit">Send</button></for
    m></body>`
    );
    res.write("</html>");
    return res.end(); // "retrun" here exits the function execution, otherwise continue.
  }
  if (url === "/messsage" && method === "POST") {
    const body = [];
    req.on("data", chunk => {
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
    });
    return res.end("Done");
  }
}).listen(3000)
