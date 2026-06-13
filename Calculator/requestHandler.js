const { sumRequestHandler } = require("./sum");

const requestHandler = (req, res) => {
  console.log(req.url, req.method);

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
            <html>
                <body>
                    <h1>Welcome To the Calculator's Home Page !</h1>
                    <a href="/calculator">Go To Calculator</a>
                </body>
            </html>
            `);
    return res.end();
  } else if (req.url === "/calculator") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
        <html>
            <body>
                <form action="/result" method="POST">
                    <h1>Here is the caculator</h1>
                    </br></br>
                    <label for="first">Enter Input 1:</label>
                    <input type="number" id="first" name="first" placeholder="Enter First Number"/>
                    </br></br>
                    <label for="second">Enter Input 2:</label>
                    <input type="number" id="second" name="second" placeholder="Enter Second Number" />
                    </br></br>
                    <button type="submit">Sum</button>
                </form>
            <body>
        </html>
        `);
    return res.end();
  } else if (req.url === "/result" && req.method === "POST") {
    sumRequestHandler(req, res);
  } else {
    res.setHeader("Content-Type", "text/html");
    res.write(`
            <html>
                <body>
                    <h1>404 Page Does Not Exist !!</h1>
                    <a href="/">Go To Home</a>
                </body>
            </html>
            `);
    return res.end();
  }
};

exports.requestHandler = requestHandler;
