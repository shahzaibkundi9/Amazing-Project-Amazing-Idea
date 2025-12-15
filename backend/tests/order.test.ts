import request from "supertest";
import { app } from "../src/app";

let token = "";

beforeAll(async () => {
  const login = await request(app)
    .post("/api/auth/login")
    .send({ email: "test@example.com", password: "test123" });

  token = login.body.data.accessToken;
});

describe("Orders Module Tests", () => {
  let orderId = "";

  it("Create order", async () => {
    const res = await request(app)
      .post("/api/orders")
      .set("Authorization", `Bearer ${token}`)
      .send({ metadata: { source: "testcase" } });

    expect(res.body.success).toBe(true);
    orderId = res.body.data.id;
  });

  it("Fetch my orders", async () => {
    const res = await request(app)
      .get("/api/orders/mine")
      .set("Authorization", `Bearer ${token}`);

    expect(res.body.success).toBe(true);
  });
});
