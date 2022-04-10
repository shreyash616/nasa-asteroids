import { useEffect, useState } from "react"
import { ToastContainer, ToastMessage } from "./styles"


const Toast = ({ message }) => {

    const [toastShown, setToastShown] = useState({
        message,
        show: false
    })

    useEffect(() => {
        if(message) {
            setToastShown({
                message,
                show: true
            })
        }
    }, [message])

    useEffect(() => {
        if (toastShown.show) {
            setTimeout(() => {
                setToastShown({
                    ...toastShown,
                    show: false
                })
            }, 5000)
        }
    }, [toastShown.show])

    return <ToastContainer>
        <ToastMessage toastShown={toastShown.show}>{toastShown.message}</ToastMessage>
    </ToastContainer>

}

export default Toast