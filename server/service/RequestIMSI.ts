import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

interface IRequestInfo {
    amount: Number
}

class RequestIMSI{
    async createRequest(amount: number, user_id: string ){
        return await prisma.request.create({
            data:{
                amount,
                user_id
            }
        })
    }

    async getRequestbyid(id: string){
        return await prisma.request.findUnique({
            where:{
                id: id
            }
        })
    }


    async getOpenRequest(){
        return await prisma.request.findMany({
            where:{
                status: "waiting"
            }
        })
    }

    async updateRequestStatus(id: string, status: string){
        return await prisma.request.update({
            where: {id},
            data:{
                status
            }
        })
    }
}

export default new RequestIMSI()

