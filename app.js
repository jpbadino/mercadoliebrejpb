const express = require('express');
const app=express();
const path=require('path');

app.listen(3030, ()=> {console.log("Servidor corriendo en puerto 3030")})
app.use(express.static('public')); //permite vincular o completar la ruta para que luego html busque los recursos publicos
app.get("/",(req,res)=>{res.sendFile(path.join(__dirname,'/views/index.html'))})
//otras formas de determinar la ruta:
//app.get("/",(req,res)=>{req.sendFile(__dirname+"/views/index.html")})
//app.get("/",(req,res)=>{req.sendFile(path.join(__dirname,"/views/index.gtml"))})
app.get("/login",(req,res)=>{res.sendFile(path.join(__dirname,'/views/login.html'))})
app.get("/onboarding",(req,res)=>{res.sendFile(path.join(__dirname,'/views/onboarding.html'))})