const express = require('express');
var app = express();
var path = require("path");

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/charge', (req, res) => {

    var stripe = require("stripe")("sk_test_U7HUBSexNXIax0KPajvQ1ddI");

    const charge = stripe.charges.create({
        amount: 9999,
        currency: 'usd',
        source: 'tok_visa',
        receipt_email: 'jenny.rosen@example.com',
    });

    res.send('charge created');
});

app.get('/product', (req, res) => {

    var stripe = require("stripe")("sk_test_U7HUBSexNXIax0KPajvQ1ddI");

    const plan = stripe.plans.create({
        product: 'prod_DghlNRuKQygNpo',
        nickname: 'SaaS Platform USD',
        currency: 'inr',
        interval: 'day',
        amount: 100,
    });

    res.send('product created');
});

app.get('/customer', (req, res) => {

    res.sendFile(path.join(__dirname + '/card.html'));
});

//src_1DFN4hAYQrkxyIZJ1JY9l9w7
app.post('/charge', (req, res) => {
    // console.log(req.body);
    var stripe = require("stripe")("sk_test_U7HUBSexNXIax0KPajvQ1ddI");

    stripe.customers.create({
        email: "jenny.rosen@example.com",
        source: "src_1DFNX1AYQrkxyIZJT0trWqmy",
    }, function (err, customer) {
        console.log(customer);
    });
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});