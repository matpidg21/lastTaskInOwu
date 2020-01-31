const express = require("express");
const app = express();
const cors = require('cors');

const db = require('./dataBase').getInstance();
db.setModels();


const busboy = require('connect-busboy');
const busboyBodyParser = require('busboy-body-parser');


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(busboy());
app.use(cors());
app.use(busboyBodyParser());

const {userRouter, authRouter, adminRouter, productRouter, orderRouter} = require('./routes');

app.use('/admin', adminRouter);
app.use('/auth', authRouter);
app.use('/users', userRouter);
app.use('/products', productRouter);
app.use('/orders', orderRouter);


app.all('*', (req, res) => {
    res.status(400).end();
});


app.listen(3000, (err) => {
    if (err) console.log(err);
    console.log('listen 3000...');

});
module.exports = app;
