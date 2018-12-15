import React, { Component } from 'react';
class Todo extends Component {
    state = { 

     }
    fSubmit =(e)=>
    {
        e.preventDefault();
        console.log('value');
    }
    render() { 
        return ( 
            <React.Fragment>
                <form>
                    <input ref="name" placeholder="data?">
                    <button onClick={(e)=> this.fSubmit(e)} type="submit">
                        Submit
                    </button>
                    </input>
                </form>
            </React.Fragment>

        );
    }
}
 
export default Todo;