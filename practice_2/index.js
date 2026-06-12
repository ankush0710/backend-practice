const fs = require("fs");

// asyncronous in nature 
// 1) Read the file 
fs.readFile("./sample.txt", "utf-8", (err, data) => {
    if(err){
        console.log(err);

    }
    console.log(data);
})

console.log("Reading File....")

// 2) write the file
let content = "I live in Hi-tech city, Hyderabad, Telangana"
fs.writeFile("./sample.txt", content, (err, data) => {
    if(err){
        console.log(err);
    }
    console.log("data added to the file...");
});

//3) make new folder
fs.ma