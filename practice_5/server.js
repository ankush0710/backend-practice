//create a navigation bar like myntra and create routes through backend

const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  if(req.url === '/home'){
    res.write('<h1>Welcome to Home Page</h1>');
    return res.end();
  }
  else if(req.url === '/mens'){
    res.write('<h1>Welcome to the Mens Page</h1>');
    return res.end();
  }
  else if(req.url === '/kids'){
    res.write('<h1>Welcome to the Kids Page</h1>');
    return res.end();
  }
  else if(req.url === '/womens'){
    res.write('<h1>Welcome to the Womens Page</h1>');
    return res.end();
  }
  else if(req.url === '/cart'){
    res.write('<h1>Welcome to the cart Page</h1>');
    return res.end();
  }
  res.write(`
        <HTML>
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
            </head>
            <body>
                <nav>
                    <ul>
                        <li><a href="/home">Home</a></li>
                        <li><a href="/mens">Mens</a></li>
                        <li><a href="/womens">Womens</a></li>
                        <li><a href="/kids">Kids</a></li>
                        <li><a href="/cart">Cart</a></li>
                    </ul>
                </nav>
            </body>
        </HTML>
        `);
  res.end();
});

port = 3001;
server.listen(port, () => {
  console.log(`server is listening in ${port}`);
});
