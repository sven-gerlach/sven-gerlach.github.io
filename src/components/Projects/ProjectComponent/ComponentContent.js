import ticTacToeImg from './../../../lib/img/projects/tic-tac-toe.png'
import workoutTrackerImg from './../../../lib/img/projects/workout-tracker.png'
import food4uImg from './../../../lib/img/projects/food4u.png'

const projectContent = [
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
      'HTML5',
      'SCSS',
      'Javascript',
      'jQuery',
      'Bootstrap',
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
      'JavaScript',
      'HTML5',
      'SCSS',
      'jQuery',
      'Bootstrap',
      'Chart.js',
      'Lodash',
      'Spin',
      'Moment',
      'NodeJS',
      'Express',
      'MongoDB',
      'Mongoose',
      'bcrypt',
      'Cors',
      'Lodash',
      'Passport'
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
      'JavaScript',
      'HTML5',
      'SCSS',
      'React',
      'Stripe',
      'Bootstrap',
      'Lodash',
      'Moment',
      'Axios',
      'Styled-comp.',
      'Node.JS',
      'Express',
      'MongoDB',
      'Mongoose',
      'Stripe',
      'bcrypt',
      'cors',
      'GeoIPLite',
      'Passport'
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
  }
]

export default projectContent
