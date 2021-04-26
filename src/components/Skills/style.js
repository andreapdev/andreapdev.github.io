import styled from 'styled-components';
import Colors from '../../theme/Colors';

export const StyledArticle=styled.article`
    .skills-main{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;

    }
    .skills-other{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    h4{
        font-size: 1rem;
        color: ${Colors.primaryColor};
    }
`;

export const StyledCard= styled.div`

    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-weight: bolder;
    color: ${Colors.lightColor};
    border: solid 2px ${Colors.secondaryColor};
    border-radius: 2rem;
    z-index: -6;
    overflow: hidden;

    &::before{
        content: '';
        position: absolute;
        background-color: ${Colors.secondaryColor};
        z-index: -5;
        left: 0;
        height: 100%;
        width: ${props => props.value};
    }
    @media only screen and (min-width: 600px) {
        width: 13rem;
        height: 4rem;
        font-size: 1.1rem;
        margin: 1rem;
    }
    @media only screen and (max-width: 599px) {
        width: 100%;
        max-width: 350px;
        height: 2.2rem;
        font-size: 1rem;
        margin: 0.2rem;
    }

`;