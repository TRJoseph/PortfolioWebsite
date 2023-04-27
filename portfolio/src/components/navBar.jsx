import React, { Component } from 'react';
import LogoComponent from './logo.jsx'
import MenuComponent from './navMenu.jsx'

class NavBar extends Component {
    render() {
      return (
        <div>
          <LogoComponent />
          <MenuComponent />
        </div>
      );
    }
  }
  
  export default NavBar;