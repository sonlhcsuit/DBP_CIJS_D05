import React from 'react';
import '../assets/css/SignIn.css'
// import { login } from '../Controllers/TodoControllers'

export class SignIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit() {
        console.log(this.state)
        // login(this.state.username, this.state.password)
    }
    handleChange(e, type) {
        if (type === 'password') this.setState({ password: e.target.value })
        if (type === 'username') this.setState({ username: e.target.value })
    }
    render() {
        return (
            <form className="signin-cont border" onKeyDown={(e) => e.key == 'Enter' ? this.handleSubmit() : null}>
                <div className="signin-comp title">
                    <h1>Sign In</h1>
                    <small>Please sign in for better experience</small>
                </div>
                <div className="signin-comp">
                    <label htmlFor="">Username</label>
                    <input type="text" name="" id="username" onChange={(e) => this.handleChange(e, 'username')} placeholder="Enter username" />
                </div>
                <div className="signin-comp">
                    <label htmlFor="">Password</label>
                    <input type="password" name="" id="password" onInput={(e) => this.handleChange(e, 'password')} placeholder="Enter password" />
                </div>
                <div className="signin-comp opt ">
                    <a href="/forgot" >Forgot Password?</a>
                    <a href="/signup">Sign Up</a>
                </div>
                <div className="signin-comp">
                    <input type="button" value="Sign In" onClick={this.handleSubmit} />
                </div>
            </form >
        )
    }

}