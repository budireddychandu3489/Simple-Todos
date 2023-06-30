// Write your code here
import {Component} from 'react'
import './index.css'

class TodoItem extends Component {
  state = {todoItems: '', deleteTodos: ''}

  onClickingDeleteButton = () => {
    const {todoItems, deleteTodos} = this.state
    deleteTodos(todoItems.id)
  }

  render() {
    const {deleteTodo, todoItem} = this.props
    this.state.todoItems = todoItem
    this.state.deleteTodos = deleteTodo

    return (
      <li>
        <p>{todoItem.title}</p>
        <button type="button" onClick={this.onClickingDeleteButton}>
          Delete
        </button>
      </li>
    )
  }
}

export default TodoItem
