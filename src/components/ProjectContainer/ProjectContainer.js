import React, { useState } from 'react';
import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import './ProjectContainer.css'

const ProjectContainer = ({ project }) => {

  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    setShowPopup(true);
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <>
      <div className='project' onClick={handleClick}>
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
      {showPopup && (
        <div className="popup" onClick={handleClose}>
          {/* stopPropagation is used to prevent users from clicking on links under this pop-up layer which is at z-index: 2 */}
          <div className="popup-content" onClick={e => e.stopPropagation()}>
            <div class="popup-content-inner">
              <h3>Coming Soon</h3>
              <br/>
              <p> - Full project portfolio page - </p>
              <button className="close-button" onClick={handleClose}>X</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ProjectContainer