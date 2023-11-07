
const values = [5, 10, 35, 48, 51,20,45,75];


console.log("Using a for loop:");
for (let i = 0; i < values.length; i++) {
  console.log(values[i]);
}


console.log("Using a while loop:");
let i = 0;
while (i < values.length) {
  console.log(values[i]);
  i++;
}


console.log("Using a do while loop:");
let j = 0;
do {
  console.log(values[j]);
  j++;
} while (j < values.length);



