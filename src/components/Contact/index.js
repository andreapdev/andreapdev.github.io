import React from 'react';
import Section from '../Section';
import {StyledDeck, StyledCard} from './style';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const mailIcon = <FontAwesomeIcon icon={faEnvelope} />
const linkedinIcon = <FontAwesomeIcon icon={faLinkedin} />
const githubIcon = <FontAwesomeIcon icon={faGithub} />

const Contact = () => {
    const copyMail=()=> {
        navigator.clipboard.writeText("andreap.dev@gmail.com");
  }

    return (
        <Section id="contact" title="Get in touch!">
            <StyledDeck>
                <StyledCard onClick={copyMail}> 
                    <span className="msg">Click to copy</span>
                    <span className="icon"> {mailIcon}</span>
                    <span>andreap.dev@gmail.com</span>
                </StyledCard>
                <a target="_blank" rel="noreferrer" href="https://github.com/andreapdev">
                    <StyledCard>
                        <span className="msg"><span>Open link</span></span>
                        <span className="icon"> {githubIcon}</span> 
                        <span>Github</span>
                    </StyledCard>
                </a>
                <a target="_blank" rel="noreferrer" href="https://linkedin.com/in/andreapdev">
                    <StyledCard>
                        <span className="msg">Open link</span>
                        <span className="icon"> {linkedinIcon}</span>
                        <span>Linkedin</span>
                    </StyledCard>
                </a>
            </StyledDeck>
        </Section>
        
    );
}

export default Contact;