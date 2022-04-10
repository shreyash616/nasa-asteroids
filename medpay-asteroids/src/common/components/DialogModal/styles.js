import styled from 'styled-components'
import styleVals from '../../utils/styles'

export const ModalBackdrop = styled.div`
    position: fixed;
    height: 100vh;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background: ${styleVals.colors.backdropGrey};
    z-index: 999;
`
export const ModalWrapper = styled.div`
    position: absolute;
    top: -100%;
    transition: 0.5s top ease-in-out;
    width: 100%;
    display: flex;
    justify-content: center;
`
export const ModalContainer = styled.div`
    width: 100%;
    max-width: 540px;
    border-radius: 5px;
    padding: 16px;
    margin: 0 12px;
    background: #222222;
    color: whitesmoke;
`
export const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0 16px;
    border-bottom: 1px solid ${styleVals.colors.borderColor};
    > h1 {
        margin: 0;
        padding: 0;
        font-weight: normal;
        font-size: 28px;
    }
    > svg {
        cursor: pointer;
        flex-shrink: 0;
    }
`
export const ModalBody = styled.div`
    margin: 24px 0 12px;
`