import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class IMSIService {
  async addCredit(credit_amount: number, number: string) {
    await prisma.iMSI.update({
      where: {
        number: number,
      },
      data: {
        credits: credit_amount,
      },
    });
  }
}

export default new IMSIService();
