import React from "react";
import TodoItem from "./TodoItem";

const TodosList = ({todos, handleChangeProps, deleteTodoProps}) => {


  return (
    <div>
      {todos.map((todo, index)=> {
        return(
          <TodoItem
          key={todo.id}
          todo={todo}
          handleChangeProps={handleChangeProps}
          deleteTodoProps={deleteTodoProps}
          />
        )
      }
      )}
    </div>
  )

}

/*class TodosList extends React.Component {
  render() {
    return (
      <div>
        {this.props.todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleChangeProps={this.props.handleChangeProps}
            deleteTodoProps={this.props.deleteTodoProps}
          />
        ))}
      </div>
    );
  }
}*/

export default TodosList;