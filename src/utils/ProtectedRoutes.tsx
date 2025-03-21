import {useAuthStore} from "../stores/authStore.ts";
import {Navigate, Outlet} from "react-router-dom";
import {useEffect} from "react";
import toast from "react-hot-toast";

function ProtectedRoutes(){
    useEffect(() => {
        toast.error("sign in first")
    }, []);
    const isAuth = useAuthStore(state => state.isAuth)
    return isAuth?<Outlet/> : <Navigate to="/shopCalculator/signin"/>
}
export default ProtectedRoutes;