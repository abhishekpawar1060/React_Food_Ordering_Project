import { useState, createContext, useContext } from "react";
import * as userService from '../services/userService';
import { toast } from "react-toastify";


const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(userService.getUser());

    const login = async (email, password) => {
        try {
            const user = await userService.login(email, password);
            setUser(user);
            toast.success('Login Successful');
        } catch (error) {
            toast.error(error.response.data)
        }
    };

    const register = async data => {
        try {
            const user = await userService.register(data);
            setUser(user);
            toast.success('Register Successfuly!')
        } catch (error) {
            toast.error(error.response.data);
        }
    };

    const logout = () => {
        userService.logout();
        setUser(null);
        toast.success('Logout Successful');
    };

    const updateProfile = async user => {
        const updatedUser = await userService.updateProfile(user);
        toast.success('Profile Update was Successful');
        if(updatedUser) setUser(updatedUser);
    };

    const changePassword = async password => {
        await userService.changePassword(password);
        logout();
        toast.success('Password Changed Successfully, Please Login Again!')
    }

    return(
        <AuthContext.Provider value={{ user, login, register, logout, updateProfile, changePassword}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext)
