import React, { useState } from 'react';
import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import './ProjectContainer.css'
import Navbar from '../CaseStudyNavbar/CaseStudyNavbar'

const ProjectContainer = ({ featured_project }) => {

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
      <div className='project' onClick={handleClick}>
        <h3>{featured_project.name}</h3>

        <p className='project__description'>{featured_project.description}</p>
        {featured_project.stack && (
          <ul className='project__stack'>
            {featured_project.stack.map((item) => (
              <li key={uniqid()} className='project__stack-item'>
                {item}
              </li>
            ))}
          </ul>
        )}

        {featured_project.sourceCode && (
          <a
            href={featured_project.sourceCode}
            aria-label='source code'
            className='link link--icon'
            target="_blank"
            rel="noreferrer"
            onClick={(event) => event.stopPropagation()}
          >
            <GitHubIcon />
          </a>
        )}

        {featured_project.livePreview && (
          <a
            href={featured_project.livePreview}
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
            <h3>{featured_project.caseStudy.projectinfo.title}</h3>

            <Navbar appearance="subtle" active={active} onSelect={setActive} featuredProject={featured_project}/>

            <button className="close-button" onClick={handleClose}>X</button>
          </div>
        </div>
      )}
    </>
  )
}

export default ProjectContainer