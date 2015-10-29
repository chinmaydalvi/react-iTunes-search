import React, { Component } from 'react';
import Radium from 'radium';
import ribbon from '../../css/img/ribbon.png';

class Ribbon extends Component {

  render () {

    const style = {
      position: 'absolute',
      top: 0,
      right: 0,
      border: 0,
      zIndex: 100,
      '@media (max-width: 768px)': {
        display: 'none'
      }
    };

    return (

      <a target="_blank" href="https://github.com/LeoAJ">
        <img src={ribbon.indexOf('dist') === -1 ? 'dist/' + ribbon : ribbon.substring(1)}
             style={style} />
      </a>

    );

  }

}

export default Radium(Ribbon);
