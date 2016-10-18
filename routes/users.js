var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/create', function(req, res, next){
  const token = jwt.sign({}, process.env.JWT_TOKEN, {
    expiresIn: '15 minutes'
  })

// This below is in case of using KNEX, this below consolitdate req.body stuff with token we just made
  const user = {
    username: req.body.username,
    // password: (result of hash function), //todo make work
    token: token
  }

  // User.create(req.body)  -- capital U signifies db
  // .then(function())
  //this is where we do the queriezz
  res.json({token: token})
  //or res.json({token})


  // console.log(req.body);
  // res.send('received') Received goes into the object under key 'data'
});

module.exports = router;
