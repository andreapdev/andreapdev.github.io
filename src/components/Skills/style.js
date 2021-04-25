import styled from 'styled-components';
import Colors from '../../theme/Colors';

export const StyledArticle=styled.article`
    .skills-main{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        font-size: 1.1rem;
        font-weight: bolder;
        color: ${Colors.lightColor};
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
    height: 4rem;
    width: 13rem;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem;
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

`;