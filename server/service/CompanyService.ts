import { PrismaClient } from "@prisma/client";
import RequestIMSI from "./RequestIMSI"
import IMSIService from "./IMSIService";

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

    async seeDistributors() {
        return await prisma.user.findMany({
            where: {
                type: "distributor"
            }
        })
    }

    async addNewIMSI(data: IMSI) {
        return await prisma.iMSI.create({
            data
        })
    }

    async getIMSIInformation(imsiID: string){
        return await prisma.iMSI.findUnique({
            where:{id: imsiID}
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

    async getDistributorInfo(userId: string) {
        return await prisma.user.findUnique({
            where: {
                id: userId
            }
        });
    }

    async approveRequest(id: string, user_id: string) {
        let request = await RequestIMSI.getRequestbyid(id)
        if(request){
            await RequestIMSI.updateRequestStatus(id, 'approved');
            IMSIService.addCredit(request.amount, user_id )
        }
    }
}

export default new CompanyService();