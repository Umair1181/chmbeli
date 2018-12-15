// import React, { Component } from "react";
// class Counter extends Component {
//     render() { 
//         return <h1>hellow here</h1>;
//     }
// }
 
// export default Counter;

// latest
// import React, { Component } from 'react';
// class Counter extends Component {
//     state = { 
//         count : 0,
//         // tags: [ 'tag1' , 'tag3']
//      };
     
//     //  styles ={ fontSize: 25};

//     //  renderTags()
//     //  {
//     //      if (this.state.tags.length === 0 ) return <span className="badge badge-warning">Zero</span>
//     //      return <ul>{this.state.tags.map( tag=> <li key={tag}>{tag}</li>)}</ul>
//     //  }
//      handleIncrement = ()=>
//      {
//          this.setState({ count: this.state.count + 1 });
//      }
//      handleDecrement = ()=>
//      {
//          this.setState({ count: this.state.count - 1 }) ;
         
//      }
//     render() {
//         // let classes = this.getBatchClass();to avoid get render method poluted

//         return(
//             <React.Fragment>
//                 {/* <span className={this.getBatchClass()}>{this.myFun()}</span>
//                 <button style={this.styles} className="badge badge-secondary">Increment</button>
//                 <ul>
//                     {this.state.tags.map( tag=> <li key={tag}>{tag}</li>)}
//                     </ul> */}
//                    <span className={this.getBatchClass()}>{this.myFun()}</span>
//                     <button onClick = {this.handleIncrement} className="badge badge-secondary">
//                      Increment
//                      </button>
//                      <button onClick = {this.handleDecrement} className="badge badge-secondary">
//                      Decrement
//                      </button>
//                      <button>
//                          Delete
//                      </button>
                 

//             </React.Fragment>
//         ); 
        
//     }

//     getBatchClass() {
//         let classes = "badge m-2 badge-";
//         classes += this.state.count === 0 ? "warning" : "primary";
//         return classes;
//     }

//     myFun()
//     {
//         const { count } = this.state;
//         return count === 0 ? 'Zero' : count ;
//     }
// }
 
// export default Counter;

// previous



// import React, { Component } from 'react';
// class Counter extends Component {
//     state = { 
//         count  : 0 
//     };
//     styles = { 
//         fontSize: 25,
//         fontWeight: "bold"
//     };
//     render() {  
//     return ( 
//     <React.Fragment>
//         <span style={this.styles} className="badge badge-warning m-2">{this.formatCount()}</span>
//         <button className="btn btn-secondry m-2">Increment</button>
//     </React.Fragment>
//     );
//     }
//     formatCount()
//     {
//         const { count } = this.state ; 
//         return count === 0 ? 'ZERO' : count ;
//     }
// } 
 
// export default Counter;

import React, { Component } from 'react';
class Counter extends Component {
    state = { 
        value: this.props.value ,
        tags:['tag1' , 'tag2']
     };
  
     handleIncrement = ()=>
     {
        this.setState ({ value: this.state.value + 1 });
     }
    //  doHandleIncrement=()=>
    //  {
    //      this.handleIncrement({id:1});
    //  }
     handleDecrement=()=>
     {
         
         this.setState ({ value : this.state.value -  1});
     }
     restfun =()=>
     {
         this.setState({ value: this.state.value = 0});
     }
    render() { 
        console.log('props' , this.props);
        return(
            <React.Fragment>
                
                <span className={this.getClasses()}>{this.myfun2()}</span>
                <button onClick={this.handleIncrement} className=" badge badge-secondary m-2 p-2">
                    Increment
                </button>
                <button onClick={this.handleDecrement} className=" badge badge-secondary m-2 p-2" >
                   Decrement
                </button>
                <button className="badge badge-primary m-2 p-2" onClick={this.restfun}>
                    Reset
                </button>
                <button onClick={()=>this.props.onDelete(this.props.id)} className="btn btn-danger m-2 btn-sm">Delete</button>
                </React.Fragment>
        );
    }
    getClasses() {
        let classes = "badge m-2 p-2 badge-";
        classes += this.state.value === 0 ? "warning" : "primary";
        return classes;
    }

    myfun2 ()
    {
        const {value} = this.state ;
        return value === 0 ? 'Zero' : value ;  
    }
};
 
export default Counter;