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

const featured_projects = [
    // projects can be added and removed
    // if there are no projects, Projects section won't show up
    {   
        name: 'Event Tracker',
        description:
        'Enables authenticated users to add, delete, and update daily tasks, which are then displayed on a user-friendly calendar UI. The project also includes password hashing and validation using bcrypt and validator packages, as well as JSON Web Tokens (JWT) for authentication and security.',
        stack: ['MongoDB', 'Express', 'React', 'Node'],
        sourceCode: 'https://github.com',
        livePreview: 'https://github.com',
        type: 'website',
        caseStudy: {
            projectinfo: {
                title: 'Event Tracker',
                hook: 'Stay on top of your events and to-do lists with ease.',
                image1: '',
                image2: '',
                csdescription: 'By combining React on the frontend, Node.js, Express, and MongoDB on the backend, and utilizing API endpoints for data management, the "Event Tracker" project delivers a comprehensive solution that enables users to effortlessly manage events while ensuring a secure and efficient user experience.',
                stack: 'The "Event Tracker" project utilizes a robust technology stack to deliver its functionalities. On the frontend, React is used to create a dynamic and interactive user interface, offering seamless event management capabilities. React\'s component-based architecture ensures a scalable and maintainable codebase, while its virtual DOM enables efficient rendering for a smooth user experience. The backend relies on Node.js and Express to establish a RESTful API, forming the foundation of the MERN stack. MongoDB serves as the database for storing event-related information, and data management is achieved through specific API endpoints such as "/api/user/signup", "/api/user/login", and "/api/events/...". These endpoints handle user authentication, event management, and ensure data integrity through various CRUD operations. Overall, this technology stack enables the "Event Tracker" project to provide a user-friendly interface and efficient data handling.'
            },
            audience: {
                csdescription:'Event Tracker is designed to serve a specific audience of individuals who want to effectively manage their daily tasks and events. The application targets users who seek a reliable and convenient solution for organizing their schedules and staying on top of their commitments. Audience for Event Tracker may include professionals/busy individuals, students and academics, organizers, and team collaborators.'
            },
            challenge: {
                csdescription: 'The challenge was to develop a robust and secure application that allows users to effectively track and manage their daily tasks. The project required implementing features like user authentication, task management, and a visually appealing calendar interface. It was crucial to prioritize security measures to protect user data and ensure a seamless user experience.',
                improvements: 'Currently, the web application has plans to implement search filters, sorting functionality by event name/date, and date filters for the event list with various ranges such as in a week, in a month, in 2 months, and within the year. These features are currently only available with Postman, but will soon be implemented into the application\'s frontend for a better user experience.'
            },
            solutions: {
                csdescription: 'The challenge was tackled by following a systematic approach, breaking down the requirements into manageable tasks. Here is an overview of the solution implemented for Event Tracker:',
                step1: 'User Authentication: Utilized JSON Web Tokens (JWT) for secure user authentication and authorization. Implemented a registration and login system to manage user accounts. Integrated bcrypt and validator packages to hash passwords and validate user input.',
                step2: 'Task Management: Created an intuitive user interface for adding, deleting, and updating tasks. Implemented a database schema to store task-related information, such as task name, description, date, and user association. Developed API endpoints to handle CRUD operations for tasks.',
                step3: 'Calendar UI: Designed an interactive calendar UI to display tasks based on their associated dates. Implemented features like task highlighting, pop-up modals for task details, and drag-and-drop functionality to enhance user experience. Used React libraries to efficiently manage the calendar component.',
                step4: 'Security Measures: Utilized bcrypt package to securely hash passwords before storing them in the database. Implemented input validation using the validator package to ensure data integrity and prevent malicious input. Employed best practices for secure communication and data transmission, such as HTTPS and encrypted connections.',
            }, 
            results: {
                image1: '',
                image2: '',
                csdescription: 'Event Tracker successfully delivered a secure and user-friendly solution for managing daily tasks. The project demonstrated effective utilization of technologies like JSON Web Tokens, bcrypt, and validator packages for authentication, password security, and data validation. The intuitive calendar UI provided a visually appealing and functional interface for task management. Overall, Event Tracker achieved its objective of enabling authenticated users to efficiently track and organize their daily tasks while prioritizing security and user experience.'
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
        type: 'mobile',
        caseStudy: {
            projectinfo: {
                title: 'Flixster - Movie Discovery Platform',
                hook: 'An API-based movie synopsis and trailer mobile application',
                image1: 'http://localhost:3000/Portfolio/images/DetailActivity_Landscape.gif',
                image2: '',
                csdescription: 'The Flixster project involves creating an Android application that allows users to browse through movies currently playing in theaters using The Movie Database API. The required features include displaying a list of movie titles, poster images, and overviews using RecyclerView implementation, and exposing details such as ratings, popularity, and synopsis in a separate activity. To achieve this, AsyncHttpClient and Glide libraries are required. Additionally, the project includes stretch stories such as implementing responsive views for landscape/portrait mode, showing video posts in full-screen using YouTubePlayerView, and applying UI improvements through styling and coloring.',
                stack: 'In summary, Flixster\'s frontend is developed using Java and Android Studio, delivering a native Android application with a user-friendly interface for browsing movies in both portrait and landscape mode. The backend, built with Java and a RESTful API architecture, handles HTTP requests and communicates with The Movie Database (TMDb) API to fetch movie data, specifically from the "Now Playing" endpoint. The TMDb API serves as the primary data source, providing comprehensive movie information that is structured and optimized within the backend for delivery to the frontend. Together, the frontend, backend, and data components of Flixster create a seamless and immersive movie browsing experience for Android users.'
            },
            audience: {
                csdescription:'Flixster is designed to cater to a wide range of movie enthusiasts and users who enjoy discovering and exploring movies on their Android devices. The app targets individuals who have an interest in the latest movie releases, want to stay updated with the movie industry, and seek a convenient way to access detailed information about movies.'
            },
            challenge: {
                csdescription: 'The primary challenge in developing Flixster was to create an intuitive and visually appealing movie browsing app for Android, providing users with comprehensive movie details while accommodating different screen orientations. Integrating the TMDB API and efficiently retrieving real-time movie data presented technical complexities that needed to be addressed.',
                improvements: ''
            },
            solutions: {
                csdescription: 'The solution provided a seamless and immersive movie browsing experience for users, allowing them to explore movies, access comprehensive details, watch trailers, and make informed choices, all within a visually appealing and user-friendly interface. The use of Java and Android Studio, along with the RESTful API integration, ensured efficient data retrieval and a smooth user experience, making Flixster a go-to app for movie enthusiasts.',
                step1: 'API Integration: Conducted thorough research and analysis of The Movie Database (TMDB) API to understand its capabilities and data structure. Developed a robust integration with the API to retrieve real-time movie data, including poster images, synopses, trailers, and ratings.',
                step2: 'User Interface Design: Designed a user-friendly and visually appealing interface using Java and Android Studio. Implemented responsive layouts and UI components to ensure optimal presentation of movie information in both landscape and portrait modes. Prioritized usability and seamless navigation to enhance the overall user experience.',
                step3: 'Networking and Data Retrieval: Implemented networking capabilities using RESTful API calls to efficiently communicate with the TMDB API. Designed mechanisms to handle different HTTP methods, such as performing GET requests for the "Now Playing" endpoint. Developed efficient data retrieval mechanisms to fetch and display movie details in real-time.',
                step4: 'Media Playback Integration: Integrated media playback capabilities within the app to allow users to watch movie trailers directly. Implemented a seamless media playback experience, enhancing user engagement and providing a comprehensive movie browsing experience.'
            },
            results: {
                image1: '',
                image2: '',
                csdescription: 'The app\'s performance, usability, and intuitive design have garnered positive user feedback, contributing to increased user engagement. Flixster successfully achieved its goal of delivering a visually appealing and comprehensive movie browsing experience for Android users. With its seamless integration of the TMDB API and efficient handling of HTTP methods, Flixster offers a reliable platform for movie enthusiasts to discover and explore their favorite movies.'
            }
        }
    }, 
    {
        name: 'Instagram Clone',
        description:
        'A photo sharing app that allows users to create a new account or sign in using Parse authentication, take photos, add captions, and post it to their timeline. The backend is completely built from scratch, and the data is uploaded into the Parse server controlled by Back4App.',
        stack: ['Java', 'Android Studio', 'Parse'],
        sourceCode: 'https://github.com',
        livePreview: 'https://github.com',
        type: 'mobile',
        caseStudy: {
            projectinfo: {
                title: 'Instagram Clone',
                hook: 'A clone of the original mobile masterpiece',
                image1: 'http://localhost:3000/Portfolio/images/Refresh_Fragments.gif',
                image2: '',
                csdescription: 'The Instagram Clone project aimed to develop a photo-sharing app similar to Instagram, but with a custom backend built from scratch using Parse as the backend-as-a-service platform. The app allowed users to create new accounts or sign in using Parse authentication, capture photos, add captions, and post them to their timeline. Users can also view the last 20 posts submitted to the app, switch between different tabs using fragments and a bottom navigation view, and pull to refresh the feed. Optional features include a styled app icon and bottom navigation view, the ability to load more posts with infinite scrolling, and displaying the username and creation time for each post. The development was carried out using Java and Android Studio.',
                stack: 'The Instagram Clone mobile app was developed using Java and Android Studio, featuring a frontend designed with various screens and fragments for user navigation. The app includes functionalities such as feed view, compose view, and profile view, with customized icons and styles resembling the real Instagram app. The backend utilizes Parse Server, an open-source backend solution, for data storage, user authentication, and cloud functions. The Parse SDK enables features like user sign up, login/logout, and data retrieval, while Parse Dashboard manages backend data. The app\'s backend stores user-generated content, including images, posts, captions, and associated user information. The Parse Server database, implemented as a NoSQL JSON format, supports additional features like likes, comments, and user profiles. The app seamlessly integrates with the backend, allowing users to create, view, and interact with content effortlessly.'
            },
            audience: {
                csdescription:'The Instagram Clone app is targeted towards individuals who enjoy sharing photos and connecting with others through social media platforms. It caters to users who desire a familiar Instagram-like experience with custom backend capabilities, providing them with an alternative option for photo sharing and social networking.'
            },
            challenge: {
                csdescription: 'The primary challenge in developing the Instagram Clone app was to create a fully functional backend system from scratch, integrating it with Parse and ensuring seamless communication between the app and the Parse server controlled by Back4App. The app needed to provide user authentication, photo capture, captioning, and timeline functionality while maintaining the visual aesthetics and usability of a modern photo-sharing app.',
                improvements: 'The user profile feature will be enhanced with the ability for logged-in users to add a profile photo, which will be displayed with each post. By tapping on a post\'s username or profile photo, users will be directed to that user\'s profile page, which will showcase a grid view of the user\'s posts. Additionally, users will be able to like and comment on posts and view all the likes and comments for each post in the post details screen.'
            },
            solutions: {
                csdescription: 'To overcome the challenges, the solution resulted in a fully functional photo sharing app with a visually appealing interface and seamless backend operations including the secure use of Parse authentication.  The app\'s utilization of Java\'s camera functionality for photo capture provided an efficient way to upload images. Timeline functionality was developed to enable users to post photos with captions and view their timeline.',
                step1: 'Backend Development: Developed a custom backend system using Parse as the backend-as-a-service platform. Integrated Parse with the app to handle user authentication, data storage, and retrieval. Utilized Parse\'s database and file storage capabilities to store user accounts, photos, captions, and timeline information. Configured the app to communicate with the Parse server controlled by Back4App.',
                step2: 'User Authentication: Implemented Parse authentication to allow users to create new accounts and securely log in to the app. Utilized Parse\'s user management features to handle account creation, login, and password security.',
                step3: 'Photo Capture and Captioning: Utilized the camera functionality provided by Java and Android Studio to enable users to capture photos within the app. Implemented a user-friendly interface for adding captions to the captured photos.',
                step4: 'Timeline Functionality: Developed features that allowed users to post their photos with captions to their timeline. Implemented data retrieval from the Parse server to display the user\'s timeline, showcasing their posted photos, captions, and timestamp, in a visually appealing manner.'
            },
            results: {
                image1: '',
                image2: '',
                csdescription: 'The Instagram Clone app successfully replicated the core functionalities of Instagram, allowing users to create accounts, sign in, capture and upload photos, add captions, and view their timeline. The custom backend built using Parse provided a reliable and scalable infrastructure for data storage and retrieval. By utilizing Java and Android Studio, the app achieved a polished and user-friendly interface, providing an engaging and immersive photo-sharing experience.'
            }
        }
    },
]

const projects = [
    // projects can be added and removed
    // if there are no projects, Projects section won't show up
    {   
        id: '1',
        name: 'Event Tracker XXX',
        description:
        'Enables authenticated users to add, delete, and update daily tasks, which are then displayed on a user-friendly calendar UI. The project also includes password hashing and validation using bcrypt and validator packages, as well as JSON Web Tokens (JWT) for authentication and security.',
        stack: ['MongoDB', 'Express', 'React', 'Node'],
        sourceCode: 'https://github.com',
        livePreview: 'https://github.com',
        type: 'website',
        caseStudy: {
            projectinfo: {
                title: 'Event Tracker',
                hook: 'Stay on top of your events and to-do lists with ease.',
                image1: '',
                image2: '',
                csdescription: 'By combining React on the frontend, Node.js, Express, and MongoDB on the backend, and utilizing API endpoints for data management, the "Event Tracker" project delivers a comprehensive solution that enables users to effortlessly manage events while ensuring a secure and efficient user experience.',
                stack: 'The "Event Tracker" project utilizes a robust technology stack to deliver its functionalities. On the frontend, React is used to create a dynamic and interactive user interface, offering seamless event management capabilities. React\'s component-based architecture ensures a scalable and maintainable codebase, while its virtual DOM enables efficient rendering for a smooth user experience. The backend relies on Node.js and Express to establish a RESTful API, forming the foundation of the MERN stack. MongoDB serves as the database for storing event-related information, and data management is achieved through specific API endpoints such as "/api/user/signup", "/api/user/login", and "/api/events/...". These endpoints handle user authentication, event management, and ensure data integrity through various CRUD operations. Overall, this technology stack enables the "Event Tracker" project to provide a user-friendly interface and efficient data handling.'
            },
            audience: {
                csdescription:'Event Tracker is designed to serve a specific audience of individuals who want to effectively manage their daily tasks and events. The application targets users who seek a reliable and convenient solution for organizing their schedules and staying on top of their commitments. Audience for Event Tracker may include professionals/busy individuals, students and academics, organizers, and team collaborators.'
            },
            challenge: {
                csdescription: 'The challenge was to develop a robust and secure application that allows users to effectively track and manage their daily tasks. The project required implementing features like user authentication, task management, and a visually appealing calendar interface. It was crucial to prioritize security measures to protect user data and ensure a seamless user experience.',
                improvements: 'Currently, the web application has plans to implement search filters, sorting functionality by event name/date, and date filters for the event list with various ranges such as in a week, in a month, in 2 months, and within the year. These features are currently only available with Postman, but will soon be implemented into the application\'s frontend for a better user experience.'
            },
            solutions: {
                csdescription: 'The challenge was tackled by following a systematic approach, breaking down the requirements into manageable tasks. Here is an overview of the solution implemented for Event Tracker:',
                step1: 'User Authentication: Utilized JSON Web Tokens (JWT) for secure user authentication and authorization. Implemented a registration and login system to manage user accounts. Integrated bcrypt and validator packages to hash passwords and validate user input.',
                step2: 'Task Management: Created an intuitive user interface for adding, deleting, and updating tasks. Implemented a database schema to store task-related information, such as task name, description, date, and user association. Developed API endpoints to handle CRUD operations for tasks.',
                step3: 'Calendar UI: Designed an interactive calendar UI to display tasks based on their associated dates. Implemented features like task highlighting, pop-up modals for task details, and drag-and-drop functionality to enhance user experience. Used React libraries to efficiently manage the calendar component.',
                step4: 'Security Measures: Utilized bcrypt package to securely hash passwords before storing them in the database. Implemented input validation using the validator package to ensure data integrity and prevent malicious input. Employed best practices for secure communication and data transmission, such as HTTPS and encrypted connections.',
            }, 
            results: {
                image1: '',
                image2: '',
                csdescription: 'Event Tracker successfully delivered a secure and user-friendly solution for managing daily tasks. The project demonstrated effective utilization of technologies like JSON Web Tokens, bcrypt, and validator packages for authentication, password security, and data validation. The intuitive calendar UI provided a visually appealing and functional interface for task management. Overall, Event Tracker achieved its objective of enabling authenticated users to efficiently track and organize their daily tasks while prioritizing security and user experience.'
            }
        }
    },
    {   
        id: '2',
        name: 'Flixster XXX',
        description:
        'Browse through movies from The Movie Database API which includes the poster image, synopsis, movie trailer, and rating, usable in both landscape and portrait mode. The project was designed using a RESTful API to handle different HTTP methods, such as a GET request for the “Now Playing” endpoint.',
        stack: ['Java', 'Android Studio', 'RESTful API'],
        sourceCode: 'https://github.com',
        livePreview: 'https://github.com',
        type: 'mobile',
        caseStudy: {
            projectinfo: {
                title: 'Flixster - Movie Discovery Platform',
                hook: 'An API-based movie synopsis and trailer mobile application',
                image1: 'http://localhost:3000/Portfolio/images/DetailActivity_Landscape.gif',
                image2: '',
                csdescription: 'The Flixster project involves creating an Android application that allows users to browse through movies currently playing in theaters using The Movie Database API. The required features include displaying a list of movie titles, poster images, and overviews using RecyclerView implementation, and exposing details such as ratings, popularity, and synopsis in a separate activity. To achieve this, AsyncHttpClient and Glide libraries are required. Additionally, the project includes stretch stories such as implementing responsive views for landscape/portrait mode, showing video posts in full-screen using YouTubePlayerView, and applying UI improvements through styling and coloring.',
                stack: 'In summary, Flixster\'s frontend is developed using Java and Android Studio, delivering a native Android application with a user-friendly interface for browsing movies in both portrait and landscape mode. The backend, built with Java and a RESTful API architecture, handles HTTP requests and communicates with The Movie Database (TMDb) API to fetch movie data, specifically from the "Now Playing" endpoint. The TMDb API serves as the primary data source, providing comprehensive movie information that is structured and optimized within the backend for delivery to the frontend. Together, the frontend, backend, and data components of Flixster create a seamless and immersive movie browsing experience for Android users.'
            },
            audience: {
                csdescription:'Flixster is designed to cater to a wide range of movie enthusiasts and users who enjoy discovering and exploring movies on their Android devices. The app targets individuals who have an interest in the latest movie releases, want to stay updated with the movie industry, and seek a convenient way to access detailed information about movies.'
            },
            challenge: {
                csdescription: 'The primary challenge in developing Flixster was to create an intuitive and visually appealing movie browsing app for Android, providing users with comprehensive movie details while accommodating different screen orientations. Integrating the TMDB API and efficiently retrieving real-time movie data presented technical complexities that needed to be addressed.',
                improvements: ''
            },
            solutions: {
                csdescription: 'The solution provided a seamless and immersive movie browsing experience for users, allowing them to explore movies, access comprehensive details, watch trailers, and make informed choices, all within a visually appealing and user-friendly interface. The use of Java and Android Studio, along with the RESTful API integration, ensured efficient data retrieval and a smooth user experience, making Flixster a go-to app for movie enthusiasts.',
                step1: 'API Integration: Conducted thorough research and analysis of The Movie Database (TMDB) API to understand its capabilities and data structure. Developed a robust integration with the API to retrieve real-time movie data, including poster images, synopses, trailers, and ratings.',
                step2: 'User Interface Design: Designed a user-friendly and visually appealing interface using Java and Android Studio. Implemented responsive layouts and UI components to ensure optimal presentation of movie information in both landscape and portrait modes. Prioritized usability and seamless navigation to enhance the overall user experience.',
                step3: 'Networking and Data Retrieval: Implemented networking capabilities using RESTful API calls to efficiently communicate with the TMDB API. Designed mechanisms to handle different HTTP methods, such as performing GET requests for the "Now Playing" endpoint. Developed efficient data retrieval mechanisms to fetch and display movie details in real-time.',
                step4: 'Media Playback Integration: Integrated media playback capabilities within the app to allow users to watch movie trailers directly. Implemented a seamless media playback experience, enhancing user engagement and providing a comprehensive movie browsing experience.'
            },
            results: {
                image1: '',
                image2: '',
                csdescription: 'The app\'s performance, usability, and intuitive design have garnered positive user feedback, contributing to increased user engagement. Flixster successfully achieved its goal of delivering a visually appealing and comprehensive movie browsing experience for Android users. With its seamless integration of the TMDB API and efficient handling of HTTP methods, Flixster offers a reliable platform for movie enthusiasts to discover and explore their favorite movies.'
            }
        }
    }, 
    {   
        id: '3',
        name: 'Instagram Clone XXX',
        description:
        'A photo sharing app that allows users to create a new account or sign in using Parse authentication, take photos, add captions, and post it to their timeline. The backend is completely built from scratch, and the data is uploaded into the Parse server controlled by Back4App.',
        stack: ['Java', 'Android Studio', 'Parse'],
        sourceCode: 'https://github.com',
        livePreview: 'https://github.com',
        type: 'mobile',
        caseStudy: {
            projectinfo: {
                title: 'Instagram Clone',
                hook: 'A clone of the original mobile masterpiece',
                image1: 'http://localhost:3000/Portfolio/images/Refresh_Fragments.gif',
                image2: '',
                csdescription: 'The Instagram Clone project aimed to develop a photo-sharing app similar to Instagram, but with a custom backend built from scratch using Parse as the backend-as-a-service platform. The app allowed users to create new accounts or sign in using Parse authentication, capture photos, add captions, and post them to their timeline. Users can also view the last 20 posts submitted to the app, switch between different tabs using fragments and a bottom navigation view, and pull to refresh the feed. Optional features include a styled app icon and bottom navigation view, the ability to load more posts with infinite scrolling, and displaying the username and creation time for each post. The development was carried out using Java and Android Studio.',
                stack: 'The Instagram Clone mobile app was developed using Java and Android Studio, featuring a frontend designed with various screens and fragments for user navigation. The app includes functionalities such as feed view, compose view, and profile view, with customized icons and styles resembling the real Instagram app. The backend utilizes Parse Server, an open-source backend solution, for data storage, user authentication, and cloud functions. The Parse SDK enables features like user sign up, login/logout, and data retrieval, while Parse Dashboard manages backend data. The app\'s backend stores user-generated content, including images, posts, captions, and associated user information. The Parse Server database, implemented as a NoSQL JSON format, supports additional features like likes, comments, and user profiles. The app seamlessly integrates with the backend, allowing users to create, view, and interact with content effortlessly.'
            },
            audience: {
                csdescription:'The Instagram Clone app is targeted towards individuals who enjoy sharing photos and connecting with others through social media platforms. It caters to users who desire a familiar Instagram-like experience with custom backend capabilities, providing them with an alternative option for photo sharing and social networking.'
            },
            challenge: {
                csdescription: 'The primary challenge in developing the Instagram Clone app was to create a fully functional backend system from scratch, integrating it with Parse and ensuring seamless communication between the app and the Parse server controlled by Back4App. The app needed to provide user authentication, photo capture, captioning, and timeline functionality while maintaining the visual aesthetics and usability of a modern photo-sharing app.',
                improvements: 'The user profile feature will be enhanced with the ability for logged-in users to add a profile photo, which will be displayed with each post. By tapping on a post\'s username or profile photo, users will be directed to that user\'s profile page, which will showcase a grid view of the user\'s posts. Additionally, users will be able to like and comment on posts and view all the likes and comments for each post in the post details screen.'
            },
            solutions: {
                csdescription: 'To overcome the challenges, the solution resulted in a fully functional photo sharing app with a visually appealing interface and seamless backend operations including the secure use of Parse authentication.  The app\'s utilization of Java\'s camera functionality for photo capture provided an efficient way to upload images. Timeline functionality was developed to enable users to post photos with captions and view their timeline.',
                step1: 'Backend Development: Developed a custom backend system using Parse as the backend-as-a-service platform. Integrated Parse with the app to handle user authentication, data storage, and retrieval. Utilized Parse\'s database and file storage capabilities to store user accounts, photos, captions, and timeline information. Configured the app to communicate with the Parse server controlled by Back4App.',
                step2: 'User Authentication: Implemented Parse authentication to allow users to create new accounts and securely log in to the app. Utilized Parse\'s user management features to handle account creation, login, and password security.',
                step3: 'Photo Capture and Captioning: Utilized the camera functionality provided by Java and Android Studio to enable users to capture photos within the app. Implemented a user-friendly interface for adding captions to the captured photos.',
                step4: 'Timeline Functionality: Developed features that allowed users to post their photos with captions to their timeline. Implemented data retrieval from the Parse server to display the user\'s timeline, showcasing their posted photos, captions, and timestamp, in a visually appealing manner.'
            },
            results: {
                image1: '',
                image2: '',
                csdescription: 'The Instagram Clone app successfully replicated the core functionalities of Instagram, allowing users to create accounts, sign in, capture and upload photos, add captions, and view their timeline. The custom backend built using Parse provided a reliable and scalable infrastructure for data storage and retrieval. By utilizing Java and Android Studio, the app achieved a polished and user-friendly interface, providing an engaging and immersive photo-sharing experience.'
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
    email: 'contact.andersondev@gmail.com',
}

export { header, about, featured_projects, projects, skills, contact }