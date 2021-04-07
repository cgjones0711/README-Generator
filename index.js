var inquirer = require('inquirer');
const fs = require('fs');
const util =require("util")
const writeToFile = util.promisify(fs.writeFile);
  
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
        name: 'usage information',
        message: 'What the specific usage information other users will need?',
      },
      {
        type: 'input',
        name: 'contributing guidelines',
        message: 'What are the contributing guidelines?',
      },
      {
        type: 'input',
        name: 'test instructions',
        message: 'What are the test instructions?',
      },
  ])
  
}
const README = (answers) => 




const init = () => {
    questions()
    .then((answers)=> writeToFile("README.md" , README(answers)))
    .then(() => console.log("succesfully wrote README.md"))
    .catch((err) => console.log (err));
    
}
init()