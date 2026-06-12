// we will take input from the user via form and submit it.

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, rsp) => {
  console.log(req.url, req.method, req.headers);
  if (req.url === "/") {
    rsp.write("<html>");
    rsp.write("<body>");
    rsp.write("<h1>Welcome to Home Page....</h1>");
    rsp.write("</body>");
    rsp.write("</html>");
    return rsp.end();
  }
  if (req.url === "/user-form") {
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
    rsp.setHeader("Location", "/users");
    if (req.url === "/users") {
      rsp.statusCode = 302;
      fs.writeFileSync("user.txt", "Ankush Kurvey");
      rsp.write("<html>");
      rsp.write("<body>");
      rsp.write("<h1>Form Submitted Successfully.... </h1>");
      rsp.write("</body>");
      rsp.write("</html>");
      return rsp.end();
    } else {
      rsp.statusCode = 404;
      rsp.write("<html>");
      rsp.write("<body>");
      rsp.write("<h1>404 Not Found.... </h1>");
      rsp.write("</body>");
      rsp.write("</html>");
      return rsp.end();
    }
  }
});

port = 3005;
server.listen(port, (req, rsp) => {
  console.log(`server is listing to http://localhost:${port}`);
});
