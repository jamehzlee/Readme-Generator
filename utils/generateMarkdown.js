function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  }
  else if (license === 'Apache') {
    return `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
  }
  else if (license === 'GNU GPL') {
    return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
  }
  else if (license === 'Mozilla') {
    return `![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`;
  }
  else {
    return '';
  }
}

function renderLicenseLink(license) {
  if (license === 'MIT') {
    return `<a href='https://opensource.org/licenses/MIT'>${license} License</a>`
  }
  else if (license === 'Apache') {
    return `<a href='https://opensource.org/licenses/Apache_2.0'>${license} License</a>`;
  }
  else if (license === 'GNU GPL') {
    return `<a href='https://opensource.org/licenses/gpl-3.0'>${license} License</a>`;
  }
  else if (license === 'Mozilla') {
    return `<a href='https://opensource.org/licenses/MPL-2.0'>${license} License</a>`;
  }
  else {
    return '';
  }
}

function renderLicenseSection(license) {
  if (license === 'MIT' || 'Apache' || 'GNU GPL' || 'Mozilla' ) {
    return `
## License
${renderLicenseLink(license)}`;
  }
  else {
    return '';
  }
}

function usage(data) {
  if (data === '') {
    return '';
  }
  else {
    return `<a href="${data}">Walkthrough Video on Screencastify</a>`;
  }   
}

function contributor(data) {
  if (data === '') {
    return 'There were no other contributors.';
  }
  else {
    return data;
  }
}

function generateMarkdown(data) {
  return `<h1><a href="${data.link}">${data.repo}</a></h1>

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Installation
To install dependencies use
<pre>npm install</pre>

## Usage
To start the Readme Generator use
<pre>npm start</pre>
${usage(data.usage)}

## Contributors
${contributor(data.contribution)}

## Test
To run a test use
<pre>npm test</pre>
${renderLicenseSection(data.license)}`;
}

module.exports = generateMarkdown;
