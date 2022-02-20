import styled from 'styled-components';

export const SpinnerWrapper = styled.div`
    height: 100%;
    min-height: ${props => props.autoHeight ? '50vh' : ''};
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`