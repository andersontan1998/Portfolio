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
        timelineInsight: {
            summary: {
                title: 'Event Tracker',
                hook: 'Stay on top of your events and to-do lists with ease.',
                description:'The purpose of "Event Tracker" is to give the audience a way to organize their tasks in a calendar-like web application. This responsive web design will help sort out events designated for specific days and can be accessed through the web or on a mobile device.',
                image: ''
            },
            frontend: {
                title: 'Event Tracker',
                hook: 'React',
                description: 'For the frontend of the "Event Tracker" project, React was used to create a dynamic and interactive user interface that allows users to easily add, delete, and update events. React\'s component-based architecture makes it easy to manage and update different parts of the UI without affecting the rest of the application, resulting in a more maintainable and scalable codebase. Additionally, React\'s virtual DOM allows for efficient updates and rendering, resulting in a smooth and responsive user experience.'
            },
            backend: {
                title: 'Event Tracker',
                hook: 'Node and Express',
                description: 'The backend of this project is built on the MERN stack, which uses Node.js and Express to create a RESTful API for handling data requests, as well as MongoDB for data storage. The backend also includes user authentication with password hashing using the bcrypt and validator node packages, and token-based authorization, providing a secure environment for the application\'s functionality.'
            },
            data: {
                title: 'Event Tracker',
                hook: 'MongoDB and API endpoints',
                description: "localhost:3000/api/user/login•localhost:3000/api/user/signup•localhost:3000/api/events/•localhost:3000/api/events/"
            },
            other: {
                title: 'Event Tracker',
                hook: '',
                description: 'Currently, the web application has plans to implement search filters, sorting functionality by event name/date, and date filters for the event list with various ranges such as in a week, in a month, in 2 months, and within the year. These features are currently only available with Postman, but will soon be implemented into the application\'s frontend for a better user experience.'
            }
        }
    },
    {
        name: 'Flixster',
        description:
        'Browse through movies from The Movie Database API which includes the poster image, synopsis, movie trailer, and rating, usable in both landscape and portrait mode. The project was designed using a RESTful API to handle different HTTP methods, such as a GET request for the “Now Playing” endpoint.',
        stack: ['Java', 'Android Studio', 'RESTful API'],
        sourceCode: 'https://github.com',
        livePreview: 'https://github.com',
        timelineInsight: {
            summary: {
                title: 'Flixster',
                hook: 'An API-based movie synopsis and trailer mobile application',
                description:'The Flixster project involves creating an Android application that allows users to browse through movies currently playing in theaters using The Movie Database API. The required features include displaying a list of movie titles, poster images, and overviews using RecyclerView implementation, and exposing details such as ratings, popularity, and synopsis in a separate activity. To achieve this, AsyncHttpClient and Glide libraries are required. Additionally, the project includes stretch stories such as implementing responsive views for landscape/portrait mode, showing video posts in full-screen using YouTubePlayerView, and applying UI improvements through styling and coloring.',
                image: 'http://localhost:3000/Portfolio/images/DetailActivity_Landscape.gif'
            },
            frontend: {
                title: 'Event Tracker',
                hook: '',
                description: 'The frontend of the Flixster Android mobile project was designed to be responsive in both portrait and landscape mode, utilizing the RecyclerView implementation to display a list of movies. The app also features a separate activity that displays additional movie details, including ratings using a RatingBar, popularity, and a synopsis. The UI was improved through styling to enhance the user experience, with rounded corners for the images using Glide transformations and the use of data binding to remove boilerplate code. Finally, stretch features such as shared element transition when clicking on a movie and playing trailers automatically for popular movies add additional functionality to the app.'
            },
            backend: {
                title: 'Event Tracker',
                hook: '',
                description: 'There is no explicit backend for this Android mobile project, as it primarily relies on fetching data from The Movie Database API through network calls using AsyncHttpClient library and parsing JSON responses. However, the API itself can be considered as the backend that provides the necessary information about movies to the app. Additionally, if the app were to store user-specific data such as favorite movies or user profiles, a backend server would be required to handle this data storage and retrieval.'
            },
            data: {
                title: 'Event Tracker',
                hook: '',
                description: 'The API used in this project is the Movie Database API, which provides a comprehensive database of movies, TV shows, and celebrities. It allows developers to retrieve movie data such as titles, descriptions, ratings, and images to be used in their applications. The API uses RESTful endpoints and returns data in JSON format, which is easily parsed by mobile applications. The API documentation provides detailed information about the endpoints available, along with example requests and responses. The API requires an API key for authentication, which can be obtained by registering on the Movie Database API website. The documentation of The Movie Database API provides a set of endpoints to access different movie-related data, such as now playing movies, movie reviews, movie details, and images. \Get Now Playing GET /movie/now_playing Get a list of movies in theatres. Get Reviews GET /movie/{movie_id}/reviews Get Details GET /movie/{movie_id} Get the primary information about a movie. Get Images GET /movie/{movie_id}/images These endpoints use the HTTP GET method to retrieve the requested data, and require a movie ID parameter for some endpoints.'
            },
            other: {
                title: 'Event Tracker',
                hook: '',
                description: ''
            }
        }
    }, 
    {
        name: 'Instagram',
        description:
        'A photo sharing app that allows users to create a new account or sign in using Parse authentication, take photos, add captions, and post it to their timeline. The backend is completely built from scratch, and the data is uploaded into the Parse server controlled by Back4App.',
        stack: ['Java', 'Android Studio', 'Parse'],
        sourceCode: 'https://github.com',
        livePreview: 'https://github.com',
        timelineInsight: {
            summary: {
                title: 'Instagram',
                hook: 'A clone of the original mobile masterpiece',
                description:'The project involves developing an Instagram-like app with various features. The required functionality includes the ability for users to sign up and log in using Parse authentication, persisting the current signed-in user, taking a photo, adding a caption, and posting it to the app\'s feed. Users can also view the last 20 posts submitted to the app, switch between different tabs using fragments and a bottom navigation view, and pull to refresh the feed. Optional features include a styled app icon and bottom navigation view, the ability to load more posts with infinite scrolling, and displaying the username and creation time for each post.',
                image: 'http://localhost:3000/Portfolio/images/Refresh_Fragments.gif'
            },
            frontend: {
                title: 'Event Tracker',
                hook: '',
                description: 'The frontend of the Instagram-like mobile app involves creating different screens or fragments that the user can navigate through using a Bottom Navigation View. These screens include the feed view, compose view, and profile view, each of which has its own unique functionality. The app should have a visually appealing design with customized icons and styles that resemble the real Instagram app. The feed should display the last 20 posts submitted to the app, and the user should be able to pull to refresh and load more posts using infinite scrolling. Each post should display the username, creation time, and the caption.'
            },
            backend: {
                title: 'Event Tracker',
                hook: '',
                description: 'The backend of this Instagram app is built using Parse Server, a flexible open-source backend solution that provides features such as data storage, user authentication, push notifications, and cloud functions. Parse Server is used to store the images and posts that are sent from the user\'s phone, and the Parse Dashboard provided by Back4App is used to manage the data in the backend. The app uses the Parse SDK to connect to the backend, enabling features such as user sign up, login/logout, and data retrieval. Additionally, the app incorporates image resizing functionality to ensure that uploaded images are within the 10MB limit set by Parse. Overall, the backend of this app provides a robust and scalable solution for storing and managing user-generated content.'
            },
            data: {
                title: 'Event Tracker',
                hook: '',
                description: 'The backend database is implemented using Parse Server. Parse Server provides a scalable and easy-to-use backend framework for mobile and web applications. It uses a NoSQL database to store data in a JSON format, which makes it highly flexible and easy to work with. For this app, the database will store user account information, including login credentials and user profile data, as well as the posts that users create, including the post\'s objectId, its image, caption, created time, and the user objectId associated with that post. The database will also support features such as likes and comments on posts, as well as the ability to view user profiles and their posts. To interact with the database, the app will use the Parse SDK, which provides a set of client-side APIs to communicate with the Parse Server backend. This allows for easy integration between the app and the database, making it possible for users to seamlessly create, view, and interact with content.'
            },
            other: {
                title: 'Event Tracker',
                hook: '',
                description: 'The user profile feature will be enhanced with the ability for logged-in users to add a profile photo, which will be displayed with each post. By tapping on a post\'s username or profile photo, users will be directed to that user\'s profile page, which will showcase a grid view of the user\'s posts. Additionally, users will be able to like and comment on posts and view all the likes and comments for each post in the post details screen.'
            }
        }
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