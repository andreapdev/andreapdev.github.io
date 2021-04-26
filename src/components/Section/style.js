import styled from 'styled-components';

export const StyledSection = styled.section`
    padding: 0 1rem;
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media only screen and (min-width: 768px) {
        .section-content, h3{
            width: 80%;
        }
    }
    @media only screen and (max-width: 767px) {
        .section-content, h3{
            width: 100%;
        }
    }
`;

export default StyledSection;