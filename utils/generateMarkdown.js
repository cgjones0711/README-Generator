$url1 = '<a href="[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]"</a>';
$url2 = '<a href="[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]"</a>';
$url3 = '<a href="[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)]"</a>';
$badgeAnswer = ${answers.contact};
function generateMarkdown(){
  if ( $badgeAnswer = "apache") 
  { return ("$url1")}
 else if ($badgeAnswer = "boost") {
    return("$url2")  
 } else { return ("$url3")
   
 }
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
