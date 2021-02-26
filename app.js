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

// declare a place to push new employees
const employees = [];

// init/manager questions
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

// intern specific Qs
const internQs = [
    {
      type: 'input',
      name: 'name',
      message: 'Enter employee name.'
    },
    {
      type: 'input',
      name: 'id',
      message: 'Enter employee ID.'
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter employee email address.'
    },
    {
      type: 'input',
      name: 'school',
      message: 'Where does this intern go to school?'
    }
];

// Engineer specific Qs
const engineerQs = [
    {
      type: 'input',
      name: 'name',
      message: 'Enter employee name.'
    },
    {
      type: 'input',
      name: 'id',
      message: 'Enter employee ID.'
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter employee email address.'
    },
    {
      type: 'input',
      name: 'school',
      message: 'Enter the github username for this employee.'
    }
];

const roleQ = [
{
    type: 'list',
    name: 'role',
    choices: ['Intern', 'Engineer', 'Manager'],
    message: "What is this employee's role?"
}];

// function to ask questions based on a specific role
function newRole() { inquirer.prompt(roleQ).then((data) => {
    let employeeRole = data.role
    switch(employeeRole){
        case "Intern":
            inquirer.prompt(internQs).then((nextResponse) => {
                // create new intern object
                const intern = new Intern(nextResponse.name, nextResponse.id, nextResponse.email, nextResponse.role, nextResponse.school);
                // push to the employees array
                employees.push(intern);
                // run new employee to check if there are any more employees to add
                newEmployee();
            });
            
            break;
        case "Engineer":
            inquirer.prompt(engineerQs).then((nextResponse) => {
                const engineer = new Engineer(nextResponse.name, nextResponse.id, nextResponse.email, nextResponse.role, nextResponse.github);
                employees.push(engineer);
                newEmployee();
            });
            
            break;
        case "Manager":
            inquirer.prompt(introQs
            ).then((nextResponse) => {
                const manager = new Manager(nextResponse.name, nextResponse.id, nextResponse.email, nextResponse.role, nextResponse.officeNumber);
                employees.push(manager);
                newEmployee();
            });
            
            break;
        }
    });
}

// function for new employees. filters them based on their response to the first question
const newEmployee = () => {
    inquirer.prompt([{
        type: 'confirm',
        name: 'addMore',
        message: 'Would you like to add another employee?'
    }]).then((function (response) {
        if (response.addMore === true) {
            // if they want to add more employees, run the qs filtered by role
            newRole();
        } else {
            // if a user says no, take the employee data and use the render html function to write it to the file to the specified output path
            const renderedHTML = render(employees);
            fs.writeFile(outputPath, renderedHTML, (err) =>
                    err ? console.log(err) : console.log('Success! Team Page Written')
                );
        }
    
        
    })
)}

// The user story is for the manager, so we assume that they are the first user entering this information, and prompt them from there.
const init = (introduction) => {
    inquirer.prompt(introduction).then((response) => {
        const manager = new Manager(response.name, response.id, response.email, response.role, response.officeNumber);
        employees.push(manager);
        newEmployee();
    });
}
// start the prompts
init(introQs);

