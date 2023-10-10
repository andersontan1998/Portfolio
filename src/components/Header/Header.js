import { header } from '../../portfolio'
import Navbar from '../Navbar/Navbar'
import ProjectsNavbar from '../ProjectsNavbar/ProjectsNavbar'
import './Header.css'

const Header = ({ path, handleBackButtonClick }) => { //pass the path as a prop
  const { homepage, title } = header

  return (
    <header className='header center'>
      <h3>
        {homepage ? (
          <a href={homepage} className='link'>
            {title}
          </a>
        ) : (
          title
        )}
      </h3>
      {path === '/Portfolio/Projects' ? ( // conditionally render the Navbar component based on the path
        <ProjectsNavbar onButtonClick={handleBackButtonClick}/>
      ) : (
        <Navbar />
      )}
    </header>
  )
}

export default Header