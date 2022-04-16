import { Response, Request } from 'express';
const router = require('express').Router();
import googleAuth from "../middlewares/googleAuth";
import User from "../models/User";

router.post("/login",async (req:Request, res:Response) => {
    let token : string = req.headers.authorization as string;
    token = token?.split(" ")[1];

    const userData = await googleAuth(token);

    const user = await User.findOne({googleId:userData.googleId}).exec();
    console.log(user);
    try{
        if(user == null){
            const newUser = new User(userData);
            const saveUser = await newUser.save();
            res.status(200).json(saveUser);
        }
        else{
            res.status(200).json(user);
        }
    }
    catch (err){
        console.log(err);
        res.status(500).send(err);
    }
});

export default router;
