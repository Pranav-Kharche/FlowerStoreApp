//a Separate responsibility  for  Customer HTTP request handling

var Customer = require('../dal/customersdal');

exports.getAllCustomer = function (req, res) {
  console.log("calling controller function");
  Customer.getAllCustomer(function (err, customer) {
    //console.log('controller');
    if (err)
      res.send(err);
    //console.log('res', customer);
    res.send(customer);
  });
};

exports.createCustomer = function (req, res) {
  const new_customer = new Customer(req.body);
  Customer.createCustomer(new_customer, function (err, customer) {
    if (err)
      res.send(err);
    res.json({ error: false, message: "Customers added successfully!", data: customer });
  });
};



exports.getCustomerByCid = function (req, res) {
  Customer.getCustomerByCid(req.params.cid, function (err, customer) {
    if (err)
      res.send(err);
    res.json(customer);
  });
};


exports.remove = function (req, res) {
  Customer.remove(req.params.cid, function (err, customer) {
    if (err)
      res.send(err);
    res.json({ message: 'Customer successfully deleted' });
  });
};

exports.updateByCid = function (req, res) {
  Customer.updateByCid(req.params.cid, new Customer(req.body), function (err, customer) {
    if (err)
      res.send(err);
    res.json(customer);
  });
};