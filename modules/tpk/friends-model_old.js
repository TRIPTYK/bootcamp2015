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

  function setFriend(ob)
  {
    if (!ob.id)
    {
      let maxId = _.max(datas.friends, 'id').id;
      let currentId = maxId += 1;
      ob.id = currentId;
      datas.friends.push(ob);
    }
    else
    {
      let index = _.findIndex(datas.friends,
      {
        'id': parseInt(ob.id)
      })
      if (index !== -1)
      {
        datas.friends[index] = ob;
      }
      else
      {
        console.log(
        {
          "error": "no index was find"
        });
      }
    }
    persistData();
    return datas;
  }

  function deleteFriend(id){
    let index = _.findIndex(datas.friends, { 'id': parseInt(id)})
    if(index !== -1){
          _.pullAt(datas.friends,index)
    } else {
      console.log({"error":"no index was find"});
    }
    persistData();
    return datas.friends;
  }

  function persistData()
  {
    var dataOut = JSON.stringify(datas);
    fs.writeFile('datas/friends.json', dataOut, function(err)
    {
      if (err) throw err;
      console.log("data well saved");
    })
  }
  var that = {};
  that.getAllFriends = getAllFriends;
  that.getFriendById = getFriendById;
  that.setFriend = setFriend;
  that.deleteFriend = deleteFriend;
  return that;
}


module.exports = friends;
