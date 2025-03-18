import {useAuthStore} from "../stores/authStore.ts";
import {Navigate, Outlet} from "react-router-dom";

function ProtectedRoutes(){
    const isAuth = useAuthStore(state => state.isAuth)
    return isAuth?<Outlet/> : <Navigate to="/signin"/>
}
export default ProtectedRoutes;