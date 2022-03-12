const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'Add your deployment link:',
            name: 'link'
        },
        {
            type: 'input',
            message: 'What is the name of your repo?',
            name: 'repo'
        },
        {
            type: 'input',
            message: 'Add a README description:',
            name: 'description'
        },
        {
            type: 'input',
            message: 'Enter usage walkthrough video link:',
            name: 'usage'
        },
        {
            type: 'input',
            message: 'Enter contributors(If none press enter):',
            name: 'contribution'
        },
        {
            type: 'list',
            message: 'Choose  a license',
            name: 'license',
            choices: ['MIT', 'Apache', 'GNU GPL', 'Mozilla']
        }
        ])
        .then((data) => {
            data = generateMarkdown(data);

            fs.writeFile('./dist/README.md', data, (err) =>
                err ?  console.error(err) : console.log("README created!")
            )
        })