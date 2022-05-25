//cd TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the title of your project?',
                name: 'Title',
                validate: (value) => { if (value) { return true } else { return 'i need a value' } }



            },
            {
                type: 'input',
                name: 'Description',
                message: 'Can you describe your project?',
                validate: (value) => { if (value) { return true } else { return 'i need a value' } }

            },
            {
                type: 'input',
                name: 'Table of Contents',
                message: 'Table of Contents',
               
            },
            {
                type: 'input',
                name: 'Installation',
                message: 'What are your installation requirements?',
                validate: (value) => { if (value) { return true } else { return 'i need a value' } }

            },
            {
                type: 'input',
                name: 'Usage',
                message: 'How do you use this application',
                validate: (value) => { if (value) { return true } else { return 'i need a value' } }

            },
            {
                type: 'list',
                message: 'What license would you like to use? Please select.',
                name: 'Licensing',
                choices: ['MIT', 'IBM', 'Apache'],
                validate: (value) => { if (value) { return true } else { return 'i need a value' } }

            },
            {
                type: 'input',
                name: 'Contributors',
                message: 'Would you like to add contributors?',
                validate: (value) => { if (value) { return true } else { return 'i need a value' } }

            },
            {
                type: 'input',
                name: 'Test',
                message: 'How will you run your test?',
                validate: (value) => { if (value) { return true } else { return 'i need a value' } }

            },
            {
                type: 'input',
                name: 'Questions',
                message: 'Questions',
                


            },
            {
                type: 'input',
                name: 'Git',
                message: 'Please enter your GitHub user name and link',
                validate: (value) => { if (value) { return true } else { return 'i need a value' } }

            }, {
                type: 'input',
                name: 'Email',
                message: 'What is your email?',
                validate: (value) => { if (value) { return true } else { return 'i need a value' } }

            },
           
            
        ])
        .then((data) => {
            console.log(data)
            fs.writeFileSync('./output/README.md', generateMarkdown(data))
        })
    

    }
// Function call to initialize app
init();
