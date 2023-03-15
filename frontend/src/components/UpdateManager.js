import React, { useEffect, useState } from 'react'
import { useNavigate, useParams ,Link} from 'react-router-dom'
import axios from 'axios'

const UpdateManager = () => {
  const [manager, setManager] = useState({
    name: '',
    image: '',
    age: '',
    clubname: '',
    description: ''
  })

  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(()=>{
    axios
      .get(`http://localhost:8082/api/footballmanagers/${id}`, manager)
      .then((res) => {
        setManager({
          name: res.data.name,
          image: res.data.image,
          age: res.data.age,
          clubname: res.data.clubname,
          description: res.data.description
        })
      })
      .catch((err) => {
        console.log(err.message)
      })
  },[id])

  const handleChange = (e) => {
    setManager({ ...manager, [e.target.name]: e.target.value })
  }

  const handleLogo = (e) =>{
    setManager({...manager,image:e.target.files[0]})
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const data = {
      name: manager.name,
      image: manager.image,
      age: manager.age,
      clubname: manager.clubname,
      description: manager.description
}
    axios
      .patch(`http://localhost:8082/api/footballmanagers/${id}`, data)
      .then((res) => {
        navigate(`/managerdetail/${id}`)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }

  return (
    <div className='UpdateManagerInfo'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/managerlist' className='btn btn-outline-warning float-left'>
              Show Manager List
            </Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Edit Manager</h1>
            <p className='lead text-center'>Update Manager's Info</p>
          </div>
        </div>

        <div className='col-md-8 m-auto'>
          <form noValidate onSubmit={handleSubmit} encType='multipart/form-data'>
            <div className='form-group'>
              <label htmlFor='Name'>Name</label>
              <input
                type='text'
                placeholder='Name of the Manager'
                name='name'
                className='form-control'
                value={manager.name}
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
                value={manager.image}
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
                value={manager.age}
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
                value={manager.clubname}
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
                value={manager.description}
                onChange={handleChange}
              />
            </div>
            <br />

            <button
              type='submit'
              className='btn btn-outline-info btn-lg btn-block'
            >
              Update Manager
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default UpdateManager