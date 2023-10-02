"use client";
import React, { createContext } from "react";
export const AuthContext = createContext<any | null>(null);

export const AuthContextProvider = (
    { children }: { children: React.ReactNode }
) => {



    return (
        <AuthContext.Provider value={{ test: "" }}>
        </AuthContext.Provider>)
}