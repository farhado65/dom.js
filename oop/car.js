var car = {
    make: "Ford",
    model: "mustang",
    year:1990,
    color: "red",
    passengers: 4,
    mileage: 2000,
    engineIsOn: false,
    fuel: 50,
    maxFuel: 50,
    mediumConsumption: 7.5,
    refill:function(num) {
        if(this.fuel + num > this.maxFuel){
            this.fuel = this.maxFuel;
            console.log("too much");
        } else {
            this.fuel += num;
        }    
    },
    drive: function(distance) {
        if(this.distanceToEmpty() < distance) {
            console.log("too far!");
            distance = this.distanceToEmpty();
        }
        consumption = Math.round(distance * this.mediumConsumption / 100);
            this.fuel -= consumption;
            this.mileage += distance;
        
    },
    distanceToEmpty: function() {
        return Math.round(this.fuel / this.mediumConsumption * 100);
    },
    stop: function () {
        if(this.engineIsOn) {
            this.engineIsOn = false;
            console.log("car stopped");
        } else {
            console.log("car is already stopped");
        }       
    },
    start: function () {
        if(!this.engineIsOn) {
            this.engineIsOn = true;
            console.log("car started");
        }else { 
            console.log("car is already started");
        }       
    },
}

car.mileage = 2150;
console.log(car.year);
console.log(car["mileage"]);
car.start();
car.start();
car.enginesIsOn = false;

car.drive(100);
console.log(car.fuel);
car.drive(800);
console.log(car.fuel);
car.refill(30);
console.log(car.fuel);

// for(prop in car) {
//     console.log(prop + " = " + car[prop]);
// }
