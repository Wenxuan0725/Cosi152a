/*
  todo.js -- Router for the ToDoList
*/
const express = require('express');
const router = express.Router();
const connectInfo = require('../models/connectInfo')


/*
this is a very simple server which maintains a key/value
store using an object where the keys and values are lists of strings

*/

isLoggedIn = (req,res,next) => {
  if (res.locals.loggedIn) {
    next()
  } else {
    res.redirect('/auth/google')
  }
}

// get the value associated to the key
router.get('/',
isLoggedIn,(req,res)=>{
  res.render('connectWithMe')
})




function check(a) {
  if (a==0) return "You are willing to joining us and sharing your story"
  if(a==-1) return "You are not willing to joining us and sharing your story"
  return "You do not response whether you are willing to joining us and sharing your story"
}
router.post("/",
isLoggedIn,
async (req,res,next) => {
    const connect = new connectInfo(
      {name:req.body.name,
        email: req.body.email,
       willingness: req.body.answer,
       userId: req.user._id,
      })
    res.locals.name=req.body.name
    res.locals.email=req.body.email
    res.locals.grade=req.body.grade
    console.dir(req.body)
    const a=parseFloat(req.body.answer)
    const answer=check(a)
    res.locals.answer=answer
    res.locals.hobby=req.body.hobby
    await connect.save()
    res.render('result')
})





module.exports = router;
