const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur;

  beforeEach(function () {
    park = new Park('Jurassic Park', 5);
    dinosaur = new Dinosaur('t-rex', 'carnivore', 50);

  })

  it('should have a name', function() {
    const actual = park.name;
    assert.strictEqual(actual, "Jurassic Park");
  });

  it('should have a ticket price', function() {
    const actual = park.price;
    assert.strictEqual(actual, 5);
  });

  it('should have a collection of dinosaurs', function() {
    const actual = park.dinoCollection;
    assert.deepEqual(actual, [])
  });

  it('should be able to add a dinosaur to its collection', function() {
    park.addDino(dinosaur);
    const actual = park.dinoCollection;
    assert.deepEqual(actual, [dinosaur]);
  });

  it('should be able to remove a dinosaur from its collection', function() {
    park.addDino(dinosaur);
    park.removeDino();
    const actual = park.dinoCollection;
    assert.deepEqual(actual, [])
  });

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to remove all dinosaurs of a particular species');

});
