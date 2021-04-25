import React from 'react';
import Section from '../Section';
import StyledArticle from './style';

const Projects = () => {
    return (
        <Section id="projects" title="Projects">
            <StyledArticle>
                <a href='https://github.com/andreapdev/my-sales'>
                    <h4>'MySales' sales registry</h4>
                </a>
            </StyledArticle>
            <StyledArticle>
                <a href='https://github.com/andreapdev/ecommerce-exercici'>
                    <h4>'La Librería' eCommerce</h4>
                
                </a>

            </StyledArticle>
            <StyledArticle>
                <a href='https://github.com/andreapdev/checkout-app'>
                    <h4>eCommerce Cart</h4>
                </a>
            </StyledArticle>
        </Section>
    );
}

export default Projects;