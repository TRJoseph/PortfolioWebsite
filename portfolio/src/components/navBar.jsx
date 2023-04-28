import React, { Component } from 'react';
import LogoComponent from './logo.jsx'
import MenuComponent from './navMenu.jsx'
import UpperRightText from './UpperRightText'

class NavBar extends Component {
    render() {
      return (
        <div>
          <LogoComponent />
          {/* <MenuComponent /> */}
          <UpperRightText/>
        </div>
      );
    }
  }
  
  export default NavBar;