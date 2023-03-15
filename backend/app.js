require('dotenv').config()
const express = require('express')
const clubRoutes = require('./routes/footballClubs')
const managerRoutes = require('./routes/footballManagers')
const playerRoutes = require('./routes/footballPlayers')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

app.use(cors({origin:true,credentials:true}))
app.use(express.json())
app.use((req,res,next)=>{
  console.log(req.path,req.method);
  next()
})
app.use('/api/footballclubs',clubRoutes)
app.use('/api/footballmanagers',managerRoutes)
app.use('/api/footballplayers',playerRoutes)
app.use('/api/users',require('./routes/auth'))
app.use('/images', express.static("images"));

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
  app.listen(process.env.PORT,()=>console.log(`Connected to db & Server running on port ${process.env.PORT}`))
})
.catch(err=>{
  console.log(err);
})
