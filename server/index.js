const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/user.model')
const jwt = require('jsonwebtoken')

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/markdatabase01');

app.post('/api/register', async (request, response) => {
    console.log(request.body);
    try {
        await User.create({
            name: request.body.name,
            email: request.body.email,
            password: request.body.password,
        });
        response.json({ status: 'ok' });
    } catch (error) {
        console.log(error);
        response.json({ status: 'error', error: 'Duplicate Email' });
    }
});

app.post('/api/login', async (request, response) => {
    const user = await User.findOne({
        email: request.body.email,
        password: request.body.password,
    });

    if (user) {

        const token = jwt.sign(
            {
                name: user.name,
                email: user.email,
            },
            'secret123'
        )

        return response.json({ status: 'ok', user: token })
    } else {
        return response.json({ status: 'error', user: false })
    }
});

app.listen(1337, () => {
    console.log("Server started on 1337");
});