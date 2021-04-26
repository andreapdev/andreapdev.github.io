import styled from 'styled-components';

const StyledHeader = styled.header`
    text-align: center;
    h1{
        font-family: 'Poiret One', cursive, 'Helvetica Neue',
        sans-serif;
        font-weight:lighter;
        margin-bottom: 2rem;
        color: #8F9491;
      }
    h2{
        font-weight: lighter;
        margin-bottom: 2rem;
        color: #8F9491;
        
    }
    @media only screen and (min-width: 768px) {
        h1{
            font-size: 5rem;
            text-shadow: 0.1rem 0 #21FA90, 0.2rem 0 #F397D6;
        }
        h1:hover{
            animation-name: titleAnim;
            animation-duration: 1s;
          }
    }
    @media only screen and (max-width: 767px) {
        h1{
            font-size: 3rem;
            font-weight: normal;
            text-shadow: 0.1rem 0 #21FA90;
        }
    }
    
    @keyframes titleAnim {
        75%{text-shadow: 0.3rem 0 #21FA90, 0.6rem 0 #F397D6;}
    }
`;

export default StyledHeader;