import styled from 'styled-components';
import Colors from '../../theme/Colors';

export const StyledDeck = styled.div`
    display: flex;
    
    @media only screen and (min-width: 768px) {
        justify-content: space-around;
    }
    @media only screen and (max-width: 767px) {
        flex-direction: column;
    }
`;
export const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    cursor: pointer;
    transition: .25s ease-in-out;

    .msg{
        visibility:hidden;
        transition: .25s ease-in-out;
        position: relative;
        top: 2rem;
        font-size: 0.5rem;
        font-weight: bold;
        color: ${Colors.warningColor};
    }
    .icon{
        font-size: 4rem;
        color: ${Colors.primaryColor};
        transition: .25s ease-in-out;
    }
    @media only screen and (min-width: 768px) {
        
        &:hover{
            color: ${Colors.secondaryColor};
            .icon{
                color: ${Colors.secondaryColor};
                transform: scaleX(0);
            }
            .msg{
                visibility:visible;
                transform: scale(2,2);
            }
        }
    }
    @media only screen and (max-width: 767px) {
        min-width: 2rem;
    }
`

