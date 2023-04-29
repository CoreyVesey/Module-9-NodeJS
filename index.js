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
    message: "Table of Contents",
    name: "Table of Contents"
}, {
    type: "input",
    message: "What are the steps required to install your project? Provide a step by step explaination.",
    name: "Installation"
}, {
    type: "input",
    message: "Provide instructions on how the project is used. Provide screenshots when needed.",
    name: "Usage"
}, {
    type: "input",
    message: "What licensing is being used for this project?",
    name: "License"
}, {
    type: "input",
    message: "",
    name: "Contributing"
}, {
    type: "input",
    message: "",
    name: "Tests"
}, {
    type: "input",
    message: "",
    name: "Questions"
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
