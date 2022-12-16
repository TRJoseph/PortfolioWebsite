import React, { Component } from 'react';
import logoElement from '../Images/WebsiteLogo.svg'

class logo extends Component {
    state = {  };

    styles = {
        height: 75,
        margin: '40px 0 0 40px'
    }

    render() { 
        return (<img style={this.styles} src={logoElement} alt={"logo"}/>);
    }
}
 
export default logo;