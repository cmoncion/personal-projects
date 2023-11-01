import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { v4 as uuid } from "uuid";

class AuthController {
  // Register user
  async singUp(req, res) {
    const { name, email, password } = req.body;

    const findUser = await User.findOne({ email });
    if (findUser)
      return res.status(400).json({ message: "The email already exists." });

    const salt = await bcrypt.genSalt(10);
    const hash_password = await bcrypt.hash(password, salt);

    const newUser = {
      public_id: uuid(),
      name,
      email,
      password: hash_password,
    };
    await User.create(newUser);

    return res.status(201).json({ message: "User has been created." });
  }

  // login user
  async signIn(req, res) {
    const { email, password } = req.body;

    const findUser = await User.findOne({ email });
    if (!findUser) return res.status(400).json({ message: "Wrong emal or password." });

    const compare_password = bcrypt.compare(password, findUser.password);
    if (!compare_password) return res.status(400).json({ message: "Wrong email or password." });

    const token = jwt.sign(
      { id: findUser.public_id },
      process.env.JWT_SECRECT_KEY,
      { expiresIn: "30m" }
    );
   
    const user = {
      id: findUser.public_id,
      name: findUser.name,
      email: findUser.email,
      token,
    };

    return res.status(200).json(user);
  }
}

export default new AuthController();