import React, { Component } from 'react';
import Header from './header';
import SummarySection from './frontPageBody'

class frontPage extends Component {
    state = {  } 
    render() { 
        return (<div>
            <Header/>
            <SummarySection/>
        </div>);
    }
}

export default frontPage;