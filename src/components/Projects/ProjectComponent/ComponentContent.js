import ticTacToeImg from './../../../lib/img/projects/tic-tac-toe.png'
import workoutTrackerImg from './../../../lib/img/projects/workout-tracker.png'
import food4uImg from './../../../lib/img/projects/food4u.png'
import exTaber from './../../../lib/img/projects/tabor_img2.png'
import webdriver from './../../../lib/img/projects/gym-reservation-automation.png'
import alien_invasion from './../../../lib/img/projects/alien-invasion.png'
import secureMySpot from './../../../lib/img/projects/secureMySpot.png'

const projectContent = [
  {
    img: secureMySpot,
    title: 'Secure My Spot',
    description: [
      "This application offers a convenient way for users to locate, reserve, and pay for on-street parking in New York City",
      "The app is a Dockerised JavaScript / TypeScript front-end application based on the React library",
      "Nginx server delivers all public resources when deployed on Heroku or Google Cloud",
      "Google Maps implementation with a custom geographic depiction of available parking spots using GPS coordinates",
      "Polling of Django / PostgreSQL back-end ensures only available parking spots are displayed on Google Map",
      "Users can pick an available parking spot and choose the length of the reservation period",
      "Custom in-app Stripe payments and processing flow, using setup intent and payment intent objects",
      "Reservation of parking spots is only confirmed upon successful completion of Stripe payment processing whereby card details are collected for later charging",
      "Celery, RabbitMQ, and Redis are used to set up tasks that need to be executed by the back-end at the end of the reservation period",
      "Users can change the reservation length or end a reservation at any time, either case results in an email sent to the user to confirm any amendments to the reservation",
      "At the end of the reservation period the message broker pushes end-of-reservation tasks to Celery for execution, including sending an end-of-reservation email to the user and changing the state of the reserved parking spot resource from reserved to available in the PostgreSQL backend",
      "Jest and React testing library have been used for unit testing / test-driven-development"
    ],
    technologies: [
      "Axios",
      "Black",
      "Bootstrap",
      "Camelcase",
      "Celery",
      "Coverage",
      "Crypto.js",
      "CSS/SCSS",
      "Docker",
      "Dotenv",
      "Django",
      "Django Rest",
      "Factory Boy",
      "Faker",
      "Flake8",
      "Google Maps",
      "Gunicorn",
      "Heroku",
      "HTML5",
      "Husky",
      "iSort",
      "JavaScript",
      "Jest",
      "Lodash",
      "Logrocket",
      "Luxon",
      "Model Bakery",
      "Moment",
      "Nginx",
      "Pipenv",
      "PostgreSQL",
      "Pytest",
      "Redis",
      "React",
      "React Router",
      "TypeScript",
      "Stripe Api",
      "Styled Components",
      "Whitenoise",
    ],
    buttons: [
      {
        href: 'https://github.com/sven-gerlach/secure-my-spot-client',
        title: 'Link to front-end repo',
        buttonName: 'Front-End'
      },
      {
        href: 'https://github.com/sven-gerlach/secure-my-spot-api',
        title: 'Link to back-end repo',
        buttonName: 'Back-End'
      },
      {
        href: 'https://secure-my-spot-client.herokuapp.com',
        title: 'Link to app',
        buttonName: 'App'
      }
    ]
  },
  {
    img: exTaber,
    title: 'ExTaber',
    description: [
      'Online platform for independent authors and investigative journalists',
      'Back-end\'s MVC is entirely based on django, django rest framework, and PostgreSQL',
      'CRUDing on 23 views and 5 models',
      'Features two many-to-many relationships with two custom through models, recording article and comment votes',
      '100% server-based data handling',
      'Dynamic searching, filtering, and sorting across all published articles handled entirely server-side',
      'Using Marked and Dompurify to allow authors to provide article content in clean markdown format'
    ],
    technologies: [
      'axios',
      'bootstrap',
      'camelcase',
      'CSS/SCSS',
      'dompurify',
      'django',
      'Heroku',
      'HTML5',
      'JavaScript',
      'lodash',
      'marked',
      'moment',
      'PostgreSQL',
      'React',
      'react-reveal',
      'rest framework',
      'Router-Dom',
      'styled comp.',
      'uuid'
    ],
    buttons: [
      {
        href: 'https://github.com/sven-gerlach/extaber-client',
        title: 'Link to front-end repo',
        buttonName: 'Front-End'
      },
      {
        href: 'https://github.com/sven-gerlach/extaber-api',
        title: 'Link to back-end repo',
        buttonName: 'Back-End'
      },
      {
        href: 'https://sven-gerlach.github.io/extaber-client/#/',
        title: 'Link to app',
        buttonName: 'App'
      }
    ]
  },
  {
    img: food4uImg,
    title: 'Food4U',
    description: [
      'E-commerce platform for fresh produce',
      'CRUDing on 19 RESTful routes for 4 resources',
      'NoSQL based database management for user, order, order-item, and stock-keeping-unit resources',
      'Front- and back-end integration of Stripe checkout',
      'Custom-built middleware avoids need for front-end injection of order details',
      'Session persistence managed by storing React state in session-storage and subsequent rehydration upon customer returning to client after Stripe checkout'
    ],
    technologies: [
      'Axios',
      'bcrypt',
      'Bootstrap',
      'cors',
      'Express',
      'GeoIPLite',
      'HTML5',
      'JavaScript',
      'Lodash',
      'Moment',
      'MongoDB',
      'Mongoose',
      'Node.JS',
      'Passport',
      'React',
      'SCSS',
      'Stripe',
      'Styled-comp.'
    ],
    buttons: [
      {
        href: 'https://github.com/Tech-It-Out/Food4U-client',
        title: 'Link to front-end repo',
        buttonName: 'Front-End'
      },
      {
        href: 'https://github.com/Tech-It-Out/food4u-api',
        title: 'Link to back-end repo',
        buttonName: 'Back-End'
      },
      {
        href: 'https://tech-it-out.github.io/Food4U-client/#/',
        title: 'Link to app',
        buttonName: 'App'
      }
    ]
  },
  {
    img: workoutTrackerImg,
    title: 'ProLoad',
    description: [
      'Free-weights work-out tracker',
      'Allowing the user to record, save, and evaluate their weight training performance statically and serially',
      'CRUDing on 4 resources: user, workout, exercise, and set',
      'Custom-built back-end with 13 RESTful API routes',
      'NoSQL Database setup includes sub-documents and 1-to-many resource relationships'
    ],
    technologies: [
      'bcrypt',
      'Bootstrap',
      'Chart.js',
      'Cors',
      'Express',
      'HTML5',
      'JavaScript',
      'jQuery',
      'Lodash',
      'Moment',
      'MongoDB',
      'Mongoose',
      'NodeJS',
      'Passport',
      'SCSS',
      'Spin'
    ],
    buttons: [
      {
        href: 'https://github.com/sven-gerlach/workout-tracker-client',
        title: 'Link to front-end repo',
        buttonName: 'Front-End'
      },
      {
        href: 'https://github.com/sven-gerlach/workout-tracker',
        title: 'Link to back-end repo',
        buttonName: 'Back-End'
      },
      {
        href: 'https://sven-gerlach.github.io/workout-tracker-client/',
        title: 'Link to app',
        buttonName: 'App'
      }
    ]
  },
  {
    img: ticTacToeImg,
    title: 'Tic-Tac-Toe',
    description: [
      'Browser-based single page application of the famous tic-tac-toe game',
      'CRUDing on user and game state resources',
      'User can control turn order, player symbol, and opponent settings, including difficulty',
      'Unbeatable AI opponent based on minimax recursive algorithm (no alpha/beta pruning)'
    ],
    technologies: [
      'Bootstrap',
      'HTML5',
      'Javascript',
      'jQuery',
      'SCSS'
    ],
    buttons: [
      {
        href: 'https://github.com/sven-gerlach/tic-tac-toe-client',
        title: 'Link to front-end repo',
        buttonName: 'Front-End'
      },
      {
        href: 'https://sven-gerlach.github.io/tic-tac-toe-client/',
        title: 'Link to app',
        buttonName: 'App'
      }
    ]
  },
  {
    img: webdriver,
    title: 'Gym Reservation Automation',
    description: [
      'Covid-induced booking restrictions resulted in gym slots filling up within 5 seconds of the booking platform opening every midnight',
      'This script automates the booking process using Selenium Webdriver',
      'Using async/await ensures an orderly processing of otherwise asynchronous results',
      'Storing of my gym booking platform credentials in a local .env file',
      '.env file access rights are limited to read-write for user only (chmod 600 .env)',
      'Scheduling in crontab ensures daily execution of this automation script at 1 minute to midnight'
    ],
    technologies: [
      'bash',
      'envy',
      'Selenium Webdriver'
    ],
    buttons: [
      {
        href: 'https://github.com/sven-gerlach/525-gym-reservation-webdriver',
        title: 'Link to repo',
        buttonName: 'Script'
      }
    ]
  },
  {
    img: alien_invasion,
    title: 'Alien Invasion',
    description: [
      'Replica of the popular arcade game Alien Invasion / Space Invaders',
      'Class-based modelling of key game objects, such as space ships, bullets, interface, scoreboard, etc',
      'Pygame framework used to blit objects to the screen and model game-specific issues such as sprites',
      'To play the game, please click the below button and follow the instructions provided'
    ],
    technologies: [
      'bash',
      'Pandas',
      'PipEnv',
      'Pygame',
      'Python'
    ],
    buttons: [
      {
        href: 'https://github.com/sven-gerlach/alien_invasion',
        title: 'Link to repo',
        buttonName: 'Script'
      }
    ]
  }
]

export default projectContent
