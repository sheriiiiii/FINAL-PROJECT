import supertest from "supertest";
import { app, server } from "../index"; // Adjust the path as necessary
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

let user: { id: string; email: string; fname: string; lname: string; password: string };

beforeAll(async () => {
  user = await prisma.user.create({
    data: {
      email: 'testuser@sample.com',
      fname: 'Test',
      lname: 'User',
      password: 'password123',
      type: 'user'
    }
  });
});

afterAll(async () => {
  await prisma.user.delete({
    where: {
      id: user.id,
    },
  }).catch(e => console.error(e));

  await prisma.$disconnect();
  server.close();
});

describe('User APIs', () => {

  describe('POST /register-user', () => {
    it('should register a new user', async () => {
      console.log('user', user)
      const response = await supertest(server)
        .post('/user/register-user')
        .send({
          email: 'newuser@sample.com',
          fname: 'New',
          lname: 'User',
          password: 'newpassword123',
        });
        console.log('response', response)
      expect(response.status).toBe(201);
      expect(response.body).toMatchObject({
        email: 'newuser@sample.com',
        fname: 'New',
        lname: 'User',
      });
    });
  });

  describe('POST /login-user', () => {
    it('should login an existing user', async () => {
      const response = await supertest(server)
        .post('/user/login-user')
        .send({
          email: 'testuser@sample.com',
          password: 'password123'
        });
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('token'); // Assuming a token is returned on successful login
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

  // describe('POST /distributor/apply', () => {
  //   it('should apply for distributor', async () => {
  //     const response = await supertest(server)
  //       .post('/distributor/apply')
  //       .send({ userId: user.id });
  //     expect(response.status).toBe(200);
  //     // Add more assertions based on your implementation
  //   });
  // });

  describe('POST /retailer/apply', () => {
    it('should apply for retailer', async () => {
      const response = await supertest(server)
        .post('/user/retailer/apply')
        .send({ userId: user.id });
      expect(response.status).toBe(200);
    });
  });

  describe('PUT /edit-user', () => {
    it('should edit user info', async () => {
      const response = await supertest(server)
        .put('/user/edit-user')
        .send({ userId: user.id, fname: 'Updated', lname: 'User' });
      expect(response.status).toBe(200);
      expect(response.body).toMatchObject({
        fname: 'Updated',
        lname: 'User',
      });
    });
  });

  // describe('DELETE /delete', () => {
  //   it('should delete a user', async () => {
  //     const newUser = await prisma.user.create({
  //       data: {
  //         email: 'deletethisuser@sample.com',
  //         fname: 'Delete',
  //         lname: 'User',
  //         password: 'password123',
  //         type: 'user'
  //       }
  //     });

  //     const response = await supertest(server)
  //       .delete('/delete')
  //       .send({ userId: newUser.id });
  //     expect(response.status).toBe(200);

  //     const findDeletedUser = await prisma.user.findUnique({
  //       where: { id: newUser.id }
  //     });
  //     expect(findDeletedUser).toBeNull();
  //   });
  // });

});
