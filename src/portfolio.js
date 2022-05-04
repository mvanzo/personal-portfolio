const header = {
  homepage: 'https://marty-vanzo.netlify.app/',
  title: 'MV.',
}

const about = {
  name: 'Marty Vanzo',
  role: 'Full Stack Web Developer',
  description:
  'Hard-working, customer-oriented, and impact-driven; I am a web developer with an ability to find effective, concise solutions to complex problems with an iterative and structured approach. I utilize my experience as a healthcare provider and athlete to thrive in fast-paced environments. As a collegiate athlete, I was part of a high-performing team as a result of personal and team-based growth, which is a culture that I bring with me.',
  resume: 'https://example.com',
}

const projects = [
  {
    name: 'Stu Knits',
    description:
      'e-commerce website using Stripe API for checkout. Decoupled MERN application.',
    stack: ['MongoDB', 'Express', 'React', 'Node'],
    screenshot: 'https://i.imgur.com/f0rl4k4.png',
    sourceCode: 'https://github.com/mvanzo/Client_Stu_Knits',
    deployedLink: 'https://stuknits.netlify.app/',
  },
  {
    name: 'Rankify',
    description:
      'Group project: Decoupled MERN app using Spotify’s API to create a song guessing game from a song snippet of a selected artist.',
    stack: ['MongoDB', 'Express', 'React', 'Node'],
    screenshot: 'https://i.imgur.com/emIwnS7.png',
    sourceCode: 'https://github.com/mvanzo/rankify-client',
    deployedLink: 'https://rankify-game.netlify.app/',
  },
  {
    name: 'Touring Reports',
    description:
      'Full stack express app featuring trip reports and API-sourced weather for backcountry skiing in Washington state. Users can log in to view and create trip reports as well as view hourly and 7 day forecast charts for specific GPS locations.',
    stack: ['PostgreSQL', 'Express', 'Node', 'EJS'],
    screenshot: 'https://i.imgur.com/Dyqnl3s.png',
    sourceCode: 'https://github.com/mvanzo/Touring-Reports',
    deployedLink: 'https://touring-reports.herokuapp.com/',
  },
  {
    name: 'Get That Cheese',
    description:
      ' Front end one player game on a 2D canvas map. Collect as many pieces of cheese as you can and get back to the mouse hole before time runs out or the cats catch you!',
    stack: ['Javascript', 'Canvas', 'HTML', 'CSS'],
    screenshot: 'https://i.imgur.com/3jOVZDN.png',
    sourceCode: 'https://github.com/mvanzo/Get_That_Cheese',
    deployedLink: 'https://mvanzo.github.io/Get_That_Cheese/',
  }
]

const skills = [
  'JavaScript',
  'React',
  'Node',
  'Express',
  'MongoDB',
  'Mongoose',
  'PostgreSQL',
  'Sequelize',
  'SQL',
  'Python',
  'HTTP',
  'RESTful API', 
  'AJAX',
  'Bootstrap',
  'Chart.js',
  'Git',
  'Github',
  'Bash',
  'ERD',
  'HTML5',
  'CSS3',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'martin.vanzo@gmail.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/marty-vanzo/',
    github: 'https://github.com/mvanzo',
  },
}

export { header, about, projects, skills, contact }