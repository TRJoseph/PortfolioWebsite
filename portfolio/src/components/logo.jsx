import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logoElement from '../Images/WebsiteLogo.svg'

class logo extends Component {
    constructor() {
        super();
        this.state = {
            opacity: 1
        }
    }

    state = {  };
    
    render() { 
        return (<Link to="/"><img onMouseEnter={() => this.setState({ opacity: 0.65})} onMouseLeave={() => this.setState({ opacity: 1})} id="logoElement" style={this.state} src={logoElement} alt={"logo"}/>
            </Link>);
    }

}
 
export default logo;