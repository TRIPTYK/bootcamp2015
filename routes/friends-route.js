"use strict";
let express = require('express');
let router = express.Router();
let friendsModel = require('../modules/tpk/friends-model');
let friends = friendsModel();




router.get('/', (req, res) =>
{
  res.json(friends.getAllFriends());
});
router.get('/:id', (req, res) =>
{
  res.json(friends.getFriendById(req.params.id));
});

router.post('/',(req,res)=>{
  res.json(friends.setFriend(req.body))
});

router.put('/',(req,res)=>{
  res.json(friends.setFriend(req.body))
});

router.delete('/:id', (req,res) =>{
  res.json(friends.deleteFriend(req.params.id));
});
module.exports = router;
