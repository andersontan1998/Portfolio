import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'
//import React from 'react';
import './About.css'

const About = () => {
  const { name, role, description, resume, social } = about
  /*
  this.click_loader = React.createRef()
  function handleClick(){
    console.log("clicked")
    //var click_loader = useRef()
    console.log(this.click_loader)
    //click_loader.click();
  }*/

  return (
    <div className='about center'>
      {name && (
        <h1>
          Hi, I am <span className='about__name'>{name}.</span>
        </h1>
      )}

      <div className='about__full__container'>
        <div className='about__role-desc__container'>
          {role && <h2 className='about__role'>A {role}.</h2>}
          <p className='about__desc'>{description && description}</p>
        </div>
        <div className='about__img'></div>
      </div>

      <div className='about__contact center'>
        {resume && (
          <a href={resume} target="_blank" rel="noreferrer">
            <span type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
      {/*<input onClick={handleClick()} ref={this.click_loader}/>*/}
    </div>
  )
}

export default About
