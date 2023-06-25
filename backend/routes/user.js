const express = require("express");
require("dotenv").config();


const passport = require("passport");

const router = express.Router();

router.get(
  "/googlelogin",
  passport.authenticate("google", {
    scope: ["profile"],
  })
);

router.get("/login",
(req, res,next)=>{
    res.send("logged in successfully")
}

);









module.exports = router;
