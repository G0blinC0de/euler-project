export default function EulerNumbers(number) {
    this.number = number;
}

EulerNumbers.prototype.eulerNumber = function () {
    let sum = 0;
    for (let i = 1; i <= this.number - 1; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
        this.eulerNumber = sum;
    }
}


// let sumNumber = function(numbers){
//     let sum = 0;
//     for(let i = 0; i <= numbers - 1; i++){
//         if(i % 3 === 0 || i % 5 === 0){
//             sum += i;
//         }
//     }
//     return sum
// }

// const number = new EulerNumber(100);

// randomArray.threeMultiple()

// let threeMultiple = function (array) {
//     for (i = 0; i <= 1000; i += 3) {
//         array.push([i]);
//     }
// };

// let fifteenPrune = function (array) {
//     // yay! this works!
//     for (i = 330; i >= 0; i -= 5) {
//         array.splice(i ,1);
//     }
// };

// let fiveMultiple = function (array) {
//     for (i = 0; i <= 1000; i += 5) {
//         array.push([i]);
//     }
// };

// let summedArray = function (array) {
//     let sum = 0;
//     array.forEach(function(element) {
//         sum += element;
//       });
// }

// let sumArray = function (array, sum) {
//     for (i = 0; i >= array.length - 1; i += 1) {
//       sum += ([i]);
//       console.log(sum);
//     }
// };

// let eulerArray = [];
// let eulerSum = 0;
// threeMultiple(eulerArray);
// fiveMultiple(eulerArray);
// fifteenPrune(eulerArray);
// sumArray(eulerArray, eulerSum);

// let numbers = 1000;