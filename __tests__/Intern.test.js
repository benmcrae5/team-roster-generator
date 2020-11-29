const empType = require("../lib/WorkerTypes");

InternDude = new empType.Intern("Jim", 1234, "Jimo@Jim.com", "Intern Ational University");

describe('Intern Object', () => {
    test("Intern Object contains all necessary members", () => {
        expect(InternDude).toHaveProperty('name', "Jim");
        expect(InternDude).toHaveProperty('id', 1234);
        expect(InternDude).toHaveProperty('email', "Jimo@Jim.com");
        expect(InternDude).toHaveProperty('getName');
        expect(InternDude).toHaveProperty('getId');
        expect(InternDude).toHaveProperty('getEmail');
        expect(InternDude).toHaveProperty('getRole');

        expect(InternDude).toHaveProperty('school', "Intern Ational University");
        expect(InternDude).toHaveProperty('getSchool');
    });
      
    test("InternDude should inherit from Employee Obj", () => {
        expect(InternDude).toBeInstanceOf(empType.Employee);
    });

    test("getRole() should return 'Intern'", () => {
        expect(InternDude.getRole()).toBe("Intern");
    });

    test("Intern.getName() should return Intern.name", () => {
        expect(InternDude.getName()).toBe(InternDude.name);
    });

    test("Intern.getId() should return Intern.id", () => {
        expect(InternDude.getId()).toBe(InternDude.id);
    });

    test("Intern.getEmail() should return Intern.email", () => {
        expect(InternDude.getEmail()).toBe(InternDude.email);
    });

    test("Intern.getSchool() should return Intern.school", () => {
        expect(InternDude.getSchool()).toBe(InternDude.school);
    });
    
})