import React from 'react';
import Section from '../Section';
import StyledSection from './style';

//Assets
import mySalesPic from '../../assets/mysales.png';
import libreriaPic from '../../assets/libreria.png';
import cartPic1 from '../../assets/checkout1.png';
import cartPic2 from '../../assets/checkout2.png';


const Projects = () => {
    return (
        <Section id="projects" title="Projects">
            <StyledSection>
                <article className='small-container'> 
                    <a href='https://github.com/andreapdev/my-sales'>
                        <h4>'MySales' sales registry</h4>
                        <img alt='web screenshot' src={mySalesPic} />
                    </a>
                </article>
                <article className='small-container'>
                    <a href='https://github.com/andreapdev/ecommerce-exercici'>
                        <h4>'La Librería' eCommerce</h4>
                        <img alt='web screenshot' src={libreriaPic} />
                    </a>

                </article>
                <article className='big-container'>
                    <a href='https://github.com/andreapdev/checkout-app'>
                        <h4>eCommerce Cart</h4>
                        <div className='img-container'>
                            <div><img alt='web screenshot' src={cartPic1} /></div>
                            <div><img alt='web screenshot' src={cartPic2} /></div>
                        </div>
                    </a>
                </article>
            </StyledSection>
        </Section>
    );
}

export default Projects;