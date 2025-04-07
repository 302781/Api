import express from'express';
import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

const app = express();
app.user(express.json())

const users = []

app.post('/usuarios', async (req, res) => {
    users.push(req.body)
    await prisma.user.create({
        data: {
            name: req.body.name,
            email: req.body.email,
            age: req.body.age,
            password: req.body.password,
        }
    })
    res.status(201).json(req.body)
});
app.post('/usuarios', async (req, res) => {
    users.push(req.body)
    await prisma.user.create({
        data: {
            name: req.body.name,
            email: req.body.email,
            age: req.body.age,
            password: req.body.password,
        }
    })
    res.status(201).json(req.body)
});app.post('/usuarios', async (req, res) => {
    users.push(req.body)
    await prisma.user.create({
        data: {
            name: req.body.name,
            email: req.body.email,
            age: req.body.age,
            password: req.body.password,
        }
    })
    res.status(201).json(req.body)
});

app.put('/usuarios/:id', async (req, res) => {
    console.log(req)
    await prisma.user.update({
        where:{
            id: req.body.id
        },
        data: {
            name: req.body.name,
            email: req.body.email,
            age: req.body.age,
            password: req.body.password,
        }
    })
    res.status(201).json(req.body)
});

app.get("/usarios", (req, res) => {
    res.status(200).json(users)
});


app.listen(5500)