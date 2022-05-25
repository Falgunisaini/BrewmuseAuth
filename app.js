const express =require('express');
const app=express();
const db = require('./db');
// const dotenv=require("dotenv");
// dotenv.config();
const port=process.env.PORT || 7800;
const cors =require('cors');
// app.use(express.urlencoded({ extended: false }))
// app.set('view engine', 'ejs')
app.use(cors())
const AuthController= require('./controller/authController');
app.use('/api/auth',AuthController);
app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
})