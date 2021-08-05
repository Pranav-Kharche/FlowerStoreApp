//a Separate responsibility  for  Flowers  HTTP request handling

var Flower = require('../dal/flowersdal');

exports.getAllFlower = function (req, res) {
  console.log("calling controller function");
  Flower.getAllFlower(function (err, flower) {
    console.log('controller');
    if (err)
      res.send(err);
    console.log('res', flower);
    res.send(flower);
  });
};

exports.createFlower = function (req, res) {
  const new_flower = new Flower(req.body);
  Flower.createFlower(new_flower, function (err, flower) {
    if (err)
      res.send(err);
    res.json({ error: false, message: "Flowers added successfully!", data: flower });
  });
};



exports.getFlowerByFid = function (req, res) {
  Flower.getFlowerByFid(req.params.fid, function (err, flower) {
    if (err)
      res.send(err);
    res.json(flower);
  });
};


exports.remove = function (req, res) {
  Flower.remove(req.params.fid, function (err, flower) {
    if (err)
      res.send(err);
    res.json({ message: 'Flower successfully deleted' });
  });
};

exports.updateByFid = function (req, res) {
  Flower.updateByFid(req.params.fid, new Flower(req.body), function (err, flower) {
    if (err)
      res.send(err);
    res.json(flower);
  });
};