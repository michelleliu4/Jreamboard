// @ts-ignore
const express = require('express')
const router = express.Router()
import prisma from '../lib/prisma'

router.post('/register', async (req, res) => {
    const { firstName, lastName, username, email } = req.body
    try {
        const user = await prisma.user.create({
            data: {
                email: email,
                firstName: firstName,
                lastName: lastName,
                username: username,
            }
        })
        res.locals.user = user
        res.json(user)
    } catch (error){
        console.log(error)
    }
})

router.post('/login', async (req, res) => {
    const { email } = req.body
    try {
        const user = await prisma.user.findUnique({
            where: {
                email: email
            }
        })
        res.locals.user = user
        res.json(user)

    } catch (error) {
        console.log(error)
    }
})

router.get('/users', async (req, res) => {
    try {
        const user = await prisma.user.findMany()
        console.log(user)
        res.json(user)
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;