import React from 'react';
import Section from '../Section';
import StyledAbout from './style';

//Assets
import profilePic from '../../assets/profile-pic.jpg';

const AboutMe = () => {
    return (
        <Section id="aboutme" title="About Me">
            <StyledAbout>
                <img src={profilePic} alt="myself"/>
                <div>
                    <p>
                        Hello! I'm Andrea, a <strong>Front-End Developer trained in React</strong>, and with
                        a special interest in UX/UI design and accessibility.
                    </p>
                    <p>
                        After I graduated in Biomedical Sciences I started learning videogame and web development,
                        and most recently I completed a specialized course in React taught by the IT Academy at <i>Barcelona Activa</i>.
                    </p>
                    <p>
                        I speak fluent Spanish and Catalan, as well as advanced English, and I'm currently looking for a full-time position as a developer!
                    </p>
                </div>

            </StyledAbout>
        </Section>
    );
}

export default AboutMe;