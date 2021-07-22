import React from "react"
import TodosList from "./TodosList";
import Header from "./Header";


class TodoContainer extends React.Component {
    state = {
        todos: [
            {
                id: 1,
                title: 'setup development environment',
                completed: true
            },
            {
                id: 2,
                title: 'develop website',
                completed: false
            },
            {
                id: 3,
                title: 'deploy to live server',
                completed: false
            },
        ]
    }

    handleChange = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id){
                    todo.completed = !todo.completed
                }
                return todo
            })
        })
    }

    render() {
        return (
            <div className='container'>
                <Header />
                <TodosList todos={this.state.todos} handleChangeProps={this.handleChange} />
            </div>
        )
    }
}

export default TodoContainer