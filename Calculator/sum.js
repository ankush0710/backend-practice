//to handle the request
const sumRequestHandler = (req, res) => {
  // console.log("sumRequestHandler here is working ");
  const body = [];
  req.on("data", (chunk) => body.push(chunk));
  req.on("end", () => {
    const buffer = Buffer.concat(body).toString();
    const params = new URLSearchParams(buffer);
    const bodyObj = Object.fromEntries(params);
    const result = parseInt(bodyObj.first) + parseInt(bodyObj.second);
    console.log(result);
    res.setHeader("Content-Type", "text/html");
    res.write(`
            <html>
                <body>
                    <h1>Your Sum is: ${result}</h1>
                </body>
            </html>
                `);
    return res.end();
  });
};

exports.sumRequestHandler = sumRequestHandler; //Named export
