import React, { Component, useState } from 'react';
import SummarySection from '../components/frontPageBody'
import ImageSlider from '../components/frontpageSlider'
import LogoComponent from '../components/logo'
import MenuComponent from '../components/navMenu'
import NavBar from '../components/navBar';
import EducationSection from '../components/educationSection'
import WorkSection from '../components/workSection'
import ProjectSection from '../components/projectSection'
import AboutMeSection from '../components/aboutMeSection'

function useToggle(initialValue) {
  const [value, setValue] = useState(initialValue);
  const toggleValue = () => setValue(!value);
  return [value, toggleValue];
}

const FrontPage = () => {
  const [showLogo, toggleShowLogo] = useToggle(true);

  const [showEducationSection, showEducationSectionToggle] = useToggle(false); 
  const [showWorkSection, showWorkSectionToggle] = useToggle(false); 
  const [showProjectSection, showProjectSectionToggle] = useToggle(false); 
  const [showAboutMeSection, showAboutMeSectionToggle] = useToggle(false); 
  const [centralizeImageSlider, toggleCentralizeImageSlider] = useToggle(true);

  return (
    <div>
      {showLogo && <NavBar/>}
      {showEducationSection && <EducationSection/>}
      {showWorkSection && <WorkSection/>}
      {showProjectSection && <ProjectSection/>}
      {showAboutMeSection && <AboutMeSection/>}
      <ImageSlider
        toggleShowLogo={toggleShowLogo}
        toggleShowEducationSection={showEducationSectionToggle}
        centralizeImageSlider={toggleCentralizeImageSlider}
        centralizeImageSliderState={centralizeImageSlider}/>
    </div>
  );
}

export default FrontPage;
