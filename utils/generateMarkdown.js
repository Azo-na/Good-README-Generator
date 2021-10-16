// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# Project Title : ${data.title}
## Project Description:
${data.desc}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Test](#test)
* [Questions](#questions)
* [License](#license)
* [Author] (#Author)
* [Badges](#badges)
## Installation
${data.install}
## Usage
${data.usage}
## Contributors
${data.contributors}
## Test
${data.test}
## Questions
If you have any questions, contact ${data.username} on GitHub.
## License
## Author 
![GitHub profile pic](${data.image})
## Badges
![badmath](https://img.shields.io/github/repo-size/${data.username}/${data.repo})
`;
}

module.exports = generateMarkdown;