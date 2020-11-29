const empType = require("../lib/WorkerTypes");

engineerDude = new empType.Engineer("Jim", 1234, "Jimo@Jim.com", "EngieGitHub");

describe('Engineer Object', () => {
    test("Engineer Object contains all necessary members", () => {
        expect(engineerDude).toHaveProperty('name', "Jim");
        expect(engineerDude).toHaveProperty('id', 1234);
        expect(engineerDude).toHaveProperty('email', "Jimo@Jim.com");
        expect(engineerDude).toHaveProperty('getName');
        expect(engineerDude).toHaveProperty('getId');
        expect(engineerDude).toHaveProperty('getEmail');
        expect(engineerDude).toHaveProperty('getRole');

        expect(engineerDude).toHaveProperty('github', "EngieGitHub");
        expect(engineerDude).toHaveProperty('getGithub');
    });
        
    test("engineerDude should inherit from Employee Obj", () => {
        expect(engineerDude).toBeInstanceOf(empType.Employee);
    });

    test("getRole() should return 'Engineer'", () => {
        expect(engineerDude.getRole()).toBe("Engineer");
    });

    test("Engineer.getName() should return Engineer.name", () => {
        expect(engineerDude.getName()).toBe(engineerDude.name);
    });

    test("Engineer.getId() should return Engineer.id", () => {
        expect(engineerDude.getId()).toBe(engineerDude.id);
    });

    test("Engineer.getEmail() should return Engineer.email", () => {
        expect(engineerDude.getEmail()).toBe(engineerDude.email);
    });

    test("Engineer.getGithub() should return Engineer.github", () => {
        expect(engineerDude.getGithub()).toBe(engineerDude.github);
    });
    
})