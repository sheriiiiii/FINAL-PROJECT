import express from 'express';
import UserService from "../service/UserService";

class UserController {

    async loginUser(req: express.Request, res: express.Response) {
        try {
            const user = UserService.login(req.body);
            if ("error" in user) {
                res.status(400).send(user.error);
            } else {
                res.status(201).send("Logged in") // note: send token to frontend for auth vaildation
            }
        } catch (error) {
            console.log("error in login");
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
 
    async registerUser(req: express.Request, res: express.Response) {
        try {
            const user = UserService.register(req.body);
            if ("error" in user) {
                res.status(400).send(user.error)
            } else {
                res.status(200).send(user)
            }
        } catch (error) {
            console.log("error in login");
            res.status(500).json({ error: "Internal Server Error" });
        }
    }

    async getAllUsers(req: express.Request, res: express.Response) {
        try {
            const users = await UserService.getAllUsers();
            return res.status(200).json(users)
        } catch (error) {
            console.log("error fetching all users");
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }

    async applyForDistributor(req: express.Request, res: express.Response) {
        const user_id = req.params.user_id
        try {
            await UserService.applyForDistributor(user_id)
            res.status(200).send("successfully applied for distributor")
        } catch (error) {
            res.status(500).json({ "error": error });
        }
    }

    async applyForRetailer(req: express.Request, res: express.Response) {
        const user_id = req.body.user_id
        try{
            const response = await UserService.applyForRetailer(user_id)
            return res.status(200).json(response)
        }catch(error){
            return{"error": error}
        }
    }

    async getUserByEmail(req: express.Request, res: express.Response) {
        const { email } = req.body;
        try {
            const response = await UserService.getUserByEmail(email);
            if (response === null) {
                return res.status(404).json({ error: "user not found" });
            } else {
                return res.status(201).json(response)
            }
        } catch (error) {
            console.log("error in getUserByEmail: ", error)
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }

    async editUserInfo(req: express.Request, res: express.Response) {
        const user_id = req.params.id;
        try {
            const response = await UserService.editUserInfo(req.body, user_id);
            return res.status(201).json(response);
        } catch (error) {
            console.log("error in editUserInfo: ", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }

    async deleteUser(req: express.Request, res: express.Response) {
        const { user_id }= req.body
        try {
            await UserService.deleteUser(user_id);
            return res.status(200).json({ message: "user successfully deleted" });
        } catch (error) {
            console.log("error in deleteUser: ", error)
            return res.status(500).json({ error: "Internal Server Error" })
        }
    }
}

export default new UserController();