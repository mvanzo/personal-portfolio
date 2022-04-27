import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
	const { social, email } = contact
  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>
      <a href={`mailto:${email}`}>
        <span type='button' className='btn btn--outline'>
          {contact.email}
        </span>
      </a>

      <div className='about__contact center'>
        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
                target='_blank'
                rel='noopener noreferrer'
              >
                <GitHubIcon fontSize='large' />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
                target='_blank'
                rel='noopener noreferrer'
              >
                <LinkedInIcon fontSize='large' />
              </a>
            )}
          </>
        )}
      </div>
    </section>
  )
}

export default Contact
