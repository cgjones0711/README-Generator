$url1 = '<a href="[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]"</a>';
$url2 = '<a href="[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]"</a>';
$url3 = '<a href="[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)]"</a>';

function buttonDisplay(answers){
  if ( answers = "apache") 
  { return ("$url1")}
 else if (answers = "boost") {
    return("$url2")  
 } else { return ("$url3")
   
 }
module.exports = buttonDisplay;
console.log(buttonDisplay)
}


function generateMarkdown(data) {
  return `# ${answers.title}`

;
}
