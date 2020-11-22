import React from 'react';
import {login} from '../Controllers/TodoControllers'

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
    handleSubmit(){
        login(this.state.username,this.state.password)
    }
    handleChange(e, type) {
        if (type === 'password') this.setState({ password: e.target.value })
        if (type === 'username') this.setState({ username: e.target.value })
    }
    render() {
        return (
            <form>
                <label htmlFor="">Username</label>
                <input type="text" name="" id="username" onChange={(e) => this.handleChange(e, 'username')} />
                <br />
                <label htmlFor="">Password</label>
                <input type="password" name="" id="password" onInput={(e) => this.handleChange(e, 'password')} />
                <br />
                <input type="button" value="Sign In" onClick={this.handleSubmit}/>
            </form >
        )
    }

}