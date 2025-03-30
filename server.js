import express from'express';

const app = express();
app.user(express.json())

const users = []

app.post('/usuarios', (req, res) => {
    users.push(req.body)

    res.status(201).json(req.body)
});

app.get("/usarios", (req, res) => {
    res.status(200).json(users)
});

app.listen(5500)