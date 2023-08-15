const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown'); // Assuming generateMarkdown.js is in the same directory

// Array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Enter your project title:'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a project description:'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Enter installation instructions:'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Enter usage information:'
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'Apache', 'GPL', 'None']
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Enter contribution guidelines:'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Enter test instructions:'
  },
  {
    type: 'input',
    name: 'githubUsername',
    message: 'Enter your GitHub username:'
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:'
  }
];

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data);
}

// Function to initialize app
function init() {
  inquirer.prompt(questions)
    .then((userInput) => {
      userInput.licenseBadge = renderLicenseBadge(userInput.license);
      userInput.licenseDescription = renderLicenseDescription(userInput.license);
      const readmeContent = generateMarkdown(userInput);
      writeToFile('README.md', readmeContent);
      console.log('README generated successfully!');
    })
    .catch((error) => {
      console.error('An error occurred:', error);
    });
}

// Initialize the application
init();

// Function that returns a license badge based on the license
function renderLicenseBadge(license) {
  // Add your badge URLs based on the selected license
  const badges = {
    'MIT': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    'Apache': '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    'GPL': '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    'None': ''
  };
  return badges[license];
}

// Function that returns the license description based on the license
function renderLicenseDescription(license) {
  // Add your license descriptions based on the selected license
  const descriptions = {
    'MIT': 'Licensed under the MIT License.',
    'Apache': 'Licensed under the Apache License 2.0.',
    'GPL': 'Licensed under the GNU General Public License v3.',
    'None': 'No license.'
  };
  return descriptions[license];
}