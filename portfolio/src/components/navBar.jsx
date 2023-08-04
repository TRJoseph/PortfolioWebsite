import React, { Component } from 'react';
import LogoComponent from './logo.jsx'
import MenuComponent from './navMenu.jsx'
import UpperRightText from './UpperRightText'
import styles from '../styles/navBarSection.module.css'; // import your styles

class NavBar extends Component {
    render() {
      const { showUpperRightText } = this.props;
      return (
        <div className={styles["navBarContainer"]}>
          <LogoComponent />
          {/* <MenuComponent /> */}
          { showUpperRightText && <UpperRightText/>}
        </div>
      );
    }
  }
  
  export default NavBar;