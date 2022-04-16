import { Request, Response } from 'express';
const router = require('express').Router();
const Post = require('../models/post')

router.post('/post', async (req: Request, res: Response) => {
  const newPost = new Post(req.body);
  console.log(newPost)
  try {
    const savepost = await newPost.save();
    res.status(200).json(savepost);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
})

router.get('/', async (req: Request, res: Response) => {
  const Posts = await Post.find({});
  console.log(Posts);
  try {
    res.status(200).json(Posts);
  } catch (err) {
    console.log(err);
  }
})

router.get('/post/:id' ,async (req:Request, res:Response) => {
    const id = String(req.params.id);
    try{
      const PostData = await Post.findOne({
        _id: id
      })
      console.log(PostData);
      res.status(200).json(PostData);
    }
    catch(err){
      console.log(err);
    }
})

//get certain user's all posts

router.get('/allposts/:mail',async (req:Request, res:Response) => {
  const mail = String(req.params.mail);
  try{
    const PostData = await Post.find({
      email: mail
    })
    console.log("PostData", PostData);
    res.status(200).json(PostData);
  }
  catch(err){
    console.log(err);
    res.status(500).send(err);
  }
})

//get all items bought by a user

router.get('/allbought/:mail',async (req:Request, res:Response) => {
  const mail = String(req.params.mail);
  try{
    const PostData = await Post.find({
      Buyer_email: mail,
      isSold: true
    })
    console.log(PostData);
    res.status(200).json(PostData);
  }
  catch(err){
    console.log(err);
    res.status(500).send(err);
  }
})
router.post('/buy', async (req: Request, res: Response)=>{
   const {address, _id, name, email, category} = req.body;
   const response = await Post.findOneAndUpdate({_id:_id}, {Buyer_name:name, Buyer_email:email, isSold:true})
   console.log(response);
})

export default router;