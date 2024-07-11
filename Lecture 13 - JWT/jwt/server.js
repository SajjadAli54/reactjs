require('dotenv').config()

const express = require('express')
const jwt = require('jsonwebtoken')

const app = express()
app.use(express.json())

const posts = [
    {
        id: 1,
        username: "Sajjad Ali",
        title: "Post 1"
    },
    {
        id: 2,
        username: "Shayan",
        title: "Post 2"
    },
]
app.get("/posts", authenticate, (req, res) => {
    res.json(posts.filter(post => post.username == req.user.name))
})

app.post('/login', (req, res) => {
    // Authenticate User credentials

    const { username } = req.body;
    const user = {
        name: username,
    }

    const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
    res.json({ token })
})

function authenticate(req, res, next) {
    const authHeader = req.headers["authorization"]
    const token = authHeader.split(' ')[1]

    if (token == null)
        res.sendStatus(401);

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) res.sendStatus(403)
        req.user = user;
        next()
    })

}

app.listen(3000)