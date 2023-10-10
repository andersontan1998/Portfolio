import { useContext, useState } from 'react'
import Brightness2Icon from '@material-ui/icons/Brightness2'
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import { ThemeContext } from '../../contexts/theme'
import { featured_projects, projects } from '../../portfolio'
import { useNavigate } from 'react-router-dom'
import './ProjectsNavbar.css'

const ProjectsNavbar = ({ onButtonClick }) => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext)
  const [showNavList, setShowNavList] = useState(false)

  const toggleNavList = () => setShowNavList(!showNavList)

  const navigate = useNavigate();

  //function to handle the back button
  const goBack = () => {
    navigate('/Portfolio');
    onButtonClick(); // Call the onButtonClick function
  };

  //Filter projects by category types
  const websiteProjects = projects.filter((project) => project.type === 'website');
  const mobileProjects = projects.filter((project) => project.type === 'mobile');
  const scriptProjects = projects.filter((project) => project.type === 'script');

  console.log(websiteProjects)
  return (
    <nav className='center nav'>
      <ul
        style={{ display: showNavList ? 'flex' : null }}
        className='nav__list'
      > 
        <li className='nav__list-item'>
          <button
            type='button'
            onClick={goBack}
            className='link link--nav'
            aria-label='go back'
          >
            Back
          </button>
        </li>

        {featured_projects.length ? (
          <li className='nav__list-item'>
            <a
              href='#projects'
              onClick={toggleNavList}
              className='link link--nav'
            >
              Featured
            </a>
          </li>
        ) : null}
        
        {websiteProjects.length ? (
          <li className='nav__list-item'>
            <a
              href='#web-dev'
              onClick={toggleNavList}
              className='link link--nav'
            >
              Web Apps
            </a>
            <ul className='dropdown__list'>
              {websiteProjects.map((project) => (
                <li key={project.id} className='dropdown__list-item'>
                  <a href={`#${project.id}`} onClick={toggleNavList} className='link link--nav'>
                    {project.name}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        ) : null}

        {mobileProjects.length ? (
          <li className='nav__list-item'>
            <a
              href='#mobile-dev'
              onClick={toggleNavList}
              className='link link--nav'
            >
              Mobile Apps
            </a>
            <ul className='dropdown__list'>
              {mobileProjects.map((project) => (
                <li key={project.id} className='dropdown__list-item'>
                  <a href={`#${project.id}`} onClick={toggleNavList} className='link link--nav'>
                    {project.name}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        ) : null}

        {scriptProjects.length ? (
          <li className='nav__list-item'>
            <a
              href='#scripting-projects'
              onClick={toggleNavList}
              className='link link--nav'
            >
              Scripts
            </a>
          </li>
        ) : null}
      </ul>

      <button
        type='button'
        onClick={toggleTheme}
        className='btn btn--icon nav__theme'
        aria-label='toggle theme'
      >
        {themeName === 'dark' ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
      </button>

      <button
        type='button'
        onClick={toggleNavList}
        className='btn btn--icon nav__hamburger'
        aria-label='toggle navigation'
      >
        {showNavList ? <CloseIcon /> : <MenuIcon />}
      </button>
    </nav>
  )
}

export default ProjectsNavbar