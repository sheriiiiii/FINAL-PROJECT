import express from 'express';
import UserService from "../service/UserService";

class UserController {

    async loginUser(req: express.Request, res: express.Response) {
        try {
            const user = UserService.login(req.body);
            if ("error" in user) {
                return user.error;
            } else {
                return user
            }
        } catch (error) {
            console.log("error in login");
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }
 
    async registerUser(req: express.Request, res: express.Response) {
        try {
            const user = UserService.register(req.body);
            if ("error" in user) {
                return user.error;
            } else {
                return user
            }
        } catch (error) {
            console.log("error in login");
            return res.status(500).json({ error: "Internal Server Error" });
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
        const user_id = req.body.user_id
        try {
            return await UserService.applyForDistributor(user_id)
        } catch (error) {
            return { "error": error }
        }
    }

    async applyForRetailer(req: express.Request, res: express.Response) {
        const user_id = req.body.user_id
        try{
            return await UserService.applyForRetailer(user_id)
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