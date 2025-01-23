"use client";
import { useState, useEffect, createContext, useContext } from "react";
import { getMenuData } from "@/app/lib/actions";
import { menuDataType } from "@/type";
interface MenuContextType {
    menuData: menuDataType[];
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const MenuProvider = ({ children }: { children: React.ReactNode }) => {
    const [menuData, setMenuData] = useState<menuDataType[]>([]);

    useEffect(() => {
        async function getMenu() {
            await getMenuData().then((data: menuDataType[]) => {
                setMenuData(data);
            });
        }
        getMenu();

        return () => {
            setMenuData([]);
        };
    }, []);

    const value = { menuData };

    return (
        <MenuContext.Provider value={value}>{children}</MenuContext.Provider>
    );
};

export const useMenuContext = () => useContext(MenuContext);
