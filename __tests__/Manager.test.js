const empType = require("../lib/WorkerTypes");

ManagerDude = new empType.Manager("Karen", 1234, "Karene@Karen.com", "G147");

describe('Manager Object', () => {
    test("Manager Object contains all necessary members", () => {
        expect(ManagerDude).toHaveProperty('name', "Karen");
        expect(ManagerDude).toHaveProperty('id', 1234);
        expect(ManagerDude).toHaveProperty('email', "Karene@Karen.com");
        expect(ManagerDude).toHaveProperty('getName');
        expect(ManagerDude).toHaveProperty('getId');
        expect(ManagerDude).toHaveProperty('getEmail');
        expect(ManagerDude).toHaveProperty('getRole');

        expect(ManagerDude).toHaveProperty('officeNumber', "G147");
        expect(ManagerDude).toHaveProperty('getOffice');
    });
    
    test("ManagerDude should inherit from Employee Obj", () => {
        expect(ManagerDude).toBeInstanceOf(empType.Employee);
    });

    test("getRole() should return 'Manager'", () => {
        expect(ManagerDude.getRole()).toBe("Manager");
    });

    test("Manager.getName() should return Manager.name", () => {
        expect(ManagerDude.getName()).toBe(ManagerDude.name);
    });

    test("Manager.getId() should return Manager.id", () => {
        expect(ManagerDude.getId()).toBe(ManagerDude.id);
    });

    test("Manager.getEmail() should return Manager.email", () => {
        expect(ManagerDude.getEmail()).toBe(ManagerDude.email);
    });

    test("Manager.getOffice() should return Manager.officeNumber", () => {
        expect(ManagerDude.getOffice()).toBe(ManagerDude.officeNumber);
    });
    
})