const intern = require("../lib/Intern");
const Intern = intern.Intern;
describe("Intern", () => {
    describe("Initialization", () => {
        it("Should return an Intern object containing a name property when called with 'new' keyword", () => {
            const intern = new Intern("John Doe", 28, "jdoe@test.com", "jdoe78");

            expect("name" in intern).toEqual(true);
        });

        it("Should return an Intern object containing an id poroperty when called with the 'new' keyword", () => {
            const intern = new Intern("John Doe", 28, "jdoe@test.com", "jdoe78");

            expect("id" in intern).toEqual(true);
        });

        it("Should return an Intern object containing an email poroperty when called with the 'new' keyword", () => {
            const intern = new Intern("John Doe", 28, "jdoe@test.com");

            expect("email" in intern).toEqual(true);
        });
    });
    describe("getName", () => {
        it("Should return the name stored in the created Intern object", () => {
            const intern = new Intern("John Doe", 28, "jdoe@test.com");
            expect(intern.getName() == intern.name);
        });
    });
    describe("getId", () => {
        it("Should return the id stored in the created Intern object", () => {
            const intern = new Intern("John Doe", 28, "jdoe@test.com");
            expect(intern.getId() == intern.id);
        });
    });
    describe("getEmail", () => {
        it("Should return the email stored in the created Intern object", () => {
            const intern = new Intern("John Doe", 28, "jdoe@test.com");
            expect(intern.getEmail() == intern.email);
        });
    });
    describe("getRole", () => {
        it("Should return the role stored in the created Intern object", () => {
            const intern = new Intern("John Doe", 28, "jdoe@test.com");
            expect(intern.getRole() == "Intern");
        });
    });
    describe("getSchool", () => {
        it("Should return the school stored in the created Intern object", () => {
            const intern = new Intern("John Doe", 28, "jdoe@test.com");
            expect(intern.getSchool() == intern.school);
        });
    });

});
