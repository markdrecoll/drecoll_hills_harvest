const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/user.model')
const Order = require('./models/order.model')
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

app.get('/api/quote', async (request, response) => {

    const token = request.headers['Authorization'];
    console.log('authorization header at get request:', token)
    return response.json({ token });
    

    // try{
    //     const decoded = jwt.verify(token, 'secret123');
    //     const email = decoded.email;
    //     const user = await User.findOne({ email: email });

    //     return response.json({ status: 'ok', token: token, decoded: decoded });
        
    // } catch (error) {
    //     console.log(error);
    //     response.json({ status: 'error', error: 'invalid token', token: token });
    // }
});

app.get('/api/testget', async (request, response) => {

    const token = request.headers['Authorization'];
    console.log('the new get has been hit!')
    console.log('authorization header at get request:', token);
    

});

// app.post('/api/quote', async (request, response) => {

//     const token = request.headers['Authorization'];

//     try{
//         const decoded = jwt.verify(token, 'secret123');
//         const email = decoded.email;
//         const user = await User.updateOne(
//             { email: email },
//             { $set : { quote: request.body } }
//         );

//         return { status: 'ok' }
        
//     } catch (error) {
//         console.log(error);
//         response.json({ status: 'error', error: 'invalid token' });
//     }
// });

app.post('/api/placeorder', async (request, response) => {
    console.log(request.body);
    try {
        await Order.create({
            key: request.body.key,
            item: request.body.item,
            type: request.body.type,
            quantity: request.body.quantity,
        });
        response.json({ status: 'ok' });
    } catch (error) {
        console.log(error);
    }
});

app.get('/api/getorders', async (request, response) => {

    try {
        let allOrders = await Order.find();
        console.log(allOrders);
        response.json({ allOrders });
    } catch (error) {
        console.log(error);
    }
    return response.json;
    
});

app.listen(1337, () => {
    console.log("Server started on 1337");
});