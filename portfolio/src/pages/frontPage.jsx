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
  const [activeSection, setActiveSection] = useState(''); // This will store the currently active section
  const [showLogo, toggleShowLogo] = useToggle(true);
  const [centralizeImageSlider, toggleCentralizeImageSlider] = useToggle(true);

  const toggleSection = (section) => {
    if (activeSection) {
      // If there's an active section, close it and do nothing else
      setActiveSection('');
      toggleShowLogo();
    } else {
      // If there's no active section, open the clicked section
      setActiveSection(section);
      toggleShowLogo();
    }
  };

  return (
    <div>
      {showLogo && <NavBar/>}
      {activeSection === 'education' && <EducationSection/>}
      {activeSection === 'workExp' && <WorkSection/>}
      {activeSection === 'projects' && <ProjectSection/>}
      {activeSection === 'aboutMe' && <AboutMeSection/>}
      <ImageSlider
        toggleShowLogo={toggleShowLogo}
        toggleSection={toggleSection}
        centralizeImageSlider={toggleCentralizeImageSlider}
        centralizeImageSliderState={centralizeImageSlider}/>
    </div>
  );
}

export default FrontPage;
