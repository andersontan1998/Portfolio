import uniqid from 'uniqid'
import { projects } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Projects.css'

import React, { useState, useEffect } from 'react';
//use material ui icons from version 4
//https://v4.mui.com/components/material-icons/
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';


const Projects = () => {

  //for coming soon pop-up
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    setShowPopup(true);
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  //used to stop scrolling in popup layer
  /*
  useEffect(() => {
    const body = document.querySelector('body');
    if (showPopup) {
        body.style.overflow = 'hidden';
    } else {
        body.style.overflow = '';
    }
  }, [showPopup]);
  */

  if (!projects.length) return null


  return (
    <section id='projects' className='section projects'>
      <h2 className='section__title'>Projects</h2>

      <div className='projects__grid'>
        {projects.map((project) => (
          <ProjectContainer key={uniqid()} project={project} />
        ))}
      </div>
      <div className='all__project__btn'>
        <button className='link link--icon' onClick={handleClick}>
          <span className="arrow-text">See More</span>
        </button>
      </div>
      {showPopup && (
        <div className="popup" onClick={handleClose}>
          {/* stopPropagation is used to prevent users from clicking on links under this pop-up layer which is at z-index: 2 */}
          <div className="popup-content" onClick={e => e.stopPropagation()}>
            <h3>Coming Soon</h3>
            <br/>
            <p> - Full project portfolio page - </p>
            <button className="close-button" onClick={handleClose}>X</button>
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects