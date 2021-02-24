// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee');

class Intern extends Employee {
    // adding school to this class
    constructor(name, id, email, school) {
        // super what we already have from employee
        super(name, id, email);
        this.school = school;
        // updates role from employee to intern
        this.role = "Intern";
    }
    // Adds a getschool method to predefined methods from employee like getName, getId, and gitEmail
    getSchool() {
        return this.school;
    }
    // update what the role returns - this overrides the default one in Employee
    getRole() {
        return this.role;
    }
}

module.exports = Intern;