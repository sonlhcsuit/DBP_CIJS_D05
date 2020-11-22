import React from "react";
import "../assets/css/Todolist.css";
import '../Controllers/TodoControllers'
import { getTodoOf, updateTodo } from '../Controllers/TodoControllers'
function Todo(props) {
    let { title, created, content } = props
    return (
        <div className="todo border">
            <div className="todo-title">
                <h1>{title}</h1>
                <small style={{ color: "gray" }}>{created}</small>
            </div>
            <div className="todo-content">
                <p>{content}</p>
            </div>

            <div className="todo-function">
                <input className="button" type="button" value="VIEW" />
                <input className="button" type="button" value="EDIT" onClick={props.edit} />
                <input className="button" type="button" value="COMPLETE" />
                <input className="button" type="button" value="REMOVE" />

            </div>
        </div>
    )
}

function Todoeditor({ indx, title, created, content, saveTodo, id,userId }) {
    // console.log(id)
    return (
        <form className="todolist editor-cont">
            <div className="editor-function border">
                <input className="button" type="button" value="SAVE" onClick={() => saveTodo(indx, { title, created, content, id,userId })} />
                {/* <input className="button" type="button" value="CANCEL" /> */}
                <i className="fal fa-times fa-2x quit" onClick={() => saveTodo(indx, null)}></i>
            </div>
            <div className="editor-title">
                <input type="text" defaultValue={title} onChange={e => { title = e.target.value }} />
            </div>
            <div className="editor-content">
                <textarea defaultValue={content} onChange={e => { content = e.target.value }}></textarea>
            </div>

        </form>
    )
}
export class Todolist extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userId: this.props.userId,
            todos: []
        }
        // console.log(this.props)
        this.editTodo = this.editTodo.bind(this)
        this.saveTodo = this.saveTodo.bind(this)
    }
    componentDidMount() {
        if (this.state.userId === undefined) return
        getTodoOf(this.state.userId).then(data => {
            this.setState({
                todos: data
            })
        })
    }
    componentDidUpdate() {
    }
    saveTodo(id, newTodo) {
        // console.log(newTodo)
        if (newTodo === null) {
            this.setState({ isEdit: false })
        } else {
            let todos = this.state.todos
            if (id === todos.length) {
                todos.push({})
            }
            todos[id] = newTodo
            this.setState({ todos: todos, isEdit: false })
        }
        updateTodo(newTodo.id,newTodo)
    }
    editTodo(id) {
        this.setState({ isEdit: true, selectedId: id })
        // console.log(this.state)
    }
    render() {
        if (this.state.isEdit) {
            return (
                <Todoeditor {...this.state.todos[this.state.selectedId]} indx={this.state.selectedId} saveTodo={this.saveTodo} />)
        } else {
            return (
                // <Todoeditor {...a}/>
                <div className="border todolist todo-cont">
                    {this.state.todos.map((todo, index) => {
                        // console.log(todo)
                        return (
                            <Todo {...todo} key={index} edit={() => this.editTodo(index)} />
                        )
                    })}
                    <div className="add" onClick={() => this.editTodo(this.state.todos.length)}>
                        <i className="fal fa-plus fa-2x" ></i>
                    </div>

                </div>
            )
        }

    }
}