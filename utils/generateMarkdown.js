// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![Github license]()`
  }
  return "";
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return ` # ${data.Title}
          
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.Description}

## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
          
## Installation
  The dependencies listed below must be installed to run this application.
  ${data.Installation}

## Usage
  The instructions below will inform you how to use this application.
  ${data.Usage}

## License
  This application uses the ${data.License} license.

## Contributing
  Contributors: 
  ${data.Contributing}

## Tests
  The tests below will show how the application is run.
  ${data.Tests}

## Questions
  If you have any questions about the application or repository please contact me at 
  https://github.com/${data.Username}/${data.Title} or
  ${data.Email}

`;
}

module.exports = generateMarkdown;
