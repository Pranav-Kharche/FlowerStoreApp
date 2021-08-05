//SOC
const { response } = require('express');
const express = require('express');
var path=require('path');
var fs=require('fs');

const { request }=require('http');
var app = express();

//configure Express Middleware
//HTTP middlware configuration
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// app.get("/",function(req, res){
//     //res.send("welcome");
//     res.sendFile("index.html");
// });


app.get("/", (req, res)=>{
    //res.send("Welcome");
    res.sendFile("/public/home.html",{root:__dirname});
});

// Require employee routes
const flowerRoutes = require('./routes/flowerroutes');
const customerRoutes=require('./routes/customerroutes');
const orderRoutes = require('./routes/orderroutes');
const orderitemsRoutes = require('./routes/orderitemsroutes');

// using as middleware
app.use('/api/flowers', flowerRoutes);
app.use('/api/customers', customerRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/orderitems', orderitemsRoutes);

//Listen Mode
app.listen(7876);
console.log("Express TFLStore App is liestening on port 7876");