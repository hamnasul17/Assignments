// Set up two different variables with different values.
let a: number = 11;
let b: number = 5;

// Call a function with these variables as arguments and output the result using console.log.
function num(a: number, b: number) {
  let result = a + b;
  console.log(result);
}
num(a, b);

// Create a second call to the function with two more numbers as arguments

let c: number = 4;
let d: number = 2;
num(c, d);