console.log(
  "============================================TASK5============================================"
);
class Car {
  static getSpecs(car) {
    console.log(
      `maxSpeed : ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price}`
    );
  }
  constructor({ price, maxSpeed }) {
    this.speed = 0;
    this._price = price;
    this.maxSpeed = maxSpeed;
    this.isOn = false;
    this.distance = 0;
  }

  get price() {
    return this._price;
  }

  set price(newPrice) {
    return (this._price = newPrice);
  }

  turnOn() {
    return (this.isOn = true);
  }

  turnOff() {
    this.speed = 0;
    this.isOn = false;
  }
  // как по мне, в домашнем задании логика этого метода не имеет фактического смысла, так как мы можем увеличивать скорость, даже если машина выключена.
  // поэтому я добавил ещё одно условие на проверку this.isOn === true
  accelerate(value) {
    if (this.speed + value < this.maxSpeed && this.isOn === true) {
      return (this.speed += value);
    }
  }
  decelerate(value) {
    if (this.speed - value > 0) {
      return (this.speed -= value);
    }
  }
  drive(hours) {
    if (this.isOn === true) {
      return (this.distance += hours * this.speed);
    }
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });
mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000
mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();
Car.getSpecs(mustang);
// maxSpeed: 200, speed: 30, isOn: false, distance: 130, price: 2000
// не понятно, почему в задании speed: 30, если  isOn: false. В таком случае, должно быть speed: 0

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
Car.getSpecs(mustang);
