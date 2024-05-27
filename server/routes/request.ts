import { Router } from "express";
import RequestIMSI from "../controller/RequestIMSIService";

export const RequestIMSController = Router();

RequestIMSController.post('/request', RequestIMSI.createRequest);
RequestIMSController.get('/request/:id', RequestIMSI.getRequestById);
RequestIMSController.get('/requests/open', RequestIMSI.getOpenRequest);
RequestIMSController.put('/request/status', RequestIMSI.updateRequestStatus);