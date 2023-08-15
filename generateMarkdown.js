// Function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
  
  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## License
  ${data.licenseBadge} - ${data.licenseDescription}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  GitHub: [${data.githubUsername}](https://github.com/${data.githubUsername})
  Email: ${data.email}
  `;
  }
  
  module.exports = generateMarkdown;