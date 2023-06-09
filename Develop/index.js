// Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create a function to initialize app
function init() {
  // TODO: Create an array of questions for user input
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "What is the name of your project?",
        validate: (titleInput) => {
          if (titleInput) {
            return true;
          } else {
            console.log("please enter a title for your project");
            return false;
          }
        },
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
        message: "What is required to install your project?",
        name: "installation",
      },
      {
        type: "input",
        message: "Provide instructions and examples for use:",
        name: "usage",
      },
      {
        type: "input",
        message:
          "Include any guidelines for how other developers can contribute to your project",
        name: "contribution",
      },
      {
        type: "list",
        name: "license",
        message: "Please pick your license?",
        choices: [
          "MIT License",
          "Mozilla Public license 2.0",
          "GNU AGPLv3",
          "GNU GPLv3",
          "Apache 2.0",
          "Boost Software License 1.0",
          "the Unilicense",
        ],
      },
      {
        type: "input",
        name: "github",
        message: "What is your github username?",
      },
      {
        type: "input",
        name: "testCommand",
        message: "What commands are needed to run tests?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your email?",
        validate(value) {
          const pass = value.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/i);
          if (pass) {
            return true;
          }
          return "Please enter a valid email address";
        },
      },
    ])
    .then((answers) => {
      const markdownContent = generateMarkdown(answers);
      console.log(answers);
      // Function to write README file
      fs.writeFile("README.md", markdownContent, (err) =>
        err ? console.error(err) : console.log("README was created!")
      );
    });
}

// Function call to initialize app
init();
