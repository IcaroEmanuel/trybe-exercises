import './App.css';

import React, { Component } from 'react';
import TasksList from './TaskList';
import data from './data.js';

export default class App extends Component{
 render(){

  return (
    <div>
      <h1 className="App">Todo List</h1>
      <TasksList tasks={data} />
    </div>
  );
 }
}
