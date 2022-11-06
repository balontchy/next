const express = require('express')
const router = express.Router()
const Post = require('../models/portfolio')


    router.get('/', async (req, res) => {
        try {
            let value = await Post.find()
            res.json(value)
        } catch (err) {
            res.json({ message: err })
        }
    
    })
    
    
    router.get('/:id',async (req, res) => {
        try {
            let value = await Post.findOne({_id: req.params.id})
            res.json(value)
        } catch (err) {
            res.json({ message: err })
        }
    
    })
    
    router.post('/', async (req, res) => {
        try {
            let value = new Post({
                title:req.body.title,
                description:req.body.description,
                image:req.body.image
            })
            res.json(await value.save())
        } catch (err) {
            res.json({ message: err })
        }
    
    })
    
    router.patch('/:id', async (req, res) => {
        try {
            let value = await Post.updateOne(
                { _id: req.params.id },
                {
                    $set: {
                        title: req.body.title,
                        description: req.body.description,
                        image: req.body.image
                    }
                })
            res.json(await value.save())
        } catch (err) {
            res.json({ message: err })
        }
    
    })
    router.delete("/:id", (req, res) => {
        Post.deleteOne({
          _id: req.params.id
        }).then(result => {
          res.status(200).json({
            message: "deleted!"
          });
        }).catch((err) =>
            res.json({ message: err })
        )
    });
module.exports = router