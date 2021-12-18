// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = '';
  if (license === 'MIT') {
    badge = '![License](https://img.shields.io/badge/license-MIT-blue)'
  } else if (license === 'Apache 2.0') {
    badge = '![License](https://img.shields.io/badge/license-Apache%202.0-yellow)'
  } else if (license === 'GPL v3.0') {
    badge = '![License](https://img.shields.io/badge/license-GPL%20v3-red)'
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
    licenseLink = 'https://choosealicense.com/licenses/mit/'
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

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

<a name="installation"></a>
## Installation
${data.installation}

<a name="usage"></a>
## Usage
${data.usage}

<a name="license"></a>
## License
## ${renderLicenseSection(data.license)} ${renderLicenseBadge(data.license)}

* ${renderLicenseLink(data.license)}

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
