import express from'express';

const app = express();

const users = []

app.post('/usuarios', (req, res) => {
    console.log(req)

    res.send('Ok post')
});

app.get("/usarios", (req, res) => {
    res.send('ok,deu bom')
});

app.listen(5500)