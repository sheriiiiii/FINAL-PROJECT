import { Router } from "express";
import RetailerController from "../controller/RetailerController";

export const retailerRouter = Router();

retailerRouter.post("/load-customer", RetailerController.loadCustomerIMSI);
