//this no-reset import is needed so rsuite's css will not override the app's global css
import "rsuite/dist/rsuite-no-reset.min.css"

import { Nav, Container, Content } from 'rsuite';
import HomeIcon from '@rsuite/icons/legacy/Home';

const Navbar = ({ active, onSelect, featuredProject, allProject, ...props }) => {
    
    //To conditionally render the content based on whether the featuredProject or allProject data is passed
    const projectData = featuredProject ? featuredProject.caseStudy : allProject.caseStudy;

    return (
        <>
            <Nav {...props} activeKey={active} onSelect={onSelect} style={{ marginTop: 15, marginBottom: 15 }}>
                <Nav.Item eventKey="info" icon={<HomeIcon />}>Project Info</Nav.Item>
                <Nav.Item eventKey="audience">Audience</Nav.Item>
                <Nav.Item eventKey="challenge">Challenge</Nav.Item>
                <Nav.Item eventKey="solutions">Solutions</Nav.Item>
                <Nav.Item eventKey="results">Results</Nav.Item>
            </Nav>
            <Container>
                <Content>
                    {active === 'info' && (
                        <div>
                            <h2>Overview</h2>
                            <p>{projectData.projectinfo.csdescription}</p>
                        </div>
                    )}
                    {active === 'audience' && (
                        <div>
                            <h2>Audience</h2>
                            <p>{projectData.audience.csdescription}</p>
                        </div>
                    )}
                    {active === 'challenge' && (
                        <div>
                            <h2>Challenge</h2>
                            <p>{projectData.challenge.csdescription}</p>
                            <p>{projectData.challenge.improvements}</p>
                        </div>
                    )}
                    {active === 'solutions' && (
                        <div>
                            <h2>Solutions</h2>
                            <p>{projectData.solutions.csdescription}</p>
                        </div>
                    )}
                    {active === 'results' && (
                        <div>
                            <h2>Results</h2>
                            <p>{projectData.results.csdescription}</p>
                        </div>
                    )}
                </Content>
            </Container>
        </>
    );
};

export default Navbar;