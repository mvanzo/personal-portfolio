const header = {
  homepage: 'http://localhost:3000/',
  title: 'MV.',
}

const about = {
  name: 'Marty Vanzo',
  role: 'Full-Stack Web Developer',
  description:
  'Hard-working, customer-oriented, and impact-driven; I am a web developer with an ability to find effective, concise solutions to complex problems with an iterative and structured approach. I utilize my experience as a healthcare provider and athlete to thrive in fast-paced environments. As a collegiate athlete, I was part of a high-performing team as a result of personal and team-based growth, which is a culture that I bring with me.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/marty-vanzo/',
    github: 'https://github.com/mvanzo',
  },
}

const projects = [
  {
    name: 'Stu Knits',
    description:
      'e-commerce website using Stripe API for checkout. Decoupled MERN application.',
    stack: ['MongoDB', 'Express', 'React', 'Node'],
    sourceCode: 'https://github.com',
    deployedLink: 'https://stuknits.netlify.app/',
  },
  {
    name: 'Rankify',
    description:
      'Group project: Decoupled MERN app using Spotify’s API to create a song guessing game from a song snippet of a selected artist.',
    stack: ['MongoDB', 'Express', 'React', 'Node'],
    sourceCode: 'https://github.com',
    deployedLink: 'https://rankify-game.netlify.app/',
  },
  {
    name: 'Touring Reports',
    description:
      'Full stack express app featuring trip reports and API-sourced weather for backcountry skiing in Washington state. Users can log in to view and create trip reports as well as view hourly and 7 day forecast charts for specific GPS locations.',
    stack: ['PostgreSQL', 'Express', 'Node', 'EJS'],
    sourceCode: 'https://github.com',
    deployedLink: 'https://github.com',
  },
  {
    name: 'Get That Cheese',
    description:
      ' Front end one player game on a 2D canvas map. Collect as many pieces of cheese as you can and get back to the mouse hole before time runs out or the cats catch you!',
    stack: ['Javascript', 'Canvas', 'HTML', 'CSS'],
    sourceCode: 'https://github.com',
    deployedLink: 'https://github.com',
  }
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'Python',
  'React',
  'Material UI',
  'Git',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'martin.vanzo@gmail.com',
}

export { header, about, projects, skills, contact }
