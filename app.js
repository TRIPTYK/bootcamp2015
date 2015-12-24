"use strict";
let http = require('http');
let port = 3000;
let fs = require('fs');
let express = require('express');
let friendsRouter = require('./routes/friends-route');
let app = express();

let bodyParser = require('body-parser');

//USER BODYPARSER FOR POST REQUESTS
app.use(bodyParser.json());

app.use('/api/friends', friendsRouter);


app.use((req, res) =>
{
  res.status(404);
  var options = {
    root: `${__dirname}/public/`,
    dotfiles: 'deny',
    headers:
    {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  };

  res.sendFile('404.html', options, (err) =>
  {
    if (err)
    {
      throw err;
      res.status(err.status)
        .end();
    }
  });
});

let serv = http.createServer(app)
  .listen(port, () =>
  {
    console.log(`server listening at port ${port}`);
  })
