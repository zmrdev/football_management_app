import React, { useEffect, useState } from 'react'
import { useNavigate, useParams ,Link} from 'react-router-dom'
import axios from 'axios'

const UpdatePlayer = () => {
  const [player, setPlayer] = useState({
    name: '',
    image: '',
    age: '',
    clubname: '',
    description: '',
    position: ''
  })

  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(()=>{
    axios
      .get(`http://localhost:8082/api/footballplayers/${id}`, player)
      .then((res) => {
        setPlayer({
          name: res.data.name,
          image: res.data.image,
          age: res.data.age,
          clubname: res.data.clubname,
          description: res.data.description,
          position: res.data.position
        })
      })
      .catch((err) => {
        console.log(err.message)
      })
  },[id])

  const handleChange = (e) => {
    setPlayer({ ...player, [e.target.name]: e.target.value })
  }

  const handleLogo = (e) =>{
    setPlayer({...player,image:e.target.files[0]})
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const data = {
      name: player.name,
      image: player.image,
      age: player.age,
      clubname: player.clubname,
      description: player.description,
      position: player.position
}
    axios
      .patch(`http://localhost:8082/api/footballplayers/${id}`, data)
      .then((res) => {
        navigate(`/playerdetail/${id}`)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }

  return (
    <div className='UpdatePlayerInfo'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/playerlist' className='btn btn-outline-warning float-left'>
              Show Player List
            </Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Edit Player</h1>
            <p className='lead text-center'>Update Player's Info</p>
          </div>
        </div>

        <div className='col-md-8 m-auto'>
          <form noValidate onSubmit={handleSubmit} encType='multipart/form-data'>
            <div className='form-group'>
              <label htmlFor='Name'>Name</label>
              <input
                type='text'
                placeholder='Name of the Player'
                name='name'
                className='form-control'
                value={player.name}
                onChange={handleChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='image'>Image</label>
              <input
                type='text'
                placeholder='image'
                name='image'
                className='form-control'
                value={player.image}
                onChange={handleChange}
              />
            </div>
            <br />
            <div className='form-group'>
              <label htmlFor='age'>Age</label>
              <input
                type='text'
                placeholder='age'
                name='age'
                className='form-control'
                value={player.age}
                onChange={handleChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='clubname'>Club Name</label>
              <input
                type='text'
                placeholder='clubname'
                name='clubname'
                className='form-control'
                value={player.clubname}
                onChange={handleChange}
              />

              {/* <input
                type='file'
                accept='.png,.jpg,.jpeg'
                placeholder='logo'
                name='logo'
                className='form-control'
                onChange={handleLogo}
              /> */}
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='description'>Description</label>
              <textarea
                type='text'
                placeholder='description'
                name='description'
                className='form-control'
                value={player.description}
                onChange={handleChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='position'>Position</label>
              <input
                type='text'
                placeholder='position'
                name='position'
                className='form-control'
                value={player.position}
                onChange={handleChange}
              />
            </div>
            <br />

            <button
              type='submit'
              className='btn btn-outline-info btn-lg btn-block'
            >
              Update Player
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default UpdatePlayer