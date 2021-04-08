const inquirer = require('inquirer');
const fs = require('fs');
const util =require("util")
const writeToFile = util.promisify(fs.writeFile);
const generateMarkdown = require("./utils/generateMarkdown")

  
function questions(){
return inquirer  
    .prompt([
    
    {
     type: 'input',
     name: 'title',
     message: 'What is your projects title',
    },
    
    {
      type: 'input',
      name: 'description',
      message: 'Describe your project?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How can other users Install your work?',
      },
      {
        type: 'input',
        name: 'instructions ',
        message: 'Are there any special instructions for your project?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What are the specific usage information users will need?',
      },
      {
        type: 'input',
        name: 'guidelines',
        message: 'What are the contributing guidelines?',
      },
      {
        type: 'input',
        name: 'test-instruction',
        message: 'What are the test instructions?',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Choose the licensing used for your project.',
        choices: [
            "Apache",
            "Boost",
            "BSD",

        ]
      },
      {
        type: 'input',
        name: 'github',
        message: 'Please enter your Github username (only include user ID).',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Please enter your email.',
      },
      {
        type: 'input',
        name: 'contact',
        message: 'How can users reach you or ask questions about your project?',
      },
  ])
  
}
    const newREADME = (answers) =>
 `#${answers.title}

(https://img.shields.io/badge/license-${answers.license}

## Description
        ${answers.description}

## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing Guidelines](#guidelines)
- [Test Instructions](#instructions)
- [Questions](#questions)
    
    

## Installation
${answers.installation}

## Usage
${answers.usage}

## License

${answers.license}

## Contributing Guidelines
${answers.guidelines}

## Test Instructions
${answers.instructions}

## Questions
${answers.contact}


## Github
https://www.github.com/${answers.github}

## Email
${answers.email}

## Link To Project
https://github.com/cgjones0711/README-Generator.git
`



    const init = () => {
    questions()
    .then((answers)=> writeToFile("README.md" , newREADME(answers) ))
    .then(() => console.log("succesfully wrote README.md"))
    .catch((err) => console.log (err));
    
    }
    init()