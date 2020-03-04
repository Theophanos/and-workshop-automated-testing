const request = require("supertest");
const app = require("../server");

describe("/todos", () => {
  it("should return an error on call", async () => {
    const res = await request(app).get("/todos");
    expect(res.sendStatus).toEqual(400);
  });
};
