"use client";
import { useMemo } from "react";
import { useMenuContext } from "@/app/lib/menu-context";
import { usePathname } from "next/navigation";
import styles from "@/app/styles/product/product-list-title.module.scss";
import clsx from "clsx";
export default function ProductListTitle() {
    const pathname = usePathname();
    const menuContext = useMenuContext();
    const menuData = menuContext?.menuData;

    const menu = useMemo(() => {
        if (!menuData || menuData.length === 0 || !pathname) return null;
        const currentPath = `${pathname}/`;

        const menu = menuData.find((menu) => menu.path === currentPath);
        if (menu !== undefined) {
            return menu;
        }
    }, [menuData, pathname]);

    return (
        <div>
            <div></div>
            <div>
                <h2 className={clsx(styles["page-title"])}>{menu?.depth3}</h2>
            </div>
        </div>
    );
}
