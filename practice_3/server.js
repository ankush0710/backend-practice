const http = require("http");

const server = http.createServer((req, res) => {
  // console.log(req);
//   console.log(req.url, req.method, req.headers); 

  if (req.url == "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My server</title></head>");
    res.write("<body><h1>Welcome Home Page</h1></body>");
    res.write("</html>");
    return res.end();
  } else if (req.url == "/products") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My server</title></head>");
    res.write("<body><h1>Products Page</h1></body>");
    res.write("</html>");
    return res.end();
  } else {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My server</title></head>");
    res.write("<body><h1>Not Found</h1></body>");
    res.write("</html>");
    return res.end();
  }
  // process.exit();     //stop the event loop
});

const port = 3005;
server.listen(port, () => {
  console.log(`server is listen to the http://localhost:${port}/`);
});
