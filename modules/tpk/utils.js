"use strict";
let utils = function()
{

  //API public
  function countLines(data)
  {
    return `lignes :${data.split('\n')
      .length} caratères comptés : ${compteCaracteres(data)}`;
  }
  //API private
  function compteCaracteres(data)
  {
    return data.length;
  }

  let that = {};
  that.compteMesLignes = countLines;
  return that;
};
module.exports = utils();
