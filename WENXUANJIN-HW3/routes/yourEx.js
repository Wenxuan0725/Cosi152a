/*
  todo.js -- Router for the ToDoList
*/
const express = require('express');
const router = express.Router();
const YourEx = require('../models/yourEx')


/*
this is a very simple server which maintains a key/value
store using an object where the keys and values are lists of strings

*/

isLoggedIn = (req,res,next) => {
  if (res.locals.loggedIn) {
    next()
  } else {
    res.redirect('/login')
  }
}

// router.get('/', (req, res, next) => {
//       res.render('WhyBrandeis');
// });
//get the value associated to the key
router.get('/',
  async (req, res, next) => {
    //const id=await YourEx.findOne({})
      res.locals.id = await YourEx.find({})
      // const content=req.body.content
      // res.locals.content= await YourEx.find({})
      res.render('WhyBrandeis');
});

/* add the value in the body to the list associated to the key */
router.post('/',
  isLoggedIn,
  async (req, res, next) => {
      const yourex = new YourEx(
        {item:req.body.content,
         createdAt: new Date(),
         userId: req.user._id,
        })
      await yourex.save();
      //res.locals.content= await YourEx.find({})
      //res.render("todoVerification")
      res.redirect('/WhyBrandeis')
});






module.exports = router;
