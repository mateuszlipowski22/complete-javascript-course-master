'use strict';

const Person = function (firstName, birthYear) {
  //Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  //   this.caclAge = function(){
  //     console.log(2037-this.birthYear);
  //   }
};

const jonas = new Person('Jonas', 1991);

//1 empty object is created
//2 function is called, this{}
//3 {} linked to prototype
//4 function automatically return {}

console.log(jonas);

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);

console.log(jonas instanceof Person);
