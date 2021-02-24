const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

const employees = [];

const introQs = [
    {
      type: 'input',
      name: 'project',
      message: 'Greetings, Project Manager! Enter your name?'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Briefly describe what your project does.'
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What installations are required for your project?'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How does one use your project?'
    },
    {
      type: 'input',
      name: 'contributors',
      message: 'Please list other contributors to this project if there are any.'
    },
    {
      type: 'input',
      name: 'tests',
      message: 'How does one run tests on this project?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What type of license does this project have?',
        choices: ['Apache 2.0', 'GNU', 'MIT', 'Creative Commons', 'None']
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your github username?'
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
      },
  ];

// TODO: Create a function to write README file
  function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Success! ReadMe Written')
    );
}

// Function call to initialize app

// init function with one argument which will be our questions array
function init(prompts) {
  // tell inquirer to run that questions array into the terminal
    inquirer.prompt(prompts)
        .then((answers) => {
    
        // Take what we are storing in newReadMe and write it. If there's an error, return the error, if not alert the console the file was written successfully

            const newREADME = markdown(answers);
            // function we made earlier
            writeToFile("newREADME.md", newREADME);
        })
}
init(questions);
