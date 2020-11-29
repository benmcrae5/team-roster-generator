const empType = require("../lib/WorkerTypes");

employeeDude = new empType.Employee("Bob", 1234, "Bobo@Bob.com");

describe('Employee Object', () => {
    test("Employee Object contains all necessary members", () => {
        expect(employeeDude).toHaveProperty('name', "Bob");
        expect(employeeDude).toHaveProperty('id', 1234);
        expect(employeeDude).toHaveProperty('email', "Bobo@Bob.com");
        expect(employeeDude).toHaveProperty('getName');
        expect(employeeDude).toHaveProperty('getId');
        expect(employeeDude).toHaveProperty('getEmail');
        expect(employeeDude).toHaveProperty('getRole');
        
    });
    
    test("getRole() should return 'Employee'", () => {
        expect(employeeDude.getRole()).toBe("Employee");
    });

    test("Employee.getName() should return Employee.name", () => {
        expect(employeeDude.getName()).toBe(employeeDude.name);
    });

    test("Employee.getId() should return Employee.id", () => {
        expect(employeeDude.getId()).toBe(employeeDude.id);
    });

    test("Employee.getEmail() should return Employee.email", () => {
        expect(employeeDude.getEmail()).toBe(employeeDude.email);
    });
    
})
