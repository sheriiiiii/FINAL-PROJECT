import express from 'express'
import RetailerService from '../service/RetailerService'

class RetailerController {
    async loadCustomerIMSI(req: express.Request, res: express.Response) {
        const { number, amount } = req.body;
        try {
            const response = await RetailerService.loadCustomerIMSI(number, amount);
            return res.status(200).json(response);
        } catch (error) {
            return res.status(500).json({ error: "Internal Server Error." });
        }
    }
}
 
export default new RetailerController();