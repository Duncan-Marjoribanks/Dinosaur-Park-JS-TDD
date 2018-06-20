const Dinosaur = require('./dinosaur');
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

Park.prototype.getBestDino = function() {
  let bestDino;
  for (let i = 0; i < this.dinoCollection; i++) {
    if (this.dinoCollection[i].guestsAttractedPerDay > this.dinoCollection[i+1].guestsAttractedPerDay) {
      bestDino = this.dinoCollection[i];
    }
  }
  const bestPerformingDino = bestDino;
  return bestPerformingDino;
}


module.exports = Park;
