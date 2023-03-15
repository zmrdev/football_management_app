import axios from 'axios'
import React, { useEffect, useState } from 'react'
import FootballClubCard from './FootballClubCard'
import { Link } from 'react-router-dom'

const FootballClubList = () => {
  const [clubs, setClubs] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8082/api/footballclubs')
      .then((res) => {
        setClubs(res.data)
      })
      .catch((err) => {
        console.log(err.message);
      })
  }, [])

  const clubList = clubs.length ? clubs.map((club, id) => <FootballClubCard club={club} key={id}/>) : 'No records'
  return (
    <div className='ClubList'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <br />
            <h2 className='display-4 text-center'>Clubs List</h2>
          </div>

          <div className='col-md-11'>
            <Link
              to='/createclub'
              className='btn btn-outline-warning float-right'
            >
              + Add New Club
            </Link>
            <br />
            <br />
            <hr />
          </div>
        </div>

        <div className='list'>{clubList}</div>
      </div>
    </div>
  )
}

export default FootballClubList