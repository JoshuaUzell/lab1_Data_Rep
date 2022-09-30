//This class takes make, model and year and as arguments. It includes
//a method that will write this information (make, model, year) to the console.
//the console

class Vehicle {

    //Constructor used to initialise data in class
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    //Logs make model and year to the console
    Information() {
        console.log(`Make ${this.make}\nYear ${this.year}\nModel ${this.model}`);
    }
}

//This class inherits from the vehicle class and
//writes info to the console about the make, model and year which is the same as
//the parent except with an added parameter that contains the number doors on
//the car
class Cars extends Vehicle {
    
    //Constructor used to initialise data in class
    constructor(make, model, year, doors) {
        super(make, model, year);
        this.doors = doors
    } 

    //Logs parent info as well as the number of doors on the car to the console
    Information() {
        super.Information();
        console.log(`Doors ${this.doors}`);
    }
}

//Creates new vehicle and car objects, passes in the parameters to each object and calls
//the info functions on both objects
let myVehicle = new Vehicle("Toyota", "Corolla", 2000);
let myCar = new Cars("BMW", "BMW 2 Series", 2022, 4);
myVehicle.Information();
myCar.Information();