const http = require("http");
const {requestHandler} = require('./requestHandler');

const server = http.createServer(requestHandler);

const PORT = 3005;
server.listen(PORT, () => {
    console.log(`Server is Listening http://localhost:${PORT}`)
})