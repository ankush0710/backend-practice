//======================= http module ===========================//
// var http = require('http');
// console.log(http);

// // http is used to create server reuqest, server response 
// var server = http.createServer(function(req, res){
//     console.log(req);    //come from frontend
//     res.statusCode = 200;
//     res.setHeader("Content-Type", "text/plain");
//     res.end("Correct!");
// })

// server.listen("2500", "127.0.0.4", function(){
//     console.log("Listening.... to the port");
// })

// const options = {
//     hostname : "www.google.com",
//     path: "/",
//     port: 80,
//     method: "GET"
// }

// const req = http.request(options, (res) => {
//     console.log("status", res.statusCode)

//     res.on("data", (data) => {
//         process.stdout.write(data)
//     })

//     res.on("error", (err) => {
//         console.log(err)
//     })
// })

// req.end();


//========================== os module ============================//

// const os = require("os");

// console.log(os);
// console.log(os.platform());
// console.log(os.arch());
// console.log(os.hostname());
// console.log(os.release());


//====================== path module ============================//

const path = require("path");

const normalisePath = path.normalize("f00//bar//\\/ankush/\chodu...");
console.log(normalisePath);         //f00\bar\ankush\chodu...

