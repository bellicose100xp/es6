let first = "bellicose";
let second = "agnostic";


var button = document.createElement('button');
button.textContent = first;
button.onclick = function () {
    alert("My name is slim shady!");
};
document.body.appendChild(button);


class Car {

    constructor(make) {
        this.make = make;
        this.speed = 55;
    }

    printSpeed(){
        console.log(this.make + 'is going at ' + this.speed + ' mph');
    }
}

var car = new Car("Mercedes");
car.printSpeed();

class RaceCar extends car {

    constructor(make, topSpeed) {
        super(make,make);
        this.topSpeed = topSpeed;
    }

    goFast(){
        this.speed = this.topSpeed;
    }
}

var toyota = new RaceCar("corolla", 350);

console.log(toyota.speed);
toyota.goFast();
console.log(toyota.speed);