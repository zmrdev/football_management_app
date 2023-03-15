import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams, Link } from 'react-router-dom'

const ManagerDetails = () => {
  const [manager, setManager] = useState({})
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`http://localhost:8082/api/footballmanagers/${id}`)
      .then((res) => {
        setManager(res.data)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }, [id])

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8082/api/footballmanagers/${id}`)
      .then((res) => {
        navigate('/managerlist');
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  const managerDetails = (
    <div>
      <table className='table table-hover table-dark'>
        <tbody>
          <tr>
            <th scope='row'>1</th>
            <td>Name</td>
            <td>{manager.name}</td>
          </tr>
          <tr>
            <th scope='row'>2</th>
            <td>Age</td>
            <td>{manager.age}</td>
          </tr>
          <tr>
            <th scope='row'>3</th>
            <td>Description</td>
            <td>{manager.description}</td>
          </tr>
          <tr>
            <th scope='row'>4</th>
            <td>Club Name</td>
            <td>{manager.clubname}</td>
          </tr>
          <tr>
            <th scope='row'>4</th>
            <td>Image</td>
            <td>{manager.image}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )

  return (
    <div className='ManagerDetails'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-10 m-auto'>
            <br /> <br />
            <Link to='/managerlist' className='btn btn-outline-warning float-left'>
              Show Manager List
            </Link>
          </div>
          <br />
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Manager's Record</h1>
            <p className='lead text-center'>View Manager's Info</p>
            <hr /> <br />
          </div>
          <div className='col-md-10 m-auto'>{managerDetails}</div>
          <div className='col-md-6 m-auto'>
            <button
              type='button'
              className='btn btn-outline-danger btn-lg btn-block'
              onClick={() => {
                handleDelete(manager._id);
              }}
            >
              Delete Manager
            </button>
          </div>
          <div className='col-md-6 m-auto'>
            <Link
              to={`/editmanager/${manager._id}`}
              className='btn btn-outline-info btn-lg btn-block'
            >
              Edit Manager
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ManagerDetails