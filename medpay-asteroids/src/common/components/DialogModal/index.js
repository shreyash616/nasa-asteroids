import { useEffect, useRef } from "react"
import { Close } from "../../utils/icons"
import Loader from "../Loader"
import { ModalBackdrop, ModalBody, ModalContainer, ModalHeader, ModalWrapper } from "./styles"

const DialogModal = ({
    closeModal,
    title,
    children
}) => {

    const modalRef = useRef()

    useEffect(() => {
        if (modalRef.current) modalRef.current.style.top = '36px';
    }, [])

    return <ModalBackdrop onClick={() => closeModal()}>
        <ModalWrapper ref={modalRef}>
            <ModalContainer>
                <ModalHeader>
                    <h1>{title}</h1>
                    <Close onClick={() => closeModal()} />
                </ModalHeader>
                <ModalBody >{children || <Loader />}</ModalBody>
            </ModalContainer>
        </ModalWrapper>
    </ModalBackdrop>
}

export default DialogModal