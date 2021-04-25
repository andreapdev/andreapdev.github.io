import styled from 'styled-components';
import Colors from '../../theme/Colors'

const StyledSection = styled.div`
    padding-left: 5rem;
    position: relative;
    
    &::before{
        content: '';
        border-left: solid 0.2rem ${Colors.warningColor};
        display:inline-block;
        position: absolute;
        float: left;
        left: 1.9rem;
        top: 3.2rem;
        bottom: 10rem;
    }

    h4{
        font-size: 1.2rem;
        color: ${Colors.warningColor};
    }

    .course{
        display: flex;
        &::before{
            content: '';
            position: relative;
            left: -4rem;
            top: 2rem;
            border: 0.2rem solid inherit;
            border-radius: 100%;
            background: ${Colors.warningColor};
            min-height: 2rem;
            max-height: 2rem;
            min-width: 2rem;
            max-width: 2rem;
        }
    }
    .last{
        height: 13rem;
    }
    .what{
        color: ${Colors.primaryColor};
    }
`;

export default StyledSection;