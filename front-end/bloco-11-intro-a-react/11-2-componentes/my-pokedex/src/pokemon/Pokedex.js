import React, { Component } from 'react';
import Pokemon from './Pokemon';
import PropTypes from 'prop-types';
export default class Pokedex extends Component{
 render(){
   const { pokemon } = this.props;
  return (
    <div>
      <main>
        { pokemon.map((item) => <Pokemon key={ item.id } pokemon={ item } />) }
      </main>
    </div>
  );
 }
}

Pokedex.propTypes = {
  pokemon: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      type: PropTypes.string,
      value: PropTypes.number,
      measurementUnit: PropTypes.string,
      image: PropTypes.string,
    }),
  ).isRequired,
};
