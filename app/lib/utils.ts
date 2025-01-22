"use client";
import { useCallback } from "react";
import { useMenuContext } from "@/app/lib/menu-context";

export const UseSetMenuIdHandler = () => {
    const menuContext = useMenuContext();

    return useCallback(
        (menuId: number | null) => {
            if (menuContext?.setSelectedMenuId) {
                menuContext.setSelectedMenuId(menuId);
            }
        },
        [menuContext]
    );
};
