const Park = function(name, price) {
  this.name = name;
  this.price = price;
  this.dinoCollection = [];
}

Park.prototype.addDino = function(dinosaur) {
  this.dinoCollection.push(dinosaur);
}

Park.prototype.removeDino = function() {
  this.dinoCollection.shift();
}



module.exports = Park;
