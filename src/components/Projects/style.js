import styled from 'styled-components';
import Colors from '../../theme/Colors';

const StyledSection = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;

    article{
        margin: 1.5rem 0.5rem;
        padding: 0.5rem;
        border: solid 0.2rem ${Colors.warningColor};
        box-shadow: 0.5rem 0.5rem 0 ${Colors.warningColor};
        border-radius: 1rem;
        text-align: center;
        color: ${Colors.primaryColor};
        font-size: 1.2rem;

        img{
            object-fit: cover;
            width: 90%;
            height: auto;
        }
        .big-container{
            width: 100%;
        }
    }
    @media only screen and (min-width: 768px) {
        article:hover{
            transform: translate(0.5rem, 0.5rem);
            box-shadow: none;
        }
        .small-container{
            width: 46%;
        }
        .img-container{
            display: flex;
            width: 100%;
        }
    }
    @media only screen and (max-width: 767px) {
        article{
            width: 70%;
        }
        .img-container{
            display: block;
        }
    }
`;

export default StyledSection;