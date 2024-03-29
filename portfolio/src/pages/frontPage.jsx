import React, { Component, useState, useEffect, useRef} from 'react';
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
  const [isCentralizedImageSlider, setIsCentralizedImageSlider] = useState(true);

  const toggleCentralizeImageSlider = () => setIsCentralizedImageSlider(!isCentralizedImageSlider);

  const [isBigScreen, setBigScreen] = useState(window.innerWidth > 768);

  const prevPercentageRef = useRef(0); // stores the previous percentage value for the slider

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

  const handleResize = () => {
    setBigScreen(window.innerWidth > 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const goBackToMainMenu = () => {
    if (isBigScreen) {
    setIsCentralizedImageSlider(true);
        const ImSelector = document.querySelector(".image-track");
        if (ImSelector) {
          ImSelector.style.transform = 'translateZ(0)'; 
          ImSelector.style.willChange = 'transform'; 
          ImSelector.animate({
            transform:`scale(1) translate(${prevPercentageRef.current}%,-50%)`,
          opacity: 1
          },
            { duration: 300, fill: "forwards"
          });
        }
        toggleSection(activeSection);
    } else {
      setIsCentralizedImageSlider(true);

      toggleSection(activeSection);
      const ImSelector = document.querySelector(".image-track");

      if (ImSelector) {
        if (isCentralizedImageSlider) {
          // Hide the image track
          ImSelector.style.display = 'none';
        } else {
          // Show the image track (assuming its usual display value is 'block')
          ImSelector.style.display = 'flex';
        }
      }
    }
    

  }
  return (
    <div>
      {showLogo && <NavBar showUpperRightText={isBigScreen}/>}
      {activeSection === 'education' && <EducationSection goBackToMainMenu={goBackToMainMenu}/>}
      {activeSection === 'workExp' && <WorkSection goBackToMainMenu={goBackToMainMenu}/>}
      {activeSection === 'projects' && <ProjectSection goBackToMainMenu={goBackToMainMenu}/>}
      {activeSection === 'aboutMe' && <AboutMeSection goBackToMainMenu={goBackToMainMenu}/>}
      <div>
      <ImageSlider
        prevPercentageRef={prevPercentageRef}
        isBigScreen={isBigScreen}
        toggleShowLogo={toggleShowLogo}
        toggleSection={toggleSection}
        toggleCentralizeImageSlider={toggleCentralizeImageSlider}
        isCentralizedImageSlider={isCentralizedImageSlider}/>

      </div>

    </div>
  );
}

export default FrontPage;
