const array = [5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100];




//for loop with break and continue.
console.log("Using a for loop with break and continue:");
for (let i = 0; i < array.length; i++) {
  if (array[i] === 60) {
    break; 
    // Stop the loop when the value is 60
  }
  if (array[i] % 20 === 0) {
    continue; 
    // Skip array that are divisible by 20
  }
  console.log(array[i]);
}




// while loop with break and continue
console.log("Using a while loop with break and continue:");
let j = 0;
while (j < array.length) {
  if (array[j] === 80) {
    break; 
    // Stop the loop when the value is 80
  }
  if (array[j] % 30 === 0) {
    j++;
    continue; 
    // Skip array that are divisible by 30
  }
  console.log(array[j]);
  j++;
}




//do while loop with break and continue
console.log("Using a do...while loop with break and continue:");
let k = 0;
do {
  if (array[k] === 100) {
    break; 
    // Stop the loop when the value is 100
  }
  if (array[k] % 40 === 0) {
    k++;
    continue; 
    // Skip array that are divisible by 40
  }
  console.log(array[k]);
  k++;
} while (k < array.length);
