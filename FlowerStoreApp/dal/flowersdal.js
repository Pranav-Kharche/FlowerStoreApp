//a Separate responsibility  for  Flowers database crud operation
var sql = require('../mysqlconnect');

//model
//Object Oriented Approach
//define Model 
var Flower = function (flower) {

  //Constructor

  this.fid = flower.fid
  this.title = flower.title;
  this.dscription = flower.dscription;
  this.quantity = flower.quantity;
  this.unitprice = flower.unitprice;
  this.likes = flower.likes;
  //this.ImageUrl=Flower.ImageUrl;
};

//Attach member function to Model to perform DatABASE  CRUD operations


Flower.getAllFlower = function (result) {
  console.log("Invoking dal getall Flowers");

  sql.query("Select * from flowers", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    }
    else {
      console.log('Flowers : ', res);
      result(null, res);
    }
  });
};

Flower.getFlowerByFid = function (fid, result) {
  sql.query("Select * from flowers where fid = ? ", fid, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    }
    else {
      result(null, res);
    }
  });
};


Flower.createFlower = function (newFlower, result) {
  console.log("New flowers to be added ");
  console.log(newFlower);
  sql.query("INSERT INTO flowers set ?", newFlower, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    }
    else {
      console.log(res.insertFid);
      result(null, res.insertFid);
    }
  });
};

Flower.remove = function (fid, result) {
  console.log("Fid: " + fid + " --Flower is deleted");
  //console.log(fid);
  sql.query("DELETE FROM flowers WHERE fid = ?", [fid],
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      }
      else {
        result(null, res);
      }
    });
};


Flower.updateByFid = function (fid, Flower, result) {
  console.log("flower is updated");
  //console.log(theFlower);
  sql.query("UPDATE flowers SET title = ?, dscription= ?, quantity= ?, unitprice= ? WHERE fid = ?",
    [
      Flower.title,
      Flower.dscription,
      Flower.quantity,
      Flower.unitprice,
      Flower.fid
    ],
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      }
      else {
        result(null, res);
      }
    });
};



module.exports = Flower;