const path = require('path')
const express = require('express')
const app = express()
const hbs = require('hbs')
const port = process.env.PORT || 3000;

let connectdb = require("../connection/connectdb.js")
connectdb()

const Student = require("../model/registers.js")

const templatePath = path.join(__dirname, "../templates/views")
const partialsPath = path.join(__dirname, "../templates/partials")

console.log(path.join(__dirname, "../public"))

// to set the view engine
app.set('view engine', 'hbs');
app.set('views', templatePath);
hbs.registerPartials(partialsPath)

// built-in middleware
app.use(express.static(path.join(__dirname, "../public")));

// template engine route
app.get('/', (req, res) => {
    res.render('home')
})
app.get('/watchlist', (req, res) => {
    res.render('wishlist')
})
app.get('/product', (req, res) => {
    res.render('product')
})
app.get('/listings', (req, res) => {
    res.render('listing')
})
app.get('/list', (req, res) => {
    res.render('form')
})
app.get('/login', (req, res) => {
    res.render('login')
})
app.get("/signup", (req, res) => {
    res.render('signup');
})

app.use(express.json());
app.use(express.urlencoded({extended:false}));

// create a new user in our database
app.post("/signup", async (req, res) => {
    try{
        const password = req.body.password;   
        const cpassword = req.body.cpassword;  
        
        if(password === cpassword){
            const registerUser =  new Student({
                name : req.body.name,
                email : req.body.email,
                password : password,
                cpassword : cpassword 
            })

            const registered = await registerUser.save();
            res.status(201).render('signup');

        }else{
            res.send("Passwords are not matching")
        }
        
    } catch(error){
        res.status(400).send(error);
    }
})

// route for 404 : code always at the end

app.get('*', (req, res) => {
    res.render("404");
})


// app.get("/watchlist", (req, res)=> {
//     res.sendFile(path.join(__dirname, "../public", "wishlist.html"));
// })
// app.get("/listings", (req, res)=> {
//     res.sendFile(path.join(__dirname, "../public", "listing.html"));
// })
// app.get("/list", (req, res)=> {
//     res.sendFile(path.join(__dirname, "../public", "form.html"));
// })
// app.get("/login", (req, res)=> {
//     res.sendFile(path.join(__dirname, "../public", "login.html"));
// })



app.listen(port, () => {
    console.log("Listening on Port 3000")
})