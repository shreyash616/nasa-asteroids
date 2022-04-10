import styled from 'styled-components';
import styleVals from '../../utils/styles';

export const ListWithInput = styled.div`
    border: 1px solid ${styleVals.colors.borderColor};
    border-radius: 5px;
    padding: 16px 12px;
    background:  #222222;
    color: whitesmoke;
`
export const ListWrapper = styled.div`
    >div {
        max-height: 70vh;
        @media ${styleVals.breakpoints.sm}, ${styleVals.breakpoints.xs} {
            max-height: 55vh;
        }
        overflow: auto;
        > div:last-child {
            border-bottom: none;
        }
    }
`
export const ListHeading = styled.h1`
    margin: 0;
    padding: 0;
    margin-bottom: 12px;
    margin-top: 24px;
    margin-left: 12px;
`
export const ListItemWrapper = styled.div`
    padding: 12px 16px;
    border-bottom: 1px solid ${styleVals.colors.borderColor};
    min-height: 24px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    :hover, :active {
        background: ${styleVals.colors.hoverBlue};
        cursor: pointer;
    }
`
export const ListDetailsWrapper = styled.div`
    width: 80%;
`
export const ListTitle = styled.p`
    font-weight: bold;
    font-size: 16px;
    margin: 0 0 8px;
    padding: 0;
`
export const ListSubTitle = styled.p`
    font-size: 14px;
    margin: 0;
    padding: 0;
`
export const IconWrapper = styled.div`

`