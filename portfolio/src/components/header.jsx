import React, { Component } from 'react';
import LogoComponent from './logo'
import MenuComponent from './navMenu'

class Header extends Component {
    state = {  } 
    
    render() { 
        return (<div>
            <LogoComponent/>
            <MenuComponent/>
        </div>);
    }
}
 
export default Header;