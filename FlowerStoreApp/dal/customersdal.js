//a Separate responsibility  for  Customer database crud operation
var sql = require('../mysqlconnect');

//model
//Object Oriented Approach
//define Model 
var Customer = function (customer) {

  //Constructor

  this.cid = customer.cid
  this.firstname = customer.firstname;
  this.lastname = customer.lastname;
  this.email = customer.email;
  this.contactnumber = customer.contactnumber;

};

//Attach member function to Model to perform DatABASE  CRUD operations


Customer.getAllCustomer = function (result) {
  console.log("Invoking dal getall Customers");

  sql.query("Select * from customers", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    }
    else {
      console.log('Customers : ', res);
      result(null, res);
    }
  });
};

Customer.getCustomerByFid = function (cid, result) {
  sql.query("Select * from customers where cid = ? ", cid, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    }
    else {
      result(null, res);
    }
  });
};


Customer.createCustomer = function (newCustomer, result) {
  console.log("New customers to be added ");
  console.log(newCustomer);
  sql.query("INSERT INTO customers set ?", newCustomer, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    }
    else {
      console.log(res.insertCid);
      result(null, res.insertCid);
    }
  });
};

Customer.remove = function (cid, result) {
  console.log("Cid: " + cid + " --Customer is deleted");
  //console.log(cid);
  sql.query("DELETE FROM customers WHERE cid = ?", [cid],
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


Customer.updateByCid = function (cid, Customer, result) {
  console.log("Customer is updated");
  //console.log(theCustomer);
  sql.query("UPDATE customers SET firstname = ?, lastname= ?, email= ?, contactnumber= ? WHERE cid = ?",
    [
      Customer.firstname,
      Customer.lastname,
      Customer.email,
      Customer.contactnumber,
      Customer.cid
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

module.exports = Customer;