import React, { useState } from 'react';
import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import './ProjectContainer.css'
import { Chrono } from "react-chrono";


const ProjectContainer = ({ project }) => {

  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    setShowPopup(true);
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  const timeline = project.timelineInsight;
  console.log(timeline.summary.hook)

  let strArr = project.timelineInsight.data.description.split("\u2022")

  console.log(project.timelineInsight.summary.image)
  
  const items = [{
    title: "What is " + project.timelineInsight.summary.title + "?",
    cardTitle: "Summary",
    media: {
      name: "dunkirk beach",
      source: {
        url: `${project.timelineInsight.summary.image}`
      },
      type: "IMAGE"
    },
    cardSubtitle: project.timelineInsight.summary.hook,
    cardDetailedText: project.timelineInsight.summary.description
  }, 
  {
    title: "Frontend",
    cardTitle: "Stack",
    cardSubtitle: project.timelineInsight.frontend.hook,
    cardDetailedText: project.timelineInsight.frontend.description
  }, 
  {
    title: "Backend",
    cardTitle: "Stack",
    cardSubtitle: project.timelineInsight.backend.hook,
    cardDetailedText: project.timelineInsight.backend.description
  },
  {
    title: "Data",
    cardTitle: "Database",
    cardSubtitle: project.timelineInsight.data.hook,
    cardDetailedText: strArr
  },
  {
    title: "To be added",
    cardTitle: "Upcoming Features",
    cardSubtitle: project.timelineInsight.other.hook,
    cardDetailedText: project.timelineInsight.other.description
  }];

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
            <h3>{project.name}</h3>
          
            <Chrono 
              items={items}
              hideControls={false}
              slideShow={true}
              theme={{
                primary: '#444',
                secondary: '#2978b5',
                cardBgColor: '#F2F2F2',
                cardForeColor: '#444',
                titleColor: '#444',
                titleColorActive: 'white',
              }}
              buttonTexts={{
                first: 'Jump to First',
                last: 'Jump to Last',
                next: 'Next',
                previous: 'Previous',
                play: 'Play All'
              }}
            />

            <button className="close-button" onClick={handleClose}>X</button>
          </div>
        </div>
      )}
    </>
  )
}

export default ProjectContainer