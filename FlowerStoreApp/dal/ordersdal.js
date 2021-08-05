var sql = require("../mysqlconnect");

var Order = function (Order) {
  this.cid = Order.cid;
  this.orderid = Order.orderid;
  this.orderdate = Order.orderdate;
  this.amount = Order.amount;
  
};
Order.createOrder = function (newOrder, result) {
  console.log("New Order to be added ");
  console.log(newOrder);
  sql.query("INSERT INTO orders SET ?", newOrder, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

Order.getOrderById = function (OrderId, result) {
  sql.query(
    "Select * from Orders where order_id = ? ",
    OrderId,
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};

Order.getAllOrder = function (result) {
  console.log("Invoking dal getall Orders");

  sql.query("Select * from Orders", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("Orders : ", res);
      result(null, res);
    }
  });
};

Order.updateById = function (id, Order, result) {
  sql.query(
    "UPDATE customers SET cid = ?, orderdate = ?, amount = ? WHERE orderid = ?",
    [
      Order.cid,
      Order.orderdate,
      Order.amount,
      id,
    ],
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

Order.remove = function (id, result) {
  sql.query("DELETE FROM orders WHERE order_id = ?", id, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = Order;