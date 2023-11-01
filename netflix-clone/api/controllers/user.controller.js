import User from "../models/user.model.js";

class UserController {
  async getUser(req, res) {

    const { id } = req.params;
    const userFound = await User.findOne({ where: { id } });
    res.status(200).json(userFound);
  }
}

export default new UserController();
