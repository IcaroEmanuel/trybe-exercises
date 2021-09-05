import React, { Component } from 'react';
import Task from './Task';

export default class TasksList extends Component{
 render(){
   const { tasks } = this.props;
  return (
    <div>
      {tasks.map((task, index) => <Task key={index} task={task} />)}
    </div>
  );
 }
}