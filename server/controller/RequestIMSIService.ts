import express from 'express';
import RequestIMSI from '../service/RequestIMSI';

class RequestIMSController {

    async createRequest(req: express.Request, res: express.Response) {
        try {
            const { amount, user_id } = req.body;
            if (!amount || !user_id) {
                return res.status(400).json({ error: 'Amount and user_id are required' });
            }
            const result = await RequestIMSI.createRequest(amount, user_id);
            res.status(200).json(result)
        } catch(error) {
            res.status(500).send("internal server error")
        }
    }

    async getRequestById(req: express.Request, res: express.Response) {
        try {
            const { id } = req.params;
            const response = await RequestIMSI.getRequestbyid(id)
            if (response === null) {
                res.status(404).send("no request found")
            } else {
                res.status(201).json({response})
            }
        } catch (error) {
            res.status(500).send("internal server error")
        }
    }

    async getOpenRequest(req: express.Request, res: express.Response) {
        try {
            const response = await RequestIMSI.getOpenRequest();
            if (response.length === 0) {
                res.status(404).send("No open request found")
            } else {
                res.status(201).json(response)
            }
        } catch (error) {
            res.status(500).send("internal server error")
        }
    }

    async updateRequestStatus(req: express.Request, res: express.Response) {
        try {
            const { id, status } = req.body;
            const response = await RequestIMSI.updateRequestStatus(id, status);
            
        } catch {
            res.status(500).send("internal server error")
        }
    }
}

export default new RequestIMSController()