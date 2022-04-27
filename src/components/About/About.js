import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { name, role, description } = about

  return (
    <div className='about center'>
      {name && (
        <h1>
          Portfolio of <span className='about__name'>{name}.</span>
        </h1>
      )}

        {role && <h2 className='about__role'>{role}.</h2>}

      <div className='about__container'>
        <img src='https://i.imgur.com/GZI8RPX.jpg' alt="marty on a mountain" />
        <p className='about__desc'>{description && description}</p>
      </div>
    </div>
  )
}

export default About
