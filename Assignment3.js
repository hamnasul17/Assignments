#! /usr/bin/env node
//prompt the user to enter a name
const name = ('please enter a name');
import inquirer from "inquirer";
let friendName = await inquirer.prompt([
    {
        name: "name1",
        type: "input",
        message: "please enter a name?",
    }
]);
switch (friendName.name1) {
    case "mobahila":
        console.log("yes, she is your known friend");
        break;
    case "momal":
        console.log("yes, she is your known friend");
        break;
    case "tehreem":
        console.log("yes, she is your known friend");
        break;
    case "umymah":
        console.log("yes, she is your known friend");
        break;
    case "ayesha":
        console.log("yes, she is your known friend");
        break;
    case "hooria":
        console.log("yes, she is your known friend");
        break;
    default:
        console.log("sorry this name is not recognized as a known friend");
}
