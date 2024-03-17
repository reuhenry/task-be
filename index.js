import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import bodyparser from 'body-parser'

const app=express()
const PORT=5000

app.use(cors())
app.use(bodyparser.json())

// 3kH30TdYtpO43poZ
const mngoURI='mongodb+srv://reuhenryg:3kH30TdYtpO43poZ@cluster0.6smwpdk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
mongoose.connect(mongoURI)
 .then(()=> console.log('connected to mongodb'))
 .catch((err)=>console.log(err))
 
app.listen(PORT,()=>{
    console.log('server listening on port:' + PORT)
})
// 3kH30TdYtpO43poZ