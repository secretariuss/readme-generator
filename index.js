// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create a function to write README file
function writeFile(readme, data) {
  fs.appendFile(`${readme}.md`, data, (err) => err ? console.error(err) : console.log(`${readme}.md created.`));
}

// TODO: Create a function to initialize app
function userChoises() {
  return inquirer
    .prompt([

      {
        name: 'title',
        message: 'What is the title of this application?',
        type: 'input'
      },
      {
        name: 'description',
        message: 'What does this application do?',
        type: 'input'
      },
      {
        name: 'install',
        message: 'How do I install this application?',
        type: 'input'
      },
      {
        name: 'usage',
        message: 'How do I use this application?',
        type: 'input'
      },
      {
        name: 'license',
        message: 'Select license for this application:',
        type: 'list',
        choices: ["Apache license 2.0"]
      },
      {
        name: 'contributing',
        message: 'How do I contribute to this application?',
        type: 'input'
      },
      {
        name: 'testing',
        message: 'How can I test this application?',
        type: 'input'
      },
      {
        name: 'username',
        message: 'What is your Github username?',
        type: 'input'
      },
      {
        name: 'email',
        message: 'What is your e-mail?',
        type: 'input'
      },
      {
        name: 'readme',
        message: 'What do you want to call this readme?',
        type: 'input'
      },
    ])
};

async function init() {
  let reply = await userChoises();
  writeFile((reply.readme), (generateMarkdown(reply)));
}

// Function call to initialize app
init();