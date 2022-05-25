// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
   
  return `
  # ${data.Title}                [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  # Description
  ${data.Description}
  # Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Licensing](#licensing)
  * [Contributors](#contributors)
  * [Test](#test)
  * [Questions](#questions)
 
  # Installation
  'The following must be installed to run this app
  ${data.Installation}',

  # Usage
  ${data.Usage},

  # Licensing 
  This project is licensed under the ${data.Licensing} license.
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  # Contributors
  ${data.Contributors},

  # Test
  ${data.Test},

  
  # Questions
  If you have any questions about this repository you can contact me at
  ${data.Git} or email me at ${data.Email}.`



 
}

module.exports = generateMarkdown;
