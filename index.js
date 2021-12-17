// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const { join } = require('path/posix');

// TODO: Create an array of questions for user input
const questions = [
    'What is the title of your project?',
    'Please provide a description of your project.',
    'Provide installation instructions.',
    'Provide any information regarding the usage of this project.',
    'Provide any guidelines on how to contribute to this project.',
    'Provide instructions for testing this project.',
    'Which license is your application covered by?',
    'Please enter you GitHub username.',
    'Please enter your email address.',
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
