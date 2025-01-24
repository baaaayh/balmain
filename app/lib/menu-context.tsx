"use client";
import { useState, useEffect, createContext, useContext, useMemo } from "react";
import { usePathname } from "next/navigation";
import { getMenuData } from "@/app/lib/actions";
import { menuDataType } from "@/type";
interface MenuContextType {
    menuData: menuDataType[];
    currMenuData: menuDataType | null;
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const MenuProvider = ({ children }: { children: React.ReactNode }) => {
    const [menuData, setMenuData] = useState<menuDataType[]>([]);
    const pathname = usePathname();

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

    const currMenuData = useMemo(() => {
        if (!menuData || menuData.length === 0 || !pathname) return null;

        const currentPath = `${pathname}/`;

        // const menu = menuData.find(
        //     (menu) =>
        //         `/${menu.depth1.toLowerCase()}/${
        //             menu.depth2 ? menu.depth2.toLowerCase() + "/" : ""
        //         }${menu.depth3 ? menu.depth3.toLowerCase() + "/" : ""}` ===
        //         currentPath
        // );
        const menu = menuData.find(
            (menu) =>
                (menu.depth3 || menu.depth2 === "View all") &&
                menu.path === currentPath
        );
        if (menu === undefined || menu === null) return null;

        return menu;
    }, [menuData, pathname]);

    const value = { menuData, currMenuData };

    return (
        <MenuContext.Provider value={value}>{children}</MenuContext.Provider>
    );
};

export const useMenuContext = () => useContext(MenuContext);
