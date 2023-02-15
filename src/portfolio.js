const header = {
    // all the properties are optional - can be left empty or deleted
    // homepage should be the link to the live portfolio
    homepage: 'https://andersontan1998.github.io/Portfolio/',
    title: 'AT.',
}
  
const about = {
    // all the properties are optional - can be left empty or deleted
    name: 'Anderson Tan',
    role: 'Full-Stack Web Developer',
    description:
        'Software Engineer based in New York City with expertise in web and mobile app development. I also enjoy scripting to automate and simplify daily tasks.',
    resume: 'https://drive.google.com/file/d/1GRAV_sZontT2jGPe7F3Yy566kuWkbE2G/view?usp=share_link',
    social: {
        linkedin: 'https://www.linkedin.com/in/andersontan1998/',
        github: 'https://github.com/andersontan1998',
    },
}

const projects = [
    // projects can be added an removed
    // if there are no projects, Projects section won't show up
    {
        name: 'Event Tracker',
        description:
        'Enables authenticated users to add, delete, and update daily tasks, which are displayed on a calendar UI. The project also includes password hashing and validation using bcrypt and validator packages, as well as JSON Web Tokens for authentication and security.',
        stack: ['MongoDB', 'Express', 'React', 'Node'],
        sourceCode: 'https://github.com',
        livePreview: 'https://github.com',
    },
    {
        name: 'Flixster',
        description:
        'Browse through movies from The Movie Database API which includes the poster image, synopsis, movie trailer, and rating, usable in both landscape and portrait mode. The project was designed using a RESTful API to handle different HTTP methods, such as a GET request for the “Now Playing” endpoint.',
        stack: ['Java', 'Android Studio', 'RESTful API'],
        sourceCode: 'https://github.com',
        livePreview: 'https://github.com',
    },
    {
        name: 'Instagram',
        description:
        'A photo sharing app that allows users to create a new account or sign in using Parse authentication, take photos, add captions, and post it to their timeline. The backend is completely built from scratch, and the data is uploaded into the Parse server controlled by Back4App.',
        stack: ['Java', 'Android Studio', 'Parse'],
        sourceCode: 'https://github.com',
        livePreview: 'https://github.com',
    },
]

const skills = [
    // skills can be added or removed
    // if there are no skills, Skills section won't show up
    'HTML',
    'CSS',
    'Bootstrap',
    'JavaScript',
    'React',
    'Python',
    'Java',
    'C++',
    'SQL',
    'MongoDB',
    'Express',
    'NodeJS',
    'API Development',
    'Git',
]

const contact = {
    // email is optional - if left empty Contact section won't show up
    email: 'andersontan1998@gmail.com',
}

export { header, about, projects, skills, contact }