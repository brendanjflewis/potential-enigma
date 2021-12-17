// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = '';
  if (license === 'MIT') {
    badge = ''
  } else if (license === 'Apache 2.0') {
    badge = ''
  } else if (license === 'GPL v3.0') {
    badge = ''
  } else {
    badge = ''
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = '';
  if (license === 'MIT') {
    licenseLink = ''
  } else if (license === 'Apache 2.0') {
    licenseLink = 'https://www.apache.org/licenses/LICENSE-2.0'
  } else if (license === 'GPL v3.0') {
    licenseLink = 'https://www.gnu.org/licenses'
  } else {
    licenseLink = ''
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = ''
  if(license === 'None') {
    licenseSection = ''
  } else {
    licenseSection =
    `License: ${license}`
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## ${renderLicenseSection(answer.license)} ${renderLicenseBadge(answer.license)}
### ${renderLicenseLink(answer.license)}

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#Tests)
* [Questions](#Questions)

<a name="install"></a>
## Installation
${data.installation}

<a name="usage"></a>
## Usage
${data.usage}

<a name="contribute"></a>
## Contributing
${data.contribute}

<a name="test"></a>
## Tests
${data.testing}

<a name="questions"></a>
## Questions
* Email me at <a href= "mailto: ${data.email}">${data.email}</a>
* Check out my Github profile at <a href= "https://www.github.com/${data.github}">${data.github}</a>

`;
}

module.exports = generateMarkdown;
