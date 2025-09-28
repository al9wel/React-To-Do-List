import { CheckCircle } from "@mui/icons-material"

const Toast = ({ toast }) => {
    return (
        <>
            <div className={`${toast.open ? "block" : "hidden"} bg-[#2e7b2eeb] fixed left-5 lg:left-10 bottom-10 p-2 text-sm lg:text-xl font-bold rounded-md border border-white`}>
                <h1>{toast.message}<CheckCircle /></h1>
            </div>
        </>
    )
}
export default Toast