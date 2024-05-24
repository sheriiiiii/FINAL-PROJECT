import { PrismaClient } from "@prisma/client";
import ApplicationService from "./ApplicationService";
import CompanyService from "./CompanyService";
import IMSIService from "./IMSIService";

const prisma = new PrismaClient();

class RetailerService {
  // manage IMSI credit
  async loadCustomerIMSI(number: string, credit_amount: number) {
    const doesNumberExist = await prisma.iMSI.findUnique({
      where: {
        number,
      },
    });

    if (doesNumberExist === null) {
      return { error: "number is not activated" };
    } else {
      await IMSIService.addCredit(credit_amount, number);
      return { message: "credit has been added to: " + number };
    }
  }

  async viewPaymentDetails() {
    
  }
}

export default new RetailerService();
