// let count = 1;

// while(count<=20){
//     console.log(`${count}. am sorry`)
//     count++;
// }

var numbers = [19, 65, 1, 2, 6, 1, 9, 9, 2, 1]; 
var sum = 0;
for ( var i in numbers ) {
        if ( i % 2 == 0 ) continue;
        sum += numbers[i]
}

console.log(sum);