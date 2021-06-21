import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Navbar, Button, Nav, Image } from 'react-bootstrap'
import { Link, Redirect } from 'react-router-dom'
import { deleteAuthedUser } from '../actions/authedUser'
import '../App.css'

class NavigationBar extends Component {
    logout = () => {
        this.props.dispatch(deleteAuthedUser())
    }
    render() {
        const { loggedInUser } = this.props
        if(this.props.authedUser === '') {
            return (
                <Redirect to="/login" />
            )
        }

        return (
                <Navbar bg="light" variant="light" className="container">
                    <Navbar.Brand href="#home">4th projrct </Navbar.Brand>
                    <Nav className="mr-auto">
                        <Link className="nav-link" to="/">Home</Link>
                        <Link className="nav-link" to="/add">Add Question</Link>
                        <Link className="nav-link" to="/leaderboard">Dashbord</Link>
                    </Nav>
                    <Nav>
                        <div className="navText">Hello, {loggedInUser.name}</div>
                        <Image src={loggedInUser.avatarURL} rounded />
                        <Button variant="outline-primary" onClick={this.logout}>signout</Button>
                    </Nav>
                </Navbar>
            
        )
    }
}

function mapStateToProps({ authedUser, users } ){
    return {
        loggedInUser: users[authedUser],
        authedUser
    }
}

export default connect(mapStateToProps)(NavigationBar)