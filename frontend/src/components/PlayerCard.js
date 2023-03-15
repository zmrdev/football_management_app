import React from 'react'
import { Link } from 'react-router-dom'

const PlayerCard = ({player}) => {
  return (
    <div className='card-container'>
      <img
        src={player.image}
        alt='Player image'
        height={200}
      />
      <div className='desc'>
        <h2>
          <Link to={`/playerdetail/${player._id}`}>{player.name}</Link>
        </h2>
        <h3>{player.age}</h3>
        <h3>{player.clubname}</h3>
        <h3>{player.position}</h3>
        <p>{player.description}</p>
      </div>
    </div>
  )
}

export default PlayerCard