import React from "react";
import "../assets/css/Todolist.css";
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

function Todoeditor({ id, title, created, content, saveTodo }) {
    return (
        <form className="todolist editor-cont">
            <div className="editor-function border">
                <input className="button" type="button" value="SAVE" onClick={() => saveTodo(id, { title, created, content })} />
                {/* <input className="button" type="button" value="CANCEL" /> */}
                <i className="fal fa-times fa-2x quit"></i>
            </div>
            <div className="editor-title">
                <input type="text" defaultValue={title} onChange={e => { title = e.target.value }} />
            </div>
            <div className="editor-content">
                <textarea defaultValue={content} onChange={ e => { content = e.target.value}}></textarea>
            </div>

        </form>
    )
}
const a = [{
    title: "This is title 1",
    created: "02/01/2021",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ex quidem dolorum nulla provident a officiis eos voluptatem nesciunt ab quis facilis tempora veniam nemo, ducimus magnam ratione sed, nobis optio! Voluptas nesciunt voluptate enim dolor illo labore officiis maiores voluptates eveniet! Beatae, quos reiciendis commodi sunt aliquam iure, ex nisi, veniam necessitatibus tempore eum? Est dolorum corrupti vero laudantium dolor! Nostrum alias mollitia unde, sit commodi corporis maiores odio magnam dolorem minus, vero accusamus ea doloremque obcaecati tempore excepturi sapiente repudiandae et ipsam minima sunt tenetur id. Delectus, quas aut. Vel consequuntur excepturi magni at quas delectus sint dolorum."
}, {
    title: "This is title 2",
    created: "02/01/2021",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ex quidem dolorum nulla provident a officiis eos voluptatem nesciunt ab quis facilis tempora veniam nemo, ducimus magnam ratione sed, nobis optio! Voluptas nesciunt voluptate enim dolor illo labore officiis maiores voluptates eveniet! Beatae, quos reiciendis commodi sunt aliquam iure, ex nisi, veniam necessitatibus tempore eum? Est dolorum corrupti vero laudantium dolor! Nostrum alias mollitia unde, sit commodi corporis maiores odio magnam dolorem minus, vero accusamus ea doloremque obcaecati tempore excepturi sapiente repudiandae et ipsam minima sunt tenetur id. Delectus, quas aut. Vel consequuntur excepturi magni at quas delectus sint dolorum."
}, {
    title: "This is title 3",
    created: "02/01/2021",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ex quidem dolorum nulla provident a officiis eos voluptatem nesciunt ab quis facilis tempora veniam nemo, ducimus magnam ratione sed, nobis optio! Voluptas nesciunt voluptate enim dolor illo labore officiis maiores voluptates eveniet! Beatae, quos reiciendis commodi sunt aliquam iure, ex nisi, veniam necessitatibus tempore eum? Est dolorum corrupti vero laudantium dolor! Nostrum alias mollitia unde, sit commodi corporis maiores odio magnam dolorem minus, vero accusamus ea doloremque obcaecati tempore excepturi sapiente repudiandae et ipsam minima sunt tenetur id. Delectus, quas aut. Vel consequuntur excepturi magni at quas delectus sint dolorum."
}, {
    title: "This is title 4",
    created: "02/01/2021",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ex quidem dolorum nulla provident a officiis eos voluptatem nesciunt ab quis facilis tempora veniam nemo, ducimus magnam ratione sed, nobis optio! Voluptas nesciunt voluptate enim dolor illo labore officiis maiores voluptates eveniet! Beatae, quos reiciendis commodi sunt aliquam iure, ex nisi, veniam necessitatibus tempore eum? Est dolorum corrupti vero laudantium dolor! Nostrum alias mollitia unde, sit commodi corporis maiores odio magnam dolorem minus, vero accusamus ea doloremque obcaecati tempore excepturi sapiente repudiandae et ipsam minima sunt tenetur id. Delectus, quas aut. Vel consequuntur excepturi magni at quas delectus sint dolorum."
}, {
    title: "This is title 5",
    created: "02/01/2021",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ex quidem dolorum nulla provident a officiis eos voluptatem nesciunt ab quis facilis tempora veniam nemo, ducimus magnam ratione sed, nobis optio! Voluptas nesciunt voluptate enim dolor illo labore officiis maiores voluptates eveniet! Beatae, quos reiciendis commodi sunt aliquam iure, ex nisi, veniam necessitatibus tempore eum? Est dolorum corrupti vero laudantium dolor! Nostrum alias mollitia unde, sit commodi corporis maiores odio magnam dolorem minus, vero accusamus ea doloremque obcaecati tempore excepturi sapiente repudiandae et ipsam minima sunt tenetur id. Delectus, quas aut. Vel consequuntur excepturi magni at quas delectus sint dolorum."
}, {
    title: "This is title 6",
    created: "02/01/2021",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ex quidem dolorum nulla provident a officiis eos voluptatem nesciunt ab quis facilis tempora veniam nemo, ducimus magnam ratione sed, nobis optio! Voluptas nesciunt voluptate enim dolor illo labore officiis maiores voluptates eveniet! Beatae, quos reiciendis commodi sunt aliquam iure, ex nisi, veniam necessitatibus tempore eum? Est dolorum corrupti vero laudantium dolor! Nostrum alias mollitia unde, sit commodi corporis maiores odio magnam dolorem minus, vero accusamus ea doloremque obcaecati tempore excepturi sapiente repudiandae et ipsam minima sunt tenetur id. Delectus, quas aut. Vel consequuntur excepturi magni at quas delectus sint dolorum."
}, {
    title: "This is title 7",
    created: "02/01/2021",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ex quidem dolorum nulla provident a officiis eos voluptatem nesciunt ab quis facilis tempora veniam nemo, ducimus magnam ratione sed, nobis optio! Voluptas nesciunt voluptate enim dolor illo labore officiis maiores voluptates eveniet! Beatae, quos reiciendis commodi sunt aliquam iure, ex nisi, veniam necessitatibus tempore eum? Est dolorum corrupti vero laudantium dolor! Nostrum alias mollitia unde, sit commodi corporis maiores odio magnam dolorem minus, vero accusamus ea doloremque obcaecati tempore excepturi sapiente repudiandae et ipsam minima sunt tenetur id. Delectus, quas aut. Vel consequuntur excepturi magni at quas delectus sint dolorum."
}]


export class Todolist extends React.Component {
    constructor(props) {
        super(props)
        this.state = { todos: a }

        this.editTodo = this.editTodo.bind(this)
        this.saveTodo = this.saveTodo.bind(this)
    }
    saveTodo(id, newTodo) {
        let todos = this.state.todos
        if(id == todos.length){
            todos.push({})
        }
        todos[id] = newTodo
        this.setState({ todos: todos ,isEdit:false})
        console.log(this.state.todos)
    }
    editTodo(id) {
        this.setState({ isEdit: true, selectedId: id })
        // console.log(this.state)
    }
    render() {
        if (this.state.isEdit) {
            return (
                <Todoeditor {...this.state.todos[this.state.selectedId]} id={this.state.selectedId} saveTodo={this.saveTodo} />)
        } else {
            return (
                // <Todoeditor {...a}/>
                <div className="border todolist todo-cont">
                    {this.state.todos.map((todo, index) => {
                        return (
                            <Todo {...todo} key={index} edit={() => this.editTodo(index)} />
                        )
                    })}
                    <div className="add" onClick={()=>this.editTodo(this.state.todos.length)}>
                        <i className="fal fa-plus fa-2x" ></i>
                    </div>

                </div>
            )
        }

    }
}