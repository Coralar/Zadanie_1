'use strict'

/* function far (cel) {
    return (9/5) * cel + 32
};
console.log(far(30)); */
/* 
let y = 4;
let x = 6;
let max = (y > 6) ? y : x;
console.log (max); */

/* var a = 1, b = 1, c, d;
c = ++a; console.log(c); // 2
d = b++; console.log(d); // 1
c = (2+ ++a); console.log(c); // 5
d = (2+ b++); console.log(d); // 4
console.log(a); // 3
console.log(b); */

/* var a = 2;
var x = 1 + (a *= 2);
console.log(x); */

/* Объявить две целочисленные переменные — a и b и задать им произвольные начальные
значения. Затем написать скрипт, который работает по следующему принципу:
o если a и b положительные, вывести их разность;
o если а и b отрицательные, вывести их произведение;
o если а и b разных знаков, вывести их сумму;
Ноль можно считать положительным числом.

 */

/* let a = 14;
let b = -24;
let res;
if (a >= 0 && b >= 0) {
    res = a - b
}
else if (a < 0 && b < 0) {
    res = a * b
}
else if ((a * b)  < 0) {
    res = a + b
};
console.log(res);
 */

/* 4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch
организовать вывод чисел от a до 15.
 */

/* function nmb (a) {
for (b = a ; b <= 15 ; b++) {
    console.log(b)
}
}
nmb(4);
 */

/* const userAge = [19, 67, 10, 64, 11]; */

/* const userAgeFilter = [];

for (let index = 0; index < userAge.length; index++) {
    const element = userAge[index];
    if (element > 18) {
        userAgeFilter.push(element)
    };
}
console.log(userAgeFilter) */
/* 
const newUserAge = userAge.reduce((a, b) => (a - b));
console.log(newUserAge); */
/* 
const arr = [1, 2, 3, 4, 5];
for (let i =0; i < arr.length; i++) 
if ((arr[i] % 2) = 0) {
    console.log(arr[i] + ' - это четное число')
} else { 
    console.log(arr[i] + ' - это нечетное число')
} */

/* {
    console.log(arr[i]);
} */

/* const arr = [1, 2, 3, 4, 5];
for (let i =0; i < arr.length; i++) 
if ((arr[i] % 2) = 0) {
    console.log(arr[i] + ' - это четное число')
} else { 
    console.log(arr[i] + ' - это нечетное число')
} ????????????????? */

/* for (let i = 0; i <= 10; i++) {
    if (i === 0) {
    console.log(`${i} - это ноль`)
    }
    else if ((i % 2) == 0) {
    console.log(`${i} - это четное`)
    }
    else if ((i % 2) == 1) {
    console.log(`${i} - это нечетное`)
    }
} */

/* let arr = [1, 2, 3, 4, 5, 6, 7, 8]
arr.shift(3, 4)
delete arr[5, 6]
console.log(arr);  */

/* const arr = [1, 2, 3, 4, 5, 6, 7];
arr.splice(3, 4);
console.log(arr); */


/* let theBigString = "Pulp Fiction is an awesome movie!";
console.log(theBigString.slice(5, 12)); */

/* 
const arr = [];
for (let i = 0; i < 5; i++) {
    arr.push(Math.round(Math.random() * 100))
};
console.log(arr);
console.log(arr.map(item => item ** 2)); */

/* const arr = [];
for (let i = 0; i < 5; i++) {
  arr.push(Math.round(Math.random() * 10));
}
console.log(arr)
console.log(arr.map(item => item ** 2)); */


/* const arr = [4, 5, 3, 35, 55, 3];
delete arr.filter (function (item) {
    return (item == 3);
});
console.log(arr); */

/* const arr = [];
const arrFilter = [];
for (let i = 0; i < 5; i++) {
  arr.push(Math.round(Math.random() * 10));
}
console.log(arr);
console.log(arr.filter(filter => filter !== 3));
console.log(arr.map(elem => elem += elem * 0.1)); */

/* const arr = [];
const arrFilter = [];
for (let i = 0; i < 5; i++) {
  arr.push(Math.round(Math.random() * 10));
}

console.log(arr);
console.log(arr.filter(item => item !== 3));
console.log(arr.map(elem => elem += elem * 0.1));
 */

/* for (let i = 0; i < 9; console.log(i++)) {} */

/* for (let i = ""; i.length < 21; console.log(i += "x")) {}; */

/* for (let i = ''; i.length < 20; console.log(i += 'x')) {} */

/* for (let i = 1; i <= 20; i++) {
    console.log('x'.repeat(20))
} */

/* for (let i = ''; i.length < 20; console.log(i += 'x')) {} */

/* for (let i = 1; i <= 20; i++ ) {
    console.log('x'.repeat(i));
} */
