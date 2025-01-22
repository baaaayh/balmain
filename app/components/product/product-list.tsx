"use client";
import { useMemo } from "react";
import { useMenuContext } from "@/app/lib/menu-context";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import styles from "@/app/styles/product/product-list.module.scss";
export default function ProudctList() {
    const pathname = usePathname();
    const menuContext = useMenuContext();
    const menuData = menuContext?.menuData;

    const menuId = useMemo(() => {
        if (!menuData || menuData.length === 0 || !pathname) return null;
        const currentPath = `${pathname}/`;

        const menu = menuData.find((menu) => menu.path === currentPath);
        if (menu?.menu_id !== undefined) {
            return menu.menu_id;
        }
    }, [menuData, pathname]);

    return (
        <div className={clsx(styles["product-list"])}>
            <ul>
                <li>{JSON.stringify(menuId)}</li>
            </ul>
        </div>
    );
}
