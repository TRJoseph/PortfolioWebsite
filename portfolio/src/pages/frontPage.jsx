import React, { Component } from 'react';
import SummarySection from '../components/frontPageBody'
import ImageSlider from '../components/frontpageSlider'
import LogoComponent from '../components/logo'
import MenuComponent from '../components/navMenu'

class frontPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showLogo: true,
        };

        this.toggleLogoVisibility = this.toggleLogoVisibility.bind(this);
        }


        toggleLogoVisibility() {
        this.setState((prevState) => ({
            showLogo: !prevState.showLogo,
        }));
        }


    render() { 
        const { showLogo } = this.state;
        return (<div>
             {showLogo && <LogoComponent />}
            <MenuComponent/>
            <ImageSlider toggleLogoVisibility={this.toggleLogoVisibility}/>
        </div>);
    }
}

export default frontPage;