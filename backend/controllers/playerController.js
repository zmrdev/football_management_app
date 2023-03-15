const mongoose = require('mongoose')
const Player = require('../models/Player')

const multer = require('multer')
const {v4:uuidv4} = require('uuid')
const path = require('path')

const storage = multer.diskStorage({
  destination: (req,file,cb)=>{
    cb(null,'images')
  },
  filename: (req,file,cb)=>{
    cb(null,`${uuidv4()} - ${Date.now()} ${path.extname(file.originalname)}`)
  }
})

const fileFilter = (req,file,cb) =>{
  const allowedFileTypes = ['image/jpeg','image/jpg','image/png']
  if(allowedFileTypes.includes(file.mimetype)){
    cb(null,true)
  }
  else{
    cb(null,false)
  }
}

let uploadImage = multer({storage,fileFilter})

const getAllPlayers = async(req,res)=>{
  const allPlayers = await Player.find({}).sort({createdAt:-1})
  if(!allPlayers){
    return res.status(400).json({err:'No records'})
  }
  res.status(200).json(allPlayers)
}

const getPlayer = async(req,res)=>{
  const {id} =req.params
  if(!mongoose.Types.ObjectId.isValid(id)){
    res.status(404).json({err:'No such player'})
  }
  const player = await Player.findById(id)
  if(!player){
    return res.status(400).json({err:'No such player'})
  }
  res.status(200).json(player)
}

const postPlayer = async(req,res)=>{
  const {name,age,clubname,description,position,image} = req.body
  try{
    const player = await Player.create({name,age,clubname,description,position,image})
    res.status(200).json(player)
  }
  catch(err){
    res.status(400).json({err:err.message})
  }
}

const deletePlayer = async(req,res)=>{
  const {id} =req.params
  if(!mongoose.Types.ObjectId.isValid(id)){
    res.status(404).json({err:'No such player'})
  }
  const player = await Player.findOneAndDelete({_id:id})
  if(!player){
    return res.status(400).json({err:'No such player'})
  }
  res.status(200).json(player)
}

const updatePlayer = async(req,res)=>{
  const {id} =req.params
  if(!mongoose.Types.ObjectId.isValid(id)){
    res.status(404).json({err:'No such player'})
  }
  const player = await Player.findOneAndUpdate({_id:id},{...req.body})
  if(!player){
    return res.status(400).json({err:'No such player'})
  }
  res.status(200).json(player)
}

module.exports={
  getAllPlayers,
  getPlayer,
  postPlayer,
  updatePlayer,
  deletePlayer
}
