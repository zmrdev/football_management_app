import React, { useState } from 'react'
import axios from 'axios'
import { Link,useNavigate } from 'react-router-dom'

const CreateManager = () => {
  
  const navigate = useNavigate()
  const [manager, setManager] = useState({
    name: '',
    image: '',
    age: '',
    clubname: '',
    description: ''
  })

  const handleChange = (e) => {
    setManager({ ...manager, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()

    axios
      .post('http://localhost:8082/api/footballmanagers', manager)
      .then((res) => {
        setManager({
          name: '',
          image: '',
          age: '',
          clubname: '',
          description: ''
        })
        navigate('/managerlist')
      })
      .catch((err) => {
        console.log(err.message)
      })
  }

  return (
    <div className='CreateManager'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/managerlist' className='btn btn-outline-warning float-left'>
              Show Manager List
            </Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Add Manager</h1>
            <p className='lead text-center'>Create new Manager</p>

            <form noValidate onSubmit={handleSubmit} encType='multipart/form-data'>
              <div className='form-group'>
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
                <input
                  type='text'
                  placeholder='age'
                  name='age'
                  className='form-control'
                  value={manager.age}
                  onChange={handleChange}
                />
              </div>

              <div className='form-group'>
                <input
                  type='text'
                  placeholder='clubname'
                  name='clubname'
                  className='form-control'
                  value={manager.clubname}
                  onChange={handleChange}
                />
              </div>

              <div className='form-group'>
                <textarea
                  type='text'
                  placeholder='description'
                  name='description'
                  className='form-control'
                  value={manager.description}
                  onChange={handleChange}
                />
              </div>

              <div className='form-group'>
              <input
                  type='text'
                  placeholder='image'
                  name='image'
                  className='form-control'
                  value={manager.image}
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

export default CreateManager