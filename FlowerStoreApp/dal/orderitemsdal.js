var sql = require("../mysqlconnect");

var OrderItem = function (OrderItem) {
  this.Orderitemid = OrderItem.Orderitemid;
  this.orderid = OrderItem.orderid;
  this.flowerid = OrderItem.flowerid;
  this.quantity = OrderItem.quantity;
  //this.orderdate = OrderItem.orderdate;
};

OrderItem.createOrderItem = function (newOrderItem, result) {
  console.log("New Orderitem to be added ");
  console.log(newOrderItem);
  sql.query("INSERT INTO orderitems SET ?", newOrderItem, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

OrderItem.getOrderItemById = function (OrderItemId, result) {
  sql.query(
    "select * from orderitems where orderid = ? ",
    OrderItemId,
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

OrderItem.getAllOrderItem = function (result) {
  console.log("Invoking dal getall OrderItems");

  sql.query("SELECT * FROM orderitems", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("OrderItems : ", res);
      result(null, res);
    }
  });
};

OrderItem.updateById = function (id, OrderItem, result) {
  sql.query(
    "update orderitems set quantity = ?,  WHERE orderid = ? ",
    [
      OrderItem.quantity,
      id
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

OrderItem.remove = function (id,result) {
  sql.query(
    "DELETE FROM orderitems WHERE orderid = ?",
    [id],
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

module.exports = OrderItem;