import {Request, Response} from 'express';
const router = require('express').Router();
const Post = require('../models/post')

router.post('/post', async (req:Request, res:Response) => {
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

router.get('/', async (req:Request, res:Response) => {
    const Posts = await Post.find({});
    console.log(Posts);
    try{
        res.status(200).json(Posts);
    }catch(err){
        console.log(err);
    }
})

export default router;