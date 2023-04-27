import React, { Component } from 'react';
import SummarySection from '../components/frontPageBody'
import ImageSlider from '../components/frontpageSlider'
import LogoComponent from '../components/logo'
import MenuComponent from '../components/navMenu'
import NavBar from '../components/navBar';

class frontPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showLogo: true,
            centralizeImageSlider: true,
        };

        this.toggleEducationSection = this.toggleEducationSection.bind(this);
        this.centralizeImageSlider = this.centralizeImageSlider.bind(this);
        }


        toggleEducationSection() {
            this.setState((prevState) => ({
                showLogo: !prevState.showLogo,
            }));
        }
    

        centralizeImageSlider() {
            this.setState((prevState) => ({
                centralizeImageSlider: !prevState.centralizeImageSlider,
            }));
        }
    

    render() { 
        const { showLogo } = this.state;
        return (<div>
            {showLogo && <NavBar/>}
            <ImageSlider toggleEducationSection={this.toggleEducationSection} centralizeImageSlider={this.centralizeImageSlider}
            centralizeImageSliderState={this.state.centralizeImageSlider}/>
        </div>);
    }
}

export default frontPage;