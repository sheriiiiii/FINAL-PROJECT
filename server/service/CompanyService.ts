import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface IMSI {
    number: string
    user_id: string
    credits: number
    status: string
    isDeleted: boolean
}

class CompanyService {
    // manage distributor
    async approveDistributorApplication(application_id: string) {
        return await prisma.application.update({
            where: { id: application_id },
            data: { status: "approved" }
        })
    }

    async rejectDistributorApplication(application_id: string) {
        return await prisma.application.update({
            where: { id: application_id },
            data: { status: "reject" }
        })
    }

    //manage imsi

    async seeUserInfo(user_number: string) {
        return await prisma.iMSI.findUnique({
            where: { number: user_number }
        })
    }

    async addNewIMSI(data: IMSI) {
        return await prisma.iMSI.create({
            data
        })
    }

    async setStatus(status: string, number: string) {
        return await prisma.iMSI.update({
            where: { number },
            data: {
                status
            }
        })
    }
}

export default new CompanyService();