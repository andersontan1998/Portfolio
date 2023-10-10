import uniqid from 'uniqid'
import { projects } from '../../portfolio'
import AllProjectContainer from '../AllProjectContainer/AllProjectContainer'
import './AllProjects.css'

import React from 'react';

const AllProjects = () => {

  if (!projects.length) return null
  
  //Filter projects by category types
  const websiteProjects = projects.filter((project) => project.type === 'website');
  const mobileProjects = projects.filter((project) => project.type === 'mobile');
  const scriptProjects = projects.filter((project) => project.type === 'script');

  return (
    <section id='projects2' className='section projects'>
      <h2 className='section__title'>All Projects</h2>

      {websiteProjects.length > 0 && (
        <section id='web-dev'>
          <h3 className='project__type__title'>Web Development</h3>
          <div className='projects__grid2'>
            {websiteProjects.map((project) => (
              <section key={project.id} id={project.id}>
                <AllProjectContainer key={uniqid()} project={project} />
              </section>
            ))}
          </div>
        </section>
      )}

      {mobileProjects.length > 0 && (
        <section id='mobile-dev'>
          <h3 className='project__type__title'>Mobile App Development</h3>
          <div className='projects__grid2'>
            {mobileProjects.map((project) => (
              <section key={project.id} id={project.id}>
                <AllProjectContainer key={uniqid()} project={project} />
              </section>
            ))}
          </div>
        </section>
      )}

      {scriptProjects.length > 0 && (
        <section id='scripting-projects'>
          <h3 className='project__type__title'>Scripts</h3>
          <div className='projects__grid2'>
            {scriptProjects.map((project) => (
              <AllProjectContainer key={uniqid()} project={project} />
            ))}
          </div>
        </section>
      )}
    </section>
  )
}

export default AllProjects