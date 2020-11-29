import React from 'react'
import '../assets/css/Bulb.css'
const on_img = './on.jpg'
const off_img = './off.jpg'

export class Bulb extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isOn: true
        }
        this.switch_bulb = this.switch_bulb.bind(this)
    }
    switch_bulb() {
        this.setState({isOn:!this.state.isOn})
    }
    render() {
        return (
            <div className="bulb-area">
                <img className="bulb-image" src={this.state.isOn ? on_img : off_img} />
                <input className="btn" type="button" value="Switch" onClick={this.switch_bulb} />
            </div >
        )
    }

}
