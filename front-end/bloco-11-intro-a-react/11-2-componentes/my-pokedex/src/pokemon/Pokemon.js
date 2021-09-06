import React, { Component } from 'react';

export default class Pokemon extends Component{
 render(){
   const { pokemon: { name, type , averageWeight: { value, measurementUnit, }, image, } } = this.props;
  return (
    <section>
      <p>{ name }</p>
      <p>{ type }</p>
      <p>Peso médio: { value } { measurementUnit }</p>
      <img src={ image } alt={ name } />
    </section>
  );
 }
}