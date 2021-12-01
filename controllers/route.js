const express = require("express");

const router = express.Router();


router.get('/route',(req,res) => {
    res.send("<h1> Hello Node Express</h1>");
});

// router.get('/contact', (req,res) => {
//     res.sendFile(__dirname + "/index.html");
// });


module.exports = router;