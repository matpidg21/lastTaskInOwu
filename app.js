const express = require("express");
const app = express();

const db = require('./dataBase').getInstance();
db.setModels();


app.use(express.json());
app.use(express.urlencoded({extended:true}));


const {userRouter,authRouter,adminRouter,productRouter} = require('./routes');

app.use('/admin',adminRouter);
app.use('/auth', authRouter);
app.use('/users', userRouter);
app.use('/products', productRouter);

app.listen(3000,(err)=>{
    if(err) console.log(err);
    console.log('listen 3000...');

});
