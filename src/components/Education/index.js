import React from 'react';
import Section from '../Section';
import StyledSection from './style';

const Education = () => {
    return (
        <Section id="education" title="Education">
            <StyledSection>         
                <article className='course'>
                    <div>               
                        <h4>Front-End Development</h4>     
                        <p>
                            <span className='where'>IT Academy </span>
                            <span className= 'when'>| 06/2020- 01/2021</span>
                        </p>
                        <p className= 'what'>React, JS ES7+, HTML5, CSS3</p>
                    </div>
                </article>
                <article className='course'>
                    <div>
                        <h4>Introduction to Unity (16h)</h4>     
                        <p>
                            <span className='where'>Cibernarium </span>
                            <span className= 'when'>| 02/2020</span> 
                        </p>
                        <p className= 'what'>Unity, C#</p>
                    </div>
                </article>
                <article className='course'>
                    <div>
                        <h4>HLTC Multiplatform Application Development
                        (First Semester)</h4>
                        <p>
                            <span className='where'>Institut Obert de Catalunya </span>
                            <span className= 'when'>| 09/2019- 01/2020</span> 
                        </p>
                        <p className= 'what'>JAVA, SQL</p>
                    </div>     
                </article>
                <article className='course'>
                    <div>
                        <h4>HLTC 3D Animation and Videogames (First Year)</h4>
                        <p>
                            <span className='where'>Escola Mitjans Audiovisuals </span>
                            <span className= 'when'>| 09/2016- 06/2017</span> 
                        </p>
                        <p className= 'what'>C#, Adobe Animate, Photoshop, Illustrator, 3DMax</p>
                    </div> 
                </article>
                <article className='course last'>
                    <div>
                        <h4>BSc Biomedical Sciences</h4>     
                        <p>
                            <span className='where'>Universitat de Barcelona, Cardiff University </span>
                            <span className= 'when'>| 2010- 2015</span> 
                        </p>
                    </div>
                </article>
            </StyledSection>
        </Section>
    );
}

export default Education;