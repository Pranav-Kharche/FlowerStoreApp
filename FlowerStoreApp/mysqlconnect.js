//a Separate responsibility  for  mysql connection string
// database connectivity
var mysql= require('mysql');

//define connection string
var connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:' ',
    database:'ecommerce'
});


// TCP connection
// state full connection between Node HTTP server and mySQL Server
connection.connect(function(err){
    if(err) throw err;
    console.log("Database connected Successfully");
});

module.exports=connection;
//what means database server should be on to use data?