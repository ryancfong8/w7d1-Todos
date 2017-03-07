import React from 'react';

class TodoListItem extends React.Component {
  constructor (props) {
    super (props);
    this.deleteItem = this.deleteItem.bind(this);
    this.setButton = this.setButton.bind(this);
    this.toggleDone = this.toggleDone.bind(this);
  }

  deleteItem(e){
    e.preventDefault;
    this.props.removeTodo(this.props.todo);
  }

  toggleDone(e) {
    e.preventDefault;
    let done = !this.props.todo.done;
    this.setState({done: done});
  }

  setButton(){
    if (this.props.todo.done) {
      return <button onClick={this.toggleDone}>Undo</button>;
    }
    else {
      return <button onClick={this.toggleDone}>Done</button>;
    }
  }

  render () {
    return (
      <li>
        {this.props.todo.title}
        <button onClick= {this.deleteItem} >Delete</button>
        {this.setButton()}
      </li>
    );
  }
}

export default TodoListItem;
