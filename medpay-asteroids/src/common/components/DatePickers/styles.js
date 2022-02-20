import styled from 'styled-components'
import styleVals from '../../utils/styles'

export const DateInputWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 0px;
    margin: 12px 0;
    @media ${styleVals.breakpoints.xs}, ${styleVals.breakpoints.sm} {
        flex-direction: column;
    }
`
export const DatePickerWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    > div {
        margin-right: 12px;
    }
    @media ${styleVals.breakpoints.xs}, ${styleVals.breakpoints.sm} {
        > div:first-child {
            margin-right: 12px;
        }
        > div:last-child {
            margin-right: 0;
        }
        justify-content: space-between;
    }
`
export const SearchButton = styled.button`
    background: ${styleVals.colors.asteroidBlue};
    padding: 4px 10px;
    height: 40px;
    width: 100px;
    border: none;
    outline: none;
    border-radius: 5px;
    font-size: 18px;
    @media ${styleVals.breakpoints.sm}, ${styleVals.breakpoints.xs} {
        margin-top: 16px;
        width: 100%;
    }
    cursor: pointer;
    color: white;
    :disabled {
        background: grey;
    }

`
export const DateTextBox = styled.div`
    label {
        top: -8px;
    }
    input {
        padding: 8px 12px;
    }
`