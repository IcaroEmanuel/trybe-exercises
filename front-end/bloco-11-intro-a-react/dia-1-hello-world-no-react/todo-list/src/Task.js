import React, { Component } from 'react';

export default class Task extends Component{
 render(){
   const { task } = this.props
  return (
    <div>
      <ul>
        <li>{ task }</li>
      </ul>
    </div>
  );
 }
}
