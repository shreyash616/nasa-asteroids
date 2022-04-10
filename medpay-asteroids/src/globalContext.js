import { createContext, useContext, useState } from "react";
import Toast from "./common/components/Toast";

const GlobalContext = createContext(null)

export const GlobalContextProvider = ({ children }) => {

    const [toastMessage, setToastMessage] = useState('')

    const showToast = message => {
        setToastMessage(message)
        setTimeout(() => {
            setToastMessage('')
        })
    }

    return <GlobalContext.Provider value={{
        toastMessage,
        showToast
    }}>
        {children}
        <Toast message={toastMessage} />
    </GlobalContext.Provider>
}

export const useGlobalContext = () => {
    const {
        toastMessage,
        showToast
    } = useContext(GlobalContext)

    return {
        toastMessage,
        showToast
    }
}