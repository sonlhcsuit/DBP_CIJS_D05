import React from 'react';
import '../assets/css/SignUp.css'
// import { signUp } from '../Controllers/TodoControllers'

export class SignUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            name: '',
            username: '',
            password: '',
            repassword: '',
            agree: true
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit() {
        console.log(this.state)
    }
    validForm(){
        
    }
    handleChange(e, type) {
        if (type === 'email') this.setState({ email: e.target.value })
        if (type === 'name') this.setState({ name: e.target.value })
        if (type === 'username') this.setState({ username: e.target.value })
        if (type === 'password') this.setState({ password: e.target.value })
        if (type === 'repassword') this.setState({ repassword: e.target.value })
        if (type === 'agree') this.setState({ agree: e.target.checked })
    }
    render() {
        return (
            <form className="signup-cont" onKeyDown={(e)=>e.key==='Enter'?this.handleSubmit():null}>
                <div className="signup-comp title">
                    <h1>Sign Up</h1>
                    <small>Create an account for free</small>
                </div>
                <div className="signup-comp">
                    <label htmlFor="">Email</label>
                    <input type="email" name="" id="email" onInput={(e) => this.handleChange(e, 'email')} placeholder="Enter your email" required />

                </div>
                <div className="signup-comp">
                    <label htmlFor="">Name</label>
                    <input type="text" name="" id="name" onInput={(e) => this.handleChange(e, 'name')} placeholder="Enter your name" required />

                </div>
                <div className="signup-comp">
                    <label htmlFor="">Username</label>
                    <input type="text" name="" id="username" onChange={(e) => this.handleChange(e, 'username')} placeholder="Enter your username" required />
                </div>
                <div className="signup-comp">
                    <label htmlFor="">Password</label>
                    <input type="password" name="" id="password" onInput={(e) => this.handleChange(e, 'password')} placeholder="Enter your password" required />

                </div>
                <div className="signup-comp">
                    <label htmlFor="">Re-type password</label>
                    <input type="password" name="" id="avatar" onInput={(e) => this.handleChange(e, 'avatar')} placeholder="Re-type your password" required />

                </div>

                <div className="signup-comp opt ">
                    <div >
                        <input type="checkbox" checked={this.state.agree} onChange={(e) => this.handleChange(e,'agree')} />

                        <label htmlFor="">I agree for the terms and conditions</label>
                    </div>


                    <a href="/signin">Sign In</a>

                </div>
                <div className="signup-comp">

                    <input type="button" value="Sign Up" onClick={this.handleSubmit} />

                </div>
            </form >
        )
    }

}