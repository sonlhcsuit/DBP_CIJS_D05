import React from 'react'
import '../assets/css/Card.css'
const back = 'https://upload.wikimedia.org/wikipedia/vi/3/3b/Pokemon_Trading_Card_Game_cardback.jpg'
const front = 'https://upload.wikimedia.org/wikipedia/vi/thumb/f/f7/Sugimoris025.png/220px-Sugimoris025.png'
export class Card extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isFront: 0

        }
        this.change_face = this.change_face.bind(this)
    }
    change_face(val) {
        console.log('uyep')
        this.setState({ isFront: val })
    }

    render() {
        console.log(this.state.isFront)
        return (
            <div className="card-area" onClick={()=>this.change_face(1)}>
                <img className="card-image" src={back} flip={this.state.isFront} onAnimationEnd={() => this.change_face(0)} />
                <input className="btn" type="button" value="Switch" onClick={() => this.change_face(1)} />
            </div >
        )
    }

}
