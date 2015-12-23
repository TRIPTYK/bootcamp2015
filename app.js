"use strict";
let http = require('http');
let port = 3000;
let fs = require('fs');
let routes ={
  "/api/friends":"datas/friends.json",
  "/api/amis":"datas/friends.json"
}
let serv = http.createServer((req, res) =>
  {

    if (routes[req.url])
    {
      res.writeHead(200,
      {
        'Content-Type': 'text/json'
      });
      fs.readFile(routes[req.url], 'utf8', (err, data) =>
      {
        if (err) throw err;
        res.end(data)
      });

    }
    else
    {
      res.writeHead(404,
      {
        'Content-Type': 'text/html'
      });
      fs.readFile('public/404.html', 'utf8', (err, data) =>
      {
        if (err) throw err;
        res.end(data);
      });

    }
  })
  .listen(port, () =>
  {
    console.log(`server listening at port ${port}`);
  })
