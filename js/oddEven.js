var numberCheck = 0;

function oddEven(numberCheck) {
    let i = 0;
 
    if (numberCheck % 2 !== 0) {
      console.log("not an even number");
    } else {
      console.log(`an even number ${numberCheck}`);
      
    }

    }
    
oddEven(16)

// let num= [["sam","john","jones"],83,["kelvin","hart"],85,["durant","kevin"],93,72]
// console.log(`${num[0][2]} is not ${num[0][0]} but ${num[4][1]} ${num[0][1]} is ${num[3]} years old  `)
// console.log(num.push('zubair'))
// console.log(num.length)

// num[1]=34
// console.log(num)

// let students = {
//     name : "bashir",
//     age :20,
//     grade: 100

// }
// console.log(students.name)

//  Initializing a gimli object
// const gimli = {
//     name: "Gimli",
//     race: "dwarf",
//     weapon: "axe",
//     greet: function() {
//         return `Hi, my name is ${this.name}!`;
//     },
// };
// console.log(gimli)



//  Initializing a gimli object
// var gimli = {
//     name: "Gimli",
//     race: "dwarf",
//     weapon: "axe",
//     greet: function() {
//         return `Hi, my name is ${this.name}!`;
//     },
// };
// // Retrieving the value of the weapon property using the dot notation
// console.log(gimli.weapon); // prints “axe”
// // Retrieving the value of the weapon property using the bracket notation
// console.log(gimli["race"]); // prints “axe”


// //  Initializing a gimli object
// var gimli = {
//     name: "Gimli",
//     race: "dwarf",
//     weapon: "axe",
//     greet: function() {
//         return `Hi, my name is ${this.name}!`;
//     },
// };

// // Adding a new age property to gimli using the dot notation
// gimli.age = 139;

// // Adding new age property to gimli using the dot notation
// gimli["age"] = 139;
// // Adding a new fight method to gimli
// gimli.fight = function() {
//     return `Gimli attacks with an ${this.weapon}.`;
// }

// console.log(gimli)
// // prints {name: "Gimli", race: "dwarf", weapon: "axe", age: 139, greet: ƒ, fight: ƒ}

// // Calling the newly created method fight
// console.log(gimli.fight());
// // prints "Gimli attacks with an axe."