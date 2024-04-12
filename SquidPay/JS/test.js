// "reduce" method
const person = [{name: "Berto", age: 17},
                {name: "Berta", age: 18},
                {name: "Berna", age: 19},
                {name: "Berno", age: 20}];

const Total = person.reduce((currtentTotal, persons) => {
  return persons.age + currtentTotal
}, 0)
console.log(Total);

const PasedPerson = JSON.stringify(person);
console.log(PasedPerson);





// "every" method 
const every = person.every((persons) => {
  return persons.age <= 20 // true
  // return persons.age <= -20 // false
})
console.log(every)





// "map" method
const map1 = person.map((persons) => {
  return persons.name
})
console.log(map1)





const map2 = person.map((persons) => {
  return persons.age
})
console.log(map2)





// "filter" method 
const filter = person.filter((persons) => {
  return persons.age <= 20;
})
console.log(filter)





// "concat" method
const array1 = [1, 2, 3];
const array2 = [4, 2, 1, 5, 6];

const mergedArray = array1.concat(array2);
mergedArray.sort((a, b) => a - b);

console.log(mergedArray);





// "for" method
let sum = 0

for(let i = 0; i < mergedArray.length; i++){
  sum += mergedArray[i];
}

console.log(sum);




// "includes" method
const array3 = [4, 2, 1, 5, 6];

const includes = array3.includes(6)
console.log(includes);





// "find" method
const find = person.find((persons) => {
  return persons.name === "Berto";
})
console.log(find);





// "forEach" method 
person.forEach((persons) => {
  console.log(persons.name);
})





// "some" method
const some = person.some((persons) => {
  // return persons.age <= 10; // false
  return persons.age <= 20; // true
})
console.log(some);



for(let i = 0; i < 4; i++){
  for(let j = 0; j < 4; j++){
    for(let k = 0; k < 4; k++){
      for(let l = 0; l < 4; l++){
        console.log(`i: ${i}, j:${j}, k: ${k}, l: ${l}`);
      }
    }
  }
}





function fib(n){
  let result = 0;
  for(let i = 1; i <= n; i++){
    if(n <= 2){
      result = 1
    }

    else {
      console.log('test');
    }
  }


  return result
}

console.log(fib(2))

function square(n){
  // let result = 0;
  for (let i = 1; i <= n; i++) {
    for(let j = 1; j <=n; j++){
      console.log('asdf')
    }
  }
}

console.log(square(10))

function secretTest(n){

  let TheNumber = 10;
  let result = false;
  
  if(n <= TheNumber){
    return result = true;
  } else {
    return result = false;
  }

}

console.log(secretTest(20));

function Cars(name){
  this.name = name;
}

Cars.prototype.sayName = function(){
  console.log('This is the ' + this.name);
}

var car1 = new Cars("Toyota");

car1.sayName();







function Persons(address){
  this.address = address;
}


Persons.prototype.sayAddress = function(){
  console.log('the person\s address is ' + this.address)
}

var Yuri = new Persons('30 Block 2 Pook Palaris U.P');
Yuri.sayAddress();

var arrays = [i];
var numero = 10;
for(var i = 0; i <= numero; i++){
  arrays.push(i);
}


console.log(arrays)

