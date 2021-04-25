import styled from 'styled-components';
import Colors from '../../theme/Colors';

const StyledNav = styled.div`
    background-color: ${Colors.secondaryColor};
    padding: 0.5rem;
    border-style: solid inherit;
    border-radius: 2rem;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 50;
    transition: .25s ease-in-out;
    box-shadow: 0.6rem 0.6rem ${Colors.warningColor};

    .nav{
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-weight: bold;
        height: 100%;
        width: 100%;
    }

    a, #navbar-open, #navbar-close{
        color: ${Colors.lightColor};
        padding: 0.5rem;
    }

    @media only screen and (min-width: 768px) {
        width: 80%;
        .nav{
            font-size: 1.2rem;
        }
        a{
            transition: .25s ease-in-out;
            &:hover{
                transform: scale(1.1, 1.1);
            }
        }
        #navbar-open, #navbar-close{
            display: none;
        }
    }
    @media only screen and (max-width: 767px) {
        width: 100%;
        .nav{
            flex-direction: column;
        }
        .hideThis{
            display: none;
        }
    }
`;

export default StyledNav;