import React, { Component, useState } from 'react';
import SummarySection from '../components/frontPageBody'
import ImageSlider from '../components/frontpageSlider'
import LogoComponent from '../components/logo'
import MenuComponent from '../components/navMenu'
import NavBar from '../components/navBar';


function useToggle(initialValue) {
  const [value, setValue] = useState(initialValue);
  const toggleValue = () => setValue(!value);
  return [value, toggleValue];
}

const FrontPage = () => {
  const [showLogo, toggleShowLogo] = useToggle(true); 
  const [centralizeImageSlider, toggleCentralizeImageSlider] = useToggle(true);

  return (
    <div>
      {showLogo && <NavBar/>}
      <ImageSlider
        toggleEducationSection={toggleShowLogo} 
        centralizeImageSlider={toggleCentralizeImageSlider}
        centralizeImageSliderState={centralizeImageSlider}/>
    </div>
  );
}

export default FrontPage;
