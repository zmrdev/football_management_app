import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate,Link } from 'react-router-dom'

const CreateFootballClub = () => {
  const navigate = useNavigate()
  const [club, setClub] = useState({
    name: '',
    year: '',
    description: '',
    logo: ''
  })

  const handleChange = (e) => {
    setClub({ ...club, [e.target.name]: e.target.value })
  }

  const handleLogo = (e) =>{
    setClub({...club,logo:e.target.files[0]})
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    axios
      .post('http://localhost:8082/api/footballclubs', club)
      .then((res) => {
        setClub({
          name: '',
          year: '',
          description: '',
          logo: ''
        })
        navigate('/clublist')
      })
      .catch((err) => {
        console.log(err.message)
      })
  }
  return (
    <div className='CreateClub'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/clublist' className='btn btn-outline-warning float-left'>
              Show Club List
            </Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Add Club</h1>
            <p className='lead text-center'>Create new Club</p>

            <form noValidate onSubmit={handleSubmit} encType='multipart/form-data'>
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Name of the Club'
                  name='name'
                  className='form-control'
                  value={club.name}
                  onChange={handleChange}
                />
              </div>
              <br />

              <div className='form-group'>
                <input
                  type='text'
                  placeholder='year'
                  name='year'
                  className='form-control'
                  value={club.year}
                  onChange={handleChange}
                />
              </div>

              <div className='form-group'>
                <textarea
                  type='text'
                  placeholder='description'
                  name='description'
                  className='form-control'
                  value={club.description}
                  onChange={handleChange}
                />
              </div>

              <div className='form-group'>

                <input
                  type='file'
                  accept='.png,.jpg,.jpeg'
                  name='logo'
                  className='form-control'
                  onChange={handleLogo}
                />
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

export default CreateFootballClub