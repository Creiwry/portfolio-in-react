const projectDataEnglish = 
  [
    {
      "id": 1,
      "locale": "en",
      "slug": "course-gate-en",
      "name": "Course Gate",
      "content": "Course Gate is a web application that allows students to enroll in courses and instructors to manage course offerings. <br> <br> <h2> Features </h2> \n- Students can browse available courses and enroll in them. \n- Instructors can create, edit, and delete courses. \n- Authentication system for students and instructors. \n- Enrollment validation to prevent duplicate enrollments. \n- User-friendly interface for easy navigation. <br> <br>  <h2>Technologies Used: </h2> <br> \n- Ruby on Rails: A web development framework used for building the application. \n- PostgreSQL: The database management system for storing application data. \n- Bootstrap: A front-end framework for responsive and attractive user interface design. \n- Faker: A gem used for generating sample data for testing and development purposes. \n### [Github](https://github.com/Creiwry/CourseGate#course-gate)",
      "description": "CourseGate is a learning platform created with Ruby on Rails Stripe PostgreSQL & Tailwind! Stripe is used for transaction handling",
      "icon": "fa-solid fa-book"
    },
    {
      "id": 2,
      "locale": "en",
      "slug": "local-news-en",
      "name": "Local News",
      "content": "LocalGossip is a social media created with Ruby on Rails PostgreSQL & React! Geofencing and Turbo are used for live updates to gossip in your area <br /> \n## Features \nHere are some of the features Local Gossip provides:\n- User System: Users can create an account to share their gossips.\n- Gossip Management: The application has show and index actions for displaying gossips.\n- Static Pages: The application includes static pages like Contacts, Team, and Welcome.\n<br />\n### [Github](https://github.com/Creiwry/the_gossip_project_week_6)",
      "description": "LocalNews is a social media created with Ruby on Rails PostgreSQL & React! Geofencing and Turbo are used for live updates to gossip in your area",
      "icon": "fa-solid fa-comment"
    }
  ]

const projectDataFrench = 
  [

    {
      "id": 1,
      "locale": "fr",
      "slug": "course-gate-fr",
      "name": "Course Gate",
      "content": "Content in french",
      "description": "CourseGate est une plateforme d'apprentissage créée avec Ruby on Rails, Stripe, PostgreSQL et Tailwind ! Stripe est utilisé pour la gestion des transactions.",
      "icon": "fa-solid fa-book"
    },
    {
      "id": 2,
      "locale": "fr",
      "slug": "local-news-fr",
      "name": "Local News",
      "content": "Content in french",
      "description": "LocalNews est un réseau social créé avec Ruby on Rails, PostgreSQL et React ! La géolocalisation et Turbo sont utilisés pour des mises à jour en direct des potins dans votre région.",
      "icon": "fa-solid fa-comment"
    }
  ]

export { projectDataEnglish, projectDataFrench }
