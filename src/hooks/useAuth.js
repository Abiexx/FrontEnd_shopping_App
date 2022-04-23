import { useContext } from "react"
import { AuthContext } from "../store/AuthContext"

const useAuth = () => {
    return useContext(AuthContext)
}

export default useAuth;