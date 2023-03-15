import React from 'react'
import { Link } from 'react-router-dom'
const FootballClubCard = ({ club }) => {

  return (
    <div className='card-container'>
      <img
        src={club.logo}
        alt='club logo'
        height={200}
      />
      <div className='desc'>
        <h2>
          <Link to={`/clubdetail/${club._id}`}>{club.name}</Link>
        </h2>
        <h3>{club.year}</h3>
        <p>{club.description}</p>
      </div>
    </div>
  )
}

export default FootballClubCard