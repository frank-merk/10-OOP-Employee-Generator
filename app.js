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
      name: 'name',
      message: 'Greetings, Project Manager! Enter your name?'
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is your employee ID?'
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?'
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: 'What is your office number?'
    }
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

// The user story is for the manager, so we assume that they are the first user entering this information, and prompt them from there.
const init = (introduction) => {
    inquirer.prompt(introduction).then((respone) => {
        const manager = new Manager(response.name, response.id, response.email, response.role, response.officeNumber);
        employees.push(manager);
    });
}
init(introduction);
