import React, { useState } from 'react';
import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import './AllProjectContainer.css'
import Navbar from '../CaseStudyNavbar/CaseStudyNavbar'

const AllProjectContainer = ({ project }) => {

  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    setShowPopup(true);
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  const [active, setActive] = React.useState('info');

  return (
    <>
      <div className='project-container'>
        <div className='project2' onClick={handleClick}>
          <h3>{project.name}</h3>

          <p className='project__description'>{project.description}</p>
          {project.stack && (
            <ul className='project__stack'>
              {project.stack.map((item) => (
                <li key={uniqid()} className='project__stack-item'>
                  {item}
                </li>
              ))}
            </ul>
          )}

          {project.sourceCode && (
            <a
              href={project.sourceCode}
              aria-label='source code'
              className='link link--icon'
              target="_blank"
              rel="noreferrer"
              onClick={(event) => event.stopPropagation()}
            >
              <GitHubIcon />
            </a>
          )}

          {project.livePreview && (
            <a
              href={project.livePreview}
              aria-label='live preview'
              className='link link--icon'
              target="_blank"
              rel="noreferrer"
              onClick={(event) => event.stopPropagation()}
            >
              <LaunchIcon />
            </a>
          )}
        </div>
        <div className='' style={{ marginLeft: '20px', width: '60%'}} id="wrapper">
          <div id="images">
            <div id="container-1">
            </div>
            <div class="container">
            </div>
            <div class="container">
            </div>
            <div class="container">
            </div>
          </div>
        </div>
        {showPopup && (
          <div className="popup" onClick={handleClose}>
            {/* stopPropagation is used to prevent users from clicking on links under this pop-up layer which is at z-index: 2 */}
            <div className="popup-content" onClick={e => e.stopPropagation()}>
              <h3>{project.name}</h3>

              <Navbar appearance="subtle" active={active} onSelect={setActive} allProject={project}/>

              <button className="close-button" onClick={handleClose}>X</button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default AllProjectContainer