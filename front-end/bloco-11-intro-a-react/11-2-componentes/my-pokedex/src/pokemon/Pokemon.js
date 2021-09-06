import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

Pokemon.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.number,
  measurementUnit: PropTypes.string,
  image: PropTypes.string,
}.isRequired;
