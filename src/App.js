import { useContext, useState, useEffect } from 'react';
import React from 'react'
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import AllProjects from './components/AllProjects/AllProjects'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)
  const [path, setPath] = useState(window.location.pathname);

  //useEffect hook is used to listen to the popstate event, which is fired when the user navigates using the browser's back/forward buttons. 
  //we update the path state inside the handlePathChange function whenever this event is fired.
  useEffect(() => {
    const handlePathChange = () => {
      setPath(window.location.pathname);
    };

    //the popstate event of the Window interface is fired when the active history entry changes while the user navigates the session history
    window.addEventListener('popstate', handlePathChange);

    return () => {
      window.removeEventListener('popstate', handlePathChange);
    };
  }, []);

  //need to handle the path state whenever the See More button on the Projects component is clicked
  const handleButtonClick = () => {
    setPath('/Portfolio/Projects');
  };

  //update the path state when the back button is clicked
  const handleBackButtonClick = () => {
    setPath('/Portfolio');
  };
  

  return (
    <div id='top' className={`${themeName} app`}>
      {/* <Header path={path} /> */}
      <Router>
        <Header path={path} handleBackButtonClick={handleBackButtonClick}/>
        <Routes>
          <Route path="/Portfolio/Projects" element={<main>
            <Projects/> 
            <AllProjects />
          </main>} />
          <Route path='/Portfolio' element={<main>
            <About />
            {/* passing a callback function as a prop to the Projects component from the App component */}
            <Projects onButtonClick={handleButtonClick} />
            <Skills />
            <Contact />
          </main>} />
        </Routes>
      </Router>
      <ScrollToTop />
      <Footer />
    </div>
  )
}

export default App