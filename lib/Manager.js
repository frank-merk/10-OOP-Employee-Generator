// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee');

class Manager extends Employee {
    // adding school to this class
    constructor(name, id, email, officeNumber) {
        // super what we already have from employee
        super(name, id, email);
        this.officeNumber = officeNumber;
        // updates role from employee to intern
        this.role = "Manager";
    }
    // Adds a getschool method to predefined methods from employee like getName, getId, and gitEmail
    getOfficeNumber() {
        return this.officeNumber;
    }
    // update what the role returns - this overrides the default one in Employee
    getRole() {
        return this.role;
    }
}

module.exports = Manager;