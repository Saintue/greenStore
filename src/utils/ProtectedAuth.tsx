import {useAuthStore} from "../stores/authStore.ts";
import {Navigate, Outlet} from "react-router-dom";

function ProtectedAuth(){
    const isAuth = useAuthStore(state => state.isAuth)
    return !isAuth?<Outlet/> : <Navigate to="/"/>
}
export default ProtectedAuth;