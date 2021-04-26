import styled from 'styled-components';
// import Colors from '../../theme/Colors';

const StyledFooter = styled.footer`
    padding: 1rem;
    width: 90%;
    display: flex;
    justify-content: space-around;
    @media only screen and (max-width: 767px) {
        margin-top: 5rem;
    }
`;

export default StyledFooter;