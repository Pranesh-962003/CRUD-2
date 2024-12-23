import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './Config/Mongo.js'
import UserModel from './Models/Demo.js'


const app = express()

app.use(express.json())
app.use(cors())
connectDB()



const port = process.env.PORT || 3004;



app.get('/',(req,res)=>{
  res.send('hellow')  
})


app.post('/crud',(req,res)=>{
    const email = req.body.userName
    const pass = req.body.pass
   UserModel.create({email:req.body.userName, pass:req.body.pass})
console.log(pass);

   
})


app.get('/get',(req,res)=>[
    UserModel.find({})
    .then(result=>{
        res.send(result)
    })
])

//end point

app.listen(port ,()=>{
    console.log(`workungin port ${port}`);
    
})