import React, { Component } from 'react';
import MyTodo from '../MyTodo';
import {addStudent,updateStudent,countfun,countfun1} from '../actions/studentActions';

import {connect} from 'react-redux';
class Header extends Component {
    state = { 
        text: "", 
    

     }
    render() { 
        return ( <div>
            <h1>{ this.props.count }</h1>
            <input type="text" onChange={(e)=> this.setState({text: e.target.value})} />
            <button className="btn-primary" onClick={()=> this.props.addStudent(this.state.text)} > add </button>
            <br/>
           
            <hr/>
   

    <ul>
            { 
                this.props.data.studentList.map(d => <li><input value={d} />&nbsp;
                <button className="btn-primary" onClick={()=> this.props.updateStudent(this.state.text)}>Edit</button> &nbsp;
                {/* <button className="btn-warning" onClick={()=> this.props.removeStudent(this.state.text)}>Delete</button> */}
                <button className=" btn-warning" onClick={()=> this.props.countfun(this.state.num)}>ADD</button>&nbsp;
                <button className=" btn-warning" onClick={()=> this.props.countfun1(this.state.num)}>DEC</button>
                <span className="badge" >{this.props.num}</span>
                </li>)
                
                
            }
             </ul>
        </div> );
    }
   
}

const mapStateToProps = state => ({
    data: state.studentReducer,
    count: state.studentReducer.count,
    num: state.studentReducer.num
});

export default  connect(mapStateToProps, { addStudent ,updateStudent,countfun,countfun1})(Header);


