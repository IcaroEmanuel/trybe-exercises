import React, { Component } from 'react';
import Pokemon from './Pokemon';

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