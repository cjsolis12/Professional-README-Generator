// A function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT License":
      return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
    case "Apache 2.0":
      return "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
    case "Mozilla Public license 2.0":
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    case "GNU AGPLv3":
      return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
    case "GNU GPLv3":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    case "Boost Software License 1.0":
      return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
    case "the Unilicense":
      return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
    default:
      return "";
  }
}

// A function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT License":
      return "https://opensource.org/licenses/MIT";
    case "Apache 2.0":
      return "https://opensource.org/licenses/Apache-2.0";
    case "Mozilla Public license 2.0":
      return "https://www.mozilla.org/en-US/MPL/2.0/";
    case "GNU AGPLv3":
      return "https://www.gnu.org/licenses/agpl-3.0";
    case "GNU GPLv3":
      return "https://www.gnu.org/licenses/gpl-3.0";
    case "Boost Software License 1.0":
      return "https://www.boost.org/LICENSE_1_0.txt";
    case "the Unilicense":
      return "http://unlicense.org/";
    // Add cases for other licenses as needed
    default:
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    const licenseLink = renderLicenseLink(license);
    return `This project is covered under the ${license} license.
     For more information, see [${licenseLink}](${licenseLink}).`
    ;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = ({title, description, installation, usage, contribution, license, testCommand, github, email,}) => {
  const licenseSection = renderLicenseSection(license);
  const licenseBadge = renderLicenseBadge(license);
  return `
   # ${title}\n${licenseBadge}
 

   ## Description
   ${description}
 
   ## Table of Contents 
   - [Installation](#installation)
   - [usage](#usage)
   - [License](#license)
   - [Contributing](#contributing)
   - [Tests](#tests)
   - [Questions](#questions)
 

   ## Installation Instructions
   - ${installation}
 

   ## Usage
   - ${usage}
 

   ${license ? `## License\n${licenseSection}\n` : ""}
 

   ## Contributing
   Contributions are welcome. ${
     contribution ? `Guidelines for contributing:\n${contribution}\n` : ""
   }
   Please submit a pull request at https://github.com/${github}
 
   
   ## Tests
   Run the following command to run tests:
   \`\`\`
   ${testCommand}
   \`\`\`
   
 
   ## Questions
   If you have any questions, please contact me using the following information:
 
   GitHub username: https://github.com/${github}
 
   Email address: ${email}
 `;
};

module.exports = generateMarkdown;
