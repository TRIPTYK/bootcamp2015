"use strict";
let fs = require('fs');
fs.readFile('./fake.txt','utf8', function (err, data) {
  if (err) throw err;
  console.log(utils.compteMesLignes(data));
});

let utils = function(){

//API public
  function countLines(data){
    return data.split('\n').length + " " +compteCaracteres(data) ;
  }
  //API private
  function compteCaracteres(data){
    return data.length;
  }

  let that ={};
  that.compteMesLignes = countLines;
  return that;
}();
