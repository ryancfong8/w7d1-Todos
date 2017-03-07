import React from "react";
import {uniqueId} from '../../utils/util.js';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: "", title: "", body: "", done: false};
    this.setTitle = this.setTitle.bind(this);
    this.setBody = this.setBody.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  setTitle(e){
    e.preventDefault;
    this.setState({title: e.target.value});
  }

  setBody(e){
    e.preventDefault;
    this.setState({body: e.target.value});
  }

  submitForm(e){
    e.preventDefault;
    this.setState({id: uniqueId()});
    this.props.receiveTodo(this.state);
  }

  render(){
    // debugger
    const { title, body } = this.state;
    return (
    <div>
    <label>Title
      <input onChange = {this.setTitle} value= {title} />
    </label>

    <label>Body
      <input onChange = {this.setBody} value= {body} />
    </label>

    <button onClick = {this.submitForm}>Submit</button>
    </div>
    );
  }
}

export default TodoForm;
