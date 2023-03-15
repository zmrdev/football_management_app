import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'

const UpdateFootballClub = () => {
  const [club, setClub] = useState({
    name: '',
    year: '',
    description: '',
    logo: ''
  })

  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get(`http://localhost:8082/api/footballclubs/${id}`, club)
      .then((res) => {
        setClub({
          name: res.data.name,
          year: res.data.year,
          description: res.data.description,
          logo: res.data.logo
        })
      })
      .catch((err) => {
        console.log(err.message)
      })
  }, [id])

  const handleChange = (e) => {
    setClub({ ...club, [e.target.name]: e.target.value })
  }

  const handleLogo = (e) => {
    setClub({ ...club, logo: e.target.files[0] })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const data = {
      name: club.name,
      year: club.year,
      description: club.description,
      logo: club.logo
    }
    axios
      .patch(`http://localhost:8082/api/footballclubs/${id}`, data)
      .then((res) => {
        navigate(`/clubdetail/${id}`)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }

  return (
    <div className='UpdateClubInfo'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/clublist' className='btn btn-outline-warning float-left'>
              Show Club List
            </Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Edit Club</h1>
            <p className='lead text-center'>Update Club's Info</p>
          </div>
        </div>

        <div className='col-md-8 m-auto'>
          <form noValidate onSubmit={handleSubmit} encType='multipart/form-data'>
            <div className='form-group'>
              <label htmlFor='Name'>Name</label>
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
              <label htmlFor='year'>Year</label>
              <input
                type='text'
                placeholder='year'
                name='year'
                className='form-control'
                value={club.year}
                onChange={handleChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='description'>Description</label>
              <textarea
                type='text'
                placeholder='description'
                name='description'
                className='form-control'
                value={club.description}
                onChange={handleChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='logo'>Logo</label>
              <input
                type='file'
                accept='.png,.jpg,.jpeg'
                name='logo'
                className='form-control'
                onChange={handleLogo}
              />
            </div>
            <br />

            <button
              type='submit'
              className='btn btn-outline-info btn-lg btn-block'
            >
              Update Club
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default UpdateFootballClub