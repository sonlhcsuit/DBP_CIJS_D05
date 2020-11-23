import React from 'react';
import '../assets/css/SignIn.css'
import { signUp } from '../Controllers/TodoControllers'

export class SignUp extends React.Component {
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
        signUp(this.state)
    }
    handleChange(e, type) {
        if (type === 'password') this.setState({ password: e.target.value })
        if (type === 'username') this.setState({ username: e.target.value })
        if (type === 'email') this.setState({ email: e.target.value })
        if (type === 'name') this.setState({ name: e.target.value })
        if (type === 'avatar') this.setState({ avatar: e.target.value })

    }
    render() {
        return (
            <form className="signin-up signin-cont" onSubmit={this.handleSubmit}>
                <div className="signin-comp title">
                    <h1>Sign Up</h1>

                </div>
                <div className="signin-comp">
                    <label htmlFor="">Username</label>
                    <input type="text" name="" id="username" onChange={(e) => this.handleChange(e, 'username')} placeholder="Enter username" required />
                </div>

                <div className="signin-comp">
                    <label htmlFor="">Password</label>
                    <input type="password" name="" id="password" onInput={(e) => this.handleChange(e, 'password')} placeholder="Enter password" required />

                </div>
                <div className="signin-comp">
                    <label htmlFor="">Email</label>
                    <input type="email" name="" id="email" onInput={(e) => this.handleChange(e, 'email')} placeholder="Enter email"required />

                </div>
                <div className="signin-comp">
                    <label htmlFor="">Name</label>
                    <input type="text" name="" id="name" onInput={(e) => this.handleChange(e, 'name')} placeholder="Enter name" required/>

                </div>
                <div className="signin-comp">
                    <label htmlFor="">Avatar</label>
                    <input type="text" name="" id="avatar" onInput={(e) => this.handleChange(e, 'avatar')} placeholder="Enter avatar"required />

                </div>
                
                <div className="signin-comp opt">
                    <small onClick={this.props.signIn}>
                        <a>Sign Up</a>
                    </small>
                </div>
                <div className="signin-comp">
                    <input type="submit" value="Sign Up"  />

                </div>
            </form >
        )
    }

}