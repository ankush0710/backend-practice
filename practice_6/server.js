//sends the data in form of chunks from server to client store data in buffer

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, rsp) => {
  console.log(req.url, req.method);

  if (req.url === "/") {
    rsp.write("<html>");
    rsp.write("<head><titl>Contact Form</title></head>");
    rsp.write("<body>");
    rsp.write("<h1>Fill the Details</h1>");
    rsp.write('<form action="/submit-form" method="POST">');
    rsp.write('<label for="username">Name:</label></br></br>');
    rsp.write(
      '<input type="text" id"username" name="name" placeholder="Enter Your Name"/></br></br>',
    );
    rsp.write('<input type="radio" id="male" name="gender" value="male"/>');
    rsp.write('<label for="male">Male</label>');
    rsp.write('<input type="radio" id="female" name="gender" value="female"/>');
    rsp.write('<label for="female">Female</label></br></br>');
    rsp.write('<button type="submit">Submit</button>');
    rsp.write("</form>");
    rsp.write("</body>");
    rsp.write("</html>");
    return rsp.end();

  } else if (
    req.url.toLowerCase() === "/submit-form" &&
    req.method === "POST"
  ) {
    const body = []
    let bodyObject = {};
    req.on('data', (chunk)=>{
        console.log(chunk);     //it gives chunk of data in the buffer 
        body.push(chunk)
    });
    req.on('end', () => {
        const fullBody = Buffer.concat(body).toString(); //get chunk into readable format
        console.log(fullBody);
        const params = new URLSearchParams(fullBody);
        // for(const [key, value] of params.entries()){
        //     bodyObject[key] = value; 
        // }

        bodyObject = Object.fromEntries(params);
        console.log(bodyObject);
        const name = JSON.stringify(bodyObject.name);
        const gender = JSON.stringify(bodyObject.gender);
        fs.writeFileSync("userDetails.txt", `Name: ${name}\nGender:${gender}`);     //print the name and gender in userDetails.txt file
    });
    rsp.setHeader("Location", "/users");
    rsp.write('<h1>Submitted Successfully</h1>');
    rsp.satusCode = 302;
    return rsp.end();
  }
});

port = 3000;
server.listen(port, () => {
  console.log(`server is listing on http://localhost:${port}`);
});
