import React from 'react';
import {StyledSection, StyledContent} from './style';

const Section = ({id, title, children}) => {
    return (
        <StyledSection id={id}>
            <h3>{title}</h3>
            <StyledContent>
                {children}
            </StyledContent>
        </StyledSection>
    );
}
export default Section;