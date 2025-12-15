import request from "supertest";
import { app } from "../src/app";

describe("Auth Module Tests", () => {
  const email = "test@example.com";
  const password = "test123";

  it("Should register user", async () => {
    const res = await request(app)
      .post("/api/auth/register")
      .send({ email, password });

    expect(res.body.success).toBe(true);
  });

  it("Should login user", async () => {
    const res = await request(app)
      .post("/api/auth/login")
      .send({ email, password });

    expect(res.body.success).toBe(true);
    expect(res.body.data.accessToken).toBeDefined();
  });
});
