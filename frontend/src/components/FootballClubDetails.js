import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'

const FootballClubDetails = () => {
  const [club, setClub] = useState({})
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`http://localhost:8082/api/footballclubs/${id}`)
      .then((res) => {
        setClub(res.data)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }, [id])

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8082/api/footballclubs/${id}`)
      .then((res) => {
        navigate('/clublist');
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  const clubDetails = (
    <div>
      <table className='table table-hover table-dark'>
        <tbody>
          <tr>
            <th scope='row'>1</th>
            <td>Name</td>
            <td>{club.name}</td>
          </tr>
          <tr>
            <th scope='row'>2</th>
            <td>Year Founded</td>
            <td>{club.year}</td>
          </tr>
          <tr>
            <th scope='row'>3</th>
            <td>Description</td>
            <td>{club.description}</td>
          </tr>
          <tr>
            <th scope='row'>4</th>
            <td>Logo</td>
            <td>{club.logo}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )

  return (
    <div className='ClubDetails'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-10 m-auto'>
            <br /> <br />
            <Link to='/clublist' className='btn btn-outline-warning float-left'>
              Show Club List
            </Link>
          </div>
          <br />
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Club's Record</h1>
            <p className='lead text-center'>View Club's Info</p>
            <hr /> <br />
          </div>
          <div className='col-md-10 m-auto'>{clubDetails}</div>
          <div className='col-md-6 m-auto'>
            <button
              type='button'
              className='btn btn-outline-danger btn-lg btn-block'
              onClick={() => {
                handleDelete(club._id);
              }}
            >
              Delete Club
            </button>
          </div>
          <div className='col-md-6 m-auto'>
            <Link
              to={`/editclub/${club._id}`}
              className='btn btn-outline-info btn-lg btn-block'
            >
              Edit Club
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FootballClubDetails