const mongoose = require('mongoose')
const Manager = require('../models/Manager')

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

const getAllManagers = async(req,res)=>{
  const allManagers = await Manager.find({}).sort({createdAt:-1})
  if(!allManagers){
    return res.status(400).json({err:'No records'})
  }
  res.status(200).json(allManagers)
}

const getManager = async(req,res)=>{
  const {id} =req.params
  if(!mongoose.Types.ObjectId.isValid(id)){
    res.status(404).json({err:'No such manager'})
  }
  const manager = await Manager.findById(id)
  if(!manager){
    return res.status(400).json({err:'No such manager'})
  }
  res.status(200).json(manager)
}

const postManager = async(req,res)=>{
  const {name,age,clubname,description,image} = req.body
  try{
    const manager = await Manager.create({name,age,clubname,description,image})
    res.status(200).json(manager)
  }
  catch(err){
    res.status(400).json({err:err.message})
  }
}

const deleteManager = async(req,res)=>{
  const {id} =req.params
  if(!mongoose.Types.ObjectId.isValid(id)){
    res.status(404).json({err:'No such manager'})
  }
  const manager = await Manager.findOneAndDelete({_id:id})
  if(!manager){
    return res.status(400).json({err:'No such manager'})
  }
  res.status(200).json(manager)
}

const updateManager = async(req,res)=>{
  const {id} =req.params
  if(!mongoose.Types.ObjectId.isValid(id)){
    res.status(404).json({err:'No such manager'})
  }
  const manager = await Manager.findOneAndUpdate({_id:id},{...req.body})
  if(!manager){
    return res.status(400).json({err:'No such manager'})
  }
  res.status(200).json(manager)
}

module.exports={
  getAllManagers,
  getManager,
  postManager,
  updateManager,
  deleteManager
}
