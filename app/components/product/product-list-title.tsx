"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useMenuContext } from "@/app/lib/menu-context";
import { getParentMenuData } from "@/app/lib/actions";
import styles from "@/app/styles/product/product-list-title.module.scss";
import clsx from "clsx";
import { MenuDataType } from "@/type";
export default function ProductListTitle({
    productsCount,
}: {
    productsCount: number;
}) {
    const [parentMenu, setParentMenu] = useState<MenuDataType>();
    const [prevMenu, setPrevMenu] = useState<MenuDataType>();
    const menuContext = useMenuContext();
    const menu = menuContext?.currMenuData;

    useEffect(() => {
        async function getParentMenu() {
            if (!menu) return null;
            if (menu?.parent_menu_id !== null) {
                if (
                    (menu?.menu_id === 151 ||
                        menu?.menu_id === 152 ||
                        menu?.menu_id === 153) &&
                    menu?.prev_menu_id
                ) {
                    const result = await getParentMenuData(menu?.prev_menu_id);
                    setPrevMenu(result[0]);
                }
                const result = await getParentMenuData(menu.parent_menu_id);
                setParentMenu(result[0]);
            }
        }
        getParentMenu();
    }, [menu]);

    return (
        <div className={clsx(styles["page-top"])}>
            <div className={clsx(styles["page-top__link"])}>
                <Link
                    className="btn btn-back btn-back--l"
                    href={
                        (menu &&
                            (menu?.menu_id === 151 ||
                                menu?.menu_id === 152 ||
                                menu?.menu_id === 153) &&
                            `${menu?.prev_path}`) ||
                        parentMenu?.path ||
                        "/"
                    }
                >
                    <span></span>
                    {menu &&
                    (menu?.menu_id === 151 ||
                        menu?.menu_id === 152 ||
                        menu?.menu_id === 153)
                        ? prevMenu?.depth2 || prevMenu?.depth1
                        : parentMenu?.depth3 ||
                          parentMenu?.depth2 ||
                          parentMenu?.depth1}
                </Link>
            </div>
            <div>
                <h2 className={clsx(styles["page-title"])}>
                    {(menu &&
                        (menu?.menu_id === 152 || menu?.menu_id === 153) &&
                        `${menu?.depth1}`) ||
                        (menu?.menu_id === 151 && "Accessories") ||
                        menu?.depth3 ||
                        menu?.depth2 ||
                        menu?.depth1}
                    <sup>({productsCount})</sup>
                </h2>
            </div>
        </div>
    );
}
