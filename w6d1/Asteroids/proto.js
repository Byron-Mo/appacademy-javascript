Function.prototype.inherits = function(parent){
  function Surrogate() {}
  Surrogate.prototype = parent.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};

function Animal(name) {
  this.name = name;
}

Animal.prototype.sayHello = function() {
  this.name = 'Belle'
  console.log("hello my name is " + this.name);
};

function Dog(name){
  Animal.call(this, name);
}

Dog.prototype.bark = function () {
  console.log("Bark!");
};

// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;

Dog.inherits(Animal);
var dog = new Dog("fido");
console.log(dog.constructor);
