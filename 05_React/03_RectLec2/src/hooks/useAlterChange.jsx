import { useEffect } from "react"

function useAlertChange(count){
    useEffect(() => {
        alert(count)
    },[count])
}

export default useAlertChange