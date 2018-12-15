import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = { 
        counters: [
            { id: 1 , value:9} ,
            { id: 2 , value:0} ,
            { id: 3 , value:0} ,
            { id: 4 , value:0} ,    
            { id: 5 , value:0}
        ]
     };
     handleDelete = counterid=>
     {
        const counters = this.state.counters.filter( c=> c.id !== counterid);
        this.setState({ counters: counters});
     };
    render() { 
        return (
            // onDelete= {this.handleDelete}
            <div>
            { this.state.counters.map( counter=> 
            <p><Counter key={counter.id} onDelete={this.handleDelete} value={counter.value} selected={true} id={counter.id} /></p> 
            )}
            </div> 
            
         );
    }
}
 
export default Counters; 