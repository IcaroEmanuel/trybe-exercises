import './App.css';

import React, { Component } from 'react';
import TasksList from './TaskList';
import data from './data.js';

export default class App extends Component{
 render(){

  return (
    <div className="App">
      <h1>Olá</h1>
      <TasksList tasks={data} />
    </div>
  );
 }
}
