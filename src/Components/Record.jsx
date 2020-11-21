import '../assets/css/Record.css'
export function Record(props) {
    return (
        <div className="record">
            <h5>{props.citiname}</h5>
            <h1>{props.temperature}</h1>
            <p>{props.status}</p>
        </div>
    )
}