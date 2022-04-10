import { useEffect, useState } from "react"
import { ToastContainer, ToastMessage } from "./styles"


const Toast = ({message}) => {

    const [toastShown, setToastShown] = useState(message)

    useEffect(() => {
        message && setToastShown(message)
    }, [message])

    useEffect(() => {
        if(!!toastShown) {
            setTimeout(() => {
                setToastShown('')
            }, 3000)
        }
    }, [!!toastShown])

    return <ToastContainer>
        <ToastMessage toastShown={toastShown}>{message}</ToastMessage>
    </ToastContainer>
    
}

export default Toast