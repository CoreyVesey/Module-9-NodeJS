// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    message: "Title of your project",
    name: "Title"
}, {
    type: "input",
    message: "What was your motivation for doing this project? Why did you build this project? What problem does it solve and what did you learn?",
    name: "Description"
}, {
    type: "input",
    message: "What are the steps required to install your project? Provide a step by step explaination.",
    name: "Installation"
}, {
    type: "input",
    message: "Provide instructions on how the project is used. Provide screenshots when needed.",
    name: "Usage"
}, {
    type: "list",
    message: "What licensing is being used for this project?",
    choices: ["None", "Apache License 2.0", "GNU General Public License v3.0", "MIT"],
    name: "License"
}, {
    type: "input",
    message: "Include guidelines for other developers to contribute to your application or package here.",
    name: "Contributing"
}, {
    type: "input",
    message: "Include any tests that you wrote and ran here",
    name: "Tests"
}, {
    type: "input",
    message: "",
    name: "Questions"
}, {
    type: "input",
    message: "What is your GitHub username?",
    name: "Username"
}, {
    type: "input",
    message: "What is your email address?",
    name: "Email"
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeToFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        }
        console.log(Success);
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((responses) => {
        fs.appendFile("README.md", generateMarkdown({...responses}), (err) => 
        err ? console.error(err) : console.log("commit logged!"))
    })
}

// Function call to initialize app
init();
