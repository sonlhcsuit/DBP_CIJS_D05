export function Todo(props) {
    let { title, created, content } = props
    return (
        <div className={`todo border`}>
            <div className={`todo-title  ${props.isComplete ? 'complete' : ''}`}>
                <h1>{title}</h1>
                <small style={{ color: "gray" }}>{created}</small>
            </div>
            <div className={`todo-content ${props.isComplete ? 'complete' : ''}`}>
                <p>{content}</p>
            </div>

            <div className="todo-function">
                <input className="button" type="button" value="VIEW" />
                <input className="button" type="button" value="EDIT" onClick={props.edit} />
                <input className="button" type="button" value="COMPLETE" onClick={props.complete} />
                <input className="button" type="button" value="REMOVE" onClick={props.remove} />

            </div>
        </div>
    )
}