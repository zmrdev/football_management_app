import React from 'react'
import { Link } from 'react-router-dom'

const ManagerCard = ({manager}) => {
  return (
    <div className='card-container'>
      <img
        src={manager.image}
        alt='Manager image'
        height={200}
      />
      <div className='desc'>
        <h2>
          <Link to={`/managerdetail/${manager._id}`}>{manager.name}</Link>
        </h2>
        <h3>{manager.age}</h3>
        <h3>{manager.clubname}</h3>
        <p>{manager.description}</p>
      </div>
    </div>
  )
}

export default ManagerCard