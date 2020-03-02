const greeting = require("./src/index");

describe("Greeting Test", () => {
  describe("Requirement 1", () => {
    it("is a func", () => {
      expect(typeof greeting).toEqual("function");
    });
  });

  describe("Requirement 2", () => {
    it("shows correct out put when in put is 'test'", () => {
      expect(greeting()).toEqual("Hello, my friend.");
    });
  });

  describe("Requirement 3", () => {
    it("shows correct out put when in put is 'test'", () => {
      expect(greeting("TEST")).toEqual("HELLO TEST!");
    });
  });

  describe("Requirement 4", () => {
    it("shows correct out put when in put is name array with 2 names", () => {
      expect(greeting(["Jill", "Jane"])).toEqual("Hello, Jill, and Jane.");
    });
  });

  describe("Requirement 5", () => {
    it("shows correct out put when in put is name array with more than 3 names", () => {
      expect(greeting(["Jill", "Jane", "Joe"])).toEqual(
        "Hello, Jill, Jane, and Joe."
      );
    });
  });
});
