// // function getLength() {
// //   let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// //   let length = text.length;
  
// //   return length;
// // }
// // console.log(getLength());


// function reverseString(str) {
//     // Step 1. Use the split() method to return a new array
//     var splitString = str.split(""); // var splitString = "hello".split("");
//     // ["h", "e", "l", "l", "o"]
 
//     // Step 2. Use the reverse() method to reverse the new created array
//     var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
//     // ["o", "l", "l", "e", "h"]
 
//     // Step 3. Use the join() method to join all elements of the array into a string
//     var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
//     // "olleh"
    
//     //Step 4. Return the reversed string
//     return joinArray; // "olleh"
// }
 
// console.log(reverseString("hello"))



function titleCase() {
    const mySentence = "programming is an awesome skill";
    const words = mySentence.split(" ");
    
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    }
    
     return words.join(" ");
  }
  console.log(titleCase()) ;