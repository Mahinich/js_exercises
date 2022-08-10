// for (let i = 5; i <= 10; i++) {
//   console.log(i);
// }

// for (let i = 20; i >=10; i--) {
//   if (i === 13) {
//     break;
//   }
//   console.log(i);
// }

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   } else {
//     continue;
//   }
// }

// for (let i = 2; i <= 16; i++) {
//   if (i % 2 === 0) {
//       continue;
//   } else {
//       console.log(i);
//   }
// }

// let i = 2;

// let i = 1;
// while (i < 16) {
//   i++;
//   if (i % 2 === 0) {
//     continue;
//   } else {
//     console.log(i);
//   }
// }

// function fifthTask() {
//   const arrayOfNumbers = [];

//   for (let i = 5; i <=10; i++) {
//       arrayOfNumbers[i - 4] = i;
//   }

//   console.log(arrayOfNumbers);
//   return arrayOfNumbers;
// }

// fifthTask();

// function firstTask() {
//   const arr = [3, 5, 8, 16, 20, 23, 50];
//   const result = [];

//   for (let i = 0; i < arr.length; i++) {
//       result[i] = arr[i];
//   }

//   console.log(result);
//   return result;
// }

// // firstTask(); 


// function secondTask() {
//   const data = [5, 10, 'Shopping', 20, 'Homework'];

//   for (i = 0; i <= data.length; i++) {
//     if (typeof(data[i]) === 'number') {
//       data[i] *= 2;
//     } else if (typeof(data[i]) === 'string') {
//       data[i] = data[i] + ` DONE`;
//     }
//   }
//   console.log(data);
// }

// secondTask();

// function thirdTask() {
//   const data = [5, 10, 'Shopping', 20, 'Homework'];
//   const result = [];
//   for (let i = 1; i <= data.length; i++) {
//     result[i - 1] = data[data.length - i]
//   }
//   console.log(result);
//   return result;
// }

// thirdTask();
 
// let result = '';
// const lines = 7;

// /* triangular straigth corner */

// for (let i = 1; i < lines; i++) {
//   for (let j = 0; j < i; j++) {
//     result += '*';
//   }
//   result += '\n'; 
// }

console.log(result);

/* triangular equel sides */

// const lines = 5;
// let result = '';
// debugger; 
// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     result += "\n";
// }

// console.log(result)

