import React, { Component } from 'react';
import Header from '../components/header';
import SummarySection from '../components/frontPageBody'
import ImageSlider from '../components/frontpageSlider'

class frontPage extends Component {
    state = {  } 
    render() { 
        return (<div>
            <Header/>
            <ImageSlider/>
        </div>);
    }
}

export default frontPage;