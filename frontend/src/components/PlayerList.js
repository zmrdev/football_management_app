import React,{ useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import PlayerCard from './PlayerCard'

const PlayerList = () => {
  const [players, setPlayers] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8082/api/footballplayers')
      .then((res) => {
        setPlayers(res.data)
      })
      .catch((err) => {
        console.log(err.message);
      })
  }, [])

  const playerList = players.length ? players.map((player, id) => <PlayerCard player={player} key={id}/>) : 'No records'

  return (
    <div className='PlayerList'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <br />
            <h2 className='display-4 text-center'>Players List</h2>
          </div>

          <div className='col-md-11'>
            <Link
              to='/createplayer'
              className='btn btn-outline-warning float-right'
            >
              + Add New Player
            </Link>
            <br />
            <br />
            <hr />
          </div>
        </div>

        <div className='list'>{playerList}</div>
      </div>
    </div>
  )
}

export default PlayerList