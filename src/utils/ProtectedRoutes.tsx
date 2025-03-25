import {useAuthStore} from "../stores/authStore.ts";
import {Navigate, Outlet} from "react-router-dom";
import {useEffect} from "react";
import toast from "react-hot-toast";

function ProtectedRoutes(){
    useEffect(() => {
        if(!isAuth) {
            toast.error("sign in first")
        }

    }, []);
    const isAuth = useAuthStore(state => state.isAuth)
    return isAuth?<Outlet/> : <Navigate to="/greenStore/signin"/>
}
export default ProtectedRoutes;