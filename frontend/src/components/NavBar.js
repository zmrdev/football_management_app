import React, { Fragment } from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap'
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from '../actions/auth';

const NavBar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
		<ul className="nav-links">
			<li>
				<Link to="/home">
					<i className="fas fa-user"></i>{" "}
					<span className="hide-sm">Home</span>
				</Link>
			</li>
			<li>
				<Link onClick={logout} to="/" replace>
					<i className="fas fa-sign-out-alt"></i>{" "}
					<span className="hide-sm"> &nbsp;Logout</span>
				</Link>
			</li>
		</ul>
	);
	const guestLinks = (
		<ul className="nav-links">
			<li>
				<Link to="/register">Register</Link>
			</li>
			<li>
				<Link to="/login">Login</Link>
			</li>
		</ul>
	);
  return (
<nav className="navbar bg-dark sticky">
			<h1>
				<Link to="/">HOME</Link>
			</h1>
			{!loading && (
				<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
			)}
		</nav>
    )
}
NavBar.propTypes = {
	logout: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
});

export default connect(mapStateToProps, { logout })(NavBar)