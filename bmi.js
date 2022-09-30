
/**
 * This class will take
height in meters and weight in Kg 
as arguments and will calculate that persons Body
Mass Index (BMI).
 */
class BMI {

    //Constructor used to initialise data in class
    constructor(height, weight) {
        this.height = height;
        this.weight = weight;
    }

    //calculates bmi for user and returns result
    calculateBMI() {
        let bmi = this.weight / (this.height ** 2);
        return bmi;
    }

}



//Creates new bmi object and passes in values
let bmiObject = new BMI(2, 50);

//Show result on the console
console.log(bmiObject.calculateBMI());

