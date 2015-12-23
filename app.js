"use strict";
let fs = require('fs');
let utils = require('./modules/tpk/utils');
fs.readFile('./fake.txt','utf8', function (err, data) {
  if (err) throw err;
  console.log(utils.compteMesLignes(data));
});
