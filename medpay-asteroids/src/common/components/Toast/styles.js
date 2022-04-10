
import styled, { css } from 'styled-components'

export const ToastContainer = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    bottom: 50px;
    display: flex;
    justify-content: center;
`

export const ToastMessage = styled.div`
    background: #e30000;
    padding: 12px 16px;
    border-radius: 20px;
    color: white;
    ${props => props.toastShown ? css`
        opacity: 1;
    ` : css`
        opacity: 0;
    `}
    transition: 0.5s opacity ease-in-out;
`