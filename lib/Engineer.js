// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

// pulling in Employee here.
const Employee = require('./Employee');

class Engineer extends Employee {
    // adding github to this class
    constructor(name, id, email, github) {
        // super what we already have from employee
        super(name, id, email);
        this.github = github;
        // updates role from employee to engineer
        this.role = "Engineer";
    }
    // Adds a gethub method to predefined methods from employee like getName, getId, and gitEmail
    getGithub() {
        return this.github;
    }
    // update what the role returns - this overrides the default one in Employee
    getRole() {
        return this.role;
    }
}

module.exports = Engineer;