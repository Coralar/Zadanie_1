"use strict"

/*     var car = {
        make: "Audi",
        model: "A5",
        year: 2015,
        color: "red",
        passengers: 2,
        power: 225,
        odometer: 0
        };
        function haveRoadTrip(my_car, distance){
        my_car.odometer += distance;
        }
        haveRoadTrip(car, 150);
        console.log(car.odometer);
         */


const numbers = {
    keyin1: 1,
    keyin2: 2,
    keyin3: 3,
    keyin4: 4,
    keyin5: 5,
    keyin6: 6,
    keyin7: 7,
    }

 /*    var shout = {
        _message: "HELLO!",
        get message() {
        return this._message;
        },
        set message(value) {
        this._message = value.toUpperCase();
        }
        };
        shout.message = "This is sparta!";
        console.log(shout.message); */

/* for (const prop in numbers) {
    console.log(numbers[prop])
} */

/* const props = Object.values(numbers);
console.log(props); */

/* console.log(Object.values(numbers).filter(item => item > 3)); */ 

const props = Object.keys(numbers);
