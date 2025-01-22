"use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface NavStateContextType {
    navState: boolean;
    setNavState: (navState: boolean) => void;
}

const NavStateContext = createContext<NavStateContextType>(
    {} as NavStateContextType
);

export const NavStateProvider = ({ children }: { children: ReactNode }) => {
    const [navState, setNavState] = useState(false);

    return (
        <NavStateContext.Provider value={{ navState, setNavState }}>
            {children}
        </NavStateContext.Provider>
    );
};

export const useNavState = () => useContext(NavStateContext);
