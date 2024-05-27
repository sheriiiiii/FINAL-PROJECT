import supertest from "supertest";
import { app, server } from "../index"; // Adjust the path as necessary
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

let user: {
  id: string;
  email: string;
  fname: string;
  lname: string;
  password: string;
};

beforeAll(async () => {
  user = await prisma.user.create({
    data: {
      email: "testuser@sample.com",
      fname: "Test",
      lname: "User",
      password: "password123",
      type: "user",
    },
  });
});

afterAll(async () => {
  await prisma.user
    .delete({
      where: {
        id: user.id,
      },
    })
    .catch((e) => console.error(e));

  await prisma.$disconnect();
  server.close();
});

describe("User APIs", () => {
  describe("POST /register-user", () => {
    it("should register a new user", async () => {
      const response = await supertest(server)
        .post("/user/register-user")
        .send({
          email: "newuser@sample.com",
          fname: "New",
          lname: "User",
          password: "newpassword123"
        });
      expect(response.status).toBe(200);
    }, 20000);
  });

  describe('POST /login-user', () => {
    it('should login an existing user', async () => {
      const response = await supertest(server)
        .post('/user/login-user')
        .send({
          email: 'testuser@sample.com',
          password: 'password123'
        });
      expect(response.status).toBe(201);
    });
  });

  describe('GET /get-all-users', () => {
    it('should return all users', async () => {
      const response = await supertest(server).get('/user/get-all-users');
      expect(response.status).toBe(200);
      expect(response.body).toBeInstanceOf(Array);
    });
  });

  describe('GET /get-user-by-email', () => {
    it('should return user by email', async () => {
      const response = await supertest(server)
        .get(`/user/get-user-by-email`)
        .send({ email: user.email });
      expect(response.status).toBe(201);
      expect(response.body).toMatchObject({
        email: 'testuser@sample.com',
        fname: 'Test',
        lname: 'User',
      });
    });
  });
});
