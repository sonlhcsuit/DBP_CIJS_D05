import '../assets/css/Emoji.css'
export function Emoji(props) {
    return (
        <p className="emoji"> {props.symbol} {props.title} </p>
    )
}