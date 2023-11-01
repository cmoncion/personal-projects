import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { v4 as uuid } from "uuid";
import jwt from 'jsonwebtoken'

class AuthController {

    // SIGN UP
  async SignUp(req, res) {

    const { email, password } = req.body;
    if(!email || !password) return res.status(400).json({message: 'Fields empty.'})

    const userFound = await User.findOne({ where: { email } });
    if (userFound)
      return res.status(400).json({ message: "User is already registed." });

    const salt = await bcrypt.genSalt(10);
    const hash_password = await bcrypt.hash(password, salt);

    const newUser = {
      public_id: uuid(),
      email,
      password: hash_password,
    };
    // const user = await User.create(newUser);
    res.status(201).json('user');
  }

  // SIGN IN
  async SignIn(req, res) {
    const { email, password } = req.body;

    const userFound = await User.findOne({ where: { email } });
    if(!userFound) return res.status(400).json({message: 'Wrong email or password.'})

    const compare_password = await bcrypt.compare(password, userFound.password)
    if(!compare_password) return res.status(400).json({message: 'Wrong email or password.'})
    
    const  token = await jwt.sign({id:userFound.public_id}, 'JWT_SECRET_KEY', {expiresIn: "400s"})
    
    const user = {
        id: userFound.public_id,
        name: userFound.name,
        username: userFound.username,
        token,
    }
    res.status(200).json(user)
  }
}

export default new AuthController();
