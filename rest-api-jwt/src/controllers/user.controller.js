import User from "../models/user.model.js";


class UserController {

    async getUsers(req, res) {
        const users = await User.findAll()
        res.status(200).json({data: users})
    }
}



export default new UserController()