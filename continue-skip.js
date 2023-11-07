

console.log("Using break in a for loop to stop at 5:");
for (let i = 1; i <= 15; i++) {
  if (i === 5) {
    break; 
    // Stop the loop when i is 5
  }
  console.log(i);
}




console.log("Using continue in a for loop to skip even numbers:");
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    continue; 
    // Skip even numbers
  }
  console.log(i);
}




console.log("Using continue in a while loop:");
let i = 1;
while (i <= 5) {
  if (i === 3) {
    i++;
    continue; // Skip when i is 3
  }
  console.log(i);
  i++;
}


