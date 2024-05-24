import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface IApplication {
    user_id: string
    applied_for: string
}

class ApplicationService {

    async createApplication(data: IApplication) {
        return await prisma.application.create({
            data
        })
    }
}

export default new ApplicationService()