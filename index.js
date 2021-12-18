// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


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
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw (err);
        console.log('Your professional README file has been successfully created!');
    })
};

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: questions[0],
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('You need to enter a title for your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: questions[1],
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('A description of your project is required.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: questions[2],
            validate: installationInput => {
                if (installationInput) {
                    return true;
                } else {
                    console.log('Please provide instructions for installation.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: questions[3],
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please provide any usage information.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contribute',
            message: questions[4],
            validate: contributeInput => {
                if (contributeInput) {
                    return true;
                } else {
                    console.log('Please provide contribution guidelines.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'testing',
            message: questions[5],
            validate: testingInput => {
                if (testingInput) {
                    return true;
                } else {
                    console.log('Please provide instructions for testing this project.');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: questions[6],
            choices: ['MIT', 'Apache 2.0 ', 'GPL v3.0', 'None']
        },
        {
            type: 'input',
            name: 'github',
            message: questions[7],
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please provide your Github username.');
                    return false;
                }
            }

        },
        {
            type: 'input',
            name: 'email',
            message: questions[8],
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please provide your email address.');
                    return false;
                }
            }
        }])
        .then((answers) => {
            console.log(answers);
            return generateMarkdown(answers);
        })
        .then((markdown) => {
            return writeToFile('./utils/generatedREADME.md', markdown);
        })

};

// Function call to initialize app
init();
