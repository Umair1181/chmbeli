import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component1/header';
import TodoList from './component1/todoList';
// import MyTodo from './MyTodo';
// import Todo from './component1/todo';
import {Provider} from 'react-redux';
import store from './store';
class App extends Component {
  state={
    todoList:[]
  }
 render() {
    return ( <Provider store={store}>
         <div className="App">
         <Header onAdd={this.addTodo}/>
         <TodoList todoList={this.state.todoList}/></div>
      </Provider>  );
  }
  // addTodo = (todo)=> {
  //   // this.state.todoList.push(todo);
  //   this.setState({todoList: [ ...this.state.todoList, new MyTodo(1, "te", false) ] });
  // }
}export default App;

