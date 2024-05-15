#! /usr/bin/env node
// Prompt the user to enter a number
const number = ('enter a number');
// Generate a dynamic number value (you can replace this with any method to generate a number)
import inquirer from "inquirer";
const dynamicValue = Math.floor(Math.random() * 100); // Generates a random number between 0 and 99
const answers = await inquirer.prompt([
    {
        name: "userNumber",
        type: "number",
        message: "Please guess a number beween 0 - 99:",
    }
]);
if (answers.userNumber > dynamicValue) {
    console.log("The entered number is greater than the dynamicValue " + dynamicValue);
}
else if (answers.userNumber === dynamicValue) {
    console.log("The entered number is equal to the dynamicValue " + dynamicValue);
}
else {
    console.log("The entered number is less than the dynamicValue " + dynamicValue);
}
