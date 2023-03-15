const mongoose = require('mongoose')
const Club = require('../models/Club')

const getAllClubs = async(req,res)=>{
  const allClubs = await Club.find({}).sort({createdAt:-1})
  if(!allClubs){
    return res.status(400).json({err:'No records'})
  }
  res.status(200).json(allClubs)
}

const getClub = async(req,res)=>{
  const {id} =req.params
  if(!mongoose.Types.ObjectId.isValid(id)){
    res.status(404).json({err:'No such club'})
  }
  const club = await Club.findById(id)
  if(!club){
    return res.status(400).json({err:'No such club'})
  }
  res.status(200).json(club)
}

const postClub = async(req,res)=>{
  const {name,year,description} = req.body
  const logo = req.file.path

  try{
    const club = await Club.create({name,year,description,logo})
    res.status(200).json(club)
  }
  catch(err){
    res.status(400).json({err:err.message})
  }
}

const deleteClub = async(req,res)=>{
  const {id} =req.params
  if(!mongoose.Types.ObjectId.isValid(id)){
    res.status(404).json({err:'No such club'})
  }
  const club = await Club.findOneAndDelete({_id:id})
  if(!club){
    return res.status(400).json({err:'No such club'})
  }
  res.status(200).json(club)
}

const updateClub = async(req,res)=>{
  const {id} =req.params
  if(!mongoose.Types.ObjectId.isValid(id)){
    res.status(404).json({err:'No such club'})
  }
  const club = await Club.findOneAndUpdate({_id:id},{...req.body,...req.file})
  if(!club){
    return res.status(400).json({err:'No such club'})
  }
  res.status(200).json(club)
}

module.exports = {
  postClub,
  getAllClubs,
  getClub,
  updateClub,
  deleteClub
}