import uniqid from 'uniqid'
import { featured_projects } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Projects.css'
import { useNavigate, useLocation } from 'react-router-dom'

import React, { useState, useEffect } from 'react';
//use material ui icons from version 4
//https://v4.mui.com/components/material-icons/
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';


const Projects = ({ onButtonClick }) => {

  const navigate = useNavigate();
  //used to get the current URL path and conditionally render the See More button and the Projects heading based on the path
  const location = useLocation();

  //when the See More button is clicked, the handleClick function is called
  const handleClick = () => {
    //call the window.scrollTo() method to reset the scroll position
    window.scrollTo(0, 0);
    //call this callback function when the button is clicked as well
    onButtonClick();
    navigate('/Portfolio/Projects');
  }

  //for coming soon pop-up
  /*
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    setShowPopup(true);
  };

  const handleClose = () => {
    setShowPopup(false);
  };
  */

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

  const isProjectsPage = location.pathname === '/Portfolio/Projects';

  if (!featured_projects.length) return null


  return (
    <section id='projects' className='section projects'>
      <h2 className='section__title'>{isProjectsPage ? 'Featured Projects' : 'Projects'}</h2>

      <div className='projects__grid'>
        {featured_projects.map((featured_project) => (
          <ProjectContainer key={uniqid()} featured_project={featured_project} />
        ))}
      </div>
      {!isProjectsPage && (
        <div className='all__project__btn'>
          <button className='link link--icon' onClick={handleClick}>
            <span className="arrow-text">See More</span>
          </button>
        </div>
      )}
      {/* stopPropagation is used to prevent users from clicking on links under this pop-up layer which is at z-index: 2 */}
      {/* 
      {showPopup && (
        <div className="popup" onClick={handleClose}>
          <div className="popup-content" onClick={e => e.stopPropagation()}>
            <h3>Coming Soon</h3>
            <br/>
            <p> - Full project portfolio page - </p>
            <button className="close-button" onClick={handleClose}>X</button>
          </div>
        </div>
      )}
      */}
    </section>
  )
}

export default Projects