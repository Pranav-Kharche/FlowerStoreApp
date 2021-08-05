var OrderItem = require("../dal/orderitemsdal");

exports.getAllOrderItem = function (req, res) {
  console.log("calling controller function");
  OrderItem.getAllOrderItem(function (err, orderItem) {
    if (err) res.send(err);
    res.send(orderItem);
  });
};

exports.insert = function (req, res) {
  var new_OrderItem = new OrderItem(req.body);
  console.log(new_OrderItem);

  //handles null error
  if (!new_OrderItem.flowerid || !new_OrderItem.orderid) {
    res
      .status(400)
      .send({ error: true, message: "Please provide flower id and order id" });
  } else {
    OrderItem.createOrderItem(new_OrderItem, function (err, orderItem) {
      if (err) res.send(err);
      res.json(orderItem);
    });
  }
};

exports.getOrderItemById = function (req, res) {
  OrderItem.getOrderItemById(req.params.id, function (err, orderItem) {
    if (err) res.send(err);
    res.json(orderItem);
  });
};

exports.updateById = function (req, res) {
  OrderItem.updateById(
    req.params.id,
    new OrderItem(req.body),
    function (err, orderItem) {
      if (err) res.send(err);
      res.json(orderItem);
    }
  );
};

exports.remove = function (req, res) {
  OrderItem.remove(req.params.id, function (err, orderItem) {
    if (err) res.send(err);
    res.json({ message: "Order successfully deleted" });
  });
};