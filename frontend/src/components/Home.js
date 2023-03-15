import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
const Home = ({ auth: { user } }) => {
  return (
    <>
      <h1 style={{  marginTop:'90px',paddingBottom:'10px' }}>Welcome, {user ? user.name : 'Guest'}</h1>
      <div className='Home'>
        <Card style={{ width: '18rem', height: '28rem' }} >
          <Card.Img style={{ width: '100%',height: '100%' }} variant="top" src="https://images.unsplash.com/photo-1610894372363-21183fa31111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80" />
          <Link to='/clublist' style={{textDecoration:'none'}}><Button style={{ width: '100%', height: '100%', borderRadius: '0' }}>Clubs</Button></Link>
        </Card>
        <Card style={{ width: '18rem', height: '28rem' }} className='ml-5'>
          <Card.Img style={{ width: '100%',height: '100%' }} variant="top" src="https://images.unsplash.com/photo-1526232761682-d26e03ac148e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1429&q=80" />
          <Link to='/managerlist' style={{textDecoration:'none'}}><Button style={{ width: '100%', height: '100%', borderRadius: '0' }}>Managers</Button></Link>
        </Card>
        <Card style={{ width: '18rem', height: '28rem' }} className='ml-5'>
          <Card.Img style={{ width: '100%',height: '100%' }} variant="top" src="https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(webp):focal(1717x474:1719x472)/origin-imgresizer.eurosport.com/2022/01/17/3290596-67292188-2560-1440.jpg" />
          <Link to='/playerlist' style={{textDecoration:'none'}}><Button style={{ width: '100%', height: '100%', borderRadius: '0' }}>Players</Button></Link>
        </Card>

      </div>
    </>

  )
}

Home.propTypes = {
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Home);