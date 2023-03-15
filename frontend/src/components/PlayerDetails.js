import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams, Link } from 'react-router-dom'

const PlayerDetails = () => {
  const [player, setPlayer] = useState({})
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`http://localhost:8082/api/footballplayers/${id}`)
      .then((res) => {
        setPlayer(res.data)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }, [id])

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8082/api/footballplayers/${id}`)
      .then((res) => {
        navigate('/playerlist');
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  const playerDetails = (
    <div>
      <table className='table table-hover table-dark'>
        <tbody>
          <tr>
            <th scope='row'>1</th>
            <td>Name</td>
            <td>{player.name}</td>
          </tr>
          <tr>
            <th scope='row'>2</th>
            <td>Age</td>
            <td>{player.age}</td>
          </tr>
          <tr>
            <th scope='row'>3</th>
            <td>Description</td>
            <td>{player.description}</td>
          </tr>
          <tr>
            <th scope='row'>4</th>
            <td>Club Name</td>
            <td>{player.clubname}</td>
          </tr>
          <tr>
            <th scope='row'>4</th>
            <td>Player Name</td>
            <td>{player.position}</td>
          </tr>
          <tr>
            <th scope='row'>4</th>
            <td>Image</td>
            <td>{player.image}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )

  return (
    <div className='PlayerDetails'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-10 m-auto'>
            <br /> <br />
            <Link to='/playerlist' className='btn btn-outline-warning float-left'>
              Show Player List
            </Link>
          </div>
          <br />
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Player's Record</h1>
            <p className='lead text-center'>View Player's Info</p>
            <hr /> <br />
          </div>
          <div className='col-md-10 m-auto'>{playerDetails}</div>
          <div className='col-md-6 m-auto'>
            <button
              type='button'
              className='btn btn-outline-danger btn-lg btn-block'
              onClick={() => {
                handleDelete(player._id);
              }}
            >
              Delete Player
            </button>
          </div>
          <div className='col-md-6 m-auto'>
            <Link
              to={`/editplayer/${player._id}`}
              className='btn btn-outline-info btn-lg btn-block'
            >
              Edit Player
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlayerDetails