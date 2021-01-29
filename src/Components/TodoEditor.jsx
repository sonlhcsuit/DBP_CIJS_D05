import '../assets/css/TodoEditor.css'

export function TodoEditor(props) {
    let cpTodo = JSON.parse(JSON.stringify(props))
    delete cpTodo.saveTodo
    const { saveTodo } = props
    return (
        <form className="todolist editor-cont">
            <div className="editor-function border">
                <input className="button" type="button" value="SAVE" onClick={() => saveTodo(cpTodo)} />
                <i className="fal fa-times fa-2x quit" onClick={() => saveTodo(null)}></i>
            </div>
            <div className="editor-title">
                <input type="text" defaultValue={cpTodo.title} onChange={e => { cpTodo.title = e.target.value }} />
            </div>
            <div className="editor-content">
                <textarea defaultValue={cpTodo.content} onChange={e => { cpTodo.content = e.target.value }}></textarea>
            </div>

        </form>
    )
}