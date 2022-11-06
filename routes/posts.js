const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/', async (req, res) => {
    try {
        const allPosts = await Post.find(); //empty --> returns all
        res.json(allPosts)
    } catch {

    }
});

router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    try {
        const savedPost = await post.save();
        res.json(savedPost);
    }
    catch (error) {
        res.json({ message: error })
    }
});

router.get('/:postId', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        console.log(post);
        res.json(post);
    }
    catch (err) {
        res.json({ message: err })
    }
});

router.delete('/:postId', async (req, res) => {
    try {
        const removedPost = await Post.remove({ _id: req.params.postId });
        console.log(removedPost);
        res.json(removedPost);
    }
    catch (err) {
        res.json({ message: err })
    }
});

router.patch('/:postId', async (req, res) => {
    try {
        const updatedPost = await Post.updateOne({ _id: req.params.postId },{
            $set:{title: req.body.title}
        });
        res.json(updatedPost)
    }catch(err){
        res.json({message:err});
    }
});
module.exports = router;