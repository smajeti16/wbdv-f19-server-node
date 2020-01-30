var express = require('express')
var app = express()

const students = [
    [
        {
            "_id": "123",
            "student": "123",
            "question": "321",
            "trueFalseAnswer": true
        },
        {
            "_id": "234",
            "student": "123",
            "question": "432",
            "trueFalseAnswer": false
        },
        {
            "_id": "345",
            "student": "123",
            "question": "543",
            "multipleChoiceAnswer": 1
        },
        {
            "_id": "456",
            "student": "123",
            "question": "654",
            "multipleChoiceAnswer": 2
        },
        {
            "_id": "567",
            "student": "234",
            "question": "321",
            "trueFalseAnswer": false
        },
        {
            "_id": "678",
            "student": "234",
            "question": "432",
            "trueFalseAnswer": true
        },
        {
            "_id": "789",
            "student": "234",
            "question": "543",
            "multipleChoiceAnswer": 3
        },
        {
            "_id": "890",
            "student": "234",
            "question": "654",
            "multipleChoiceAnswer": 4
        }
    ]
]

const findAllStudents = (req, res) =>
    res.json(students)

app.get('/api/students', findAllStudents);

const createStudent = (req, res) => {
    const student = req.params['student'];
    const question = req.params['question'];
    const multipleChoiceAnswer = req.params['multipleChoiceAnswer'];
    res.json(student[student, question, multipleChoiceAnswer])
}

app.get('/students/:student/:question/:multipleChoiceAnswer', createStudent)

// const login = (req, res) => {
//     const username = req.params['username'];
//     const password = req.params['password'];
//     for(const u in users) {
//         if(users[u].username === username && users[u].password === password) {
//             res.json(users[u]);
//             return;
//         }
//     }
//     res.sendStatus(statusCode,404).send(null);
// }

// app.get('/login/:username/:password', login)

app.listen('4000')
