// Copyright (c) 2015 TRIPTYK S.P.R.L. All rights reserved.
"use strict";
let fs = require('fs');
let _ = require('lodash');

function friends()
{
  let datas = null;

  function loadData(cb)
  {
    fs.readFile('datas/friends.json', 'utf8', function(err, data)
    {
      if (err) throw err;
      datas = JSON.parse(data);
      if (cb) cb();
    })
  }

  loadData();
  function getAllFriends()
  {
    if (datas === null)
    {
      loadData(getAllFriends);
    }
    else
    {
      return datas;
    }
  }

  function getFriendById(id)
  {
    if (datas === null)
    {
      loadData(getFriendById);
    }
    else
    {
      return _.find(datas.friends,
      {
        "id": parseInt(id)
      });
    }
  }
  var that = {};
  that.getAllFriends = getAllFriends;
  that.getFriendById = getFriendById;
  return that;
}


module.exports = friends;
