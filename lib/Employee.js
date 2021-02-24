// TODO: Write code to define and export the Employee class

class Employee {
    // constructor for params name, id and email, and the general role of employee
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = 'Employee';

    }
    
    // methods that will return values for name, id, email, and role that we will send into our main function
    getName() {
        return this.name;
    }
    getId(){
        return this.id
    }
    getEmail(){
        return this.email

    }
    getRole(){
        // populate role with employee
        return this.role;
    }
}

module.exports = Employee;