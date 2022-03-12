const inquirer = require('inquirer');
const fs = require('fs');

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
    },
    {
        type: 'list',
        message: 'Choose  a license',
        choices: ['MIT', 'Apache', 'GNU GPL', 'Mozilla'],
        name: 'contribution'
    }
    ])
    .then((answers) => {
        const data = questions(answers);

        fs.writeFile('./dist/README.md', data, (err) =>
            err ?  console.error(err) : console.log("README created!")
        )
    })