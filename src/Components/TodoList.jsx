import React from "react";
import "../assets/css/TodoList.css";
// import '../Controllers/TodoControllers'
// import { getTodoOf, updateTodo, addTodo, removeTodo, completeTodo } from '../Controllers/TodoControllers'
import { Todo } from './Todo'
import { TodoEditor } from './TodoEditor'
import { subscribeTodo, updateTodo, removeTodo, addTodo } from '../ultis/TodoUltis'
export class TodoList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isSubscribed: false,
            selectedTodo: null,
            unsubF: null,
            // for modal
            notifMessage: '',
            todos: []
        }
    }

    // when user click save, update on firebase
    saveTodo = (edittedTodo) => {
        let type = null
        // mean close
        if (edittedTodo === null) type = 'close'
        // mean add
        if (!edittedTodo?.id) type = 'added'
        // mean modified
        else if (edittedTodo?.id) type = 'modified'

        switch (type) {
            case 'added':
                addTodo(edittedTodo, this.props)
                    .catch(error => {
                        console.error(error)
                    })
                break;
            case 'modified':
                updateTodo(edittedTodo)
                    .catch(error => {
                        console.error(error)
                    })
                break;

            default:
                console.log('some thing goes wrong')
        }
        this.setState({ selectedTodo: null })

    }
    edit = (todo) => {
        this.setState({ selectedTodo: todo })
    }
    completeTodo = (todo) => {
        todo.isComplete = !todo?.isComplete
        updateTodo(todo)
            .catch(error => {
                console.error(error)
            })
    }
    // realtime listener
    subscribe = (userId) => {
        let unsubs = subscribeTodo(userId, (data, type) => {
            switch (type) {
                case 'added':
                    this.setState(oldState => {
                        const newState = JSON.parse(JSON.stringify(oldState))
                        newState.todos.push(data)
                        return newState
                    })
                    break;
                case 'modified':
                    this.setState(oldState => {
                        const newState = JSON.parse(JSON.stringify(oldState))
                        const ids = newState.todos?.map(obj => obj.id)
                        const indx = ids?.indexOf(data.id)
                        if (indx !== -1 && indx !== undefined) {
                            newState.todos[indx] = data
                            // console.log(indx)
                            // console.log(newState)
                        }
                        return newState
                    })
                    break;
                case 'removed':
                    this.setState(oldState => {
                        const newState = JSON.parse(JSON.stringify(oldState))
                        const ids = newState.todos?.map(obj => obj.id)
                        const indx = ids?.indexOf(data.id)
                        if (indx !== -1 && indx !== undefined) {
                            newState.todos = [].concat(newState.todos.slice(0, indx), newState.todos.slice(indx + 1, newState.todos.length))
                        }
                        console.log('removed')
                        return newState
                    })
                    break;
                default:
                    console.log('Some thing went wrong')
            }
        })
        this.setState({ unsubF: unsubs })
    }
    componentWillUnmount() {
        // no need because we will create a new app by force reload, when you use react router, 
        // unsubscribe when navigate to another Route
        console.log('Unsubscribe')
        this.state.unsubF()
    }
    componentDidUpdate() {
        if (!this.state.isSubscribed) {
            this.setState({ isSubscribed: true }, () => {
                this.subscribe(this.props.id)
            })
        }
    }

    render() {
        // edit
        // console.log(this.props)
        if (this.state.selectedTodo) {
            return (
                <TodoEditor {...this.state.selectedTodo} saveTodo={this.saveTodo} />)
        } else {
            // if no edit
            // console.log(this.state)
            return (
                // <Todoeditor {...a}/>
                <div className="border todolist todo-cont">
                    {
                        this.state.todos.map((todo, index) => {
                            // console.log(todo)
                            return (
                                <Todo {...todo} key={index}
                                    edit={() => this.edit(todo)}
                                    complete={() => this.completeTodo(todo)}
                                    remove={() => removeTodo(todo)}
                                />
                            )
                        })
                    }
                    <div className="add" onClick={() => this.edit({})}>
                        <i className="fal fa-plus fa-2x" ></i>
                    </div>
                </div>
            )
        }
    }

}

// export {TodoList}