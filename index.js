// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = ({link, repo, description, install, usage, contribution, test}) =>
    `<h1><a href="${link}"></a>${repo}</h1>

## Description
${description}

## Installation
${install}

## Usage
${usage}

## Contributing
${contribution}

## Tests
${test}`;

inquirer
    .prompt(
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
        message: 'Enter installation instructions',
        name: 'install'

    },
    {
        type: 'input',
        message: 'Enter usage information',
        name: 'usage'

    },
    {
        type: 'input',
        message: 'Enter contribution guidelines',
        name: 'contribution'

    },
    {
        type: 'input',
        message: 'Enter test instructions',
        name: 'test'

    }
    )
    .then((answers) => {
        const data = questions(answers);

        fs.writeFile('README.md', data, (err) =>
            err ?  console.error(err) : console.log("README created!")
        )
    })

function writeToFile(fileName, data) {
    
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();