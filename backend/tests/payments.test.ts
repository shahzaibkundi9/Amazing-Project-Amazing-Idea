import request from "supertest";
import { app } from "../src/app";

let token = "";
let orderId = "";

beforeAll(async () => {
  const login = await request(app)
    .post("/api/auth/login")
    .send({ email: "test@example.com", password: "test123" });

  token = login.body.data.accessToken;

  const order = await request(app)
    .post("/api/orders")
    .set("Authorization", `Bearer ${token}`)
    .send({ metadata: {} });

  orderId = order.body.data.id;
});

describe("Payments Module Tests", () => {
  it("Create payment request", async () => {
    const res = await request(app)
      .post("/api/payments")
      .set("Authorization", `Bearer ${token}`)
      .send({ orderId, method: "easypaisa", amount: 1000 });

    expect(res.body.success).toBe(true);
  });
});
