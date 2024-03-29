
/*
let js = 'amazing';
// console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23);

let firstName = "Jonas";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let jonas_matilda = "JM";
let $function = 23;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = 'Programmer';
let myCurrentJob = 'Teacher';

let job1 = 'programmer';
let job2 = 'treacher';

console.log(myFirstJob);


let javaScriptIsFun = true;
console.log(javaScriptIsFun);

// console.log(typeof true);
console.log(typeof javaScriptIsFun);
// console.log(typeof 23);
// console.log(typeof "jonas");

javaScriptIsFun = 'YES!';
console.log(typeof javaScriptIsFun);


let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);

console.log(typeof null);


let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
// const job;

var job = "programmer";
job = "teacher";

lastName = "Schmedtmann";
console.log(lastName);


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2**3 means 2 to the power of 3 = 2*2*2

const firstName = "Jonas";
const lastName = "Schmedtmann";
console.log(firstName + " " + lastName);

//Assignment operator
let x = 10 + 5; //15
x += 10; //x=x+10=25
x *= 4; //x=x*4=100
x++; //x=x+1
x--; //x=x-1
console.log(x);

//Comparison operators
console.log(ageJonas > ageSarah); // <. >, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020;
console.log(now - 1991 > now - 2018);

console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5; //x=y=10
console.log(x, y)

const averageAge = (ageJonas + ageSarah) / 2
console.log(ageJonas, ageSarah, averageAge);


const firstName = "Jonas";
const job = "teacher";
const birthYear = 1990;
const year = 2037;

const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);

console.log('Just a regular string....');

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);



const age = 15;

if (age >= 18) {
    console.log('Sarah can start driving license');
} else {
    const yearsLeft = 18 - age
    console.log(`Sarah is too young. Wait another ${yearsLeft} years`);
}

const birthYear = 1991;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);


//type conversion
const inputYear = "1990";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23), 23);

//type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' + '10' + 3);
console.log('23' * '10');
console.log('23' / '10');

let n = '1' + 1;
n = n - 1;
console.log(n);


// 5 falsy values: 0, "", undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(""));
console.log(Boolean(NaN));
console.log(Boolean("Jonas"));
console.log(Boolean({}));

const money = 0;

if (money) {
    console.log("Don't spend it all :)");
} else {
    console.log('You should get a job');
}

let height;
if (money) {
    console.log("YAY! Height is defined");
} else {
    console.log('Height is undefined');
}



const age = 18;

if (age === 18) console.log('You just become ana adult (strict');

if (age == 18) console.log('You just become ana adult (loose)');


const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof (favourite));

if (favourite === 23) {
    console.log("Cool! 23 is an amazing number!");
} else if (favourite === 7) {
    console.log("7 is also cool number!");
} else if (favourite === 9) {
    console.log("9 is also cool number!");
} else {
    console.log("Number is not 23 or 7");
}

if (favourite !== 23) {
    console.log("Why not 23?");
}


const hasDrivingLicense = true;
const hasGoodVision = true;

console.log(hasDrivingLicense && hasGoodVision);
console.log(hasDrivingLicense || hasGoodVision);
console.log(!hasDrivingLicense);


if (hasDrivingLicense && hasGoodVision) {
    console.log("Sarah is able to drive");
} {
    console.log('Someone else should drive');
}

const isTired = true;
console.log(hasDrivingLicense || hasGoodVision || isTired);

if (hasDrivingLicense && hasGoodVision && !isTired) {
    console.log("Sarah is able to drive");
} {
    console.log('Someone else should drive');
}


const day = 'monday';

switch (day) {
    case 'monday':
        console.log('PLan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednsday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend:D');
        break;
    default:
        console.log('Not a valid day');
}

if (day === 'monday') {
    console.log('PLan course structure');
    console.log('Go to coding meetup');
} else if (day === 'tuesday') {
    console.log('Prepare theory videos');
} else if (day === "wednsday" || day === "thursday") {
    console.log('Write code examples');
} else if (day === "friday") {
    console.log('Record videos');
} else if (day === "saturday" || day === "sunday") {
    console.log('Enjoy the weekend:D');
} else {
    console.log('Not a valid day');
}


3 + 4;
1991;
true && false && !false;

if (23 > 10) {
    const str = '23 is bigger';
}
const str = '23 is bigger';

console.log(`I'm ${2037 - 1991 + str} `);

*/

const age = 15;
age >= 18 ? console.log('I like to dring wine') : console.log('I like to dring water')

const drink = age >= 18 ? 'wine' : 'water';

let drink2;
if (age > 18) {
    drink2 = 'wine';
} else {
    drink2 = 'water';
}

console.log(drink);
console.log(drink2);

console.log(`I like to dring ${age >= 18 ? 'wine' : 'water'}`);