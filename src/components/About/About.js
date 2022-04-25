import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { name, role, description, resume, social } = about

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

      <div className='about__contact center'>

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
                target='_blank'
                rel="noopener noreferrer"
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
                target='_blank'
                rel="noopener noreferrer"
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
