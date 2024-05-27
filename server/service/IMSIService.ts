import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class IMSIService {
  async addCredit(credit_amount: number, user_id: string) {
    const currentCredit = await prisma.iMSI.findUnique({
      where:{
        user_id: user_id
      }
    })
    if(currentCredit){
     return await prisma.iMSI.update({
        where: {
          user_id: user_id
        },
        data: {
          credits: credit_amount + currentCredit?.credits,
        },
      });
    }
  }
}

export default new IMSIService();
