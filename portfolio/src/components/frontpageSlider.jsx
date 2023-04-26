import React, { useEffect, useRef} from 'react';
import styles from '../styles/ImageSlider.module.css';
import tigerPaw from '../Images/tigerPaw.png';
import workExp from '../Images/WorkExperience.png'
import projects from '../Images/tempProjectsImage.png'

const ImageSlider = () => {
  const track = useRef(null);

  const handleOnDown = (e) => {
    track.current.dataset.mouseDownAt = e.clientX;
  };

  const handleOnUp = () => {
    track.current.dataset.mouseDownAt = '0';
    track.current.dataset.prevPercentage = track.current.dataset.percentage;
  };

  const handleOnMove = (e) => {
    if(track.current.dataset.mouseDownAt === "0") return;
  
    const mouseDelta = parseFloat(track.current.dataset.mouseDownAt) - e.clientX,
          maxDelta = window.innerWidth / 2;
    
    const percentage = (mouseDelta / maxDelta) * -100,
          nextPercentageUnconstrained = parseFloat(track.current.dataset.prevPercentage) + percentage,
          nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
    
    track.current.dataset.percentage = nextPercentage;
    
    track.current.animate({
      transform: `translate(${nextPercentage}%, -50%)`
    }, { duration: 1200, fill: "forwards" });
    
    for(const image of track.current.getElementsByClassName("image")) {
      image.animate({
        objectPosition: `${100 + nextPercentage}% center`
      }, { duration: 1200, fill: "forwards" });
    }
  };

  useEffect(() => {
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

  return (<div id="image-track" ref={track} data-mouse-down-at="0" data-prev-percentage="0">
  <img className="image" src={tigerPaw} draggable="false" />
  <img className="image" src={workExp} draggable="false" />
  <img className="image" src={projects} draggable="false" />

    </div>
  );
};

export default ImageSlider;