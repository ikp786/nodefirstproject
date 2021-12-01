const express = require('express');

const app = express();
const router = require("./controllers/route");
const mongoURI =   require('./config/mongoKey');
const  mongoose = require("mongoose");
const data = require('./modals/data');

// connect mongo db
mongoose.connect(mongoURI, {useNewUrlParser : true,useUnifiedTopology:true }, (err) => console.log("connected"))

app.use(express.urlencoded({extended: true}));
app.use("/static", express.static(__dirname + "/static"));
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

// app.use("/", router);
app.use(router);

app.get("/:name", (req,res) => {    
    console.log('adfdsfdfdfd');
     data ({
        username:req.params.name
    }).save().then((newUser) => {
        // console.log('new user created: ’ + newUser);
        });
    // res.send(name);
    // res.end();
});


router.get('/contact', (req,res) => {
    res.sendFile(__dirname + "/index.html");
});
// var auth = true;

// function myMiddleware(req,res,next){
//     if(auth){
//         console.log("authenticate")
//     }else{
//         console.log("not authentucate");
//     }
//     next();
// }

// function myMiddleware2(req,res,next){
//     console.log("my middleware");
//     next();
// }

// app.get('/', myMiddleware,myMiddleware2,(req,res) => {
//     res.send("<h1> Hello Node Express</h1>");
// });

// app.get('/contact', (req,res) => {
//     res.sendFile(__dirname + "/index.html");
// });

// app.get('/submit', (req,res) => {
    
//     const {email} = req.query;
//     console.log(email);
//     res.send('dfd');
// });  

app.post('/submit', (req,res) => {    
    const {email} = req.body;
    console.log(email);
    res.send('dfd');
});


const port = process.env.port || 3001;
app.listen(port, () => console.log(`Started At ${port}`));