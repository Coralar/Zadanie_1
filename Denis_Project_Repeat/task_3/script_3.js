'use strict'
/* function getDigitsOfNumber (num) {
    if (!Number.isInteger(num) || num < 0 || num > 999) {
        console.log ('Число должно быть...')
        return {};
    };
    return {
    firstdigit: num % 10,
    seconddigit: ((num / 10) % 10),
    third: Math.floor(num / 100)
    }
}
console.log(getDigitsOfNumber(156)); */

/* const basket = {
   goods: [
        {
            id: 137,
            price: 150,
            name: 'Notebook'
        },
        {
            id: 193,
            price: 218,
            name: 'Mouse'
        }

    ],
    countCartPrice () {
        return this.goods.reduce((totalPrice, cartItem) => totalPrice += cartItem.price, 0);
    }
    
};
console.log(basket.countCartPrice()); */


/* function getPropName (some) {
    return 'texttext' + some
}

const myCar = {
    manufactorer: 'Toyota',
    color: 'blue',
    price: 28193,
    possibleColors: ['green', 'red', 'blue'],
    'prop with space': 3829,
    newProp: getPropName(39183),
    beep() {
        console.log('beep')
    },
} */

/* myCar.some = 'some' */

/* const userSelect = 'manufactorer'

myCar.beep(); */

/* console.log(myCar) */

/* myCar.possibleColors.forEach((color) => 
console.log(color)); */

/* for (const prop in myCar) {
    console.log(myCar[prop])
} */

/* const props = Object.keys(myCar)

props.forEach((prop) => {
    console.log(myCar[prop])
}) */
/* console.log(props) */

/* const obj = {
    prop: 1,
    prop2: 2
};
function inc (obj) {
    obj.prop++
};
inc (obj);
console.log(obj.prop); */

/* function getobj (num) {
    return {
        num,
        saynumber() {
            console.log(this.num)
        }
    };
};
const myobj = getobj(25);
getobj.saynumber */

/* const cart = {
    goods: [ 
        {
            id: 1343,
            name: 'notebook',
            price: 2023
        },
        {
            id: 139,
            name: 'cup',
            price: 829
        }
    ],
    cartCountPrice () {
        return this.goods.reduce((totalPrice, cartItem) => totalPrice += cartItem.price, 0)
    }
}
console.log(cart.cartCountPrice()); */

/* function saynumber (number) {
    return {
        number,
        saynumber () {
            console.log(this.number)
        }
    }

}
const myobj1 = saynumber (10);
const myobj2 = saynumber (25); */