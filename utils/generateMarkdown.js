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
  if (license === 'MIT' || 'Apache' || 'GNU GPL' || 'Mozilla') {
    return `
<h2 id="license">License</h2>
${renderLicenseLink(license)}`;
  }
  else {
    return '';
  }
}

function renderTOC(license) {
  if (license === 'MIT' || 'Apache' || 'GNU GPL' || 'Mozilla') {
    return `<ul><li><a href="#install">Installation</a></li>
<li><a href="#usage">Usage</a></li>
<li><a href="#cont">Contributors</a></li>
<li><a href="#test">Test</a></li>
<li><a href="#license">License</a></li></ul>`;
  }
  return `<ul><li><a href="#install">Installation</a></li>
<li><a href="#usage">Usage</a></li>
<li><a href="#cont">Contributors</a></li>
<li><a href="#test">Test</a></li></ul>`;
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

<h2>Description</h2>
${data.description}

<h2>Table Of Contents</h2>
${renderTOC(data.license)}

<h2 id="install">Installation</h2>
To install dependencies use
<pre>npm install</pre>

<h2 id="usage">Usage</h2>
To start the Readme Generator use
<pre>npm start</pre>
${usage(data.usage)}

<h2 id="cont">Contributors</h2>
${contributor(data.contribution)}

<h2 id="test">Test</h2>
To run a test use
<pre>npm test</pre>
${renderLicenseSection(data.license)}`;
}

module.exports = generateMarkdown;
