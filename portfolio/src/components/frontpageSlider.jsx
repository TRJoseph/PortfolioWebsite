import React, { useEffect, useRef, useState} from 'react';
import { Outlet, Link } from "react-router-dom";
import '../styles/ImageSlider.module.css';
import tigerPaw from '../Images/tigerPaw.png';
import workExp from '../Images/WorkExperience.png';
import projects from '../Images/tempProjectsImage.png';
import aboutMe from '../Images/aboutMe.png';


const ImageSlider = (props) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const track = useRef(null); // reference to the image track element
  const prevPercentageRef = useRef(0); // stores the previous percentage value for the slider

  var navigateToNewSectionDiff = 0;
  var navigateToNewSectionDiffOnUp = 0;
  var toggleSection = true; // flag for toggling the section

  const handleSectionToggle = () => {
    if (toggleSection) {
      props.toggleEducationSection();
  
      const newLeft = props.centralizeImageSliderState ? "10%" : "0%";
      const newTop = props.centralizeImageSliderState ? "10%" : "-50%";
  
      const ImSelector = document.querySelector(".image-track");
      if (ImSelector) {
        ImSelector.classList.add("image-track-toggle-animation");
        ImSelector.style.setProperty("--left-translate", newLeft);
        ImSelector.style.setProperty("--top-translate", newTop);
  
        // Remove the class after the transition duration
        setTimeout(() => {
          ImSelector.classList.remove("image-track-toggle-animation");
        }, 500);
      }
  
      props.centralizeImageSlider();
    }
  };
  
  // Function that handles the mouse down event
  const handleOnDown = (e) => {
    track.current.dataset.mouseDownAt = e.clientX; // set the mouse down position

    // If the dataset's percentage is NaN, set it to 0 (assume at origin)
    if (isNaN(parseFloat(track.current.dataset.percentage))) {
      track.current.dataset.percentage = 0;
    }

    // Calculate the difference between the current position and the percentage
    navigateToNewSectionDiff = Math.abs(parseFloat(track.current.dataset.mouseDownAt + track.current.dataset.percentage));
  };

  const handleOnUp = (e) => {
    // Set the mouseDownAt value in the dataset to the current clientX
    track.current.dataset.mouseDownAt = e.clientX;
  
    // If the dataset's percentage is undefined or NaN, set it to 0 (assume at origin)
    if (track.current.dataset.percentage === undefined || isNaN(parseFloat(track.current.dataset.percentage))) {
      track.current.dataset.percentage = 0;
      navigateToNewSectionDiffOnUp = 0;
      navigateToNewSectionDiff = 0;
    } else {
      // Calculate the difference between the current position and the previous position
      navigateToNewSectionDiffOnUp = Math.abs(parseFloat(track.current.dataset.mouseDownAt + track.current.dataset.percentage));
    }
  
    /*'toggleSection' controls whether the slider will actually slide down and show the desired section.
    * This only gets set to true if the user clicks a card down and releases their mouse up without moving their mouse.
    * This is to determine between whether the user wants to drag through the slider or view a section.
    */
    if (navigateToNewSectionDiff === navigateToNewSectionDiffOnUp) {
      toggleSection = true;
    } else {
      toggleSection = false;
    }
  
    // Reset the mouseDownAt value in the dataset to '0'
    track.current.dataset.mouseDownAt = '0';
  
    // Update the prevPercentageRef value to the current percentage value
    prevPercentageRef.current = parseFloat(track.current.dataset.percentage);
  };
  

  const handleOnMove = (e) => {
    if (track.current.dataset.mouseDownAt === "0") return;
  
    const mouseDelta = parseFloat(track.current.dataset.mouseDownAt) - e.clientX,
          maxDelta = window.innerWidth / 2;
  
    const percentage = (mouseDelta / maxDelta) * -100,
          nextPercentageUnconstrained = parseFloat(prevPercentageRef.current) + percentage,
          nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
  
    track.current.dataset.percentage = nextPercentage;
  
    const ImSelector = document.querySelector('.image-track');
    if (ImSelector) {
      ImSelector.style.setProperty('--translateX', nextPercentage);
    }
  
    for (const image of track.current.getElementsByClassName("image")) {
      image.animate({
        objectPosition: `${100 + nextPercentage}% center`
      }, { duration: 1200, fill: "forwards" });
    }
  };
  

  useEffect(() => {
    track.current.dataset.prevPercentage = '0';
    const handleTouchStart = (e) => handleOnDown(e.touches[0]);
    const handleTouchEnd = () => handleOnUp();
    const handleTouchMove = (e) => handleOnMove(e.touches[0]);

    window.addEventListener('mousedown', handleOnDown);
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('mouseup', handleOnUp);
    window.addEventListener('touchend', handleTouchEnd);
    window.addEventListener('mousemove', handleOnMove);
    window.addEventListener('touchmove', handleTouchMove);

    return () => {
      window.removeEventListener('mousedown', handleOnDown);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('mouseup', handleOnUp);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('mousemove', handleOnMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  });
  return (<div className="image-track" ref={track} data-mouse-down-at="0" data-prev-percentage="0">
  <img onClick={handleSectionToggle} className="image" src={tigerPaw} draggable="false" />
  <img className="image" src={workExp} draggable="false" />
  <img className="image" src={projects} draggable="false" />
  <img className="image" src={aboutMe} draggable="false" />

    </div>
  );
};

export default ImageSlider;