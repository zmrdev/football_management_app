import React,{ useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import ManagerCard from './ManagerCard'
const ManagerList = () => {
  const [managers, setManagers] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8082/api/footballmanagers')
      .then((res) => {
        setManagers(res.data)
      })
      .catch((err) => {
        console.log(err.message);
      })
  }, [])

  const managerList = managers.length ? managers.map((manager, id) => <ManagerCard manager={manager} key={id}/>) : 'No records'

  return (
    <div className='ManagerList'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <br />
            <h2 className='display-4 text-center'>Managers List</h2>
          </div>

          <div className='col-md-11'>
            <Link
              to='/createmanager'
              className='btn btn-outline-warning float-right'
            >
              + Add New Manager
            </Link>
            <br />
            <br />
            <hr />
          </div>
        </div>

        <div className='list'>{managerList}</div>
      </div>
    </div>
  )
}

export default ManagerList