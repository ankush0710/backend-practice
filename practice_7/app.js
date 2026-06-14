const http = require("http");
const syntaxTesting = require("./syntaxTesting")

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    syntaxTesting();
    return res.end()
});

const PORT = 3001
server.listen(PORT, ()=>{
    console.log(`server is listening to the http://localhost:${PORT}`);
})