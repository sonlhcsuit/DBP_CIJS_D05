import React from 'react'
import '../assets/css/Bulb.css'
const on_img = './on.jpg'
const off_img = './off.jpg'

export class Bulb extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isOn: true,
            isFlip:0

        }
        this.switch_bulb = this.switch_bulb.bind(this)
        this.apply_flip = this.apply_flip.bind(this)
    }
    apply_flip(val) {
        this.setState({ isFlip: val })
    }
    switch_bulb() {
        this.setState({ isOn: !this.state.isOn })
    }
    render() {
        console.log('render')
        return (
            <div className="bulb-area">
        {/* this.switch_bulb() */}
                <img className="bulb-image" src={this.state.isOn ? on_img : off_img} flip={this.state.isFlip} onAnimationStart={()=>this.switch_bulb()} onAnimationEnd={() => this.apply_flip(0)} />
                {/* <img className="bulb-image" src={this.state.isOn ? on_img : off_img} /> */}

                <input className="btn" type="button" value="Switch" onClick={()=>this.apply_flip(1)} />
            </div >
        )
    }

}
