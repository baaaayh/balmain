"use client";
import { useState, createContext, useContext } from "react";

interface MenuContextType {
    selectedMenuId: number | null;
    setSelectedMenuId: (id: number | null) => void;
}

const MenuContext = createContext<MenuContextType>({} as MenuContextType);

export const MenuProvider = ({ children }: { children: React.ReactNode }) => {
    const [selectedMenuId, setSelectedMenuId] = useState<number | null>(null);

    const value = { selectedMenuId, setSelectedMenuId };

    return (
        <MenuContext.Provider value={value}>{children}</MenuContext.Provider>
    );
};

export const useMenuContext = () => useContext(MenuContext);
