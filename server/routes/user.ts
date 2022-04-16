import { Response, Request } from 'express';
const router = require('express').Router();
import User from "../models/User";

router.get('/:id',async (req: Request, res: Response) => {
    try{
        const user= await User.findOne({googleId:req.params.id});
        const {updatedAt, ...other} = user._doc;
        res.status(200).json(other);
    }
    catch(err){
        res.status(500).send(err);
    }
});

//delete
router.delete('/:id',async (req: Request, res: Response) => {
    if(req.params.id === req.body.id){
        try{
            await User.findOneAndDelete({googleId:req.params.id});
            res.status(200).send("User has been deleted");
        }
        catch(err){
            res.status(500).send(err);
        }
    } else {
        return res.status(403).json("You can delete only your account!");
        }
});

export default router;
