function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  }
  else if (license === 'Apache') {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache_2.0)`;
  }
  else if (license === 'GNU GPL') {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://opensource.org/licenses/gpl-3.0)`;
  }
  else if (license === 'Mozilla') {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
  }
  else {
    return '';
  }
}

function renderLicenseSection(license) {
  if (license === 'MIT' ) {
    return `
## License
${renderLicenseBadge(license)}`;
  }
  else {
    return '';
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

function tests(data) {
  if (data === '') {
    return;
  }
  else {
    return `
## Test
${data}`;
  }  
}

function generateMarkdown(data) {
  return `<h1><a href="${data.link}"></a>${data.repo}</h1>

## Description
${data.description}

## Installation
${data.install}

## Usage
${data.usage}

## Contributors
${contributor(data.contribution)}
${tests(data.test)}
${renderLicenseSection(data.license)}`;
}

module.exports = generateMarkdown;
