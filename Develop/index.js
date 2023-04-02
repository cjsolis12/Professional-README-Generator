// Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
inquirer
    .prompt([
        {
            type: "input",
            name: "title",
            message: "What is the name of your project?",
        },
        {
            type: "input",
            name: "description",
            message:
            "Please write a short description explaining the what, why, and how of your project?",
            default() {
            return "";
            },
        },
        {
            type: "input",
            message: "What are the steps required to install your project?",
            name: "installation instructions",
        },
        { 
            type: "input",
            message: "Provide instructions and examples for use",
            name: "usage",
        },
        {
            type: "list",
            name: "License",
            message: "Please pick your license?",
            choices: [
                "MIT License",
                "Mozilla Public license 2.0",
                "GNU AGPLv3",
                "GNU GPLv3",
                "Apache License 2.0",
                "Boost Software License 1.0",
                "the Unilicense",
                ],
        },
        { 
        type: "input",
        name: "name",
        message: "What is your github username?",
        },
        {
            type: "input",
            name: "email",
            message: "What is your email?",
            validate(value){
                const pass = value.match(
                /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/i
            );
                if(pass){
                return true;
            }
        return 'Please enter a valid email address'
    }
  },

])
    .then((data)=>{
    const markdown = 
    
    `# ${data.title}

    ## Description
    ${data.description}

    ## Table of Contents 
    - [Installation](#installation)
    - [usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#Tests)
    - [Questions](#questions)

    ## Installation Instructions
    ${data[2].name}

    ## Usage
    ${data.usage}

    ## License
    ${data.license}

    ## Contributing
    Contributions are welcome. Please submit a pull request.

    ## Tests
    
    \`\`\`
    npm test
    \`\`\`

    ## Questions
    If you have any questions, please contact me using the following information:

    GitHub username: ${data.username}

    Email address: ${data.email}`










// TODO: Create a function to write README file
fs.writeFile("README.md", markdown, (err) =>
err ? console.error(err) : console.log("README was created!")
);   
})


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
