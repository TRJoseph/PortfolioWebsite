import React, { Component } from 'react';
import Header from '../components/header';
import SummarySection from '../components/frontPageBody'

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