import { PrismaClient } from "@prisma/client";
import ApplicationService from "./ApplicationService";

const prisma = new PrismaClient()

interface IUserInfo {
    fname: string,
    lname: string,
    email: string,
    password: string,
    type: string
}

interface IApplication {
    user_id: string
    applied_for: string
}

class UserService {

    // feel ko ma sala ni
    async createUser(data: IUserInfo) {
        return await prisma.user.create({
            data,
        })
    }

    async getAllUsers() {
        return await prisma.user.findMany();
    }

    async getUserByEmail(email: string) {
        return await prisma.user.findUnique({
            where: { email }
        })
    }

    async submitApplication(data: IApplication) {
        const application = await ApplicationService.createApplication(data);
        return application.id;
    }

    async editUserInfo(data: IUserInfo, user_id: string) {
        return await prisma.user.update({
            where: {id: user_id},
            data
        })
    }

    async deleteUser(user_id: string) {
        return await prisma.user.delete({
            where: { id: user_id }
        })
    }

    async login(data: IUserInfo) {
        try {
            const user = await this.getUserByEmail(data.email);
            if (user === null) return { message: "no user found" };
            else if (user.password !== data.password) return { message: "wrong password. try again" };
            else return user;
        } catch (error) {
            console.log("error logging in");
            return { error: "Error logging in" };
        }
    }

    async register(data: IUserInfo) {
        try {
            const user = await this.createUser(data);
            return user
        } catch (error) {
            console.error("register error: ", error);
            return { error: "error in registering new user" };
        }
    }
}

export default new UserService();