import {IUser} from "./IUser.ts";

export interface AuthStore {
    user: IUser;
    isAuth: boolean;
    isLoading: boolean;
    errors: string[];
    setUser: (user: IUser) => void;
    setAuth: (bool: boolean) => void;
    setLoading: (bool: boolean) => void;
    login:(email: string, password: string) => Promise<void>;
    registration: (email:string, password: string) => Promise<void>;
    logout: () => void;
    checkAuth: () => void;
}
