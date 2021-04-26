import React from 'react';
import StyledSection from './style';

const Section = ({id, title, children}) => {
    return (
        <StyledSection id={id}>
            <h3>{title}</h3>
            <div className='section-content'>
                {children}
            </div>
        </StyledSection>
    );
}
export default Section;