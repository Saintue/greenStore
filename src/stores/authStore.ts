import { create } from "zustand";
import {AuthStore} from "../interfaces/AuthStore.ts";
import {IUser} from "../interfaces/IUser.ts";
import AuthService from "../services/AuthService.ts";
import axios from "axios";
import {AuthResponse} from "../interfaces/response/AuthResponse.ts";
import {API_URL} from "../http";

export const useAuthStore = create<AuthStore>((set, get) => ({
    user: {} as IUser,
    settings: {},
    isLoading: true,
    isAuth:false,
    errors: [],

    setAuth:(bool: boolean) => {
        set((state)=>({...state,isAuth:bool}));
    },

    setLoading:(bool: boolean) => {
        set((state)=>({...state,isLoading:bool}));
    },

    setUser:(user: IUser) => {
        set((state)=>({...state,user:user}));
    },

    login: async (email:string, password:string)=> {
        try {
            const res = await AuthService.login(email, password);
            console.log(res)
            localStorage.setItem("token", res.data.accessToken);
            get().setAuth(true);
            get().setUser(res.data.user);
            return Promise.resolve()
        } catch (e) {
            console.log(e);
            return Promise.reject();
        }
    },

    registration: async (email:string, password:string)=> {
        try {
            const res = await AuthService.registration(email, password);
            console.log(res)
            localStorage.setItem("token", res.data.accessToken);
            get().setAuth(true);
            get().setUser(res.data.user);
            return Promise.resolve();
        } catch (e) {
            console.log(e);
            return Promise.reject();
        }
    },

    logout: async ()=> {
        try {
            const res = await AuthService.logout();
            console.log(res)
            localStorage.removeItem("token");
            get().setAuth(false);
            get().setUser({} as IUser);
        } catch (e) {
            console.log(e);
        }
    },

    checkAuth:async () => {
        get().setLoading(true);
        try {
            const res = await axios.get<AuthResponse>(`${API_URL}/refresh`, {withCredentials:true})
            console.log(res)
            localStorage.setItem("token", res.data.accessToken);
            get().setAuth(true);
            get().setUser(res.data.user);
        }
        catch (e) {
            console.log(e);
        }
        finally
        {
            get().setLoading(false);
        }
    }

}));
