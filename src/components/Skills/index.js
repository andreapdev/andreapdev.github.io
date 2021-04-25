import React from 'react';
import Section from '../Section'
import {StyledArticle, StyledCard} from './style';

const Skills = () => {
    return(
        <Section id='skills' title='Skills'>
            <StyledArticle className= 'tech-skills'>
                <div className='skills-main'>
                    <StyledCard value='85%'>React</StyledCard>
                    <StyledCard value='95%'>JavaScript (ES6+)</StyledCard>
                    <StyledCard value='85%'>TypeScript</StyledCard>
                    <StyledCard value='95%'>HTML5</StyledCard>
                    <StyledCard value='95%'>CSS3, SASS</StyledCard>
                    <StyledCard value='95%'>Bootstrap</StyledCard>
                    <StyledCard value='95%'>Styled Components</StyledCard>
                    <StyledCard value='80%'>Redux</StyledCard>
                    <StyledCard value='90%'>Git, Trello</StyledCard>    
                </div>
                <div>
                    <h4>As well as</h4>
                    <div className='skills-other'>
                        <p>C#, JAVA</p>
                        <p>SQL, Firebase</p>
                        <p>Unity</p>
                        <p>Illustrator/Inkscape</p>
                        <p>Photoshop/GIMP</p>
                        <p>3DMax</p>
                    </div>
                </div>
            </StyledArticle>
        </Section>
    );
}

export default Skills;