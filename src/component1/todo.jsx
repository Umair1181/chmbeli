import React, { Component } from 'react';
class Todo extends Component {
  componentDidMount(){
      this.setState({text: this.props.todo.value});
  }

    state = { 
        text: ""
     }
    render() { 
        return ( <div>
            {
               // this.props.todo.editingMode? 
                // <input type="text" value={this.state.text} onChange={(e)=>{this.setState({text: e.target.value})}} />:
                //  <span>data</span>
            }
            <button>
                 {
                     this.props.todo.editingMode?
                        "save" : 
                        "edit"
                 }
                  </button>
            <button> delete</button>
            <hr/>
        </div> );
    }
}
 
export default Todo;