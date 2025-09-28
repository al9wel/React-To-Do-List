import { createContext, useContext } from "react";
import { useState } from "react";
import Toast from "../Components/Toast";
const ToastContext = createContext({})
export default function ToastProvider({ children }) {
    const [toast, setToast] = useState({ open: false, message: "" })
    const handleOpenToast = (message) => {
        setToast({ open: true, message: message })
        setTimeout(() => {
            setToast({ open: false, message: message })
        }, 1500);
    }
    return (
        <>
            <ToastContext.Provider value={{ handleOpenToast }}>
                {children}
                <Toast toast={toast} />
            </ToastContext.Provider>
        </>
    )
}
// eslint-disable-next-line react-refresh/only-export-components
export const useToast = () => {
    return useContext(ToastContext)
}