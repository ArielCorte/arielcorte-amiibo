import React from 'react'
import styled from 'styled-components'
import { BsGithub, BsLinkedin, BsGlobe, BsTerminalFill } from 'react-icons/bs'

const Footer = () => {
  return (
    <Wrapper>
      <div className='contact'>
        <div className='personal'>
          <div className='author'>Site coded by ArielCorte</div>
          <div className='social'>
            <a
              className='github'
              href='https://github.com/ArielCorte'
              target='_blank'
              rel='noopener noreferrer'>
              <BsGithub size='32' />
            </a>
            <a
              className='linkedin'
              href='https://www.linkedin.com/in/arielcorte'
              target='_blank'
              rel='noopener noreferrer'>
              <BsLinkedin size='32' />
            </a>
            <a
              className='website'
              href='https://arielcorte.vercel.app'
              target='_blank'
              rel='noopener noreferrer'>
              <BsGlobe size='32' />
            </a>
          </div>
        </div>
        <a
          className='repo'
          href='https://github.com/ArielCorte/arielcorte-amiibo'
          target='_blank'
          rel='noopener noreferrer'>
          <BsTerminalFill size='32' />
          Repo
        </a>
      </div>
      <div className='disclaimer'>
        This site has no affiliation with Nintendo or any other companies that
        own the rights to it.
      </div>
      <div className='copyright'>
        Game trademarks and copyrights are properties of their respective
        owners. Nintendo properties are trademarks of Nintendo.
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: var(--highlight-color);
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--subtle-color);
  padding: 0.5rem 5rem;
  flex-direction: column;
  padding: 1rem;

  a:visited {
    color: var(--subtle-color);
  }

  .contact {
    display: flex;
    gap: 2rem;
    margin: 1rem 0;
  }

  .personal {
    font-size: 1rem;
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .social {
    display: flex;
    gap: 2rem;
  }

  .repo {
    border-left: 0.2rem solid var(--subtle-color);
    padding: 2rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    font-weight: 700;
    cursor: pointer;
  }

  .repo:hover,
  .github:hover,
  .linkedin:hover,
  .website:hover {
    color: var(--primary-color);
  }

  .github,
  .linkedin,
  .website {
    cursor: pointer;
  }

  .disclaimer,
  .copyright {
    font-size: 0.8rem;
  }

  @media screen and (max-width: 460px) {
    .contact {
      gap: 1rem;
    }

    .personal {
      flex-direction: column;
    }

    .repo {
      padding: 1rem;
    }

    .author {
      text-align: center;
    }

    .disclaimer,
    .copyright {
      font-size: 0.5rem;
    }
  }
`

export default Footer
