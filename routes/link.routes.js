const {Router, response} = require('express')
const Link = require('../models/Link')
const {validationResult} = require("express-validator");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const router = Router()
const auth = require('../middleware/auth.middleware')

router.post('/generate', async (req, res) => {
    try {
        
    } catch (e) {
        response.status(500).json({message: "Что-то пошло не так"})
    }
})

router.get('/', auth, async (req, res) => {
    try {
        const links = await Link.find({owner: req.user.userId})
        res.json(links)
    } catch (e) {
        response.status(500).json({message: "Что-то пошло не так"})
    }
})

router.get('/:id', async (req, res) => {
    try {
        const link = await Link.findById(req.params.id)
        res.json(link)
    } catch (e) {
        response.status(500).json({message: "Что-то пошло не так"})
    }
})

module.exports = router