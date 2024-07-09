// let count = 1;

// while(count<=20){
//     console.log(`${count}. am sorry`)
//     count++;
// }

// function arrSum(){
// var numbers = [19, 65, 1, 2, 6, 1, 9, 9, 2, 1];
// var sum = 0;
// for ( var i in numbers ) {
//       //  if ( i % 2 == 0 ) continue;
//     sum += numbers[i]
// }
// return sum;

// // }
// console.log(arrSum());

function sevenBoom(arr) {
  let result = 'there is no 7 in the array';
  for (let i = 0; i < arr.length; i++) {

    const convertString = String(arr[i]);
    if(convertString.includes('7'));
    result = 'BOOM';
    break;
   
  }
  return result;
}
sevenBoom([3, 5, 10, 4, 7, 8]);
