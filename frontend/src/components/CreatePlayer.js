import React, { useState } from 'react'
import axios from 'axios'
import { Link,useNavigate } from 'react-router-dom'

const CreatePlayer = () => {
  const [player, setPlayer] = useState({
    name: '',
    image: '',
    age: '',
    clubname: '',
    description: '',
    position: ''
  })
  const navigate = useNavigate()

  const handleChange = (e) => {
    setPlayer({ ...player, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()

    axios
      .post('http://localhost:8082/api/footballplayers', player)
      .then((res) => {
        setPlayer({
          name: '',
          image: '',
          age: '',
          clubname: '',
          description: ''
        })
        navigate('/playerlist')
      })
      .catch((err) => {
        console.log(err.message)
      })
  }

  return (
    <div className='CreatePlayer'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/playerlist' className='btn btn-outline-warning float-left'>
              Show Player List
            </Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Add Player</h1>
            <p className='lead text-center'>Create new Player</p>

            <form noValidate onSubmit={handleSubmit} encType='multipart/form-data'>
              <div className='form-group'>
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
                <input
                  type='text'
                  placeholder='age'
                  name='age'
                  className='form-control'
                  value={player.age}
                  onChange={handleChange}
                />
              </div>

              <div className='form-group'>
                <input
                  type='text'
                  placeholder='clubname'
                  name='clubname'
                  className='form-control'
                  value={player.clubname}
                  onChange={handleChange}
                />
              </div>

              <div className='form-group'>
                <textarea
                  type='text'
                  placeholder='description'
                  name='description'
                  className='form-control'
                  value={player.description}
                  onChange={handleChange}
                />
              </div>

              <div className='form-group'>
                <input
                  type='text'
                  placeholder='position'
                  name='position'
                  className='form-control'
                  value={player.position}
                  onChange={handleChange}
                />
              </div>

              <div className='form-group'>
              <input
                  type='text'
                  placeholder='image'
                  name='image'
                  className='form-control'
                  value={player.image}
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

              <input
                type='submit'
                className='btn btn-outline-warning btn-block mt-4'
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreatePlayer