
var express = require('express')
var app = express()

app.get('/course', function (req, res) {
    res.send({message: "Courses"})
})

const users = [
    {username: "alice", password: "wonderland"}
]

const findAllUsers = (req, res) =>
    res.json(users)

app.get('/api/users', findAllUsers);

const login = (req, res) => {
    const username = req.params['username'];
    const password = req.params['password'];
    for(const u in users) {
        if(users[u].username === username && users[u].password === password) {
            res.json(users[u]);
            return;
        }
    }
    res.sendStatus(statusCode,404).send(null);
}

app.get('/login/:username/:password', login)

app.listen('4000')