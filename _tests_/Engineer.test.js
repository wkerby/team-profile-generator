const engineer = require("../lib/Engineer");
const Engineer = engineer.Engineer;
describe("Engineer", () => {
    describe("Initialization", () => {
        it("Should return an Engineer object containing a name property when called with 'new' keyword", () => {
            const engineer = new Engineer("John Doe", 28, "jdoe@test.com", "jdoe78");

            expect("name" in engineer).toEqual(true);
        });

        it("Should return an Engineer object containing an id poroperty when called with the 'new' keyword", () => {
            const engineer = new Engineer("John Doe", 28, "jdoe@test.com", "jdoe78");

            expect("id" in engineer).toEqual(true);
        });

        it("Should return an Engineer object containing an email poroperty when called with the 'new' keyword", () => {
            const engineer = new Engineer("John Doe", 28, "jdoe@test.com");

            expect("email" in engineer).toEqual(true);
        });
    });
    describe("getName", () => {
        it("Should return the name stored in the created Engineer object", () => {
            const engineer = new Engineer("John Doe", 28, "jdoe@test.com");
            expect(engineer.getName() == engineer.name);
        });
    });
    describe("getId", () => {
        it("Should return the id stored in the created Engineer object", () => {
            const engineer = new Engineer("John Doe", 28, "jdoe@test.com");
            expect(engineer.getId() == engineer.id);
        });
    });
    describe("getEmail", () => {
        it("Should return the email stored in the created Engineer object", () => {
            const engineer = new Engineer("John Doe", 28, "jdoe@test.com");
            expect(engineer.getEmail() == engineer.email);
        });
    });
    describe("getRole", () => {
        it("Should return the role stored in the created Engineer object", () => {
            const engineer = new Engineer("John Doe", 28, "jdoe@test.com");
            expect(engineer.getRole() == "Engineer");
        });
    });
    describe("getGithub", () => {
        it("Should return the github username stored in the created Engineer object", () => {
            const engineer = new Engineer("John Doe", 28, "jdoe@test.com");
            expect(engineer.getGithub() == engineer.github);
        });
    });

});
