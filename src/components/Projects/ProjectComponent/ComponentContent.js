import ticTacToeImg from './../../../lib/img/projects/tic-tac-toe.png'
import workoutTrackerImg from './../../../lib/img/projects/workout-tracker.png'
import food4uImg from './../../../lib/img/projects/food4u.png'
import exTaber from './../../../lib/img/projects/tabor_img2.png'

const projectContent = [
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
  }
]

export default projectContent
