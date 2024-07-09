// function filterArray() {
//   let users = [
//     { name: "John", age: 25, occupation: "gardener" },
//     { name: "Lenny", age: 51, occupation: "programmer" },
//     { name: "Andrew", age: 43, occupation: "teacher" },
//     { name: "Peter", age: 81, occupation: "teacher" },
//     { name: "Anna", age: 47, occupation: "programmer" },
//     { name: "Albert", age: 76, occupation: "programmer" },
//   ];

//   let filteredUsers = [];
//   for (let i = 0; i < users.length; i++) {
//     if (users[i].age > 40 && users[i].occupation === "programmer") {
//       filteredUsers = [...filteredUsers, users[i]];
//     }
//   }
//   return filteredUsers;
// }

// console.log(filterArray());

// function countTrue(arr){
//    let count = 0;
//  for(let i=0; i< arr.length; i++){
//      if(arr[i] === true){
//       count++;
//      }
  
//  }
//  return count;

// }

// console.log(countTrue([true,false,false,true,true]))

function redundant(str){
  return function(){
    str
  }

}
console.log(redundant('apple'))