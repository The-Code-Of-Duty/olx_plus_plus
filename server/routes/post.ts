import {Request, Response} from 'express';
const router = require('express').Router();
const Post = require('../models/post')

router.post('/post', async (req:Request, res:Response) => {
      const newPost = new Post(req.body);
      try {
        const savepost = await newPost.save();
        res.status(200).json(savepost);
      } catch (err) {
        console.log(err);
      }
})

router.get('/', async (req:Request, res:Response) => {
    const Posts = await Post.find({});
    try{
        res.status(200).json(Posts);
    }catch(err){
        console.log(err);
    }
})

export default router;