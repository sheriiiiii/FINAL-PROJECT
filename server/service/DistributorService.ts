import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface IApplication {
    user_id: string
    applied_for: string
}

class DistributorService {

    // manage retailers
    async retailerInfo(user_id: string) {
        return await prisma.user.findUnique({
            where: {
                id: user_id
            }
        })
    }

    async removeRetailer(user_id: string) {
        console.log("add functionalities here");
    }

    async acceptRetailerApplication(user_id: string) {
        return await prisma.user.update({
            where: { id: user_id },
            data: { type: "retailer" }
        })
    }

    async getAllRetailer(){
        return await prisma.user.findMany({
            where: {
                type: "Retailer"
            }
        })
    }
}

export default new DistributorService()