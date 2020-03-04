const request = require("supertest");
const app = require("../server");

describe("/health", () => {
  it("should return status: UP on healthcheck", async () => {
    const res = await request(app).get("/health");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("status", "UP");
  });
});
