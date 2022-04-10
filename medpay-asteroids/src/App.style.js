import styled from 'styled-components'
import styleVals from './common/utils/styles'

export const AppWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow: hidden;
    align-items: center;
    padding: 0px 24px 0;
    background: #222222;
    > div {
        width: 100%;
        max-width: 900px;
    }
`
export const AppHeading = styled.div`
    width: 100%;
    color: whitesmoke;
    > h1 {
        margin: 24px 0 24px;
        padding: 0;
    }
`
export const DataWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    @media ${styleVals.breakpoints.sm}, ${styleVals.breakpoints.xs} {
        flex-direction: column;
    }
`
export const SectionWrapper = styled.div`
    width: 50%;
    :first-of-type {
        padding-right: 12px;
        border-right: 1px solid ${styleVals.colors.borderColor};
    }
    :last-of-type {
        padding-left: 12px;
        text-align: right;
    }
    @media ${styleVals.breakpoints.sm}, ${styleVals.breakpoints.xs} {
        width: 100%;
        :first-of-type {
            padding-right: 0px;
            border-right: none;
        }
        :last-of-type {
            padding-left: 0px;
            text-align: left;
        }
    }
`
export const DetailWrapper = styled.div`
    margin-bottom: 16px;
`
export const DetailTitle = styled.h2`
    margin: 0;
    padding: 0;
    margin-bottom: 4px;
    font-size: 16px;
    font-weight: normal;
`
export const DetailText = styled.p`
    margin: 0;
    padding: 0;
    font-size: 26px;
`