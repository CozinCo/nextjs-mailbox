"use client";
import { redirect, usePathname, useRouter } from "next/navigation";
import React, { createContext, useState } from "react";
import Cookies from 'js-cookie';
import { Spinner } from "@/components/common/spinner";
import LoadingOverlay from "@/components/common/loadingOverlay";
export interface IUser {
    name: string
    email: string
}
export interface AuthContext {
    loader: boolean;
    setLoader: React.Dispatch<React.SetStateAction<boolean>>;
    spinner: boolean;
    setSpinner: React.Dispatch<React.SetStateAction<boolean>>;
    user: IUser | null;
    openChatBox: boolean;
    setOpenChatBox: React.Dispatch<React.SetStateAction<boolean>>;
    logout: () => void
}
export const AuthContext = createContext<AuthContext | null>(null);

export const AuthContextProvider = (
    { children }: { children: React.ReactNode }
) => {
    const router =  useRouter()
    const pathname = usePathname()
    const [loader, setLoader] = useState(false)
    const [spinner, setSpinner] = useState(false)
    const [openChatBox, setOpenChatBox] = useState(false)
    const [user, setUser] = useState<IUser | null>(null)

    const logout = () => {
       
       router.push("/signin")
        setUser(null)
        window.localStorage.removeItem("iauth")
        Cookies.remove('iauth');
        
    }
    React.useEffect(() => {
        const iuser = window.localStorage.getItem("iauth") || null
        if (pathname === "/signin" && iuser) {
            return redirect("/mail/u")
        } else if (pathname !== "/signin" && !iuser) {
            return redirect("/signin",)
        } else {
            const IUser = JSON.parse(localStorage.getItem("iauth")!) as IUser
            setUser({...user,...IUser})
           

        }
    }, [])

    return (
        <AuthContext.Provider value={{ loader, setLoader, spinner, setSpinner, user, openChatBox, setOpenChatBox, logout }}>
            {spinner && <Spinner />}
            {loader && <LoadingOverlay />}
            {children}
        </AuthContext.Provider>)
}