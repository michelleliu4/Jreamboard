// @ts-nocheck
// @ts-ignore
const express = require('express')
const router = express.Router()
const formidable = require('formidable');

const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })


import prisma from '../lib/prisma'


router.post('/:author', upload.single('file'), async (req, res) => {
    console.log("got file")
    const author = req.params.author
    console.log(req.file)
    const { title, content } = req.body
    try {
        const user = await prisma.user.findUnique({
            where: {
                username: author
            }
        })
        console.log(user)
        const createdPost = await prisma.post.create({
            data: {
                title: "Audio",
                content: "Audio",
                file: req.file,
                author: {
                    connect: {id: user.id}
                },
            }
            })

        res.json(createdPost)
    } catch (error){
        console.log(error)
    }
})

router.post('/:author/:postid', async (req, res) => {
    const authorname = req.params.author
    const postid = req.params.postid
    const { content } = req.body
    try{
        const post = await prisma.post.update({
            where: { id: parseInt(postid)},
            data: {
                comments: {
                    create: { content: content, user : {
                        connect: {id: 1}
                    }}, 
                }
            }
        })
        res.json(post)
    } catch (error){
        console.log(error)
    }
})
router.get('/:author', async (req, res) => {
    const author = req.params.author
    try{
        const user = await prisma.user.findUnique({
            where: {
                username: author
            }
        })
        const authoredPosts = await prisma.post.findMany({
            where: {
                authorId: user.id
            }
        })
        res.json(authoredPosts)
    } catch (error){
        console.log(error)
    }
})

// router.post('/:postid')
router.get('/', async (req, res) => {
    try {
        const posts = await prisma.post.findMany()
        res.json(posts)
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;