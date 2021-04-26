import styled from 'styled-components';
import Colors from '../../theme/Colors';

const StyledAbout=styled.div`
    display: flex;

    @media only screen and (min-width: 768px) {
        img{
            border-radius: 50%;
            height: 12rem;
            box-shadow: 0.6rem 0.6rem ${Colors.secondaryColor};
            margin-right: 2rem;
        }
    }
    @media only screen and (max-width: 767px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img{
            border-radius: 50%;
            height: 6rem;
            width: 6rem;
            box-shadow: 0.4rem 0.4rem ${Colors.secondaryColor};
            margin-right: 1rem;
        }
    }
`;

export default StyledAbout;